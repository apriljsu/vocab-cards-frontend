export default function RegisterUser(props) {
    return(
      <>   
      <form id="register-form" onSubmit={props.register}>         
          <label htmlFor="name" className="form-label">First Name: </label>
          <input className='form-control' type="text" id="firstName" name="firstName"/>
          <label htmlFor="name" className="form-label">Last Name: </label>
          <input className='form-control' type="text" id="lastName" name="lastName"/>
          <label htmlFor="name" className="form-label">Email: </label>
          <input className='form-control' type="text" id="email" name="email"/>
          <label htmlFor="name" className="form-label">Password: </label>
          <input className='form-control' type="text" id="password" name="password"/><br />
          <input className='form-control' type="submit" value="REGISTER" />
      </form>
      </>
    )
}