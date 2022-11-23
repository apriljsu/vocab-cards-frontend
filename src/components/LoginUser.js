export default function LoginUser(props) {
    return(
        <form id='loginform' onSubmit={props.loginUser} className='mb-3'>           
            <label htmlFor="name">Email:</label>
            <input className='form-control' type='text' id='email' name='email'/>
            <label htmlFor="name">Password:</label>
            <input className='form-control' type='password'  id='password' name='password'/><br />
            <input className='form-control' type='submit' value='login'/>
        </form>
    )
}