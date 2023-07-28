export const createTextNode = (text) => {
  return {
    type: "TEXT_ELEMENT",
    props: {
      value: text,
      children: [],
    },
  };
};
