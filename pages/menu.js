import SectionTitle from '../components/sectionTitle'
import MenuList from '../components/menuList'

export default function Menu() {
  return (
    <div className="py-16 px-4 max-w-5xl mx-auto">
      <SectionTitle title="菜單推薦" subtitle="Menu" />
      <MenuList />
    </div>
  )
}
