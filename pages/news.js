import SectionTitle from '../components/sectionTitle'
import NewsList from '../components/newsList'
import Navbar from '../components/navbar'

export default function News() {
  return (
    <>
      <Navbar />

      <div className="py-16 px-4 max-w-4xl mx-auto">

        <div className="my-16">
          <SectionTitle title="最新消息" subtitle="News" />
        </div>
        <NewsList />
      </div>
    </>
  )
}
