import { ComponentStory, ComponentMeta } from "@storybook/react";

import ProfileRating from "./ProfileRating";

export default {
  title: "features/ProfileRating",
  component: ProfileRating,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ProfileRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
