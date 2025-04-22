/**
 * Contact - 聯絡我們區塊
 * @returns {JSX.Element}
 */
export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="text-3xl mb-4">聯絡我們</h2>
      <p className="mb-6 text-chillText text-lg">歡迎合作、訂位或任何問題，請填寫下方表單或來信！</p>
      <form className="w-full max-w-md flex flex-col gap-4">
        <input type="text" placeholder="您的姓名" className="p-3 rounded-lg border border-chillAccent focus:outline-none focus:ring-2 focus:ring-chillAccent" />
        <input type="email" placeholder="您的信箱" className="p-3 rounded-lg border border-chillAccent focus:outline-none focus:ring-2 focus:ring-chillAccent" />
        <textarea placeholder="訊息內容" rows={4} className="p-3 rounded-lg border border-chillAccent focus:outline-none focus:ring-2 focus:ring-chillAccent" />
        <button type="submit" className="bg-chillBrown text-white py-3 rounded-full font-chill text-lg hover:bg-chillAccent transition">送出</button>
      </form>
      <div className="mt-8 text-chillText/70 text-sm">圖片來源：Unsplash</div>
    </section>
  )
}
