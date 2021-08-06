import Image from "next/image"
import {
  ChatAltIcon,
  MenuIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/solid"
import { TagIcon } from "@heroicons/react/outline"

function Navbaer() {
  return (
    <nav className='sticky top-0 w-full  bg-[#2D2A49] flex shadow-md '>
      <div className='items-center flex space-x-1  cursor-pointer'>
        <div className='flex space-x-2 h-full items-center hover:bg-[#44416f] px-3'>
          <MenuIcon className='h-6 text-white' />
        </div>
        <div className='flex space-x-2 h-full items-center hover:bg-[#44416f] ml-2'>
          <div className=' relative h-6 w-16 '>
            <Image
              src='/images/logo-mobile-pantip-white-beta.png'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
      </div>

      <div className='flex bg-[#44416f] text-white p-1 my-2 rounded-md border-[1px]  border-black flex-grow 2xl:mx-80'>
        <input
          type='text'
          className='bg-transparent outline-none flex-grow '
          placeholder='ค้นหา'
        />
        <SearchIcon className='h-5' />
      </div>
      <div className='justify-end items-center flex  text-gray-400 cursor-pointer'>
        <div className='flex space-x-2 h-full items-center hover:bg-[#44416f] px-3'>
          <ChatAltIcon className='h-7 ' />
          <p>ตั้งกระทู้</p>
        </div>
        <div className='flex space-x-2 h-full items-center hover:bg-[#44416f] px-3'>
          <ViewGridIcon className='h-7' />
          <p>เลือกห้อง</p>
        </div>
        <div className='flex space-x-2 h-full items-center hover:bg-[#44416f] px-3'>
          <TagIcon className='h-7' />
          <p>แท็ก</p>
        </div>
        <div className='flex space-x-2 h-full items-center hover:bg-[#44416f] px-3'>
          เข้าสู่ระบบ / สมัครสมาชิก
        </div>
      </div>
    </nav>
  )
}

export default Navbaer
