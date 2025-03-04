import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaIdCard, FaUser } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import Swal from 'sweetalert2';

const Bio = () => {
  const showBio = () => {
    Swal.fire({
      title: 'About Me',
      html: `
        <style>
          .swal2-title {
            color: #6366f1;
            font-weight: bold;
            font-size: 2rem;
          }
            div{
            font-weight: 600;
            color:rgb(0, 0, 0);
            }
        </style>
        <div class="text-justify">
          <p class="mb-4">
            Hi! I'm Vincentius Reynara Ezratama, a passionate web developer and student at SMK Negeri 2 Depok Sleman.
            I specialize in frontend development and love creating beautiful, responsive web applications.
          </p>
          <p>
            Currently, I'm focused on learning React, Tailwind CSS, and other modern web technologies.
            When I'm not coding, you can find me exploring new technologies or working on personal projects.
          </p>
        </div>
      `,
      showCloseButton: true,
      showConfirmButton: false,
    });
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="tracking-wide text-sm text-indigo-400 font-semibold">
            Hi, I'm
          </div>
          <h1 className="block mt-1 text-lg leading-tight font-semibold text-black">
            Vincentius Reynara Ezratama
          </h1>
          <p className="mt-2 text-indigo-400 font-semibold">
            Welcome to my Profile!
          </p>
          <button
            onClick={showBio}
            className="w-full px-4 py-2 bg-indigo-400 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors duration-300 mt-4 flex items-center justify-center gap-2"
          >
            <span>Short Bio</span>
            <FaUser className='text-xl' />
          </button>
          <a href="https://drive.google.com/file/d/1RjbJO6RSaoF11gNWbcGzLZyZhCVhKlSG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full px-4 py-2 bg-indigo-400 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors duration-300 mt-4 flex items-center justify-center gap-2">
            <span>My CV</span>
            <FaIdCard className="text-xl" />
          </a>
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
  );
};

export default Bio; 