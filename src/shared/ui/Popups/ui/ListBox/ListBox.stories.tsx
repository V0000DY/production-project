import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ListBox } from "./ListBox";

export default {
  title: "shared/ListBox",
  component: ListBox,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  value: "1213",
  items: [
    {
      content: "Firstdasfdsaf",
      value: "1",
    },
    {
      content: "Secondasdfasdf",
      value: "2",
    },
    {
      content: "Thirdasdfasdf",
      value: "3",
    },
  ],
};

export const topLeft = Template.bind({});
topLeft.args = {
  direction: "top left",
  value: "1213",
  items: [
    {
      content: "Firstdasfdsaf",
      value: "1",
    },
    {
      content: "Secondasdfasdf",
      value: "2",
    },
    {
      content: "Thirdasdfasdf",
      value: "3",
    },
  ],
};

export const topRight = Template.bind({});
topRight.args = {
  direction: "top right",
  value: "1213",
  items: [
    {
      content: "Firstdasfdsaf",
      value: "1",
    },
    {
      content: "Secondasdfasdf",
      value: "2",
    },
    {
      content: "Thirdasdfasdf",
      value: "3",
    },
  ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
  direction: "bottom left",
  value: "1213",
  items: [
    {
      content: "Firstdasfdsaf",
      value: "1",
    },
    {
      content: "Secondasdfasdf",
      value: "2",
    },
    {
      content: "Thirdasdfasdf",
      value: "3",
    },
  ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
  direction: "bottom right",
  value: "1213",
  items: [
    {
      content: "Firstdasfdsaf",
      value: "1",
    },
    {
      content: "Secondasdfasdf",
      value: "2",
    },
    {
      content: "Thirdasdfasdf",
      value: "3",
    },
  ],
};
