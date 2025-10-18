export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId("EditableProfileCardHeader.EditButton").click();
  cy.getByTestId("ProfileCard.firstname").clear().type(firstname);
  cy.getByTestId("ProfileCard.lastname").clear().type(lastname);
  // cy.getByTestId("ProfileCard.city").clear().type("test");
  // cy.getByTestId("ProfileCard.age").clear().type("30");
  // cy.getByTestId("ProfileCard.currency").click();
  // cy.getByTestId("Currency.USD").click();
  // cy.getByTestId("ProfileCard.country").click();
  // cy.getByTestId("Country.Armenia").click();
  cy.getByTestId("EditableProfileCardHeader.SaveButton").click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    method: "PUT",
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { Authorization: "asasf" },
    body: {
      id: "4",
      first: "test",
      lastname: "user",
      age: 38,
      currency: "USD",
      country: "Russia",
      city: "Северск",
      username: "testuser",
      avatar:
        "https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg",
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>;
    }
  }
}
