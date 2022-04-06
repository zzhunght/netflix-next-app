import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { DesktopOutlined, DribbbleOutlined, HomeOutlined, MenuOutlined, SearchOutlined, SlackOutlined } from '@ant-design/icons'
function Navbar() {
    const [openMenu,setOpenMenu] = useState(false)
    const [value,setValue] = useState()
    const router = useRouter()
    // console.log(router)

    const handelKeyDown = (e) => {
        if(e.key === 'Enter'){
            router.push(`/search/${value}`)
        }
    }
    const onChange = (e) => {
        setValue(e.target.value)
    }

    
    return (
    <div className="nav-wr">
        <div className="nav-content">
            <div className="nav-img">
                <img src="/logo.png" alt="image" className="nav-logo"/>
            </div>
            <div className="nav-list">
                <div className="nav-list-item">
                    <Link href="/home">
                        <a >
                            Home
                        </a>
                    </Link>
                </div>
                <div className="nav-list-item">
                    <Link href="/tv">
                        <a >
                            TV Series
                        </a>
                    </Link>    
                </div>
                <div className="nav-list-item">
                    <Link href="/movies/trending">
                        <a >
                            Movies
                        </a>
                    </Link>    
                </div>
                <div className="nav-list-item">
                    <Link href="/movies/popular">
                        <a >
                            Popular
                        </a>
                    </Link>    
                </div>
            </div>
            <div className="nav-search">
                <input
                 type="text" 
                 className="form-search"
                 value={value}
                 onChange ={e => onChange(e)} 
                 placeholder="Something you want" 
                 onKeyDown={e =>handelKeyDown(e)}
                />
                <button className="search-btn">
                    <Link href={`/search/${value}`}>
                        <a href="">
                            <SearchOutlined className="search-icon" />
                        </a>
                    </Link>
                </button>
            </div>
            <div
             className="nav-open-menu"
             onClick={() =>setOpenMenu(!openMenu)}
            >
                <MenuOutlined />
            </div>
        </div>
        <div
         className={`menu-overlay ${openMenu ? 'open' : ''}`}
         onClick={() =>setOpenMenu(false)}
        ></div>

        <div className={`menu-mobile ${openMenu ? 'open' : ''}`}>
            <div className="menu-mobile-img">
                <img src="/logo.png" alt="logo" />
            </div>
            <p className="menu-label">Menu</p>
            <div className="menu-list">
                <div className="search-box">
                    <input
                    type="text" 
                    className="menu-form-search"
                    value={value}
                    onChange ={e => onChange(e)} 
                    placeholder="Something you want" 
                    onKeyDown={e =>handelKeyDown(e)}
                    />
                    <button className="search-btn">
                        <Link href={`/search/${value}`}>
                            <a href="">
                                <SearchOutlined className="search-icon" />
                            </a>
                        </Link>
                    </button>
                </div>
                <div className="menu-list">
                    <Link
                     
                     href="/home"
                    >
                        <a
                         onClick={() =>setOpenMenu(false)} 
                         className={`menu-item ${router.pathname.includes('home') ? 'active' : ''}`} 
                        >
                            <HomeOutlined /> Home
                        </a>
                    </Link>
                    <Link
                     
                     href="/tv"
                    >
                        <a
                         onClick={() =>setOpenMenu(false)}
                         className={`menu-item ${router.pathname.includes('tv') ? 'active' : ''}`} 
                        >  
                            <DesktopOutlined /> TV
                        </a>
                    </Link>
                    <Link
                     
                     href="/movies/trending"
                    >
                        <a
                         onClick={() =>setOpenMenu(false)} 
                         className={`menu-item ${router.pathname.includes('trending') ? 'active' : ''}`} 
                        >
                            <SlackOutlined /> Trending 
                        </a>
                    </Link>
                    <Link
                     
                     href="/movies/popular"
                    >
                        <a
                         onClick={() =>setOpenMenu(false)} 
                         className={`menu-item ${router.pathname.includes('popular') ? 'active' : ''}`} 
                        >
                            <DribbbleOutlined /> Popular
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar