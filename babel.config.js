const presets = [];
const plugins = [
  [
    "@babel/plugin-transform-react-jsx",
    {
      pragma: "koleso.jsx",
    },
  ],
];

module.exports = {
  presets,
  plugins,
};
