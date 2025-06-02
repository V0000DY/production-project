import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextTheme } from "./Text";

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
  theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: "Title lorem ipsum",
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: "Text Description lorem ipsum",
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: "Title lorem ipsum",
  text: "Text Description lorem ipsum",
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: "Title lorem ipsum",
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: "Text Description lorem ipsum",
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
