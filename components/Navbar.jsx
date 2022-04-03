import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
function Navbar() {
    const router = useRouter()
    // console.log(router)

    return (
    <div className="nav-wr">
        <div className="nav-content">
            <div className="nav-img">
                <img src="/logo.png" alt="image" className="nav-logo"/>
            </div>
            <div className="nav-list">
                <div className="nav-list-item">
                    <Link href="#">
                        <a >
                            Home
                        </a>
                    </Link>
                </div>
                <div className="nav-list-item">
                    <Link href="#">
                        <a >
                            TV Series
                        </a>
                    </Link>    
                </div>
                <div className="nav-list-item">
                    <Link href="#">
                        <a >
                            Movies
                        </a>
                    </Link>    
                </div>
                <div className="nav-list-item">
                    <Link href="#">
                        <a >
                            Popular
                        </a>
                    </Link>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar