import { createElement } from "./dom/createElement";
import { isProperty, isTextElement } from "./utils";

function render(element, container) {
  const domNode = isTextElement(element)
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
    return createElement(tag, props, children);
  },
  render,
};
