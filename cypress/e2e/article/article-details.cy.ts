let currentArticleId = "";

describe("Пользователь заходит на страницу со статьей", () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`articles/${currentArticleId}`);
    });
  });
  // Создали статью - протестировали - удалили
  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });

  it("И видит содержимое статьи", () => {
    cy.getByTestId("ArticleDetails.Content").should("exist");
  });

  it("И видит список рекомендаций", () => {
    cy.getByTestId("ArticleRecomendationsList").should("exist");
  });

  it("И оставляет комментарий", () => {
    cy.getByTestId("ArticleDetails.Content").should("exist");
    cy.getByTestId("AddCommentForm").scrollIntoView();
    cy.addComment("Test text from cypress");
    cy.getByTestId("CommentCard.Content").should("have.length", 1);
  });

  it("И ставит оценку", () => {
    cy.getByTestId("ArticleDetails.Content").should("exist");
    cy.getByTestId("RatingCard").scrollIntoView();
    cy.setRate(5, "test feedback");
    cy.get("[data-selected=true]").should("have.length", 5);
  });
});
