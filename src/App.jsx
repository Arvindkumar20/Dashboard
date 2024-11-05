import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <>
      <div className='app'>
        {/* <Sidebar/> */}
        {/* <Navbar/> */}
        {/* <Sidebar /> */}
        <Sidebar/>
      <Header/>
      <Home></Home>
      <Footer/>
      </div>
    </>
  )
}

export default App