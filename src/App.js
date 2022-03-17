
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home/Home";
import Form from './Pages/Form/Form'

function App() {
  return (
   <div>
    
     <Router>
       <Routes>
         <Route exact path ='/' element={<Home />} />
         <Route path= '/form' element ={<Form />} />
       </Routes>
     </Router>
    
   </div>
  )
}

export default App;