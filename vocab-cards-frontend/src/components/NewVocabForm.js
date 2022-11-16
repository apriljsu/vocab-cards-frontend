import React, {useState} from 'react';

const NewVocabForm = (props) =>{
    const [vocabChinese, setChinese] = useState('')
    const [vocabEnglish, setEnglish] = useState('')
    const [category, setCategory] = useState('')
    const [set, setSet] = useState('')

    const handleChineseChange = (e) =>{
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

    return(
        <form onSubmit={props.newVocab}>
            <input type = 'text' id='vocabChinese' onChange={handleChineseChange} value={vocabChinese} placeholder='Chinese Vocab'></input>
            <input type = 'text' id='vocabEnglish' onChange={handleEnglishChange} value={vocabEnglish} placeholder='English Vocab'></input>
            <input type = 'text' id='category' onChange={handleCategoryChange} value={category} placeholder='Category'></input>
            <input type = 'number' id='set' onChange={handleSetChange} value={set} placeholder='Set'></input>
            <input type = 'submit' value ='Add New Vocab Card'></input>    
        </form>
    )

}

export default NewVocabForm
