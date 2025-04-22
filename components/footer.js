/**
 * Footer - 頁尾，社群、訂閱、聯絡資訊
 */
export default function Footer() {
  return (
    <footer className="bg-chillBrown/10 py-10 px-4 mt-16 text-chillText text-center">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 max-w-5xl mx-auto">
        <div>
          <div className="font-chill text-xl mb-2">Chill Cafe</div>
          <div className="text-chillText/70 text-sm mb-2">台北市信義區松壽路 11 號</div>
          <div className="text-chillText/70 text-sm">客服信箱：hello@chillcafe.com</div>
        </div>
        <div className="flex gap-6 text-chillAccent text-lg mt-4 md:mt-0">
          <a href="https://instagram.com/chillcafe" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://line.me/ti/p/~chillcafe" target="_blank" rel="noopener noreferrer">LINE</a>
        </div>
        <form className="flex gap-2 mt-4 md:mt-0" onSubmit={e=>e.preventDefault()}>
          <input type="email" placeholder="訂閱電子報 Email" className="p-2 rounded-l-lg border border-chillAccent focus:outline-none" required />
          <button type="submit" className="bg-chillAccent text-chillBrown px-4 py-2 rounded-r-lg font-chill">訂閱</button>
        </form>
      </div>
      <div className="text-chillText/40 text-xs mt-6">© 2025 Chill Cafe. 圖片來源 Unsplash | Designed by Cascade AI</div>
    </footer>
  )
}
