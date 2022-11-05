import React from 'react'

const Card = ({ course = {} }) => {
    return (
        <div className="course_cont_2_card">
            <img className="course_cont_2_card_1" src={course.image} alt={course.title} />
            <p className="course_cont_2_card_1_heading"> {course.title} </p>
            <p className="course_cont_2_card_1_para_1">
                {course.description}
            </p>
        </div>
    )
}

export default Card