import progressBar from './progress_bar';
import { questions } from './questions';
import { heading, body, group } from './body';
import { validateFunctions, Result } from './validation';

(function (): void {
    //Global Input Variable to keep track of active bodies value
    let INPUT_VALUE: HTMLInputElement | null;
    let ACTIVE_ELEMENT: Element | null | undefined;

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

    //Get the active body that has been populated and also start calculating the percentage values to increase by
    ACTIVE_ELEMENT = content?.querySelector('.survey_form-content__body.active');
    let numberOfQuestions: NodeListOf<Element> | null | undefined = content?.querySelectorAll('.survey_form-content__body');
    let percentage: number = numberOfQuestions !== null && numberOfQuestions !== undefined ? Math.round((100 / numberOfQuestions.length)) : 0;
    let fillBar: number = 0;

    //Listen for any input changes
    inputListeners(ACTIVE_ELEMENT);

    //Continue to next element, but validates first
    nextBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        if (validBeforeContinue(INPUT_VALUE))
            activeElement('next');
    });

    //Go to previous element
    prevBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        activeElement('previous');
    });

    function inputListeners(activeElement: Element | null | undefined): void {
        const inputs: NodeListOf<HTMLInputElement> | undefined = activeElement?.querySelectorAll('input');

        INPUT_VALUE = null;

        let assignValue = function (input: HTMLInputElement) {
            INPUT_VALUE = input;
            input.setAttribute('listener', 'true');
        }

        inputs?.forEach((input) => {
            if (!input.hasAttribute('listener') || input.getAttribute('listener') === '')
            {
                input.addEventListener('input', () => assignValue(input));
                console.log(input);
            }
        });
    }

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

    function activeElement(direction: string): void {
        ACTIVE_ELEMENT = content?.querySelector('.survey_form-content__body.active');
        let sibling: Element | null | undefined = null;

        switch (direction) {
            case 'next':
                sibling = ACTIVE_ELEMENT?.nextElementSibling;
                break;
            case 'previous':
                sibling = ACTIVE_ELEMENT?.previousElementSibling;
                break;
            default:
                break;
        }

        if (ACTIVE_ELEMENT !== undefined && ACTIVE_ELEMENT !== null) {
            if (sibling !== undefined && sibling !== null && sibling.classList.contains('survey_form-content__body')) {
                ACTIVE_ELEMENT.classList.remove('active');
                sibling.classList.add('active');
                direction === 'previous' ? fillBar -= percentage : fillBar += percentage;
                progressBar(fillBar + '');
                ACTIVE_ELEMENT = sibling;
                inputListeners(sibling);
            }
        }
    }
})();


//Fix radio button selections, so that it stays green if selected
//Then test why first input selection after continue doesnt work
//Send data off to ajax