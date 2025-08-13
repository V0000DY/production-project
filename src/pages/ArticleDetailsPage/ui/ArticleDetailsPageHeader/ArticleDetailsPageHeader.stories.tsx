import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader";

export default {
  title: "pages/ArticleDetailsPage/ArticleDetailsPageHeader",
  component: ArticleDetailsPageHeader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ArticleDetailsPageHeader {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
