import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import AnimalsPage from './components/AnimalsPage';
import WeatherPage from './components/WeatherPage';
import GreetingPage from './components/GreetingPage';
import TransportPage from './components/TransportPage';
import YourOwnPage from './components/YourOwnPage';
import LoginUser from './components/LoginUser';
import RegisterUser from './components/RegisterUser';
import NewVocabForm from './components/NewVocabForm';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';

let baseUrl = ''
if(process.env.NODE_ENV === 'development'){
  baseUrl = 'http://localhost:8000/api/v1'
}else {
  baseUrl = process.env.REACT_APP_BACKEND_URL
}


function App() {
  const [vocabs, setVocabs]= useState([])
  const navigate = useNavigate()
  const [user, setUser] = useState()
  const [userActive,setUserActive] = useState(false)
  
  const getVocabs = () =>{
    fetch(baseUrl + '/vocab/', {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      // console.log('hit vocab')
      if(res.status === 200){
        return res.json()
      } else {
        return []
      }
    }).then(data => {
      
      setVocabs(data.data)
      console.log(data.data)
      
    })
  }

  const loginUser = async(e) => {
    console.log('loginuser')
    console.log(e.target.email.value)
    e.preventDefault()
    const url = baseUrl + '/user/login'
    const loginBody = {
      password: e.target.password.value,
      email: e.target.email.value
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(loginBody),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
        })
      console.log(response)
      console.log('BODY:', response.body)
      if(response.status === 200) {
        setUser(e.target.email.value)
        setUserActive(true)
        getVocabs()
        navigate('main')
      }
    }
    catch (err) {
      console.log('Error:', err)
    }
  }

  const logout = () => {
    console.log('successfully logged out')
    localStorage.clear()
    fetch(baseUrl + "/user/logout")
    setUser(null);
    setUserActive(false)
    navigate("/")
}

  const register = async(e) => {
    console.log('loginuser')
    console.log(e.target.email.value)
    e.preventDefault()
    const url = baseUrl + '/user/register'
    const registerBody = {
      first_name: e.target.firstName.value,
      last_name: e.target.lastName.value,
      password: e.target.password.value,
      email: e.target.email.value
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(registerBody),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
      console.log('BODY:', response.body)
      console.log(response.status)
      if(response.status === 200) {
        console.log('register successfully')
        getVocabs()
        navigate('login')
      }
    }
    catch (err) {
      console.log('Error:', err)
    }
  }

  
  // useEffect(()=>{
  //   getVocabs()
  //   console.log(vocabs)
  // },[])

  return (
  <>
    <NavBar logout={logout} userActive={userActive} user={user}/>
    <Routes>
      <Route path='/animals' element={<AnimalsPage />} />
      <Route path='/weather' element={<WeatherPage />} />
      <Route path='/greeting' element={<GreetingPage />} />
      <Route path='/transport' element={<TransportPage />} />
      <Route path='/yourown' element={<YourOwnPage user={user}/>} />
      <Route path='/main' element={<MainPage user={user}/>} />
      <Route path='/login' element={<LoginUser loginUser={loginUser} />} />
      <Route path='/register' element={<RegisterUser register={register} />} />
      <Route path='/new' element={<NewVocabForm getVocabs={getVocabs} user={user}/>} />
      <Route path='/' element={<HomePage />} />

    </Routes>
  </>
  );
}

export default App;
