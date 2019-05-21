import React from 'react'
import QuestionCard from './QuestionCard'
import Title from '../../../components/Typography/Title'
import Button from '../../../components/CustomButtons/Button'
import Alert from '../../../components/Alert/Alert'

const ResultPage = props => {
    const { question, name, current, questionNumber, roomId } = props

    const nextQuestion = () => {
        let page = null
        if (current + 1 >= questionNumber) {
            page = 'end'
        } else {
            page = current + 1
        }
        Meteor.call('room.page', roomId, page, false, err => {
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
            <Title>Result</Title>
            <Button onClick={() => nextQuestion()}>Next page</Button>
            {current + 1 + ' / ' + questionNumber} page
        </div>
    )
}

export default ResultPage
