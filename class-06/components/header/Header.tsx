//nav-bar   (kabab case)



import cssStyle from './header.module.css';
import css from 'styled-jsx/css';

console.log(cssStyle, "cssStyle")


const multiply2 = (attr:number) => {
    console.log(attr*2)
}
const Header = (props: any) =>{
    console.log(props, "props")
    return(

        <div>
            <h1></h1>
            <h2>{props.zain}</h2>
            <h2>{props.abc}</h2>
            <h3>{props.hello}</h3>
            <h1>{props.isBoolean}</h1>
            {/* <style ={{backgroundColor:"blue";

            }}> */}
        <h1  className={cssStyle.h1}>This is header component</h1>

        </div>
    )
}

export default Header;