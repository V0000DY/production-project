import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { action } from "@storybook/addon-actions";
import AddCommentForm from "./AddCommentForm";

export default {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <AddCommentForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  onSendComment: action("onSendComment"),
};
Normal.decorators = [StoreDecorator({})];
