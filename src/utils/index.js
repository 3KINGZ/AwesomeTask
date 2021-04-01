export * from "./firebasefunctions";

export const generateTypes = (type) => {
  return {
    REQUEST: type + " REQUEST",
    SUCCESS: type + " SUCCESS",
    FAILURE: type + " FAILURE",
  };
};
