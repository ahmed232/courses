import React from "react";

const Courseform = (props) => {
  return(
  <form onSubmit={props.addCourse}>
    <input   type="text" placeholder="name course" onChange={props.updateCourse}  value ={props.currant}/>
    <button>Add Course</button>
  </form>
  )
}
export default Courseform;