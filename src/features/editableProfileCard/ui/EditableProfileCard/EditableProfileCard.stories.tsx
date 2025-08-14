import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EditableProfileCard } from "./EditableProfileCard";

export default {
  title: "features/EditableProfileCard/EditableProfileCard",
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <EditableProfileCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
