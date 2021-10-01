import RegisterForm from "./RegisterForm"
import LoginForm from "./LoginForm"
import withToggle from "../hoc/withToggle"

const User = ({handleToggled, isToggled}) => {
  return (
    <div className="pt-3">
      <div className="form-check">
        <input
          checked={isToggled}
          onChange={handleToggled}
          type="checkbox"
          name="isRegister"
          id="isRegister"
          className="form-check-input"
        />
        <label className="form-check-label" htmlFor="isRegister">
          Switch to {isToggled ? "Login" : "Register"}
        </label>
      </div>
      <hr />

      <h2>{isToggled ? "Register" : "Login"}</h2>

      {isToggled ? <RegisterForm /> : <LoginForm />}
    </div>
  )
}
export default withToggle(User)
