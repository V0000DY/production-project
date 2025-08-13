import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ArticlesPageFilters } from "./ArticlesPageFilters";

export default {
  title: "pages/ArticlesPage/ArticlesPageFilters",
  component: ArticlesPageFilters,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ArticlesPageFilters {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
