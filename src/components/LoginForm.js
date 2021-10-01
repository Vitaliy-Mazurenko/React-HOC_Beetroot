import withForm from "../hoc/withForm"

const LoginForm = ({data, handleChange}) => {
  const submit = e => {
    e.preventDefault()
    console.log("Login Form submited")
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
        <label>Password</label>
        <input
          name="password"
          value={data.password}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary">Login</button>
      </div>
    </form>
  )
}

export default withForm({
  email: "",
  password: "",
})(LoginForm)
