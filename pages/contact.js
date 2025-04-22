import SectionTitle from '../components/sectionTitle'
import ContactForm from '../components/contactForm'

export default function Contact() {
  return (
    <div className="py-16 px-4 max-w-2xl mx-auto">
      <SectionTitle title="聯絡我們" subtitle="Contact" />
      <ContactForm />
    </div>
  )
}
