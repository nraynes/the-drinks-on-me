import { render, screen } from '@testing-library/react';
import DrinkDetails from '../components/drink-details/DrinkDetails';

test('when passed undefined measurement it should assign proper measurement to ingredient', () => {
    const fakeProp = {
        idDrink: "11007",
        strDrink: "Margarita",
        strInstructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
        strIngredient1: "Tequila",
        strIngredient2: "Triple sec",
        strIngredient3: "Lime juice",
        strIngredient4: "Salt",
        strMeasure1: "1 1/2 oz ",
        strMeasure2: null,
        strMeasure3: "1 oz",
        strMeasure4: null
    }
    render(<DrinkDetails drink={fakeProp} />)


    //assert that triplesec will be the 2nd item in the list, 1oz lime juice to be 3rd
    const listItemArray = screen.getAllByRole('listitem');
    const received = listItemArray[1];
    const expected = 'Triple sec';
    const anotherReceived = listItemArray[2];
    const anotherExpected = '1 oz: Lime juice';

    expect(received.innerHTML).toContain(expected);
    expect(anotherReceived.innerHTML).toContain(anotherExpected);
})