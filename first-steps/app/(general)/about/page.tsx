import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Description',
    keywords: ['About 1','About 2','About 3']
};

const AboutPage = () => {
  return (
    <main className="flex flex-col items-center p-24">
    <span>AboutPage</span>
    </main>
  )
}

export default AboutPage