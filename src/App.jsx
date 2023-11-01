import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Content from './components/Routes/Content'
import Ready from './components/Contents/Ready'
import Joinus from './components/Contents/Joinus'
//import Selling from './components/Contents/Selling'
import OurServices from './components/Contents/OurServices'
//import OurservicesCard from './components/Contents/OurservicesCard'
//import HowitWorks from './components/Contents/HowitWorks'
import OurLocation from './components/Contents/OurLocation'
//import Founders from './components/Contents/Founders'
import OurPartners from './components/Contents/OurPartners'
//import AsSoonAs from './components/Contents/AsSoonAs'
import Kk from './components/Contents/Kk'
import OurServices2 from './components/Contents/Ourservices2'
function App() {

  return (
    <div className="App">
      <NavBar />
      <Content />
      <Joinus />
      <OurServices/>
      <OurLocation/>
      <OurServices2/>
      <OurPartners/>
      {/*   
      <Founders/>
      <AsSoonAs/>*/}
      <Kk/>
      <Ready />
      <Footer />
    </div>
  );
}

export default App
