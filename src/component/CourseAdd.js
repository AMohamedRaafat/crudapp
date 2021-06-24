import React, { Fragment } from 'react';
import './CourseAdd.css'
const CourseAdd = (props) => {
    return (
            <Fragment>
                <form className="addform" onSubmit={props.addCourse}>
                    <input type="text" onChange={props.updateCourse} value = {props.current}/>
                    <input type="submit" value="Add Course" />
                </form>
            </Fragment>
        )
}
export default CourseAdd;