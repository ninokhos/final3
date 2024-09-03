Cypress.Commands.add("kalata", () =>{
     //კალათაში დამატება და შემოწმება რომ პროდუქტი ნამდვილად დაემატა
     cy.visit('https://testzootopia.loremipsum.ge/ka')
     cy.get(':nth-child(5) > .swiper-container > .swiper-wrapper > .swiper-slide-active > h2 > a').click()
     cy.get('.plus').click()
     cy.get('.plus').click()
     cy.get('.add-pro > figure').click()
     cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"] > p').click()
})