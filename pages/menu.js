import SectionTitle from '../components/sectionTitle'
import MenuList from '../components/menuList'
import Navbar from '../components/navbar'

export default function Menu() {
  return (
    <>
      <Navbar />
      <div className="py-16 px-4 max-w-5xl mx-auto">
        <div className="my-16">
          <SectionTitle title="菜單推薦" subtitle="Menu" />
        </div>
        <MenuList />
      </div>
    </>
  )
}
