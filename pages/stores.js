import SectionTitle from '../components/sectionTitle'
import StoreMap from '../components/storeMap'
import Navbar from '../components/navbar'

export default function Stores() {
  return (
    <>
      <Navbar />
      <div className="py-16 px-4 max-w-4xl mx-auto ">
        <div className="my-16">
          <SectionTitle title="門市據點" subtitle="Stores" />
        </div>
        <StoreMap />
      </div>
    </>
  )
}
