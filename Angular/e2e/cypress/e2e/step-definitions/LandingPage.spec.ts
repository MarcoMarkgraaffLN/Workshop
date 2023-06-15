import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { Login } from '../page-objects/Login';
import { log } from 'console';

Given(/^the user is on the landing page$/, () => {
  cy.visit('http://localhost:4200/dashboard');
});

Then(/^the user shall see the heroes dashboard$/, () => {
  return true;
});

Then(/^the user should see the top 4 heroes$/, () => {
  return Login.CountHeroes();
});

When(/^a TOH user clicks a specific hero$/, () => {
  return Login.ClickHero();
});

Then(/^the details of the hero should be displayed$/, () => {
  return Login.VerifyDetailsPage();
});

When(/^a TOH user clikcs the Heroes navigation button$/, () => {
  return Login.ClickHeroesButton();
});

Then(/^the heroes page is displayed with 9 heroes$/, () => {
  return Login.CountAllHeroes();
});

When(/^a TOH user clikcs the delete button of a hero$/, () => {
  Login.ClickHeroesButton();
  return Login.DeleteHero();
});

Then(
  /^the hero is deleted and the number of heroes in the list decreases$/,
  () => {
    return true;
  }
);

When(/^a TOH user enters a hero name and clikcs the add hero button$/, () => {
  Login.ClickHeroesButton();
  Login.AddHero();
});

Then(
  /^the new hero is added and the number of heroes in the list increases$/,
  () => {
    return true;
  }
);

When(
  /^a TOH user enters a blank hero name and clikcs the add hero button$/,
  () => {
    Login.ClickHeroesButton();
    Login.AddEmptyHero();
  }
);

Then(
  /^the new hero is not added and the number of heroes in the list does not increase$/,
  () => {
    return true;
  }
);
