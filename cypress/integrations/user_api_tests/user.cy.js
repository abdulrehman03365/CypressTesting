const { expect } = require("chai");
const { describe } = require("mocha");

describe('User API tests',()=>{

    before(()=>{
        cy.request('POST','/games/api/auth/login',{
            email:process.env.Email,
            Password:process.env.Pass


        }).then((response)=>{
            expect(response.status).to.eq(200);
        })

    })

    it('get users profile Info',()=>{

        cypress.request('GET','/be/api/user/getprofileInfo').then((response)=>{
            expect(response.status).to.eq(200);
        })
    })
})