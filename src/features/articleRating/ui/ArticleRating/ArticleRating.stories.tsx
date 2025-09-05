import { ComponentStory, ComponentMeta } from "@storybook/react";

import ArticleRating from "./ArticleRating";

export default {
  title: "shared/ArticleRating",
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ArticleRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
