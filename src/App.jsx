import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

export default function App() {
  const cardData = data.map((item) => {
    return <Card 
      img={item.coverImg} 
      rating={item.stats.rating} 
      reviewCount={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
    />
  })
  
  return (
    <div className='app-container'>
      <Navbar />
      <Hero />
        <section className='card-container'>
          {cardData}
        </section>
    </div>
  )
}
