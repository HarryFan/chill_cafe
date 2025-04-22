import SectionTitle from '../components/sectionTitle'
import ImageCarousel from '../components/imageCarousel'

export default function About() {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <SectionTitle title="品牌故事" subtitle="Brand Story" />
      <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
        <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="品牌故事" className="rounded-xl w-72 h-48 object-cover" />
        <div>
          <h3 className="text-2xl mb-2">Chill Cafe 起源</h3>
          <p className="text-chillText text-lg mb-2">Chill Cafe 源自一群咖啡愛好者對於生活慢步調的追求，致力於打造一個讓人放鬆、享受慢時光的空間。</p>
          <h4 className="text-xl mt-4 mb-1">創辦人</h4>
          <p className="text-chillText">Amber & Ethan — 以慵懶哲學為品牌核心，推廣Chill生活美學。</p>
        </div>
      </div>
      <div className="mt-12">
        <h4 className="text-xl mb-4">Chill 生活哲學</h4>
        <ImageCarousel images={[
          'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80',
          'https://unsplash.com/photos/xII7efH1G6o/download?force=true&w=900',
          'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=900&q=80'
        ]} />
      </div>
    </div>
  )
}
