export const validateFunctions: { [key: string]: Function } = 
{
    'validatePostcode': validatePostcode
}

interface Result {
    type: boolean,
    message: string
}

function validatePostcode( value: string ): Result
{
    let result : Result = { type: false, message: 'The postcode you entered is not correct. Please try again!' };

    const regex : RegExp = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;

    if( regex.test( value ) )
    {
        result.type = true;
        result.message = 'Postcode is validated!';
    }

    return result;
}