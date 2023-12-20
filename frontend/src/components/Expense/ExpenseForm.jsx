import { PlusCircleIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useRef } from 'react'
import { useFetcher } from 'react-router-dom'

const ExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher()
  const isSubmitting = fetcher.state === "submitting"

  const formRef = useRef()
  const focusRef = useRef()

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset()
      focusRef.current.focus()
    }
  }, [isSubmitting])

  const formStyle = {
    marginTop: "20px",
    width: '300px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    backgroundColor: 'rgba(255, 255, 255, 10)', // Semi-transparent white background
  };

  const labelStyle = {
    margin: '10px',
    fontSize: "10x",
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    // boxSizing: 'border-box',
    margin: '5px 0',
    borderRadius: '8px',
    border: '1px solid #ccc',

  };

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: "15px",
    width: '100%',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#0071BC', // Blue button color
    color: '#fff',
    cursor: 'pointer',
  };

  return (
    <div className='form-wrapper' style={formStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "1px" }}>Add Expense</h2>
      <fetcher.Form method="POST" ref={formRef}>
        <div className="grid-md">
          <label htmlFor="newExpense" style={labelStyle}>
            <h4>Expense Name</h4>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              style={inputStyle}
              placeholder="e.g: Gas Bill"
              required
              className='ant-list-item'
              ref={focusRef}
            />
          </label>

        </div>
        <div className="grid-md">
          <label htmlFor="newExpenseAmount" style={labelStyle}>
            <h4>Expense Amount</h4>
            <input
              type="number"
              step="0.01"
              name="newExpenseAmount"
              id="newExpenseAmount"
              style={inputStyle}
              placeholder="e.g: 1500"
              required
            />
          </label>
        </div>
        <div className="grid-md">
          <label htmlFor="newExpenseDate" style={labelStyle}>
            <h4>Date</h4>
            <input
              type="date"
              name="newExpenseDate"
              id="newExpenseDate"
              style={inputStyle}
              required
            />
          </label>
        </div>
        <div className="grid-md">
          <label htmlFor="newExpenseBudget" style={labelStyle}>
            <h4>Budget Category</h4>
            <select
              name="newExpenseBudget"
              id="newExpenseBudget"
              required
              style={inputStyle}
            >
              {
                budgets && (
                  budgets
                    .sort((a, b) => a.createdAt - b.createdAt)
                    .map((budget) => {
                      return (
                        <option key={budget.id} value={budget.name}>
                          {budget.name}
                        </option>
                      )
                    }))
              }
            </select>
          </label>

        </div>
        <input type="hidden" name="_action" value="createExpense" />
        <button type="submit" style={buttonStyle} disabled={isSubmitting}>
          {
            isSubmitting ? <span>Submitting..</span>
              : (
                <>
                  <span style={{ marginRight: 10, padding: 10 }}>Create Expense</span>
                  <PlusCircleIcon width={25} />
                </>
              )
          }

        </button>
      </fetcher.Form >
    </div >
  )
}

export default ExpenseForm