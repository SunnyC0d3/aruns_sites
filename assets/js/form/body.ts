import { Questions }  from './questions';

export function body(): HTMLDivElement
{
    const div: HTMLDivElement = document.createElement( 'div' );

    div.classList.add( 'survey_form-content__body' );

    return div;
}

export function heading( title: string ): HTMLHeadElement
{
    const header: HTMLHeadingElement = document.createElement( 'h3' );
    const content: Text = document.createTextNode( title );

    header.classList.add( 'survey_form-content__body--header' );
    header.appendChild( content );

    return header;
}

function label( labelName: string, title: string ): HTMLHeadElement
{
    const label: HTMLLabelElement = document.createElement( 'label' );
    const content: Text = document.createTextNode( title );

    label.setAttribute( 'for', labelName );
    label.appendChild( content );

    return label;
}

function input( id: string, type: string, name: string, value: string, placeholder : string, callback: string ): HTMLHeadElement
{
    const input: HTMLInputElement = document.createElement( 'input' );

    input.setAttribute( 'id', id );
    input.setAttribute( 'type', type );
    input.setAttribute( 'name', name );
    input.setAttribute( 'value', value );
    input.setAttribute( 'tabindex', '0' );
    input.setAttribute( 'data-callback', callback );

    if( placeholder != '' )
    {
        input.setAttribute( 'placeholder', placeholder );
    }

    return input;
}

function inputGroup( labelName: string, labelValue: string, id: string, type: string, name: string, value: string, placeholder: string, style: string, callback: string ): HTMLDivElement
{
    const inputGroup: HTMLDivElement = document.createElement( 'div' );
    inputGroup.classList.add( `survey_form-content__body--input-group-${type}` );
    inputGroup.setAttribute( 'style', style );

    const lbl: HTMLHeadElement = label( labelName, labelValue );
    const inp: HTMLHeadElement = input( id, type, name, value, placeholder, callback );

    inputGroup.appendChild( lbl );
    inputGroup.appendChild( inp );

    return inputGroup;
}

export function group( question: Questions ): HTMLDivElement
{
    const group: HTMLDivElement = document.createElement( 'div' );
    
    group.classList.add( 'survey_form-content__body--input-group' );

    const { body, callback } = question;

    for( let i = 0; i < body.length; i++ )
    {
        const { labelName, labelValue, id, type, name, value, placeholder, style } = body[ i ];
        const inpGrp: HTMLDivElement = inputGroup( labelName, labelValue, id, type, name, value, placeholder, style, callback );

        group.appendChild( inpGrp );
    }

    return group;
}



