import React, { useEffect, useState} from "react"
let baseUrl = 'http://localhost:8000/api/v1'
const AnimalsPage = () =>{
    const [yesCounter,setYesCounter] = useState(0)
    const [noCounter,setNoCounter] = useState(0)    
    const [englishToggle, setEnglishToggle] = useState(true)
    const [animalVocabs, setAnimalVocabs] = useState([])

    
    useEffect(()=>{
      // console.log(props.vocabs)
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
        
        
        handleAnimalVocabs(data.data)
      })
      
    },[])
        
    const handleAnimalVocabs = (vocabs) =>{
      // console.log(vocabs)
      // console.log('i am in animal kindom')
      let animalArray = []
      for (let i = 0; i <vocabs.length; i++) {      
        if(vocabs[i].category === 'animal'){
          // console.log('here')
         animalArray.push(vocabs[i])        
        }
      }
      setAnimalVocabs(animalArray)      
  
    }    
    // console.log(animalVocabs)   

    const startOver = () => {
      setYesCounter(0)
      setNoCounter(0)
      setEnglishToggle(true)
    }
    return(
      <>
      <h1>VOCAB CARDS</h1>
      {animalVocabs.map((vocab) => {   
        if(englishToggle === true){
          return (
            <div key={vocab.id}>
              <div>REMEMBER?</div>                               
              <div>          
              {vocab.vocab_english}
              </div>            
              <button onClick={() => setYesCounter(yesCounter+1)}>Yes</button>
              <button onClick={() => setNoCounter(noCounter+1)}>No</button>                                                          
            </div>
          )
        } else {
          return (
            <div key={vocab.id}>
              <div>REMEMBER?</div>                               
              <div>          
              {vocab.vocab_english}
              </div>
              <div>          
              {vocab.vocab_chinese}
              </div>              
              <button onClick={() => setYesCounter(yesCounter+1)}>Yes</button>
              <button onClick={() => setNoCounter(noCounter+1)}>No</button>                                                                       
            </div>
          )
        }
        
      }         
    )}
    <button onClick={() => setEnglishToggle(false)}>Click Me to See the All Answers</button>
    <button onClick={startOver}>Start Over</button>
    <div>Number of Words Remembered : {yesCounter}</div>
    <div>Number of Words Not Remembered : {noCounter}</div>
    </> 
  )      
}

export default AnimalsPage;