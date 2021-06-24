import React, {Component} from 'react';
import './App.css';
import CoursesList from './component/CoursesList';
import CourseAdd from './component/CourseAdd';
import {toast,ToastContainer} from 'react-toastify';
import './component/CourseList.css';

class App extends Component {
  state = {
    courses : [
      {name : "HTML"},
      {name : "CSS"},
      {name : "JS"},
      {name : "jQuery"},
    ],
    current : ''
  }
  // Functions 
  // Update Course ()
  updateCourse = (e) => {
    // Update Current From State By New Value
    this.setState({
      current : e.target.value
    })
    console.log(this.state.current)
  }
  // Add Course ()
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current; // Get Current From State 
    let courses = this.state.courses; // Get Courses From State 
    courses.push({name : current}); // Add Item To Courses Using Push 
    // Update The Old State 
    this.setState({ 
      courses,
      current : ''
    })
    toast.success("Added !",{
      position:'bottom-right'
    })
  }
  // Delete Course () 
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index,1);
    this.setState({courses})
    toast.error('Deleted ' + index, {
      position : 'bottom-right'
    })
  }
  // Edit Course ()
  editCourse = (index,value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
        courses
    })
    toast.warn("Editd",{
      position : 'bottom-right',
    })
  }
  //////
  render(){
   // Print List In Component
    const {courses} = this.state; // Courses Array in State
    const list = courses.map((course , index) => {  
      return (
        <CoursesList name={course.name} key={index} index = {index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
      )
    });
    //// End Print 
    return(
      <section className="Crud">
        <h2>Crud App</h2>
        <CourseAdd updateCourse={this.updateCourse} addCourse={this.addCourse} current = {this.state.current}/>
        <ul className="list">{list}</ul>
       <ToastContainer />
      </section>
    )
  }
}
export default App;
