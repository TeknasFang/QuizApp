import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";

const ExamForm = () => {
    const [page, setPage] = useState(0)
    const [totalPage, setTotalPage] = useState(null)
    const [questionList, setQuestionList] = useState([])
    const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm();
    const handleClick = () => {
        console.log(watch("topic"))
        console.log(watch("totalQuestion"))
    }
    const onSubmit = data => {
        if (page == 0) {
            console.log("Page 0 ")
            setTotalPage(watch("totalQuestion"))
            setPage(prev => prev + 1)

        } else if (page > 0 && page < totalPage) {
            console.log("page less than total page: " + page)
            let singleQuestion = {
                question: watch("question"),
                option1: watch("option1"),
                option2: watch("option2"),
                option3: watch("option3"),
                option4: watch("option4"),
                correctOption: watch("correctOption"),
            }
            console.log(singleQuestion)
            setQuestionList(prev => [...prev, singleQuestion])
            setPage(prev => prev + 1)

        } else {
            console.log("Final page :" + page)
            let singleQuestion = {
                question: watch("question"),
                option1: watch("option1"),
                option2: watch("option2"),
                option3: watch("option3"),
                option4: watch("option4"),
                correctOption: watch("correctOption"),
            }
            setQuestionList(prev =>{
                console.log({ questionList: [...prev, singleQuestion], topic: watch("topic"), totalQuestion: watch("totalQuestion") })
            } )
            
        }
        console.log(data)
        setValue("question", "")
        setValue("option1", "")
        setValue("option2", "")
        setValue("option3", "")
        setValue("option4", "")
        setValue("correctOption", "")
    };

    return (
        <>
            <div className="text-light">
                <p >exam</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {page == 0 && <><input {...register("topic")} /><br />
                        <input type='number' {...register("totalQuestion", { required: true })} /><br /></>}
                    {page > 0 && <>
                        {`${page}/${totalPage}`}
                    <input {...register("question", { required: true })} /><br />
                        <input {...register("option1", { required: true })} /><br />
                        <input {...register("option2", { required: true })} /><br />
                        <input {...register("option3", { required: true })} /><br />
                        <input {...register("option4", { required: true })} /><br />
                        <p>Correct Option:</p>
                        <label htmlFor="o1">
                            <input
                                {...register("correctOption", { required: true })}
                                type="radio"
                                value="option1"
                                id="o1"
                            />
                            Option1
                        </label>
                        <label htmlFor="o2">
                            <input
                                {...register("correctOption", { required: true })}
                                type="radio"
                                value="option2"
                                id="o2"
                            />
                            Option2
                        </label>
                        <label htmlFor="o3">
                            <input
                                {...register("correctOption", { required: true })}
                                type="radio"
                                value="option3"
                                id="o3"
                            />

                            Option3
                        </label>
                        <label htmlFor="04">
                            <input
                                {...register("correctOption", { required: true })}
                                type="radio"
                                value="option4"
                                id="04"
                            />

                            Option4
                        </label>

                    </>
                    }
                    {/* errors will return when field validation fails  */}
                    {errors.totalQuestion && <span>This field is required</span>}

                    <input type="submit" value={page == totalPage ? "Submit" : "Next"} />
                </form>
                <p className='bg-primary'>{JSON.stringify(questionList)}</p>
            </div>
        </>
    )
}

export default ExamForm