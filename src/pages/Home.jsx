import Article from "../components/articles/Article"
import Hero from "../components/hero/Hero"
import Section from "../components/section/Section"
import Footer from "../layout/footer/Footer"
import Header from "../layout/header/Header"


const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Section />
      <Article />
      <Footer />
    </>
  )
}

export default Home