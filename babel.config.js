module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "modulo-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets/",
            "@screens": "./src/screens/",
            "@components": "./src/components/",
          },
        },
      ],
    ],
  };
};
