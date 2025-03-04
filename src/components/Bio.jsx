import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaIdCard } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Bio = () => {
  return (
    <body className="flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-900">  
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
            </div>
            <div className="p-8">
              <div className="tracking-wide text-sm text-indigo-400 font-semibold">
                Hi, I'm
              </div>
              <h1 className="block mt-1 text-lg leading-tight font-semibold text-black">
                Reynara
              </h1>
              <p className="mt-2 text-indigo-400 font-semibold">
                Welcome to my Profile!
              </p>
              <button className="w-full px-4 py-2 bg-indigo-400 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors duration-300 mt-4 flex items-center justify-center gap-2">
              <span>My CV</span>
                <FaIdCard className='text-xl'/>
              </button>
              <div className="justify-center mt-4 flex gap-4 text-4xl">
                <a href="https://instagram.com/rey.ezr" className="text-gray-500 hover:text-gray-600">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/vincentius-reynara-ezratama-a9b816345/" className="text-gray-500 hover:text-gray-600">
                  <FaLinkedin />
                </a>
                <a href="mailto:ezratamavincentius@gmail.com" className="text-gray-500 hover:text-gray-600">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Bio; 