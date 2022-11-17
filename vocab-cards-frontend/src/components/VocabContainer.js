import {useNavigate} from 'react-router-dom';

const VocabContainer = (props) =>{
    console.log(props)
    console.log(props.vocabs)
    const navigate = useNavigate()
    return(
        <>
        <h1>Vocab list</h1>
        <table>
        <tbody>
          <tr>
            <th>Category Name</th>
            <th>Set</th>
          
            
          </tr>
            { props.vocabs.map((vocab, i) => {
                return (
                  <tr key={vocab.id}>
                    <td>
                    { vocab.category }
                    </td>
                    <td>
                     { vocab.set }
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
export default VocabContainer