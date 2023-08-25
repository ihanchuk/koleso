import { createElement } from "./dom/createElement";

export function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

const isProperty = (key) => key !== "children";
const isObject = (val) => {
  return typeof val === "object";
};

function render(element, container) {
  console.log("Rendering element::", element);
  const domNode =
    element.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type);

  Object.keys(element.props)
    .filter(isProperty)
    .forEach((propertyName) => {
      domNode[propertyName] = element.props[propertyName];
    });

  element.props.children.forEach((child) => render(child, domNode));
  container.appendChild(domNode);
}

export const koleso = {
  jsx: (tag, props, ...children) => {
    return {
      type: tag,
      props: {
        ...props,
        children: children.map((child) =>
          isObject(child) ? child : createTextElement(child)
        ),
      },
    };
  },
  render,
};
