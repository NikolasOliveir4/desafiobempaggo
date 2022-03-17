
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home/Home";
import Form from './Pages/Form/Form'
import Footer from './Components/layouts/Footer';
import Navbar from './Components/layouts/Navbar';
import Container from './Components/layouts/Container';

function App() {
  return (
   <div>
    
     <Router>
       <Navbar />
       <Container customClass='min-height'>
       <Routes>
         <Route exact path ='/' element={<Home />} />
         <Route path= '/form' element ={<Form />} />
       </Routes>
       </Container>
       <Footer/>
     </Router>
    
   </div>
  )
}

export default App;