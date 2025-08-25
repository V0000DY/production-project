import { ComponentStory, ComponentMeta } from "@storybook/react";
import withMock from "storybook-addon-mock";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { Article } from "@/entities/Article";
import { ArticleRecomendationsList } from "./ArticleRecomendationsList";

export default {
  title: "features/ArticleRecomendationsList",
  component: ArticleRecomendationsList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ArticleRecomendationsList>;

const Template: ComponentStory<typeof ArticleRecomendationsList> = (args) => (
  <ArticleRecomendationsList {...args} />
);

const article: Article = {
  id: "1",
  title: "Javascript news",
  subtitle: "Что нового в JS за 2022 год?",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 1022,
  createdAt: "26.02.2022",
  user: {
    id: "1",
    username: "admin",
  },
  type: [],
  blocks: [],
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_limit=3`,
      method: "GET",
      status: 200,
      response: [
        { ...article, id: "1" },
        { ...article, id: "2" },
        { ...article, id: "3" },
      ],
    },
  ],
};
