import withForm1 from '../hoc/withForm1'


const  SingInForm  = ({data, handleChange, handleSubmit}) =>  {

    return (
      <div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group mb-3">
            <input
              onChange={handleChange}
              value={data.email}
              name="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          <div className="form-group mb-3">
            <input
              onChange={handleChange}
              value={data.password}
              name="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    )
  }


export default withForm1({email: "", password: ""})(SingInForm)
