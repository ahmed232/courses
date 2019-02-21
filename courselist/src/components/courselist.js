import React, { Component , Fragment } from 'react';

class CourseList extends Component {
  
  // toggle

  state = {
    getstate : false
  }

    toggleclass = () => {
      let {getstate} = this.state;
      this.setState({
        getstate : !getstate
      })
    }


  // get list courses

  allcourses = () => {
    return(
      <li>
        <span>
          {this.props.detalse.name} 
        </span>
      <button onClick={() => {this.toggleclass()}}>Edit Course</button>
      <button onClick={() => {this.props.deletecourse(this.props.index)}}>Delete Course</button>
    </li>
    )
  }

  // update

  handelsubmitform = (e) => {
    e.preventDefault();
    this.props.editfunction(this.props.index ,this.input.value );
    this.toggleclass()
  }

  //get form 

  getfirm = () => {
    return (
      <form onSubmit={this.handelsubmitform}>
        <input type="text" ref= {(v) => {this.input = v}} defaultValue= {this.props.detalse.name}  />
        <button>update course</button>
      </form>
    )
  }

  // code index html 

  render() {
    let {getstate} = this.state;
    return (
      <Fragment>
        {/* if condation */}
        {getstate ? this.getfirm() : this.allcourses()}
      </Fragment>
    );
  }
}

export default CourseList;
