import React, { useEffect, useState} from "react"
let baseUrl = ''
if(process.env.NODE_ENV === 'development'){
  baseUrl = 'http://localhost:8000/api/v1'
}else {
  baseUrl = process.env.REACT_APP_BACKEND_URL
}
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
      <div>
        <div id='vocabsContainer'>
          {animalVocabs.map((vocab) => {   
            if(englishToggle === true){
              return (
                <div key={vocab.id} className='vocabCard'>
                  <div>REMEMBER?</div>                               
                  <div className='word'>          
                  {vocab.vocab_english}
                  </div><br />            
                  <button className='cardButton' onClick={() => setYesCounter(yesCounter+1)}>Yes</button>
                  <button className='cardButton' onClick={() => setNoCounter(noCounter+1)}>No</button>                                                          
                </div>
              )
            } else {
              return (
                <div key={vocab.id} className='vocabCard'>                                            
                  <div className='word'>          
                  {vocab.vocab_english}
                  </div>
                  <div className='word'>          
                  {vocab.vocab_chinese}
                  </div>             
                                                                                        
                </div>
              )
            }
            
          }         
          )}
      </div>
      <div id='vocabsContainerBottom'>
        <button className='cardButton' onClick={() => setEnglishToggle(false)}>Click Me to See the All Answers</button>
        <button className='cardButton' onClick={startOver}>Start Over</button>
        <div className='result'>Number of Words Remembered : {yesCounter}</div>
        <div className='result'>Number of Words Not Remembered : {noCounter}</div>
      </div>
    </div> 
  )      
}

export default AnimalsPage;