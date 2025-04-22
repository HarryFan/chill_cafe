/**
 * MenuList - 菜單列表，支援分類與放大
 */
import { useState } from 'react'
const menuData = [
  {
    category: '咖啡飲品',
    items: [
      { name: '經典拿鐵', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', desc: '濃郁義式咖啡結合綿密奶泡', hot: true },
      { name: '手沖單品', img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80', desc: '精選產地豆，現點現沖', hot: true },
      { name: '美式咖啡', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', desc: '經典順口，冰熱皆宜', hot: false },
      { name: '燕麥拿鐵', img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', desc: '植物奶香，無負擔', hot: false },
    ]
  },
  {
    category: '點心輕食',
    items: [
      { name: '手作甜點', img: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80', desc: '每日新鮮現做', hot: false },
      { name: '法式三明治', img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', desc: '外酥內嫩，搭配沙拉', hot: false },
    ]
  }
]

export default function MenuList() {
  const [cat, setCat] = useState('全部')
  const [showImg, setShowImg] = useState(null)
  const cats = ['全部', ...menuData.map(d => d.category)]
  return (
    <div>
      <div className="flex gap-4 mb-6 justify-center">
        {cats.map(c => (
          <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full font-chill border ${cat===c?'bg-chillAccent text-chillBrown border-chillAccent':'border-chillAccent/30 text-chillText'}`}>{c}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {menuData.filter(d => cat==='全部'||d.category===cat).flatMap(d=>d.items).map(item => (
          <div key={item.name} className="card cursor-pointer hover:scale-105 transition" onClick={()=>setShowImg(item)}>
            <img src={item.img} alt={item.name} className="rounded-xl w-full h-44 object-cover mb-3" />
            <h3 className="text-xl mb-1">{item.name}</h3>
            <p className="text-chillText text-base">{item.desc}</p>
            {item.hot && <span className="ml-2 text-chillAccent text-xs">熱銷</span>}
          </div>
        ))}
      </div>
      {/* 圖片放大 Modal */}
      {showImg && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={()=>setShowImg(null)}>
          <div className="bg-white rounded-2xl p-6 shadow-xl max-w-md w-full flex flex-col items-center">
            <img src={showImg.img} alt={showImg.name} className="rounded-xl w-full h-64 object-cover mb-4" />
            <h3 className="text-2xl mb-2">{showImg.name}</h3>
            <p className="text-chillText text-base mb-2">{showImg.desc}</p>
            <button className="mt-2 px-6 py-2 rounded-full bg-chillAccent text-chillBrown font-chill" onClick={()=>setShowImg(null)}>關閉</button>
          </div>
        </div>
      )}
    </div>
  )
}
