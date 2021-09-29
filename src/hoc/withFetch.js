import {Component} from 'react'


const withFetch = url => BaseComponent => {
    class WrapWithFetch extends Component {
        state = {
            results: [],
            }
        
        async componentDidMount() {
            try {
                const r = await fetch(url)
                if(r.ok) {
                    const data = await r.json()
                    this.setState({results: data.results})
                } else {
                    throw Error('bad response')
                }
            } catch(err){
                console.log(err.message)
            }


          }    
        render(){
            return <BaseComponent   {...this.state} {...this.props}/>
        }

    }

    return WrapWithFetch;
}

export default withFetch