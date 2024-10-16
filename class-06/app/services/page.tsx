
import cssStyle from './services.module.css';

console.log(cssStyle, "CSS-style")

function servicesPage(){

    return(
        <h1 className={cssStyle.h1}>Services Page</h1>
    )
}

export default servicesPage;