import {useNavigate} from 'react-router-dom';

const VocabContainer = (props) =>{
    console.log(props.vocabs)
    const navigate = useNavigate()
    return(
        <h1>Vocab list</h1>
    )
}
export default VocabContainer