/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from "@storybook/react";

import withMock from "storybook-addon-mock";
import { AvatarDropdown } from "./AvatarDropdown";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { UserRole } from "@/entities/User";

export default {
  title: "features/AvatarDropdown",
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [withMock],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
  <AvatarDropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: "1",
        username: "user",
        avatar:
          "https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg",
        roles: [UserRole.USER],
      },
    },
  }),
];

export const Admin = Template.bind({});
Admin.args = {};
Admin.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: "1",
        username: "admin",
        avatar: "https://cdn-icons-png.flaticon.com/512/924/924915.png",
        roles: [UserRole.ADMIN],
      },
    },
  }),
];

export const Manager = Template.bind({});
Manager.args = {};
Manager.decorators = [
  StoreDecorator({
    user: {
      authData: {
        id: "1",
        username: "manager",
        avatar:
          "https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png",
        roles: [UserRole.MANAGER],
      },
    },
  }),
];
