import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

let baseUrl = ''
if(process.env.NODE_ENV === 'development'){
  baseUrl = 'http://localhost:8000/api/v1'
}else {
  baseUrl = process.env.REACT_APP_BACKEND_URL
}

const UpdateCard = (props) =>{
    const [vocab, setVocab] = useState({}) 
    let {id} = useParams()
    
    const getVocabById = (id) =>{
        fetch(baseUrl + `/vocab/${id}`, {
           
            headers: {
                'Content-Type': 'application/json'
              }
        })
        .then((res) => {
            if (res.status === 200) {
              return res.json();
            } else {
              return [];
            }
          })
          .then((data) => {
            console.log("this is the data: ", data.data);
            setVocab(data.data);
            console.log(vocab)
          })
    }

    useEffect (()=>{
        getVocabById(id)
       
    }, [])

    const handleChange = (e) =>{                
        setVocab((prev) => ({...vocab, [e.target.name]: e.target.value}))
    }
        
    const handleSubmit = (e) =>{
        e.preventDefault()
        props.updateVocab(vocab)
    }

    return (
        <>         
            <form className='mb-3' id='updateVocab' onSubmit={handleSubmit}>
                <label htmlFor="vocab_chinese">Chinese Vocab</label>
                <input className='form-control updateVocabInput' id="vocab_chinese" type="text" name="vocab_chinese" value={vocab.vocab_chinese} onChange={handleChange} />
                <label htmlFor='vocab_english'>English Vocab</label>
                <input className='form-control updateVocabInput' id="vocab_english" type="text" name="vocab_english" value={vocab.vocab_english} onChange={handleChange} />
                <input className='form-control updateVocabSubmit' type="submit" value="Update Your Vocab Card" />
            </form>
        </>

    )  
    

}

export default UpdateCard;
