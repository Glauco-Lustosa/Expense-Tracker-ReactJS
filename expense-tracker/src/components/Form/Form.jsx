import React, { useState, useContext } from 'react'
import { FormControl, InputLabel, MenuItem, Grid, Button, Select, TextField, Typography } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles'
import { v4 as uuidv4 } from 'uuid'
import { incomeCategories, expenseCategories } from '../../constants/categories'
const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: new Date()
}
function Form() {
    const classes = useStyles()
    const [formData, setFormData] = useState(initialState)
    const { addTransaction } = useContext(ExpenseTrackerContext)
    const createTransaction = () => {
        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }
        addTransaction(transaction)
        setFormData(initialState)
    }
    const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography
                    align='center'
                    variant='subtitle2'
                    gutterBottom
                >...</Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>
                        Type
                    </InputLabel>
                    <Select value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                        {selectedCategories.map((category) =>
                            <MenuItem
                                key={category.type}
                                value={category.type}
                            >
                                {category.type}
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                        {selectedCategories.map((category) =>
                            <MenuItem
                                key={category.type}
                                value={category.type}
                            >
                                {category.type}
                            </MenuItem>
                        )}
                        </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    type='number'
                    label='Amount'
                    fullWidth
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                >

                </TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    type='date'
                    label='Date'
                    fullWidth
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                >

                </TextField>
            </Grid>
            <Button
                classename={classes.button}
                variant='outlined'
                color='primary'
                fullWidth
                onClick={createTransaction}
            >Create</Button>
        </Grid>
    )
}

export default Form