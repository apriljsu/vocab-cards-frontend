import React, { useEffect, useState} from "react"
let baseUrl = 'http://localhost:8000/api/v1'
const WeatherPage = () =>{
    const [yesCounter,setYesCounter] = useState(0)
    const [noCounter,setNoCounter] = useState(0)    
    const [englishToggle, setEnglishToggle] = useState(true)
    const [weatherVocabs, setWeatherVocabs] = useState([])

    
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
        
        
        handleWeatherVocabs(data.data)
      })
      
    },[])
        
    const handleWeatherVocabs = (vocabs) =>{
      // console.log(vocabs)
      // console.log('i am in weather kindom')
      let weatherArray = []
      for (let i = 0; i <vocabs.length; i++) {      
        if(vocabs[i].category === 'weather'){
          // console.log('here')
         weatherArray.push(vocabs[i])        
        }
      }
      setWeatherVocabs(weatherArray)      
  
    }    
    // console.log(weatherVocabs)   

    const startOver = () => {
      setYesCounter(0)
      setNoCounter(0)
      setEnglishToggle(true)
    }
    return(
      <>
      <h1>VOCAB CARDS</h1>
      {weatherVocabs.map((vocab) => {   
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

export default WeatherPage;