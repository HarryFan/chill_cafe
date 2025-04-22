/**
 * SectionTitle - 區塊標題元件
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.subtitle]
 */
export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-1 text-chillBrown font-chill">{title}</h2>
      {subtitle && <div className="text-chillAccent text-lg font-chill tracking-wide">{subtitle}</div>}
    </div>
  )
}
