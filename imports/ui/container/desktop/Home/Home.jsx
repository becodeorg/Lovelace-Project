import React from 'react'
import { withStyles } from '@material-ui/core'
import HomeStyle from './HomeStyle'
import GithubConnection from '../Connection/GithubConnect'
import Text from '../../../components/Typography/Normal'

const Home = props => {
    const { classes } = props

    return (
        <div className={classes.main}>
            <img src="/assets/logos/logo-big.png" alt="Logo" />
            <Text>
                Kiwizz! est un jeu en ligne développé par Lovelace 3.9, Becode.org
            </Text>
            <GithubConnection>
                coucou
            </GithubConnection>
        </div>
    )
}

export default withStyles(HomeStyle)(Home)
