/* eslint-disable react/jsx-props-no-spreading */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import avatar from "shared/assets/tests/storybook.jpg";
import { ProfileCard } from "./ProfileCard";

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    first: "John",
    lastname: "Doe",
    age: 30,
    city: "New York",
    username: "johndoe",
    avatar,
    currency: Currency.USD,
    country: Country.Armenia,
  },
};

export const withError = Template.bind({});
withError.args = {
  error: "true",
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
