import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import {Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import AnimalsPage from './components/AnimalsPage';
import LoginUser from './components/LoginUser';
import RegisterUser from './components/RegisterUser';
import NewVocabForm from './components/NewVocabForm';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';

let baseUrl = 'http://localhost:8000/api/v1'


function App() {
  const [vocabs, setVocabs]= useState([])
  const navigate = useNavigate()
  
  const getVocabs = () =>{
    fetch(baseUrl + '/vocab/', {
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      console.log('hit vocab')
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
        navigate('main')
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

  const deleteVocab = async(id) =>{
    console.log('hit delete vocab')
    fetch(baseUrl + `/vocab/${id}`, {
      credentials: 'include',
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return []
      }
    })
    .then (data =>{
      getVocabs()
    })
  }

  return (
  <>
    <NavBar />
    <Routes>
      <Route path='/animals' element={<AnimalsPage vocabs={vocabs} />} />
      <Route path='/main' element={<MainPage />} />
      <Route path='/login' element={<LoginUser loginUser={loginUser} />} />
      <Route path='/register' element={<RegisterUser register={register} />} />
      <Route path='/new' element={<NewVocabForm />} />
      <Route path='/' element={<HomePage />} />

    </Routes>
  </>
  );
}

export default App;
