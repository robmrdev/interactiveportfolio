import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from '../Hero/Hero';
const RoutesComponent = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' Component={Hero}/>
        </Routes>
    </Router>
  )
}

export default RoutesComponent