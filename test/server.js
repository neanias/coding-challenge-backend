import chai from "chai";
import chaiHTTP from "chai-http";

import app from "../lib/app";

const should = chai.should();
chai.use(chaiHTTP);

export default () => {
  it("send a heartbeat request to `/`", done => {
    chai.request(app).get("/")
      .end((error, res) => {
        res.should.have.status(200);
        res.body.should.have.property("message");
        done();
      });
  });
};
