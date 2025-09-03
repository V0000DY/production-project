import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RatingCard } from "./RatingCard";

export default {
  title: "shared/RatingCard",
  component: RatingCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <RatingCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
