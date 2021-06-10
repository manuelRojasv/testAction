///<reference types= "cypress" />

/*describe('Get products', () => {
    context('Get  /produtos', () => {
        it('shouls return a list of products',()=>{
           cy.request({method: 'GET', url:'https://serverest.dev/produtos'}).its('headers')
        });
         
    });
});*/

describe('', () => {
    
    it('test one',()=>{
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
        cy.wait(4000)
        cy.get('#QuickLinks > a:nth-child(1) > img').click()
    })
});