/**
 * ImageCarousel - 簡易圖片輪播（左右切換）
 * @param {Object} props
 * @param {string[]} props.images
 */
import { useState } from 'react'

export default function ImageCarousel({ images = [] }) {
  const [idx, setIdx] = useState(0)
  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full max-w-xl h-56 mb-2">
        <img src={images[idx]} alt={`slide-${idx}`} className="rounded-xl object-cover w-full h-full transition-all duration-500" />
        <button onClick={() => setIdx((idx - 1 + images.length) % images.length)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full px-2 py-1 shadow hover:bg-chillAccent">&#8592;</button>
        <button onClick={() => setIdx((idx + 1) % images.length)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full px-2 py-1 shadow hover:bg-chillAccent">&#8594;</button>
      </div>
      <div className="flex gap-2">
        {images.map((_, i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${i === idx ? 'bg-chillBrown' : 'bg-chillAccent/30'}`}></span>
        ))}
      </div>
    </div>
  )
}
