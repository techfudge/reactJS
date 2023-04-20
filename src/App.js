// import './app.css'
// import {Routes,Route} from 'react-router'  
// import Home from './pages/home/Home'
// import Contact from './pages/Contact/Contact'
// import About from './pages/about/About'
// import Header from './components/header/Header'
import Greetings from './pages/greetings/Greetings'


function App() {
  return (
  
    <div>
      {/* <Header />
      <div className='App'>
      {/* <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes> */} 
      {/* <Greetings name="maria" />
      <Greetings name="etuk" />
      <Greetings name="afolabi" />
      <Greetings name="taiwo" />
     */}
     <Greetings/>
      </div>
    

  );
}

export default App;
