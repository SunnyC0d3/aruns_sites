export default function progressBar( percent : string )
{
    const progressBar = document.querySelector( '.survey_form .survey_form-bar' ) as HTMLElement;

    if( progressBar !== null )
    {
        console.log( progressBar.style.backgroundImage );
        //progressBar.style.backgroundImage = `linear-gradient(to right, #36c240 ${percent}%, transparent 0%);`;
    }
}