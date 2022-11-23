import React, { useEffect, useState} from "react"
let baseUrl = ''
if(process.env.NODE_ENV === 'development'){
  baseUrl = 'http://localhost:8000/api/v1'
}else {
  baseUrl = process.env.REACT_APP_BACKEND_URL
}
const GreetingPage = () =>{
    const [yesCounter,setYesCounter] = useState(0)
    const [noCounter,setNoCounter] = useState(0)    
    const [englishToggle, setEnglishToggle] = useState(true)
    const [greetingVocabs, setGreetingVocabs] = useState([])

    
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
        
        
        handleGreetingVocabs(data.data)
      })
      
    },[])
        
    const handleGreetingVocabs = (vocabs) =>{
      // console.log(vocabs)
      // console.log('i am in Greeting kindom')
      let greetingArray = []
      for (let i = 0; i <vocabs.length; i++) {      
        if(vocabs[i].category === 'greeting'){
          // console.log('here')
         greetingArray.push(vocabs[i])        
        }
      }
      setGreetingVocabs(greetingArray)      
  
    }    
    // console.log(GreetingVocabs)   

    const startOver = () => {
      setYesCounter(0)
      setNoCounter(0)
      setEnglishToggle(true)
    }
    return(
      <div>
          <div id='vocabsContainer'>
          {greetingVocabs.map((vocab) => {   
          if(englishToggle === true){
            return (
              <div key={vocab.id} className='vocabCard'>
                <div>REMEMBER?</div>                               
                <div class='word'>          
                {vocab.vocab_english}
                </div>            
                <button class='cardButton' onClick={() => setYesCounter(yesCounter+1)}>Yes</button>
                <button class='cardButton' onClick={() => setNoCounter(noCounter+1)}>No</button>                                                          
              </div>
            )
          } else {
            return (
              <div key={vocab.id} className='vocabCard'>                                            
                <div class='word'>          
                {vocab.vocab_english}
                </div>
                <div class='word'>          
                {vocab.vocab_chinese}
                </div>              
                                                                                    
              </div>
            )
          }        
          }         
          )}
      </div>
      <div id='vocabsContainerBottom'>
        <button class='cardButton' onClick={() => setEnglishToggle(false)}>Click Me to See the All Answers</button>
        <button class='cardButton' onClick={startOver}>Start Over</button>
        <div class='result'>Number of Words Remembered : {yesCounter}</div>
        <div class='result'>Number of Words Not Remembered : {noCounter}</div>
      </div>
    </div> 
  )      
}

export default GreetingPage;