/*
* StoreMap - 門市資訊＋Google Maps（靜態展示）
*/
const stores = [
  {
    name: 'Chill Cafe 台北信義店',
    addr: '台北市信義區松壽路 11 號',
    time: '08:00-20:00',
    tel: '02-1234-5678',
    map: 'https://www.google.com/maps?q=25.034153,121.564537',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Chill Cafe 台中公益店',
    addr: '台中市南屯區公益路二段 51 號',
    time: '09:00-21:00',
    tel: '04-2233-4455',
    map: 'https://www.google.com/maps?q=24.150415,120.648621',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
  }
]
export default function StoreMap() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {stores.map(store => (
          <div key={store.name} className="card items-start">
            <img src={store.img} alt={store.name} className="rounded-xl w-full h-36 object-cover mb-2" />
            <h3 className="text-xl mb-1">{store.name}</h3>
            <div className="text-chillText text-base mb-1">{store.addr}</div>
            <div className="text-chillText/70 text-sm mb-1">營業時間：{store.time}</div>
            <div className="text-chillText/70 text-sm mb-2">電話：{store.tel}</div>
            <a href={store.map} target="_blank" rel="noopener noreferrer" className="text-chillAccent underline">查看地圖</a>
          </div>
        ))}
      </div>
      <div className="w-full rounded-xl overflow-hidden shadow">
        <iframe
          title="Chill Cafe Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.872888130884!2d121.564537!3d25.034153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abbf2e7d6e3b%3A0x1e3b3c4f7a6d8e2b!2z5Y-w5YyX5ZyL6Zqb6Zqb!5e0!3m2!1szh-TW!2stw!4v1680000000000!5m2!1szh-TW!2stw"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}



