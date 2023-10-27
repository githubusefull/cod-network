import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer'
import Content from './components/Routes/Content'
import Ready from './components/Contents/Ready'
import Joinus from './components/Contents/Joinus'
import Selling from './components/Contents/Selling'
function App() {

  return (
    <div className="App">
      <NavBar />
      <Content />
      <Joinus />
      <Selling/>
      <Ready />
      <Footer />
    </div>
  );
}

export default App
