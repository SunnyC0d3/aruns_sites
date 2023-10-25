import progressBar from './progress_bar';
import { questions } from './questions';
import { heading, body, group } from './body';
import { validateFunctions, Result } from './validation';

(function (): void {

    interface KeyValue {
        [key: string]: HTMLInputElement | null | undefined;
    }

    let ajaxData: KeyValue = {};
    let TEMP_ID: string = '';

    //Grab the skeleton
    const content: Element | null = document.querySelector('.survey_form .survey_form-content');
    const nextBtn: Element | null = document.querySelector('.survey_form .survey_form-content .survey_form-content__button');
    const prevBtn: Element | null = document.querySelector('.survey_form .survey_form-misc .survey_form-misc--left');
    const warning: HTMLSpanElement | null = document.querySelector('.survey_form .survey_form-content__warning');

    //Populate skeleton with data from questions
    questions.map((question, index) => {
        const bdy: HTMLDivElement = body();
        const hdr: HTMLHeadElement = heading(question.title);
        const grp: HTMLDivElement = group(question);

        if (index === 0)
            bdy.classList.add('active');

        bdy.appendChild(hdr);
        bdy.appendChild(grp);

        content?.insertBefore(bdy, nextBtn);
    });

    //Start calculating the percentage values to increase by
    let numberOfQuestions: NodeListOf<Element> | null | undefined = content?.querySelectorAll('.survey_form-content__body');
    let percentage: number = numberOfQuestions !== null && numberOfQuestions !== undefined ? Math.round((100 / numberOfQuestions.length)) : 0;
    let fillBar: number = 0;

    inputListener();

    //Continue to next element, but validates first
    nextBtn?.addEventListener('click', (e) => {
        e.preventDefault();

        inputListener();
        console.log(ajaxData);
        if (validBeforeContinue(ajaxData[TEMP_ID]))
            activeElement('next');
    });

    //Go to previous element
    prevBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        activeElement('previous');
    });

    //Listen for input clicks
    function inputListener()
    {
        let active_element : Element | null | undefined = content?.querySelector('.survey_form-content__body.active');
        const inputs: NodeListOf<HTMLInputElement> | undefined = active_element?.querySelectorAll( 'input' );

        inputs?.forEach( ( input ) => 
        {
            input.addEventListener( 'input', () => 
            {
                inputs.forEach((input: HTMLInputElement) => input.previousElementSibling?.classList.remove('active'));
                input.previousElementSibling?.classList.add('active');
                ajaxData[ input.getAttribute( 'name' ) as string ] = input;
                TEMP_ID = input.getAttribute( 'name' ) as string;
            } );
        });
    }

    //Gets current active box, determined by pressing continue or previous and assigns input listeners 
    function activeElement(direction: string): void {
        let active_element : Element | null | undefined = content?.querySelector('.survey_form-content__body.active');
        let sibling: Element | null | undefined = null;

        switch (direction) {
            case 'next':
                sibling = active_element?.nextElementSibling;
                break;
            case 'previous':
                sibling = active_element?.previousElementSibling;
                break;
            default:
                break;
        }

        if (active_element !== undefined && active_element !== null) {
            if (sibling !== undefined && sibling !== null && sibling.classList.contains('survey_form-content__body')) {
                active_element.classList.remove('active');
                sibling.classList.add('active');
                direction === 'previous' ? fillBar -= percentage : fillBar += percentage;
                progressBar(fillBar + '');
                active_element = sibling;
            }
        }
    }

    //Validates input value before continuing to next box
    function validBeforeContinue(input: HTMLInputElement | null | undefined): boolean {
        let result: Result = {
            type: false,
            message: 'No input specified.'
        };

        if (input !== null && input !== undefined) {
            result.type = true;
            result.message = '';

            if (input.dataset.callback !== undefined) {
                if (input.value === '') {
                    result.type = false;
                    result.message = 'Value is empty.';
                }

                if (!validateFunctions[input.dataset.callback](input.value).type) {
                    result.type = false;
                    result.message = validateFunctions[input.dataset.callback](input.value).message;
                }
            }
        }

        if (warning != null || warning != undefined) {
            result.type === false ? warning.style.display = 'block' : warning.style.display = 'none';
            warning.textContent = result.message;
        }

        return result.type;
    }
})();

//check active  elements ajaxdata
//Send data off to ajax