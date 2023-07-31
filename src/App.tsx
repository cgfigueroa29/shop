import './App.css';
import laptop from './assets/laptop.jpg'
import smart from './assets/smart.jpg'
import smartphone from './assets/smartphone.jpg'


export default function App() {
  const p1 = "Laptop"
  const p2 = "Smart TV"
  const p3 = "Smartphone"

  return (
    <>
    <div><h1>Mentoring Store</h1></div>
    <div className="main">
    <h2>Products available</h2>
    <div className="container">
      <div className="products">
        <h3>{ p1 }</h3> 
      </div>
      <div className="products">
        <h3>{ p2 }</h3> 
      </div>
      <div className="products">
        <h3>{ p3 }</h3> 
      </div>
    </div>
    </div>
    
      
    </>
  )
}