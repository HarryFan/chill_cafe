import SectionTitle from '../components/sectionTitle'
import StoreMap from '../components/storeMap'

export default function Stores() {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <SectionTitle title="門市據點" subtitle="Stores" />
      <StoreMap />
    </div>
  )
}
