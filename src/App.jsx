import {Component} from "react"


const users = ['Bill', 'Tom']

const List = () => <ul>
  {users.map(user => <li key={user}>{user}</li>)}
</ul>

const Message = () => <p>this is paragraph</p> 


const withTitle = BC => props => <>
  <h1>{props.title}</h1>
  <BC {...props}/>
</>

const TitledList = withTitle(List)
const TitledMessage = withTitle(Message)


class App extends Component {
  render() {
    return (
      <div className="container">
        <List />
        <TitledList title="My new List"/>
        <TitledMessage title="My message"/>
      </div>
    )
  }
}

export default App
