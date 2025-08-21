import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NotificationItem } from "./NotificationItem";

export default {
  title: "shared/NotificationItem",
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <NotificationItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
