import React from 'react'
import styles from './CreateExam.module.css'
import ExamForm from './ExamForm'
const CreateExam = () => {
  return (
    <>
    <div className={`${styles.container} vh-100 d-inline-block vw-100 bg-light d-flex justify-content-center align-items-center`}>
        <div className="card bg-dark">
            <div className="card-body">
                <ExamForm/>
            </div>
        </div>
    </div>
    </>
  )
}

export default CreateExam