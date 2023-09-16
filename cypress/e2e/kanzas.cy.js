describe('Вход на сайт покемонов и покупка фото ', function () {
   it('Покемоны', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('belbrdvvitalik@yandex.ru'); // Вводим правильный логин
        cy.wait(1000);
        cy.get('#password').type('Beloborodov1004'); // Вводим правильный пароль
        cy.wait(1000);
        cy.get('.auth__button').click();
        cy.wait(3000);
        cy.get('.header__btns > [href="/shop"]').click();
        cy.wait(1000);
        cy.get(':nth-child(1) > .shop__button');
        cy.wait(1000);
        cy.visit('https://pokemonbattle.me/payment/1');
        cy.wait(1000);
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
        cy.wait(1000);
        cy.get(':nth-child(1) > .pay_base-input-v2').type('11/24');
        cy.wait(1000);
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.wait(1000);
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('BELOBORODOVVITALIY')
        cy.wait(1000);
        cy.get('.pay-btn').click();
        cy.visit('https://pokemonbattle.me/defolt');
        cy.wait(1000);
        cy.get('#cardnumber').type('56456');
        cy.wait(1000);
        cy.get('.payment__submit-button').click();
        cy.wait(1000);
        cy.contains('Покупка прошла успешно').should('be.visible');
        cy.wait(1000);
        cy.get('.success__image').should('be.visible');
        cy.wait(1000);
        cy.get('.payment__adv').click();
        cy.wait(1000);
        cy.visit('https://pokemonbattle.me/shop');
        cy.wait(1000);
        cy.get('.header__container > .header__id').click();
        cy.get('.trainer-img').should('be.visible');
        cy.get('.trainer-item__content').should('be.visible');
        cy.get('.header__container-btn').should('be.visible');
        cy.get('.footer__dok').should('be.visible');














       
    })
})
