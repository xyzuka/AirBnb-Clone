import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

export default function App() {
  const cardData = data.map((item) => {
    return <Card 
      key={item.id}
      items={item}
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
