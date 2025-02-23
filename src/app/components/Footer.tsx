import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <>
      <section className='px-6 py-6 backdrop-blur-sm border-t border-white/10 flex  justify-between  items-center text-white text-center '>
        <h1 className='text-[10px] md:text-[14px]'>© 2025 4Devdigital. All rights reserved.</h1>
        <div className='flex gap-4 '>
          <a href='https://www.instagram.com/4devdigital?igsh=MWhhaGxzc3YwYndhZQ==' target='_blank' rel='noopener noreferrer' className='text-purple-500'>
            <Instagram size={20} />
          </a>
          <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='text-purple-500'>
            <Linkedin size={20} />
          </a>
        </div>
      </section>
    </>
  );
}

export default Footer;
