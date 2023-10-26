import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer'
import Content from './components/Routes/Content'
import Ready from './components/Contents/Ready'
function App() {

  return (
    <div className="App">
      <NavBar /> 
        <Content />
        <Ready/>
      <Footer />
    </div>
  );
}

export default App
