import React from 'react'

const BudgetItem = ({ budget }) => {
    const { id, name, amount } = budget
    return (
        <div className="budget">
            <div className="progress-text">
                <h3>{name}</h3>
                <p>{amount} Budgeted</p>
            </div>
            <progress max={amount} value="200">

            </progress>
            <div className="progress-text">
                <small>spent</small>
                <small>remaining</small>
            </div>
        </div>
    )
}

export default BudgetItem