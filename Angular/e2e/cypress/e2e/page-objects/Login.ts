export class Login {
  //Selectors
  static loginBtn = (): string => {
    return "//input[@type='submit']";
  };

  static heroesList = (): string => {
    return "//div[@class='heroes-menu']";
  };

  static heroesBtn = (): string => {
    return "//a[@href= '/heroes']";
  };

  static allHeroesList = (): string => {
    return "//ul[@class = 'heroes']";
  };

  static heroInputField = (): string => {
    return "//input[@id = 'new-hero']";
  };

  //Action methods
  static ClickLoginButton() {
    cy.xpath(this.loginBtn()).click();
  }

  static CountHeroes() {
    cy.xpath(this.heroesList()).find('a').should('have.length', 4);
  }

  static ClickHero() {
    cy.xpath(this.heroesList()).find('a').first().click();
  }

  static VerifyDetailsPage() {
    cy.url().should('include', '/detail');
  }

  static ClickHeroesButton() {
    cy.xpath(this.heroesBtn()).click();
  }

  static CountAllHeroes() {
    cy.xpath(this.allHeroesList()).find('li').should('have.length', 9);
  }

  static DeleteHero() {
    cy.xpath(this.allHeroesList())
      .find('li')
      .its('length')
      .then((ln) => {
        cy.xpath(this.allHeroesList())
          .find('li')
          .first()
          .find('.delete')
          .click();
        cy.xpath(this.allHeroesList())
          .find('li')
          .should('have.length', ln - 1);
      });
  }

  static AddHero() {
    cy.get('#new-hero').type('New Hero');
    cy.get('.add-button').click();
    cy.xpath(this.allHeroesList())
      .find('li')
      .its('length')
      .then((ln) => {
        cy.xpath(this.allHeroesList())
          .find('li')
          .should('have.length', ln + 1);
      });
  }

  static AddEmptyHero() {
    cy.get('#new-hero').type(' ');
    cy.get('.add-button').click();
    cy.xpath(this.allHeroesList())
      .find('li')
      .its('length')
      .then((ln) => {
        cy.xpath(this.allHeroesList()).find('li').should('have.length', ln);
      });
  }
}
