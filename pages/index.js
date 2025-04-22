import Navbar from '../components/navbar'
import Footer from '../components/footer'

/**
 * Chill Cafe 官網首頁 - 多區塊重構
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        {/* Hero Banner */}
        <section className="hero">
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
            alt="Chill Cafe Hero"
            className="rounded-3xl shadow-lg max-w-4xl w-full object-cover mb-8"
            style={{maxHeight:'400px'}}
          />
          <h1 className="text-5xl md:text-6xl mb-4 font-chill">享受一杯慢時光</h1>
          <p className="text-xl md:text-2xl text-chillBrown mb-8 max-w-xl mx-auto">
            在 Chill Cafe，讓慵懶的午後與咖啡香氣陪伴你，享受片刻的舒適與自在。
          </p>
        </section>
        {/* 品牌簡介 */}
        <section className="flex flex-col md:flex-row gap-8 items-center py-16 px-4 max-w-5xl mx-auto">
          <img src="https://unsplash.com/photos/xII7efH1G6o/download?force=true&w=600" alt="品牌簡介" className="rounded-xl w-80 h-56 object-cover mb-6 md:mb-0" />
          <div>
            <h2 className="text-3xl mb-2 font-chill text-chillBrown">品牌簡介</h2>
            <p className="text-chillText text-lg">
              Chill Cafe 以「Chill 慢生活」為核心，提供舒適空間與精選咖啡飲品，讓每位顧客都能自在享受美好時光。
            </p>
          </div>
        </section>
        {/* 熱門商品 / 菜單推薦 */}
        <section className="py-12 bg-chillAccent/10">
          <h2 className="text-3xl text-center mb-8 font-chill text-chillBrown">熱門推薦</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="拿鐵" className="rounded-xl w-full h-40 object-cover mb-3" />
              <h3 className="text-xl mb-1">經典拿鐵</h3>
              <p className="text-chillText text-base">濃郁義式咖啡結合綿密奶泡</p>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80" alt="手沖單品" className="rounded-xl w-full h-40 object-cover mb-3" />
              <h3 className="text-xl mb-1">手沖單品</h3>
              <p className="text-chillText text-base">精選產地豆，現點現沖</p>
            </div>
            <div className="card">
              <img src="https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80" alt="手作甜點" className="rounded-xl w-full h-40 object-cover mb-3" />
              <h3 className="text-xl mb-1">手作甜點</h3>
              <p className="text-chillText text-base">每日新鮮現做，搭配咖啡最對味</p>
            </div>
          </div>
        </section>
        {/* 最新活動 / 優惠訊息 */}
        <section className="py-10 px-4 max-w-5xl mx-auto">
          <div className="bg-chillBrown/10 rounded-xl flex flex-col md:flex-row items-center gap-8 p-6 shadow mb-4">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="活動" className="rounded-xl w-40 h-28 object-cover" />
            <div className="flex-1">
              <h3 className="text-2xl font-chill text-chillBrown mb-2">春季新品上市</h3>
              <p className="text-chillText">全新手沖單品豆限量登場！即日起來店享優惠。</p>
            </div>
          </div>
          <div className="bg-chillAccent/20 rounded-xl flex flex-col md:flex-row items-center gap-8 p-6 shadow">
            <img src="https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80" alt="優惠" className="rounded-xl w-40 h-28 object-cover" />
            <div className="flex-1">
              <h3 className="text-2xl font-chill text-chillBrown mb-2">母親節活動</h3>
              <p className="text-chillText">來店消費享限定甜點優惠，數量有限，敬請把握！</p>
            </div>
          </div>
        </section>
        {/* 分店資訊 */}
        <section className="py-12 bg-chillBg">
          <h2 className="text-3xl text-center mb-8 font-chill text-chillBrown">分店資訊</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card items-start">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="台北信義店" className="rounded-xl w-full h-32 object-cover mb-2" />
              <h3 className="text-xl mb-1">台北信義店</h3>
              <div className="text-chillText text-base mb-1">台北市信義區松壽路 11 號</div>
              <div className="text-chillText/70 text-sm mb-1">08:00-20:00</div>
              <a href="https://www.google.com/maps?q=25.034153,121.564537" target="_blank" rel="noopener noreferrer" className="text-chillAccent underline">地圖</a>
            </div>
            <div className="card items-start">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="台中公益店" className="rounded-xl w-full h-32 object-cover mb-2" />
              <h3 className="text-xl mb-1">台中公益店</h3>
              <div className="text-chillText text-base mb-1">台中市南屯區公益路二段 51 號</div>
              <div className="text-chillText/70 text-sm mb-1">09:00-21:00</div>
              <a href="https://www.google.com/maps?q=24.150415,120.648621" target="_blank" rel="noopener noreferrer" className="text-chillAccent underline">地圖</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
