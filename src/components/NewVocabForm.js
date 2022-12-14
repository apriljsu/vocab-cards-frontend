import React, {useState} from 'react';



let baseUrl = ''
if(process.env.NODE_ENV === 'development'){
  baseUrl = 'http://localhost:8000/api/v1'
}else {
  baseUrl = process.env.REACT_APP_BACKEND_URL
}

const NewVocabForm = (props) =>{
    const [vocabChinese, setChinese] = useState('')
    const [vocabEnglish, setEnglish] = useState('')
    const [category, setCategory] = useState('yourown')
    const [english_to_chinese, setEnglishToChinese] = useState('True')
   

    const handleChineseChange = (e) =>{                
        setChinese(e.target.value)
    }
    const handleEnglishChange = (e) =>{
        setEnglish(e.target.value)
    }
    const handleCategoryChange = (e) =>{
        setCategory(e.target.value)        
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
                  english_to_chinese: english_to_chinese
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
                props.getVocabs()
                                           
              })
            
      alert('You have successfully added a new card!')         
    }

    if(props.user === 'admin@email.com') {
      return(       
        <form className='mb-3' id='newCard' onSubmit={handleSubmit}>
            <input className='form-control newCardFormInput' type = 'text' id='vocabChinese' onChange={handleChineseChange} value={vocabChinese} placeholder='Chinese Vocab'></input>
            <input className='form-control newCardFormInput' type = 'text' id='vocabEnglish' onChange={handleEnglishChange} value={vocabEnglish} placeholder='English Vocab'></input><br />            
            <input className='form-control newCardFormInput' type = 'text' id='category' onChange={handleCategoryChange} placeholder='Category'></input>             

            <button type = 'submit' className='form-control newCardSubmit' >Add New Vocab Card</button>    
        </form>
       
    )
    }else {
      return(
       
        <form className='mb-3' id='newCard' onSubmit={handleSubmit}>
            <input className='form-control newCardInput' type = 'text' id='vocabChinese' onChange={handleChineseChange} value={vocabChinese} placeholder='Chinese Vocab'></input>
            <input className='form-control newCardInput' type = 'text' id='vocabEnglish' onChange={handleEnglishChange} value={vocabEnglish} placeholder='English Vocab'></input>
            <button className='form-control newCardSubmit' type = 'submit' >Add New Vocab Card</button>    
        </form>
    )
    }
    

}

export default NewVocabForm
