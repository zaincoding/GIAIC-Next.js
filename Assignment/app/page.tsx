import Header from '@/components/Header/header'
import Image from 'next/image'


export default function Home(){

  return(
    <div  className='h-screen'>
    <Header/>


<div className='flex h-[80%] '>
    <div  className='w-1/2, flex-col justify-center 
      items-center w-[496px] h-[189px] ml-[176px] my-[116px]'  style={{fontFamily: 'Libre Bodoni'}}>
         <h1 style={{ 
         lineHeight:'65.8px'}}
          className='text-[40px] font-bold lineHeight-[65.8px]'>
          <span className='block'>IMPECCABLE</span> <span className='block'>CRAFTSMANSHIP AND </span> <span>FINESSE</span></h1>
          <p  className='w-[902px] h-[147px]   font-medium
          text-[30px] ' style={{color:' #787054'}}><span className='block'>An example of intricate workmanship and detail,</span> <span className='block'>elegant necklaces and long and short chains form a part of our</span> desirable collection.</p>
         
         <button
className='bg-[#A29875] w-[288px] h-[58px]
text-white  p-[10px] rounded-[10px]'>
  <span className='text-[30px] w-[177px] h-[38px]'>Explore Now</span></button>


    </div>

    <div className="w-1/2 my-10 ml-[450px]">

    <Image
      src="images/rs-group-wrap ⏵ rs-group.svg"
      alt="Layer-1"
      width={442}
      height={400}
      className='border'
    />


</div>



    </div>
    </div>
  )

}



