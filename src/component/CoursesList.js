import React, {Component, Fragment} from 'react';
import './CourseList.css';
class CoursesList extends Component{
    state = {
        isEdit : false,
        name :''
    }
// List () Returns The List Of Elements
    list = () => {
        return (
                <li>
                    <span>{this.props.name}</span>
                    <button onClick={() => this.togglestate()}>Edit</button>
                    <button onClick={() => this.props.deleteCourse(this.props.index)}>Delete Course</button>
                </li>
        )
    }
// Toggle () To Change To Value Of state isEdite
    togglestate = () => {
        let {isEdit} = this.state
        this.setState({
            isEdit : !isEdit
        })
    }
// Update The Old Value By New
    formUpdate = (e) =>{
        this.props.editCourse(this.props.index,this.state.name);
        this.togglestate();
    }
// Return Form To Update
    update = ()=> {
        console.log("Edit");
        return(
            <form className="update" onSubmit={(e) => {e.preventDefault();this.formUpdate()}}>
                <input type="text" defaultValue={this.props.name} ref={(v) => this.input = v} onChange={this.newValue}/>
                <input type="submit" value="Update Course"/>
            </form>
        )
    }

    newValue = (e) => (
        this.setState({
            name : e.target.value
        })
    )
    render (){
        let {isEdit} = this.state
        return(
            <Fragment>
                {isEdit ? (this.update()) : (this.list())}
            </Fragment>
        )
    }
}
export default CoursesList;