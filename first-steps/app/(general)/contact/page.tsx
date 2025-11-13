import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title Contact',
    description: 'SEO Contact Description',
    keywords: ['Contact 1','Contact 2','Contact 3']
};

const ContactPage = () => {
  return (
    <main className="flex flex-col items-center p-24">ContactPage</main>
  )
}

export default ContactPage