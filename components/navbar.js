/**
 * Navbar - Chill Cafe 導覽列
 * @returns {JSX.Element}
 */
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="flex items-center gap-3">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=48&h=48&q=80" alt="Chill Cafe Logo" className="rounded-full w-12 h-12 object-cover" />
        <span className="text-2xl font-chill tracking-wide">Chill Cafe</span>
      </div>
      <div className="flex gap-8 text-lg">
        <a href="/">首頁</a>
        <a href="/about">品牌故事</a>
        <a href="/menu">菜單</a>
        <a href="/stores">門市據點</a>
        <a href="/news">最新消息</a>
        <a href="/contact">聯絡</a>
      </div>
    </nav>
  )
}
