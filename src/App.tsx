import { Link } from 'react-router';
import Poster from './assets/Vote.jpg';
import { FaCheck, FaFacebookF, FaFlag, FaHome, FaInstagram } from 'react-icons/fa';

function App() {

  return (
    <main className='bg-[#F1F3FA] flex items-center justify-center h-screen w-screen'>
      <section className="bg-white w-[80%] py-5 rounded-md space-y-4">
        <p className="text-[#507392] text-sm text-center font-medium">PLEASE I NEED YOUR VOTE</p>
        <div className='flex flex-col items-center justify-center gap-4'>
          <img src={Poster} alt="Poster" className='h-20 w-auto' />
          <div className='flex items-center justify-center gap-3 pb-5'>
            <Link to={'/instagram'} className='bg-[#5CB85C] border border-[#5CB85C] hover:bg-transparent hover:text-[#5CB85C] transition-all ease-out duration-300 rounded-md text-white py-2 px-4 flex items-center justify-center gap-2'>
              <span className='text-sm font-medium'>Vote with</span>
              <FaInstagram className='text-lg' />
            </Link>
            <Link to={'/facebook'} className='bg-[#D9534F] border border-[#D9534F] hover:bg-transparent hover:text-[#D9534F] transition-all ease-out duration-300 rounded-md text-white py-2 px-4 flex items-center justify-center gap-2'>
              <span className='text-sm font-medium'>Vote with</span>
              <FaFacebookF className='text-lg' />
            </Link>
          </div>

          <ul className='text-[#5B9BD1] w-full font-medium'>
            <li className='bg-[#F6F9FB] border-l-2 border-[#5B9BD1] pl-4 flex items-center gap-3 py-3'><FaHome /> Total Votes: 537 out of 1000</li>
            <li className='text-[#6f808a86] pl-4 flex items-center gap-3 py-3'> <FaCheck /> Total Votes To Win: 463</li>

            <li className='text-[#6f808a86] pl-4 flex items-center gap-3 py-3'><FaFlag /> Help</li>

          </ul>
        </div>
      </section>
      <div className='fixed inset-x-0 bottom-5'>
        <p className='text-center font-semibold'>Powered by <span className="text-[#5B9BD1]"> google voting system</span></p>
      </div>
    </main>
  )
}

export default App
