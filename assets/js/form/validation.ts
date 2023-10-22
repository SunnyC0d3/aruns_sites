export const validateFunctions: { [key: string]: Function } = 
{
    'validatePostcode': validatePostcode,
    'validateNonEmptyValue': validateNonEmptyValue,
    'validateEmail': validateEmail,
    'validateUKPhoneNumber': validateUKPhoneNumber,
}

export interface Result {
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

function validateNonEmptyValue( value: string ): Result
{
    let result : Result = { type: false, message: 'Value is not valid. Please try again!' };

    const regex : RegExp = /^[A-Za-z0-9 £,.-]*$/;

    if( regex.test( value ) )
    {
        result.type = true;
        result.message = 'Value is valid!';
    }

    return result;
}

function validateEmail( value: string ): Result
{
    let result : Result = { type: false, message: 'E-mail is not valid. Please try again!' };

    const regex : RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if( regex.test( value ) )
    {
        result.type = true;
        result.message = 'Valid e-mail address.';
    }

    return result;
}

function validateUKPhoneNumber( value: string ): Result
{
    let result : Result = { type: false, message: 'Phone number is not a valid UK phone number. Please try again!' };

    const regex : RegExp = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;

    if( regex.test( value ) )
    {
        result.type = true;
        result.message = 'Valid UK phone number.';
    }

    return result;
}