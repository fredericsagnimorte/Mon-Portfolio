import Header from "./elements/Header"
import Hero from "./elements/Hero"
import Projets from "./elements/Projets"
import Contact from "./elements/Contact"
import Footer from  "./elements/Footer"

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projets />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
