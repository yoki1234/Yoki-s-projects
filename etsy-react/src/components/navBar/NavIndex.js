import React,{useState} from 'react'
import Logo from '../../assets/logo.svg'
import './style.css'

function NavIndex(props) {
    
    const data = props.navdata;
    const[isActive,setActive]=useState(false)

    const toggleClass=()=>{
        setActive(!isActive)
    }

  return (
    <nav className='nav-bar'>
      <section className='nav-bar-sectionOne'>
            <a href ="#" className='logo'>
                <img src={Logo} alt="etsy-logo"/>
            </a>
            <div className='nav-bar-ssectionOne-sub'>
                <a href="#">
                 <button>{data.userEntryBtn}</button>
                </a>
                <span>
                    <svg viewBox="0 0 24 24">
                        <path d={data.likePath}></path>
                    </svg>
                </span>
                <span>
                    <svg viewBox="0 0 24 24">
                        <path d={data.kartPath}></path>
                    </svg>
                </span>
            </div>
      </section>
      <section className='nav-bar-sectionTwo'>
             <svg viewBox="0 0 24 24">
                <path d={data.dropDownPath}></path>
             </svg>
             <div className={`${isActive ? 'search-bar':'active'}`} onClick={()=>{toggleClass();}}>
                <input type="search" placeHolder={data.searchBox.placeHolder}/>
                
                    <svg viewBox="0 0 24 24">
                        {
                          data.searchBox.searchPath && data.searchBox.searchPath.map((e)=>{
                            return(
                                <path key={e.keyId} d={e.path}></path>
                            )
                           })}
                    </svg>
             </div>
      </section>
    </nav>
  )
}

export default NavIndex
