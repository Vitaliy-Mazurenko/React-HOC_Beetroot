import data from '../data'
import Course from './Course'

const  CourseList = () =>   {


        return (
            <ul className="list-group">
                 {data.map(item => <Course key={item.id} item={item}/>)}       
            </ul>
        )
   }

export default CourseList
