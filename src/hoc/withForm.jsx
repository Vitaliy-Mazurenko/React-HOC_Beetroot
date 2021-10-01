import {Component} from "react"

export default function withForm(data) {
  return function (BaseComponent) {
    return class WrappedWithForm extends Component {
      state = {data}

      handleChange = e =>
        this.setState({
          data: {...this.state.data, [e.target.name]: e.target.value},
        })

      render() {
        return (
          <BaseComponent
            {...this.state}
            {...this.props}
            handleChange={this.handleChange}
          />
        )
      }
    }
  }
}
