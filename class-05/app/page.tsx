import Link from 'next/link';

function HomePage(){

  return(
    <div>
      <div>
        <ul>
          <li><Link href="/" target='_blank'>Home</Link></li>
          <li><Link href="/about" target='_blank'>About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/service">Service</Link></li>
          <li><Link href="/service/Web-Development">Web-Development</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default HomePage;