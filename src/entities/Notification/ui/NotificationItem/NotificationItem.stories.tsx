import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Notification } from "../../model/types/notification";
import { NotificationItem } from "./NotificationItem";

export default {
  title: "entities/Notification/NotificationItem",
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <NotificationItem {...args} />
);

const notification: Notification = {
  id: "1",
  title: "Уведомление 1",
  description: "Описание уведомления 1",
  href: "https://google.com",
};

export const Normal = Template.bind({});
Normal.args = { item: notification };
