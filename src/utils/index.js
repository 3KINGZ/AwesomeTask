export * from "./firebasefunctions";
export * from "./storeCache";

export const generateTypes = (type) => {
  return {
    REQUEST: type + " REQUEST",
    SUCCESS: type + " SUCCESS",
    FAILURE: type + " FAILURE",
  };
};
