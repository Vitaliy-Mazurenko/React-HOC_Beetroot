import React from "react"
import PropTypes from "prop-types"
import {setDisplayName, setPropTypes, compose} from "recompose"
import Redux from "../fakeRedux"
import "./user.css"

const {connect} = Redux()

const enhance = compose(
  connect,
  setDisplayName('User'),
  setPropTypes({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
  })
)

const User = ({name, status, dispatch}) => (
  <div className="user"
    onClick={() => dispatch({type: "CHANGED"})}
  >
    {name} {status}
  </div>
)

export default enhance(User)
