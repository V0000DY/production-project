import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AppImage } from "./AppImage";

export default {
  title: "shared/AppImage",
  component: AppImage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <AppImage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
