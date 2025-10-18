/* eslint-disable max-len */
import { Article } from "../../../src/entities/Article/model/types/article";

const defaultArticle = {
  title: "TESTING ARTICLE",
  subtitle: "Биология",
  img: "https://static.vecteezy.com/system/resources/thumbnails/027/013/992/small_2x/biology-doodle-set-collection-of-hand-drawn-elements-science-biology-circle-shape-illustration-isolated-on-a-white-background-vector.jpg",
  views: 1022,
  createdAt: "26.02.2022",
  userId: "1",
  type: ["SCIENCE"],
  blocks: [],
};

export const createArticle = (article?: Article) => {
  cy.request({
    method: "POST",
    url: "http://localhost:8000/articles",
    headers: { Authorization: "asasf" },
    body: article ?? defaultArticle,
  }).then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
  cy.request({
    method: "DELETE",
    url: `http://localhost:8000/articles/${articleId}`,
    headers: { Authorization: "asasf" },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
