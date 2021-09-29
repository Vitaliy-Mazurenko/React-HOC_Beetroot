import { Component } from "react";


const  withForm  = (data) => (BaseComponent) => class WithFormClass extends Component {
        state = {
            data
          }
        
          handleChange = ({target}) =>
            this.setState({
              data: {...this.state.data, [target.name]: target.value},
            })
        
          handleSubmit = e => {
            e.preventDefault()
            console.log(this.state)
            this.setState({data})
          }
          render(){
              return <BaseComponent {...this.state} 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.props}
              />
          }
    }
 


export default withForm;