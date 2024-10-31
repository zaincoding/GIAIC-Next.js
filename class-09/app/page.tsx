
import react from 'react';
import Image from 'next/image';
// import { Header } from '@/components/Header/header';

// export default function Home(){

//   return(

//     <div>
//       {/* <img src="/images/download.png"  alt="image" /> */}
// {/* //components */}
//       <Image  src={"/images/download.png"} alt='image' 
//        height={600}  
//        width={300}/>
//     </div>
//   )
// }


import Head from '@/components/Header/header';
export default function Home(){

  return(

    // <div>
    //   {/* <div  className='h-[88px] bg-slate-500'></div> */}
    //   <
    // <div>This is page content</div>
    // </div>

    //by default flex row   
    // flex horizaontal the items.
    // 

    <div className='h-screen'>
      <Head />

      <div className='flex  h-[80%]'>
        <div className='w-1/2   flex-col justify-center  items-start m-12' >
        <h1 className='text-[44px] font-bold'>Welcome To Our Website.</h1>
        <p className='text-[32px]  w-[571px]'>  
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus leo, dictum sed vulputate sed, facilisis ac enim. 
        In aliquam sed risus ut maximus. Suspendisse congue dolor ut est consectetur
        ,
</p>

        <button>Contact Us</button>
         
        </div>
        <div className='w-1/2 justify-center items-center'>
         
        <Image  src="/images/download.png" alt="Hero image"  
        width={502}
         height={465}/>

         </div>
      </div>
    </div>
  )
}




// large
//1920 X 1080 px  mx size

// large laptop
//1766 X 752  px


// normal laptop size
// 1366 X  

//1199     tablet   , ipad and tablets

//767    small tablet size

// 218 or 230 is the smallest size of iphone

// next.js compress the image by itself.
//save cash
// next.js convert the image formate to webp 
// responsive the every screen size




