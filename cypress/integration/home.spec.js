/* eslint-disable no-undef */

describe('Drinks On Me App Cypress Tests', () => {
    it('should have a modal that pops up asking if your 21+', () => {
        cy.visit('http://localhost:3000/')
        cy.wait(7000);
        cy.contains('Are you 21+ years old?')
    })
    it('clicking the no button should only allow you to see non-Alcholoc drinks', () => {
        cy.get('button[class=noButton]').click()
        cy.contains('Afterglow')
        cy.contains('Alice Cocktail')
        cy.contains('Aloha Fruit punch')
        cy.contains('Apello')
        cy.get('input[id=nonACheck]').should('be.disabled')
        cy.get('input[id=nonACheck]').should('be.checked')
    })
    it('should show details for a drink after clicking no and only showing non alcoholic drinks.',() => {
        // Detail card is populated with drink details
        cy.get("div[id=alohafruitpunch]").click().wait(1000);
        cy.get('div[class=drinkDetailsContainer]').contains("Aloha Fruit punch")
        cy.contains('Ingredients')
        cy.contains ("3/4 cup : Water")
        cy.contains('Steps')
        cy.contains ("Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly.")

        // when on a drink you can click on another drink and drinkDetails populates with new drink info
        cy.get("div[id=afterglow]").click().click().click().click().wait(1000);
        cy.get('div[class=drinkDetailsContainer]').contains("Afterglow")
        cy.contains('Ingredients')
        cy.contains ("1 part : Grenadine")
        cy.contains('Steps')
        cy.contains ("Mix. Serve over ice.")
    })
    it('clicking the yes button should render a random list of cocktails.', () => {
        cy.visit('http://localhost:3000/')
        cy.wait(7000);
        cy.contains('Are you 21+ years old?')
        cy.get('button[class=yesButton]').click().wait(7000)
        cy.get('div[class=drinkItem]')
        cy.get('input[id=nonACheck]').should('be.not.disabled')
        cy.get('input[id=nonACheck]').should('be.not.checked')
    })
    it('can click on drink and drinkDetails populates with new drink info', ()=>{
        cy.get('div[class=drinkItem]').first().click().click().click().click().wait(1000);
        cy.get('div[class=drinkDetailsContainer]')
        cy.get('div[class=drinkDetailsContainer]').contains("Ingredients")
        cy.get('div[class=drinkDetailsContainer]').contains("Steps")
    })
    it('should be able to enable non alochol checkbox',()=>{
      cy.get('input[id=nonACheck]').check()
      cy.get('input[id=nonACheck]').should('be.checked').wait(7000)
      cy.get("div[id=afterglow]").click().click().click().click().wait(1000);
      cy.get('div[class=drinkDetailsContainer]').contains("Afterglow")
      cy.contains('Ingredients')
      cy.contains ("1 part : Grenadine")
      cy.contains('Steps')
      cy.contains ("Mix. Serve over ice.")
      cy.get('input[id=nonACheck]').uncheck()
      cy.get('input[id=nonACheck]').should('be.not.checked').wait(7000)
    })
    it('should be able to search by name and get a random result based on the name', () => {
        cy.get('input[id=nameInput]').wait(100).type('Jack Frost', {delay: 100}).wait(200)
        cy.get('button[id=searchButton]').click().wait(1000)
        cy.contains(/j/i)
        cy.contains(/a/i)
        cy.contains(/c/i)
        cy.contains(/k/i)
        cy.contains(/f/i)
        cy.contains(/r/i)
        cy.contains(/o/i)
        cy.contains(/s/i)
        cy.contains(/t/i)
    })
    it('should not perform name search if non alchoholic option is selected', () => {
        cy.get('input[id=nonACheck]').check()
        cy.get('input[id=nonACheck]').should('be.checked').wait(7000)
        cy.get('input[id=nameInput]').wait(100).type('Jack Frost', {delay: 100}).wait(200)
        cy.get('button[id=searchButton]').click().wait(1000)
        cy.get("div[id=afterglow]").click().click().click().click().wait(1000);
        cy.get('div[class=drinkDetailsContainer]').contains("Afterglow")
        cy.contains('Ingredients')
        cy.contains ("1 part : Grenadine")
        cy.contains('Steps')
        cy.contains ("Mix. Serve over ice.")
    })
})