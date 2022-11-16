import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import VocabContainer from './components/VocabContainer';
import LoginUser from './components/LoginUser'
import RegisterUser from './components/RegisterUser'

let baseUrl = 'http://localhost:8000/api/v1'


function App() {
  const [vocabs, setVocabs]= useState([])
  const navigate = useNavigate()
  
  const getVocabs = () =>{
    fetch(baseUrl + '/vocab', {
      credentials: "include"
    })
    .then(res => {
      if(res.status === 200){
        return res.json()
      } else {
        return []
      }
    }).then(data => {
      console.log(data.data)
      setVocabs(data.data)
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
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })
      console.log(response)
      console.log('BODY:', response.body)
      if(response.status === 200) {
        getVocabs()
        navigate('vocabs')
      }
    }
    catch (err) {
      console.log('Error:', err)
    }
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
      if(response.status === 201) {
        console.log('register successfully')
        getVocabs()
        navigate('login')
      }
    }
    catch (err) {
      console.log('Error:', err)
    }
  }



  useEffect(()=>{
    getVocabs()
  }, [])

  return (
    <Routes>
      <Route path='/vocabs' element={<VocabContainer vocabs={vocabs} />} />
      <Route path='/login' element={<LoginUser loginUser={loginUser} />} />
      <Route path='/register' element={<RegisterUser register={register} />} />
    </Routes>
    
  );
}

export default App;
