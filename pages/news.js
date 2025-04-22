import SectionTitle from '../components/sectionTitle'
import NewsList from '../components/newsList'

export default function News() {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <SectionTitle title="最新消息" subtitle="News" />
      <NewsList />
    </div>
  )
}
