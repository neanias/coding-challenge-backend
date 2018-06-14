import * as logger from "../lib/logger";
import serverTests from "./server";

logger.activityTransport.silent = true;

describe("Server tests:", serverTests);
