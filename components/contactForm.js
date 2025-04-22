/**
 * ContactForm - 聯絡表單 + 社群連結
 */
export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="姓名" className="p-3 rounded-lg border border-chillAccent focus:outline-none focus:ring-2 focus:ring-chillAccent" required />
      <input type="email" placeholder="Email" className="p-3 rounded-lg border border-chillAccent focus:outline-none focus:ring-2 focus:ring-chillAccent" required />
      <textarea placeholder="訊息內容" rows={4} className="p-3 rounded-lg border border-chillAccent focus:outline-none focus:ring-2 focus:ring-chillAccent" required />
      <button type="submit" className="bg-chillBrown text-white py-3 rounded-full font-chill text-lg hover:bg-chillAccent transition">送出</button>
      <div className="flex gap-4 mt-6 justify-center">
        <a href="mailto:hello@chillcafe.com" className="text-chillAccent underline">客服信箱</a>
        <a href="https://line.me/ti/p/~chillcafe" target="_blank" rel="noopener noreferrer" className="text-chillAccent underline">LINE</a>
        <a href="https://instagram.com/chillcafe" target="_blank" rel="noopener noreferrer" className="text-chillAccent underline">Instagram</a>
      </div>
    </form>
  )
}
