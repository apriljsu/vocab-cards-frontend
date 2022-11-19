const AnimalsPage = (props) =>{
    console.log(props)
    console.log(props.vocabs)
    let animalVocabs = []
    for ( let i = 0; i <props.vocabs.length; i++) { 
      if(props.vocabs[i].category === 'animal'){
          animalVocabs.push(props.vocabs[i])
      }
    }
    console.log(animalVocabs)
    
    return(
        <>
        <h1>Vocab list</h1>
        <table>
        <tbody>
          <tr>
            <th>中文</th>
            <th>English</th>
          
            
          </tr>
            { animalVocabs.map((vocab, i) => {
                return (
                  <tr key={vocab.id}>
                    <td>
                    { vocab.vocab_chinese }
                    </td>
                    <td>
                     { vocab.vocab_english }
                    </td>
                    <td>
                     { vocab.category }
                    </td>                   
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        </>
    )
}
export default AnimalsPage;