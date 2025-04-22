/**
 * About - 關於 Chill Cafe
 * @returns {JSX.Element}
 */
export default function About() {
  return (
    <section id="about" className="flex flex-col items-center py-16 px-4">
      <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Cafe Story" className="rounded-xl w-60 h-44 object-cover mb-6" />
      <h2 className="text-3xl mb-4">關於 Chill Cafe</h2>
      <p className="max-w-2xl text-lg text-chillText text-center">
        Chill Cafe 是一個以舒適、慵懶為靈魂的咖啡品牌。我們相信，每個人都值得擁有一段屬於自己的慢時光。
        無論是閱讀、工作或與朋友閒聊，這裡都是你放鬆心情的最佳選擇。
      </p>
    </section>
  )
}
