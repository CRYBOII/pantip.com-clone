import { HomeIcon, RssIcon, StarIcon } from "@heroicons/react/solid"
import {
  TagIcon,
  ThumbUpIcon,
  EmojiHappyIcon,
  BadgeCheckIcon,
  CalendarIcon,
} from "@heroicons/react/outline"
const SideBar = () => {
  return (
    <div className=' sticky top-[49px]  bg-[#353156]  shadow-lg border-r-[1px] border-gray-800 h-[95vh] '>
      <section className='w-2/3 mx-auto pt-3 space-y-3 text-gray-400 '>
        <div className='flex space-x-5 items-center  font-light'>
          <HomeIcon className='h-7' />
          <p>หน้าเเรก</p>
        </div>

        <div className='flex space-x-5 items-center  font-light'>
          <RssIcon className='h-7' />
          <p>My Feed</p>
        </div>

        <div className='flex space-x-5 items-center  font-light'>
          <ThumbUpIcon className='h-7' />
          <p>Pantip Pick</p>
        </div>

        <div className='flex space-x-5 items-center  font-light'>
          <StarIcon className='h-7' />
          <p>Pantip Hitz</p>
        </div>
        <div className='flex space-x-5 items-center  font-light'>
          <EmojiHappyIcon className='h-7' />
          <p>คอมมูนิตี้แนะนำ</p>
        </div>
      </section>
      <div className='border-b-[1px] border-gray-500 my-3'></div>
      <section className='w-2/3 mx-auto pt-3 space-y-3 text-gray-400 '>
        <div className='flex space-x-5 items-center  font-light'>
          <BadgeCheckIcon className='h-7' />
          <p>Pantip Point</p>
        </div>
        <div className='flex space-x-5 items-center  font-light'>
          <CalendarIcon className='h-7' />
          <p>กิจกรรมพันทิป</p>
        </div>
      </section>
      <div className='border-b-[1px] border-gray-500 my-3'></div>
      <div className='px-3 text-gray-500'>
        <p>กฎ กติกาและมารยาท</p>
        <p>คำแนะนำการโพสต์</p>
        <p>ติดต่อทีมงาน Pantip</p>
        <p>ติดต่อลงโฆษณา</p>
        <p>ร่วมงานกับ Pantip</p>
        <p>Download App Pantip</p>
        <p>Pantip Certified Developer</p>
      </div>
      <div className='absolute bottom-0 text-gray-500 text-sm text-center w-full'>
        <p>© 2021 Internet Marketing co., ltd</p>
        <div className='bg-[#2D2A49]  py-2 border-t-2 border-gray-800'>
          ติดตามพันทิป
        </div>
      </div>
    </div>
  )
}

export default SideBar
