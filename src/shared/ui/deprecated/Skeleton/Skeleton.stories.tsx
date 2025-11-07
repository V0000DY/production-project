import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Skeleton } from "./Skeleton";
import { Theme } from "@/shared/const/theme";

export default {
  title: "shared/Skeleton",
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Skeleton {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  height: 12.5,
  width: "100%",
};

export const Circle = Template.bind({});
Circle.args = {
  border: "50%",
  height: 6,
  width: 6,
};

export const NormalDark = Template.bind({});
NormalDark.args = {
  height: 12.5,
  width: "100%",
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
  border: "50%",
  height: 6,
  width: 6,
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
