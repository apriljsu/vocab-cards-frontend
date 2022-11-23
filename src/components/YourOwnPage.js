import React, { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"

let baseUrl = ''
if(process.env.NODE_ENV === 'development'){
  baseUrl = 'http://localhost:8000/api/v1'
}else {
  baseUrl = process.env.REACT_APP_BACKEND_URL
}
const YourOwnPage = (props) =>{
    const [yesCounter,setYesCounter] = useState(0)
    const [noCounter,setNoCounter] = useState(0)    
    const [englishToggle, setEnglishToggle] = useState(true)
    const [yourOwnVocabs, setYourOwnVocabs] = useState([])

    const navigate = useNavigate()
    
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
        handleYourOwnVocabs(data.data)
      })
      
    },[])
        
    const handleYourOwnVocabs = (vocabs) =>{
      // console.log(vocabs)
      // console.log('i am in YourOwn kindom')
      let yourOwnArray = []
      for (let i = 0; i <vocabs.length; i++) {      
        if(vocabs[i].category === 'yourown'){
          // console.log('here')
         yourOwnArray.push(vocabs[i])        
        }
      }
            
      setYourOwnVocabs(yourOwnArray)
    }    
    // console.log(YourOwnVocabs) 
    const deleteVocab = async(id) =>{
        // console.log(props.user)
        // console.log('hit delete vocab')
        // console.log(baseUrl + `/vocab/${id}`)
        fetch(baseUrl + `/vocab/${id}`, {
          credentials: 'include',
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
          console.log('hit delete 2')
          const copyYourOwnArray =[...yourOwnVocabs]
            const findIndex = yourOwnVocabs.findIndex(yourOwnVocabs => yourOwnVocabs.id === id)
            copyYourOwnArray.splice(findIndex,1)
            setYourOwnVocabs(copyYourOwnArray)
          // if(res.status === 200) {
          //   return res.json()
            
          // } else {
          //   return []
          // }
          
        })                     
      }
    
    
    const startOver = () => {
      setYesCounter(0)
      setNoCounter(0)
      setEnglishToggle(true)
    }
    return(
    <div>
        <div id='vocabsContainer'>
           {yourOwnVocabs.map((vocab) => {   
              if(englishToggle === true){
                return (
                <div key={vocab.id} className='vocabCard'>
                  <div>REMEMBER?</div>                               
                  <div class='word'>          
                  {vocab.vocab_english}
                  </div>            
                  <button class='cardButton' onClick={() => setYesCounter(yesCounter+1)}>Yes</button>
                  <button class='cardButton' onClick={() => setNoCounter(noCounter+1)}>No</button>
                  <button class='cardButton' onClick={()=>deleteVocab(vocab.id)}>Delete</button> 
                  <button class='cardButton' onClick={()=> navigate(`/vocabs/${vocab.id}`)}>Update</button> 
                  </div>
                  )
              } else {
                return (
                  <div key={vocab.id}>
                                                
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

export default YourOwnPage;