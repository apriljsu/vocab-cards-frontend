import React, {useState} from 'react';
import { Navigate } from 'react-router-dom';


let baseUrl = 'http://localhost:8000/api/v1'

const NewVocabForm = () =>{
    const [vocabChinese, setChinese] = useState('')
    const [vocabEnglish, setEnglish] = useState('')
    const [category, setCategory] = useState('')
    const [set, setSet] = useState('')
   

    const handleChineseChange = (e) =>{
        console.log(e.target.value)
        setChinese(e.target.value)
    }
    const handleEnglishChange = (e) =>{
        setEnglish(e.target.value)
    }
    const handleCategoryChange = (e) =>{
        setCategory(e.target.value)
    }
    const handleSetChange = (e) =>{
        setSet(e.target.value)
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        fetch(baseUrl + '/vocab/', {
                credentials: 'include',
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  vocab_chinese: vocabChinese,
                  vocab_english: vocabEnglish,
                  category: category,
                  set: set
                })
              })
              .then(res => {
                if(res.status === 200) {
                  return res.json()
                } else {
                  return []
                }
              })
              .then(resJson =>{
                setChinese('')
                setEnglish('')
                setCategory('')
                setSet('')                              
              })
                     
    }

    return(
       
        <form onSubmit={handleSubmit}>
            <input type = 'text' id='vocabChinese' onChange={handleChineseChange} value={vocabChinese} placeholder='Chinese Vocab'></input>
            <input type = 'text' id='vocabEnglish' onChange={handleEnglishChange} value={vocabEnglish} placeholder='English Vocab'></input>
            <input type = 'text' id='category' onChange={handleCategoryChange} value={category} placeholder='Category'></input>
            <input type = 'number' id='set' onChange={handleSetChange} value={set} placeholder='Set'></input>
            <button type = 'submit' >Add New Vocab Card</button>    
        </form>
    )

}

export default NewVocabForm
