import Image from "next/image";


function myfun(){
return(
  <h1>Hello world2</h1>
)
}

export default function Home() {
  return (
<div>
       <h1>Hello World</h1>
       {myfun()}
       </div>
  )
}