import SectionTitle from '../components/sectionTitle'
import ContactForm from '../components/contactForm'
import Navbar from '../components/navbar'

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="py-16 px-4 max-w-2xl mx-auto">
        <div className="my-16">
          <SectionTitle title="聯絡我們" subtitle="Contact" />
        </div>
        <ContactForm />
      </div>
    </>
  )
}
