import progressBar from './progress_bar'; 
import { questions } from './questions';
import { heading, body, group } from './body';
import { validateFunctions } from './validation';

(function() : void
{
    //Global Input Variable to keep track of active bodies value
    let INPUT_VALUE: HTMLInputElement;
    let ACTIVE_ELEMENT: Element | null | undefined;

    //Grab the skeleton
    const content: Element | null = document.querySelector( '.survey_form .survey_form-content' );
    const nextBtn: Element | null = document.querySelector( '.survey_form .survey_form-content .survey_form-content__button' );
    const prevBtn: Element | null = document.querySelector( '.survey_form .survey_form-misc .survey_form-misc--left' );

    //Populate skeleton with data from questions
    questions.map( ( question, index ) => 
    {
        const bdy: HTMLDivElement = body();
        const hdr: HTMLHeadElement = heading( question.title );
        const grp: HTMLDivElement = group( question );

        if( index === 0 )
            bdy.classList.add( 'active' );

        bdy.appendChild( hdr );
        bdy.appendChild( grp );

        content?.insertBefore( bdy, nextBtn );
    });

    //Get the active body that has been populated and also start calculating the percentage values to increase by
    ACTIVE_ELEMENT = content?.querySelector( '.survey_form-content__body.active');
    let numberOfQuestions: NodeListOf<Element> | null | undefined = content?.querySelectorAll( '.survey_form-content__body' );
    let percentage: number = numberOfQuestions !== null && numberOfQuestions !== undefined ? Math.round( ( 100 / numberOfQuestions.length ) ) : 0;
    let fillBar: number = 0;

    //Listen for any input changes
    inputListeners( ACTIVE_ELEMENT );

    //Continue to next element, but validates first
    nextBtn?.addEventListener( 'click', ( e ) => 
    {
        e.preventDefault();
        if( validBeforeContinue( INPUT_VALUE ) )
            activeElement( 'next' );
    });

    //Go to previous element
    prevBtn?.addEventListener( 'click', ( e ) => 
    {
        e.preventDefault();
        activeElement( 'previous' );
    });

    function inputListeners( activeElement: Element | null | undefined ): void
    {
        const inputs: NodeListOf<HTMLInputElement> | undefined = activeElement?.querySelectorAll( 'input' );

        inputs?.forEach( ( input ) => 
        {
            input.addEventListener( 'input', () => 
            {
                INPUT_VALUE = input;
            } );
        });
    }

    function validBeforeContinue( input: HTMLInputElement | null | undefined ): boolean
    {
        if( input !== null && input !== undefined )
        {
            if( input.value === '' )
            {
                return false;
            }

            if( input.dataset.callback !== undefined )
            {
                if( ! validateFunctions.hasOwnProperty( input.dataset.callback ) )
                {
                    return true;
                }

                if( ! validateFunctions[ input.dataset.callback ]( input.value ) )
                {
                    return false;
                }
            }  

            return true;
        }
        
        return false;
    }

    function activeElement( direction: string ): void
    {
        ACTIVE_ELEMENT = content?.querySelector( '.survey_form-content__body.active' );
        let sibling: Element | null | undefined = null;

        switch( direction )
        {
            case 'next':
                sibling = ACTIVE_ELEMENT?.nextElementSibling;
                break;
            case 'previous':
                sibling = ACTIVE_ELEMENT?.previousElementSibling;
                break;
            default:
                break;
        }
        
        if( ACTIVE_ELEMENT !== undefined && ACTIVE_ELEMENT !== null )
        {
            if ( sibling !== undefined && sibling !== null && sibling.classList.contains( 'survey_form-content__body' ) ) 
            {
                ACTIVE_ELEMENT.classList.remove( 'active' );
                sibling.classList.add( 'active' );
                direction === 'previous' ? fillBar -= percentage : fillBar += percentage;
                progressBar( fillBar + '' );
                ACTIVE_ELEMENT = sibling;
                inputListeners( sibling );
            }
        }
    }
})();


//Finish off the form by adding the necessary questions and answers
//Fix radio button selections, so that it stays green if selected
//Send data off to ajax