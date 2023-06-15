Feature: LandingPage Functionality

    This Feature tests login scenarios

    Background: 
        Given the user is on the landing page

    Scenario: As a toh user, I want to navigate to landingpage in order to see the dashboard
        Then the user shall see the heroes dashboard

    Scenario: As a TOH user, I want to navigate to dashboard in order to see top 4 Heroes displayed
        Then the user should see the top 4 heroes

    Scenario:As a TOH user, I want to select a hero from the dashboard in order to see the hero details displayed
        When a TOH user clicks a specific hero
        Then the details of the hero should be displayed 

    Scenario:As a TOH user, I want to navigate to heroes page in order to see 9 heroes
        When a TOH user clikcs the Heroes navigation button
        Then the heroes page is displayed with 9 heroes

    Scenario:As a TOH user, I want to remove a hero in order to see the hero list decrease
        When a TOH user clikcs the delete button of a hero
        Then the hero is deleted and the number of heroes in the list decreases
      
      Scenario: As a TOH user, I want to add a hero in order to see the hero list increase 
        When a TOH user enters a hero name and clikcs the add hero button
        Then the new hero is added and the number of heroes in the list increases

        Scenario: As a TOH user, I want to add a hero without a name in order to see the hero list remain the same
        When a TOH user enters a blank hero name and clikcs the add hero button
        Then the new hero is not added and the number of heroes in the list does not increase