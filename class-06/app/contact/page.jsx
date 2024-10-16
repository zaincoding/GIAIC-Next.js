
import cssStyle from './contact.module.css';

console.log(cssStyle, "CSS-style");

function contactPage(){
    return(
        <h1 className={cssStyle.h1}> Contact page</h1>
    )
}

export default contactPage;