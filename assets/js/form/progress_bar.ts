export default function progressBar( percent : string ): void
{
    const progressBar = document.querySelector( '.survey_form .survey_form-bar--progression' ) as HTMLElement;
    const count = document.querySelector( '.survey_form .survey_form-bar--count' ) as HTMLElement;

    if( progressBar !== null && count !== null )
    {
        progressBar.style.width = `${percent}%`;
        count.textContent = `${percent}%`;
    }
}