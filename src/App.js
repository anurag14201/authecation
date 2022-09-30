
import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { Route, Routes } from 'react-router-dom';
import Home from './Componant/Home/Home';
import Login from './Componant/Login/Login';
import Header from './Componant/Header/Header';
import Register from './Componant/Register/Register';

const auth = getAuth(app)

function App() {
  const provider = new GoogleAuthProvider();
  const handleGoogleSign = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
      </Routes>
      <button onClick={handleGoogleSign}>Google Sign In</button>
    </div>
  );
}

export default App;
