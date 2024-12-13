"use client";

import { useState, useEffect } from 'react';


const Page = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
     console.log("This page is loading")
    },3000)
  });

  return (

    <div>{loading? <p>Page loaded!</p>: <p>loading..</p>}</div>
  );

 }

 export default Page;


// interface ITodo {
//   userId: number,
//   id: number,
//   title: string,
//   completed: boolean,
// }
// const Page = async()  => {
// const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
  

//      const parsedResponse: ITodo[] = await response.json()

//       console.log("todos >>>", parsedResponse)


//   return(
  
//     {/* {parsedResponse.map(( todo, index)=> (
//       <div>
//         <div key={index} className = "bg-blue">
//         <p>userId: {todo.userId}</p>
//         <p>id: {todo.id}</p>

//         <p>title: {todo.title}</p>
//         <p>completed: {todo.completed}</p>

//       </div>
      
//       </div>
//       ))} */}


//       const [loading, setLoading] = useState [false];

//       useEFFect(() => {
//               setLoading(true)
//               setTimeout(() => {
//                 console.log("This is loading")
//               }, 3000);
//             })
  

//       </div>
    
//   )
// }


// export default Page;