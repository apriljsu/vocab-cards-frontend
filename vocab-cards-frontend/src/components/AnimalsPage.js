import { useEffect, useState, useLayoutEffect} from "react"
let baseUrl = 'http://localhost:8000/api/v1'
const AnimalsPage = (props) =>{
    // console.log(props)
    // console.log(typeof(props.vocabs[0].english_to_chinese))
    // console.log(props.vocabs[0].english_to_chinese)
    const [englishToggle, setEnglishToggle] = useState ('True')
    const [animalVocabs, setAnimalVocabs] = useState([])
    // const [vocabs, setVocabs]= useState([])
    // console.log(props.vocabs)
    // console.log(props.vocabs.length)

    
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
        
        // setVocabs(data.data)
        // console.log(vocabs)
        handleAnimalVocabs(data.data)
      })
      // async function fetchdata() {
      // // await props.getVocabs()
      // await console.log(props.vocabs)
      // await console.log(props.vocabs.length)
      // // await handleAnimalVocabs()      
      // // await console.log('user effect')
      // }
      // fetchdata()
    },[])
        
    
    const handleAnimalVocabs = (vocabs) =>{
      console.log(vocabs)
      console.log('i am in animal kindom')
      let animalArray = []
      for (let i = 0; i <vocabs.length; i++) { 
        console.log(vocabs[i].category)
        if(vocabs[i].category === 'animal'){
          console.log('here')
         animalArray.push(vocabs[i])        
        }
      }
      setAnimalVocabs(animalArray)      
    //  return animalVocabs
    }

    // console.log(props.vocabs)
    // console.log(animalVocabs)
  
 
    return(
      <>
      <h1>VOCAB CARDS</h1>
      {animalVocabs.map((vocab) => {        
        const handleLanguageChange = () =>{
         setEnglishToggle('False')
         vocab.english_to_chinese = englishToggle
        }
        // console.log (vocab.english_to_chinese)
      
       if(vocab.english_to_chinese === true){
        return (
          <div key={vocab.id}>
            <div>REMEMBER?</div>                               
            <div>          
            {vocab.vocab_english}
            </div>
            <button onClick={handleLanguageChange}>Click Me to See the Answer</button>                                             
          </div>
        )
       } else {
        return(
          <div key={vocab.id}>          
            {vocab.vocab_chinese}
            </div>
        )
       }
        
        } )}
      </>
    )
      
}



        
    
          

export default AnimalsPage;