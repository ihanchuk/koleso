export const createElement = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        if (typeof child === "object") {
          return child;
        } else {
          return createTextNode(child);
        }
      }),
    },
  };
};
