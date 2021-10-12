import Link from 'next/link'
import Image from 'next/image'
import yachts from '../img/a1-yachts.png'
import about from '../img/activities.jpeg'
import services from '../img/a1-luxuryvillas.png'

const Nav = () => {
    return (
        <nav>
            <div className="container">
                <div>              
                    <Link href="/"> 
                        <Image src={yachts} alt='home' width='100px' height='100px'/>
                    </Link>
                          
                    <Link href="/about">
                        <Image src={about} alt='about' width='100px' height='100px'/>
                    </Link>
                    
                    <Link href="/services">
                        <Image src={services} alt='services' width='100px' height='100px'/> 
                    </Link>
                </div> 

                <style jsx>
                    {`
                        .container{
                            background-color:green;
                            border:2px solid red;
                            padding:10px;
                            display:flex;
                        }
                    `}
                </style>
            </div>    
        </nav>
    )
}

export default Nav;