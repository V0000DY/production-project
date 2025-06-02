/* eslint-disable no-param-reassign */
import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  // Инициализация module и rules, если отсутствуют
  if (!config.module) {
    config.module = { rules: [] };
  } else if (!config.module.rules) {
    config.module.rules = [];
  }

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");

  // Фильтрация и обработка правил
  config.module.rules = config.module?.rules
    ?.filter(
      (rule): rule is RuleSetRule =>
        !!rule && typeof rule === "object" && "test" in rule
    )
    .map((rule) => {
      // Проверяем, что test — RegExp и содержит svg
      if (rule.test instanceof RegExp && rule.test.test(".svg")) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  config.module?.rules?.push(buildCssLoader(true));

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: true,
    })
  );

  return config;
};
