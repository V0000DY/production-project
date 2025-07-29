import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ArticleTypeTabs } from "./ArticleTypeTabs";

export default {
  title: "entities/Article/ArticleTypeTabs",
  component: ArticleTypeTabs,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ArticleTypeTabs {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
