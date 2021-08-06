import CardOutlline from "./CardOutlline"

function MainPage() {
  return (
    <div className=' bg-[#3c3963] h-[500vh]  '>
      <div className='pb-5'></div>
      <main className='max-w-6xl mx-auto mb-5'>
        <CardOutlline
          title='Announce'
          details='[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021'
        />
        <CardOutlline
          title='เลือกห้อง'
          details='[Pantip Point of August] ชวนมาบอก ‘รักแม่ให้โลกรู้’ 💕 กับ กิจกรรมตลอดเดือน สิงหาคม 2021'
        />
      </main>
    </div>
  )
}

export default MainPage
