import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ArticleViewSelector } from "./ArticleViewSelector";

export default {
  title: "entities/Article/ArticleViewSelector",
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ArticleViewSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
