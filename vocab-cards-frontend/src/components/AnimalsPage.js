import React, {useState} from 'react';
const AnimalsPage = (props) =>{
    console.log(props)
    console.log(typeof(props.vocabs[0].english_to_chinese))
    
    
    let animalVocabs = []
    for ( let i = 0; i <props.vocabs.length; i++) { 
      if(props.vocabs[i].category === 'animal'){
          animalVocabs.push(props.vocabs[i])
      }
    }
   
   
     console.log(animalVocabs)
 
    
      animalVocabs.map((vocab, i) => {
        if(vocab.languageMode === 1){
          return (
            <div key={vocab.id}>
              <div>REMEMBER?</div>                               
              <div>          
              {vocab.english}
              </div>
              <button onClick={()=>vocab.english_to_chinese===0}>Click Me to See the Answer</button>                                             
            </div>
          )
        }     
     else {
      return(     
     
            <div key={vocab.id}>
                                     
              <div> 
              {vocab.vocab_chinese}
              </div>
                                                  
            </div>
          )
    }
  })
}

        
    
          

export default AnimalsPage;