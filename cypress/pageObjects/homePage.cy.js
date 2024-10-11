const homeLocators= require('../locators/homePageLocators')

class HomePage{

    elements={
        email : () => cy.get(homeLocators.emaiTxtBox)
        
    }

    login(){

    }

    logOut(){
        
    }
}