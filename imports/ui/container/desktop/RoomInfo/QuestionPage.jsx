import React from 'react'
import QuestionCard from './QuestionCard'
import UserCard from './UserCard'
import Title from '../../../components/Typography/Title'
import Button from '../../../components/CustomButtons/Button'
import Alert from '../../../components/Alert/Alert'

const QuestionPage = props => {
    const {
        question,
        name,
        current,
        questionNumber,
        roomId,
        usersjoined,
    } = props

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

    const remainingPlayer = () => {
        let usersRemaning = usersjoined
        if (question.answers) {
            question.answers.forEach(answer => {
                const indexAnswer = usersjoined.indexOf(answer.id)
                if (indexAnswer >= 0) {
                    usersRemaning.splice(indexAnswer, 1)
                }
            })
            return usersRemaning && usersRemaning.length ? (
                <div>
                    {usersRemaning.map(userId => (
                        <UserCard key={`user/${userId}`} userId={userId} />
                    ))}
                    {question.answers.length} / {usersRemaning.length} left
                    <hr />
                </div>
            ) : (
                <div>
                    Tout le monde à répondu ! <hr />
                </div>
            )
        }
    }

    return (
        <div>
            <Title>{name}</Title>
            <QuestionCard question={question} />
            <Button onClick={() => nextQuestion()}>Next page</Button>
            <Title>Remaining</Title>
            {remainingPlayer()}
            {current + 1 + ' / ' + questionNumber} page
        </div>
    )
}

export default QuestionPage
