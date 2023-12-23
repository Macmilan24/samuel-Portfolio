import Links from 'next/link';

//icons
import {RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine} from 'react-icons/ri';
const Socials = () => {
  return (
  <div className='flex items-center gap-x-5 text-lg'>
    <Links href={'/'} className='hover:text-accent transition-all duration-300'><RiYoutubeLine/></Links>

    <Links href={'/'} className='hover:text-accent transition-all duration-300'><RiInstagramLine/></Links>

    <Links href={'/'} className='hover:text-accent transition-all duration-300'><RiFacebookLine/></Links>

    <Links href={'/'} className='hover:text-accent transition-all duration-300'><RiDribbbleLine/></Links>

    <Links href={'/'} className='hover:text-accent transition-all duration-300'><RiBehanceLine/></Links>

    <Links href={'/'} className='hover:text-accent transition-all duration-300'><RiPinterestLine/></Links>
  </div>
  );
};

export default Socials;
