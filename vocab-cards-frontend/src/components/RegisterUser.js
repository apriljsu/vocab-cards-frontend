export default function RegisterUser(props) {
    return(
      <form id="register-form" onSubmit={props.register}>
          <strong>Register </strong><br />
          <label htmlFor="name">First Name: </label>
          <input type="text" id="firstName" name="firstName"/>
          <label htmlFor="name">Last Name: </label>
          <input type="text" id="lastName" name="lastName"/>
          <label htmlFor="name">Email: </label>
          <input type="text" id="email" name="email"/>
          <label htmlFor="name">Password: </label>
          <input type="text" id="password" name="password"/>
          <input type="submit" value="signup" />
      </form>
    )
}