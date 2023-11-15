import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Main/Home';
import LogIn from './Main/LogIn';
import SignUp from './Main/SignUp';
import Mypage from './Main/MyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/MyPage" element={<Mypage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
