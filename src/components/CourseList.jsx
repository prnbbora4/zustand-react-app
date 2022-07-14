import React from 'react'
import useCourseStore from '../app/courseStore'


const CourseList = () => {
    const { courses, removeCourse, } = useCourseStore(
        (state) => ({
            courses: state.courses,
            removeCourse: state.removeCourse,
        })
    )
    return (
        <>
            <ul>
                {courses.map((course, i) => {
                    return (
                        <React.Fragment key={i}>
                            <li
                                className={`course-item`}
                                style={{
                                    backgroudColor: "white"

                                }}
                            >
                                <span>{course?.title}</span>
                                <button
                                    onClick={() => {
                                        removeCourse(course.id)
                                    }}
                                    className="delete-btn">Delete</button>
                            </li>
                        </React.Fragment>
                    )
                })}
            </ul>
        </>
    )
}

export default CourseList