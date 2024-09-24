import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center py-4 main-color-bg">
        <p className='text-white text-xl'>&copy; {currentYear} Araby. All rights reserved.</p>
    </footer>
  )
}

export default Footer