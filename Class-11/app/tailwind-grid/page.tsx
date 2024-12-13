export default function Grid() {
    return (
 
    //css gride
    <div className=" bg-green-400 col-span-5 grid grid-cols-5 grid-rows-5  md:grid-rows-4 h-screen gap-2 p-2">
        <div className="  bg-green-600  col-span-5"> Header</div>
         <div className=" bg-green-600 hidden row-span-2 md:flex">sidebar</div>
         <div className=" bg-green-600 col-span-5 md:col-span-4">content1</div>
         <div className=" bg-green-600 col-span-5 md:col-span-4">content2</div>
         <div className=" bg-green-600 col-span-5 md:col-span-5">content3</div>
         <div className=" bg-green-600 col-span-5"> Footer</div>
    </div>
 
    )
 
   }