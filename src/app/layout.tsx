import { Footer } from "./components/Footer"
import { Header } from "./components/Hearder"
import {  aboutdata, pages } from '../app/components/data/data'
import "./components/global.css";

export const metadata = {
  title: 'GPT',
  description: 'Geerador de preguntas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header name={aboutdata.name} pages={pages} />
        {children}
        <Footer />
      </body>
    </html>
  )
}