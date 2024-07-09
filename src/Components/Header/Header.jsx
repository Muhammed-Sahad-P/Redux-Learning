import React from 'react'

const Header = () => {
  return (
    <header>    
        <div className='container'>
            <h1 style={{color: 'white'}}>Header</h1>
            <svg width="24" height="24" viewBox="0 0 24 24" cursor="pointer">
                <path style={{fill: 'white'}} d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </svg>
        </div>
    </header>
  )
}

export default Header