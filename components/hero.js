/**
 * Hero Section - Chill Cafe 首頁大圖區
 * @returns {JSX.Element}
 */
export default function Hero() {
  return (
    <section className="hero">
      <img
        src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80"
        alt="Chill Cafe Interior"
        className="rounded-3xl shadow-lg max-w-2xl w-full object-cover mb-8"
        style={{maxHeight:'360px'}}
      />
      <h1 className="text-5xl md:text-6xl mb-4">享受一杯慢時光</h1>
      <p className="text-xl md:text-2xl text-chillBrown mb-8 max-w-xl mx-auto">
        在Chill Cafe，讓慵懶的午後與咖啡香氣陪伴你，享受片刻的舒適與自在。
      </p>
      <a href="#menu" className="bg-chillBrown text-white px-8 py-3 rounded-full text-lg shadow hover:bg-chillAccent transition font-chill">探索菜單</a>
    </section>
  )
}
