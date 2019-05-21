import React from 'react'
import QuestionCard from './QuestionCard'
import Title from '../../../components/Typography/Title'

const QuestionPage = props => {
    const { question, name } = props
    console.log(question)
    return (
        <div>
            <Title>{name}</Title>
            <QuestionCard question={question} />
        </div>
    )
}

export default QuestionPage
