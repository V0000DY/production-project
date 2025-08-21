import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NotificationList } from "./NotificationList";

export default {
  title: "shared/NotificationList",
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <NotificationList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
