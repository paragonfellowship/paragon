import HeaderLogo from '@/assets/header-logo.svg';
import Image from "next/image";
import {SocialIcon} from 'react-social-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='p-6 md:p-11 min-h-[15rem] bg-newblue'>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className='flex flex-col items-center text-center mb-8 md:mb-0'>
          <Image src={HeaderLogo} alt="Paragon Logo" width={250} height={60} />
        </div>
        
        <div className='hidden md:block w-px h-full bg-gray-600 mx-14'></div>
        
        <div className='pt-5 flex flex-col items-center md:items-start'>
          <div className='mb-1 md:mr-8 text-center md:text-left'>
            <p className='text-gray-400 font-bold text-sm mb-2'>Our Organization</p>
            <a href='/team' className='text-gray-300 text-base underline block hover:text-white transition-colors'>Team Directory</a>
            <a href='mailto:paragonfellowship@gmail.com' className='text-gray-300 text-base underline block hover:text-white transition-colors'>Contact Us</a>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-row justify-center'>
        <SocialIcon url="https://www.linkedin.com/company/paragon-fellowship" target='_blank' bgColor="#1e2d5a" className="transition transform hover:scale-110"/>
        <SocialIcon url="https://www.instagram.com/paragonfellowship/" target='_blank' bgColor="#1e2d5a" className="transition transform hover:scale-110"/>
		<SocialIcon url="https://paragonpolicyfellowship.substack.com/" target='_blank' bgColor="#1e2d5a" className="transition transform hover:scale-110"/>
      </div>
      <p className='text-gray-400 mt-2 text-center'>© {currentYear} The Paragon Policy Fellowship</p>
    </footer>
  );
}