
const getCompanyTokenJSON = company => {
  return company !== undefined ? {
    id: company.id,
    name: company.name,
    email: company.email,
    verifiedAt: company.verifiedAt,
    authenticated: new Date()
  } : {};
};

export const login = (req, res) => {
  let email = req && req.body && req.body.email;
  let password = req && req.body && req.body.password;

  if (email !== undefined && password !== undefined) {
    database.loginCompany(email, password)
    .then(company => {
      if (company && company.id) {
        res.json(getCompanyTokenJSON(company));
      } else {
        res.status(405).json({ error: "email and password do not match any account" });
      }
    })
    .catch(error => {
      res.status(500).json({ error: `company login failed: ${error && error.message}` });
    });
  } else {
    res.status(405).json({ error: "please provide email and password" });
  }
};

export const create = (req, res) => {
  let name = req && req.body && req.body.name;
  let email = req && req.body && req.body.email && req.body.email.toLowerCase();
  let password = req && req.body && req.body.password;

  if (name !== undefined && email !== undefined && password !== undefined) {
    database.createCompany(name, email, password)
    .then(company => {
      if (company && company.id) {
        var verificationId = uuidV4();
        return database.setVerificationIdForCompany(company.id, verificationId)
        //TODO: send verification
        .then(() => res.json(getCompanyTokenJSON(company)));
      } else {
        res.status(405).json({ error: "company name or email address already exists" });
      }
    })
    .catch(error => {
      res.status(500).json({ error: `failed to create company: ${error && error.message}` });
    });
  } else {
    res.status(405).json({ error: "please provide name, email and password" });
  }
};

export const verify = (req, res) => {
  let companyId = req && req.body && req.body.companyId;
  let verificationId = req && req.body && req.body.verificationId;

  if (companyId !== undefined && verificationId !== undefined) {
    database.verifyCompany(companyId, verificationId)
    .then(results => {
      res.json({ succeed: results && results[0] === 1 });
    })
    .catch(error => {
      res.status(500).json({ error: `failed to verify company: ${error && error.message}` });
    });
  } else {
    res.status(405).json({ error: "please provide name, email and password" });
  }
};
