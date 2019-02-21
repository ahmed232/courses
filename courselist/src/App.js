import React, { Component } from 'react';
import CourseList from "./components/courselist";
import Courseform from "./components/courseform";


class App extends Component {

  // data

  state = {
    courses : [
      {name : "html"},
      {name : "css"},
      {name : "javascript"}
    ],
    currant : ""
  }

  addCourse = (e) => {
    e.preventDefault();
    let currant = this.state.currant;
    let courses = this.state.courses;
   if(currant === ""){
     return alert ("add name course")
   } else {
      courses.push({name : currant})
      this.setState({
        courses,
        currant : ""
      })
     
   }
  }

  // updateCourse
  updateCourse = (e) => {
    this.setState({
      currant : e.target.value
    })
  }

  editfunction = (index , value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({courses})  
  }

  //deletecourse
  deletecourse = (index) =>{
    let courses = this.state.courses;
    courses.splice(index , 1)
    this.setState({courses})
  }


  render() {

    // map 
    const {courses} = this.state;
    const thecourse =   courses.length ? (
      courses.map((course, index) =>{
        return  <CourseList 
                
                  // props 
                  deletecourse={this.deletecourse}  
                  detalse = {course} 
                  index = {index} 
                  key = {index} 
                  editfunction = {this.editfunction} />
  
      }) 
    ) : (
      <p>no item to show</p>
    );
    
    


    return (
      <div className="App">
        <h2>Add Course</h2>

        <Courseform 

          // props 
          currant={this.state.currant} 
          updateCourse = {this.updateCourse}  
          addCourse = {this.addCourse} />

        <ul>{thecourse}</ul>
      </div>
    );
  }
}

export default App;
