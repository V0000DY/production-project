import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Text } from "./Text";
import { Theme } from "@/shared/const/theme";

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Title lorem ipsum",
  text: "Text Description lorem ipsum",
};

export const Error = Template.bind({});
Error.args = {
  title: "Title lorem ipsum",
  text: "Text Description lorem ipsum",
  variant: "error",
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "Title lorem ipsum",
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: "Text Description lorem ipsum",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: "Title lorem ipsum",
  text: "Text Description lorem ipsum",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: "Title lorem ipsum",
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: "Text Description lorem ipsum",
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  title: "Title lorem ipsum",
  text: "Text Description lorem ipsum",
  size: "l",
};

export const SizeM = Template.bind({});
SizeM.args = {
  title: "Title lorem ipsum",
  text: "Text Description lorem ipsum",
  size: "m",
};

export const SizeS = Template.bind({});
SizeS.args = {
  title: "Title lorem ipsum",
  text: "Text Description lorem ipsum",
  size: "s",
};
