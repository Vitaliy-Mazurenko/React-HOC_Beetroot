import withForm from "../hoc/withForm"
import withToggle from "../hoc/withToggle"

const RegisterForm = ({handleChange, data, handleToggled, isToggled}) => {
  const submit = e => {
    e.preventDefault()
    console.log("Register Form submited")
    console.log(data)
  }

  return (
    <form onSubmit={submit} className="col-md-3" autoComplete="off">
      <div className="form-group">
        <label>Email</label>
        <input
          name="email"
          value={data.email}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Login</label>
        <input
          name="login"
          value={data.login}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          name="password"
          value={data.password}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-check">
        <input
          checked={isToggled}
          onChange={handleToggled}
          type="checkbox"
          name="isAgree"
          id="isAgree"
          className="form-check-input"
        />
        <label className="form-check-label" htmlFor="isAgree">
          I Agree
        </label>
      </div>

      {isToggled && (
        <div className="form-group">
          <button className="btn btn-success">Register</button>
        </div>
      )}
    </form>
  )
}

export default withForm({
  login: "",
  email: "",
  password: "",
  isToggled: false,
})(withToggle(RegisterForm))
