/**
 * NewsList - 最新消息列表
 */
const news = [
  { title: '春季新品上市', date: '2025/04/15', desc: '全新手沖單品豆限量登場！', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
  { title: '母親節活動', date: '2025/05/01', desc: '來店消費享限定甜點優惠', img: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80' },
  { title: '品牌聯名合作', date: '2025/06/01', desc: '與知名甜點品牌跨界合作', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80' },
]

export default function NewsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {news.map(n => (
        <div key={n.title} className="card items-start">
          <img src={n.img} alt={n.title} className="rounded-xl w-full h-32 object-cover mb-2" />
          <div className="text-chillAccent text-sm mb-1">{n.date}</div>
          <h3 className="text-xl mb-1">{n.title}</h3>
          <div className="text-chillText text-base mb-2">{n.desc}</div>
        </div>
      ))}
    </div>
  )
}
