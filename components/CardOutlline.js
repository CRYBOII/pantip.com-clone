const CardOutlline = ({ title, details }) => {
  return (
    <div className='rounded-lg border-[1px] border-gray-400  mb-6'>
      <header className='border-b-[1px] border-gray-400 items-center px-4 py-4 text-yellow-400 bg-[#1f1d33]'>
        {title}
      </header>
      <div className='py-4 px-5 text-gray-100  bg-[#353156] hover:bg-[#2d2a49]'>
        {details}
      </div>
    </div>
  )
}

export default CardOutlline
