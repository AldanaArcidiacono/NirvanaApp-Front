const visitHomePage = () => cy.visit('/');
beforeEach(() => {
    visitHomePage();
});

describe('Given the HOME page', () => {
    it('Then it should display the app title', () => {
        const title = cy.get('h2').should('contain', 'Todos los destinos');
        expect(title).to.exist;
    });

    it('Then it should display the images', () => {
        const imageClass = cy
            .get('img')
            .should('have.class', 'places_item_list__img__d7epb');
        expect(imageClass).to.exist;
    });

    describe('When we click on LOGIN,', () => {
        it('Then it should navigate to /login', () => {
            cy.get('button').contains('Login').click();
            cy.url().should('contain', '/login');
        });
    });

    describe('When we click on PROFILE,', () => {
        it('And the user is not log, then it should navigate to must-be-log', () => {
            cy.get(':nth-child(2) > .menu_menu__link__846zy')
                .contains('Perfil')
                .click();
            cy.url().should('contain', 'must-be-log');
        });

        it('Then if the user clicks on HOME, it should navigate to home', () => {
            cy.get(':nth-child(1) > .menu_menu__link__846zy')
                .contains('Home')
                .click();
            cy.url().should('contain', 'home');
        });
    });

    describe('When we click on an IMG', () => {
        it('And the user is not log, then it should navigate to must-be-log', () => {
            cy.get(
                ':nth-child(1) > .place_list_list__link__aJ5gS > .places_item_list__container__F8BXx > .places_item_img__container__jKd6P > .places_item_list__img__d7epb'
            ).click();
            cy.url().should('contain', 'must-be-log');
        });
    });
});
