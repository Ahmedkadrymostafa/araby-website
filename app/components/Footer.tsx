import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center py-4 main-color-bg">
        <p className='text-white text-xl'>&copy; {currentYear} جميع الحقوق محفوظة - منصة عربي الاخبارية</p>
        <ul className='mt-2 flex justify-center gap-2'>
          <li><a href="/privacy" className='text-white text-sm'>سياسة الخصوصية</a></li>
          <li><span className='text-white'>|</span></li>
          <li><a href="/terms" className='text-white text-sm'>سياسة الاستخدام</a></li>
          <li><span className='text-white'>|</span></li>
          <li><a href="/about" className='text-white text-sm'>من نحن</a></li>
        </ul>
    </footer>
  )
}

export default Footer