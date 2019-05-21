import React from 'react'
import QuestionCard from './QuestionCard'
import Title from '../../../components/Typography/Title'
import Button from '../../../components/CustomButtons/Button'
import Alert from '../../../components/Alert/Alert'

const QuestionPage = props => {
    const { question, name, current, questionNumber, roomId } = props

    const nextQuestion = () => {
        Meteor.call('room.page', roomId, current, true, err => {
            if (err) {
                Alert({
                    query: 'Swal',
                    type: 'error',
                    title: 'Oops...',
                    text: err.reason,
                })
            } else {
                Alert({ query: 'Toast', type: 'success', title: 'Updated !' })
            }
        })
    }

    return (
        <div>
            <Title>{name}</Title>
            <QuestionCard question={question} />
            <Button onClick={() => nextQuestion()}>Next page</Button>
            {current + 1 + ' / ' + questionNumber}
        </div>
    )
}

export default QuestionPage