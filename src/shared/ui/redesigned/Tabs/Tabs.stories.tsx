import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Tabs } from "./Tabs";

export default {
  title: "shared/Tabs",
  component: Tabs,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tabs {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  tabs: [
    {
      value: "tab 1",
      content: "Tab 1",
    },
    {
      value: "tab 2",
      content: "Tab 2",
    },
    {
      value: "tab 3",
      content: "Tab 3",
    },
  ],
  value: "tab 2",
  onTabClick: action("onTabClick"),
};
