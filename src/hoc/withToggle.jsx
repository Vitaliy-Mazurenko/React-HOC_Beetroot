import {Component} from "react"

export default function withToggleCheckbox(BaseComponent) {
  return class WrappedToggleCheckbox extends Component {
    state = {isToggled: false}

    handleToggled = e =>
      this.setState({
        isToggled: Boolean(e.target.checked),
      })

    render() {
      return (
        <BaseComponent
          {...this.state}
          {...this.props}
          handleToggled={this.handleToggled}
        />
      )
    }
  }
}
