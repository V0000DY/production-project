import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ListBox } from "./ListBox";

export default {
  title: "shared/ListBox",
  component: ListBox,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
