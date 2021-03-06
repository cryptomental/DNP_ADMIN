import { NAME } from "./constants";

const type = tag => NAME + "/" + tag;

export const CALL = type("CALL");
export const LOG_PACKAGE = type("LOG_PACKAGE");
export const LIST_PACKAGES = type("LIST_PACKAGES");
export const UPDATE_FETCHING = type("UPDATE_FETCHING");
export const UPDATE_LOG = type("UPDATE_LOG");
export const UPDATE_PACKAGES = type("UPDATE_PACKAGES");

// prefixing each type with the module name helps preventing name collisions
