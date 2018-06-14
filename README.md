# Cohire Coding Challenge (Backend)

### Introduction 
Welcome! This coding challenge is designed to explore your backend skills. You will have to write a Express middleware function.

### The challenge
The developers have written an API service that contains swagger based documentation which genarates a json list all the routes, request parameters, and request parameter types. However the developers have forgotten to implement any request validation. 

The developers would like you to implement validation middleware that checks all incoming requests to ensure that the appropriate parameters have been supplied. As the swagger specifiction has already been generated, the middleware will consume the specification during runtime and validate the requests accordingly. 

Ideally, the middleware will need to check for the following:

1. All required parameters are present
2. All parameter data types are correct
3. No extraneous parameters are present

Also, sometimes the developers are lazy and the swagger spec does not cover all the APIs. In that case, the middleware should just allow the API request to proceed.

### Setup Guide
1. Clone this repo
2. `npm i` to install dependencies. Node v7^ preferable
3. Swagger spec can be found by accessing `http://localhost:7500/api/swagger`
4. The routes to be protected are found under `/api/account/index.js`


### Submission guide
Please fork this repo and drop your contact person a note once you are done

### How we review
- **Code quality**: Is the code easy to understand and maintain? Is the coding style consistent with nodejs best practices? Do you demonstrate a good grasp of JavaScript, especially ES6?
- **Performance**: What is the middleware's time and memory complexity?

### Bonus points
- **Documentation** - Is the README well written? Are the commit messages clear?
- **Automated Tests** - Are there any automated frontend tests?
- **Production-readiness** - Is there proper error handling? Is the code ready to to put into production?
