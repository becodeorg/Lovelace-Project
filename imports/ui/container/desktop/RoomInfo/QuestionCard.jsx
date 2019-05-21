import React from 'react'
import Spinner from '../../../components/Loader/Spinner'
import { withTracker } from 'meteor/react-meteor-data'
import { Avatar } from '@material-ui/core'
import Title from '../../../components/Typography/Title'

const QuestionCard = props => {
    const { question } = props
    console.log(question)
    return (
        <div>
            <Title>{question.title}</Title>
            {question.porposes &&
                question.porposes.map((porpose, index) => {
                    return (
                        <div key={`porpose${index}`}>
                            {porpose.answer}{' '}
                            {porpose.correct ? 'true' : 'false'}
                        </div>
                    )
                })}
        </div>
    )
}

export default QuestionCard
