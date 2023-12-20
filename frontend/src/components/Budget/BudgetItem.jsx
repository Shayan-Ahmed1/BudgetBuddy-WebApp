import React from 'react'

const BudgetItem = ({ budget }) => {
    return (
        <div>
            <h2>{budget.amount}</h2>
        </div>
    )
}

export default BudgetItem