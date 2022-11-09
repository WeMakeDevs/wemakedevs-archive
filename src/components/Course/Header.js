import React from 'react'

import Learning from '../../assets/Learning.png'
import Notes from '../../assets/Notes.png'
import Assignment from '../../assets/Assignment.png'
import DoubtSupport from '../../assets/DoubtSupport.png'
import Guidance from '../../assets/Guidance.png'
import Projects from '../../assets/Project.png'

const Header = () => {
    return (
        <div className="course_cont_1">
            <div className="course_cont_a">
                <p className="course_cont_para">
                    Boost your career with our free hands-on courses.
                </p>
            </div>
            <div className="course_cont_b">
                <div className="course_cont_b_1">
                    <div className="course_cont_b_1_frame_1">
                        <img src={Learning} alt="Learning" />
                        <p> Structured Learning </p>
                    </div>
                    <div className="course_cont_b_1_frame_2">
                        <img src={Notes} alt="Learning" />
                        <p> Notes </p>
                    </div>
                    <div className="course_cont_b_1_frame_3">
                        <img src={Assignment} alt="Learning" />
                        <p> Assignments </p>
                    </div>
                </div>
                <div className="course_cont_b_2">
                    <div className="course_cont_b_1_frame_4">
                        <img src={DoubtSupport} alt="Learning" />
                        <p> Doubt Support </p>
                    </div>
                    <div className="course_cont_b_1_frame_5">
                        <img src={Guidance} alt="Learning" />
                        <p> Guidance </p>
                    </div>
                    <div className="course_cont_b_1_frame_6">
                        <img src={Projects} alt="Learning" />
                        <p> Projects </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header