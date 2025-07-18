import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Code } from "./Code";

export default {
  title: "shared/Code",
  component: Code,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Code>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  text: `const a = '123' dsfgdffsd dfgsdf
  fghldksfjgklds
  fklfdjgl;d
  dfklgjd`,
};
