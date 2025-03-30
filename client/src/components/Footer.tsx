import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="font-light text-sm flex justify-center items-center p-2 gap-2 ">
      <a  target="_blank" className='flex gap-2 justify-center border-blue-300 m-2 bg-gradient-to-br from-blue-400 via-white to-purple-400  px-2 rounded-full py-1 border-2 items-center' href="https://github.com/Yashxp1/Blog-App">
      
        {' '}
        Give it a star on <FaGithub />{' '}
      </a>
    </div>
  );
};

export default Footer;
