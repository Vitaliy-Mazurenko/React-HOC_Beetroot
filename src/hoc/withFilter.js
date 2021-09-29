import {Component} from 'react'


const withFilter = BaseComponent => {
    class WrapWithFilter extends Component {
        state = {
            filter: "",
          }
          handleChange = filter => this.setState({filter})

          render() {
              return <BaseComponent  {...this.state}  
              handleChange={this.handleChange}
                {...this.props}
              />
          }
    }
    return WrapWithFilter;
}


export default withFilter