import Image from "next/image";
import Link from "next/link";

// export default function Homepage() {
//   return (
//       <div>
//         <ul>
//         <li><Link  href="/about">About</Link></li>
//         <li><Link href="/contact">Contact</Link></li>
//         <li><Link href="/services">Services</Link></li>
//         </ul>
//       </div>
//   )

// }

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer'
export default function Homepage() {
  return(
    <div>
      {/* //when inside components pass attribut or props you wnat to make it dynaic */}
    <Header  zain="hell taimoor" abc={22}  hello="Hello World"  isBoolean = {true}></Header>
    <Footer></Footer>
    <h1>This is Home page</h1>

    </div>
  )

}

