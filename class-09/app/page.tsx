
import react from 'react';
import Image from 'next/image';
import Header from '@/components/Header/header';
import Link from 'next/link';

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


export default function Home(){

  return(

    // <div>
    //   {/* <div  className='h-[88px] bg-slate-500'></div> */}
    //   <
    // <div>This is page content</div>
    // </div>

    //by default flex is row-oriented   
    // flex horizaontal the items.
    // 

    <div className='h-screen'>
      <Header />

      <div className='flex  h-[80%]'>
        <div className='w-1/2   flex-col justify-center  items-start m-12' >
        <h1 className='text-[44px] font-bold'>Welcome To Our Website.</h1>
        <p className='text-[32px]  w-[571px]'>  
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus leo, dictum sed vulputate sed, facilisis ac enim. 
        In aliquam sed risus ut maximus. Suspendisse congue dolor ut est consectetur
        ,
</p>
{/* 
        <button className='bg-slate-950 text-yellow-100 rounded-md p-2 my-10 font-bold'>Contact Us</button> */}
        <button style={{background: "#121212"}} className='w-[237px] h-[66px] 
         m'>
         <span className='text-[28px] 
           font-inter' style={{color: "#FFFFFF"
         }} >Contact Us</span></button>
         
        </div>
        <div className='w-1/2 justify-center items-center'>
         <Link  href='https://www.figma.com/design/Un4OAyUpYG6NosQzc6BEQE/Untitled?node-id=1-3&node-type=frame&t=fBU8eguoQzzbLF6y-0' target='_blank'>
        <Image  src="/images/philip.svg" alt="Hero image"  
        width={502}
         height={465}/>
</Link>
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




