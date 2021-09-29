import {Component} from 'react'
import data from '../data'
import Course from './Course'

class CourseList extends Component {
    state = {
        openId: null
    }

    render(){
        return (
            <ul className="list-group">
                 {data.map(item => <Course key={item.id} item={item}/>)}       
            </ul>
        )
    }
}

export default CourseList
