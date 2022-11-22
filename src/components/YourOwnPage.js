import React, { useEffect, useState} from "react"
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
        console.log(props.user)
        console.log('hit delete vocab')
        console.log(baseUrl + `/vocab/${id}`)
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
        // window.location.reload()
       
      }
    
    
    const startOver = () => {
      setYesCounter(0)
      setNoCounter(0)
      setEnglishToggle(true)
    }
    return(
      <>
     
      {yourOwnVocabs.map((vocab) => {   
        if(englishToggle === true){
          return (
            <div key={vocab.id}>
              <div>REMEMBER?</div>                               
              <div>          
              {vocab.vocab_english}
              </div>            
              <button onClick={() => setYesCounter(yesCounter+1)}>Yes</button>
              <button onClick={() => setNoCounter(noCounter+1)}>No</button>
              <button onClick={()=>deleteVocab(vocab.id)}>Delete</button> 

            </div>
          )
        } else {
          return (
            <div key={vocab.id}>
                                           
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

export default YourOwnPage;