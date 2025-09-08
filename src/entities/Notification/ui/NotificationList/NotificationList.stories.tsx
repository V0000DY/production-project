import { ComponentStory, ComponentMeta } from "@storybook/react";

import withMock from "storybook-addon-mock";
import { NotificationList } from "./NotificationList";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "entities/Notification/NotificationList",
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <NotificationList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: "GET",
      status: 200,
      response: [
        {
          id: "1",
          title: "Уведомление 1",
          description: "Описание уведомления 1",
          href: "#",
        },
        {
          id: "2",
          title: "Уведомление 2",
          description: "Описание уведомления 2",
          href: "#",
        },
        {
          id: "3",
          title: "Уведомление 3",
          description: "Описание уведомления 3",
          href: "#",
        },
      ],
    },
  ],
};
