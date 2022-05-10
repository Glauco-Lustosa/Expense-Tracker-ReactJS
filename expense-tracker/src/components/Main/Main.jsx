import React, { useContext } from 'react'
import { Card, CardContent, CardHeader, Typography, Grid, Divider } from '@material-ui/core'
import useStyles from './styles'
import Form from '../Form/Form'
import List from '../List/List'
import { ExpenseTrackerContext } from '../../context/context'
function Main() {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext)
    return (
        <Card className={classes.root}>
            <CardHeader title='Expense Tracker' subheader='Powered by Speechly' />
            <CardContent>
                <Typography align='center' variant='h5'>Total balance ${balance}</Typography>
                <Typography variant='subtitle1' style={{ lineHeight: '1.5rem', marginTop: '20px' }}>Total balance $100</Typography>
                try saying: Add income for $100 in Category for Monday...
                <Divider></Divider>
                <Form></Form>
            </CardContent>

            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List></List>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main