export const isProperty = (key) => key !== "children";
export const isTextElement = (element) => element.type == "TEXT_ELEMENT";
export const isObject = (val) => {
  return typeof val === "object";
};
