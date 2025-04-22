/**
 * MenuPreview - Chill Cafe 精選菜單
 * @returns {JSX.Element}
 */
const menuItems = [
  {
    name: '手沖單品咖啡',
    img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80',
    desc: '精選產地豆，現點現沖，香氣四溢。',
  },
  {
    name: '經典拿鐵',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    desc: '濃郁義式咖啡結合綿密奶泡，順口溫潤。',
  },
  {
    name: '手作甜點',
    img: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80',
    desc: '每日新鮮現做，搭配咖啡最對味。',
  },
]

export default function MenuPreview() {
  return (
    <section id="menu" className="menu-section">
      {menuItems.map((item) => (
        <div className="card" key={item.name}>
          <img src={item.img} alt={item.name} className="rounded-xl w-full h-44 object-cover mb-4" />
          <h3 className="text-2xl mb-2">{item.name}</h3>
          <p className="text-chillText text-base">{item.desc}</p>
        </div>
      ))}
    </section>
  )
}
