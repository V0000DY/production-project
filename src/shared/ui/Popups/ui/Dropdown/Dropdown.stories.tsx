import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Dropdown } from "./Dropdown";
import { Button } from "../../../Button/Button";

export default {
  title: "shared/Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Dropdown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  items: [
    {
      content: "First",
    },
    {
      content: "Second",
    },
    {
      content: "Third",
    },
  ],
  trigger: <Button>Open</Button>,
};
