import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useRef } from 'react'
import { useFetcher } from 'react-router-dom'

const BudgetForm = () => {
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
        marginTop: "50px",
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
            <h2 style={{ textAlign: "center" }}>Create Budget</h2>
            <fetcher.Form method="POST" className="grid-md" ref={formRef}>
                <div className="grid-md">
                    <label htmlFor="newBudget" style={labelStyle}>
                        <h4>Budget Name</h4>
                        <input
                            type="text"
                            name="newBudget"
                            id="newBudget"
                            style={inputStyle}
                            placeholder="e.g: Groceries"
                            required
                            className='ant-list-item'
                            ref={focusRef}
                        />
                    </label>

                </div>
                <div className="grid-md">
                    <label htmlFor="newBudgetAmount" style={labelStyle}>
                        <h4>Budget Amount</h4>
                        <input
                            type="number"
                            step="0.01"
                            name="newBudgetAmount"
                            id="newBudgetAmount"
                            style={inputStyle}
                            placeholder="e.g: 1500rs"
                            required
                        />
                    </label>
                </div>
                <div className="grid-md">
                    <label htmlFor="newBudgetDate" style={labelStyle}>
                        <h4>Date</h4>
                        <input
                            type="date"
                            name="newBudgetDate"
                            id="newBudgetDate"
                            style={inputStyle}
                            required
                        />
                    </label>
                </div>
                <input type="hidden" name="_action" value="createBudget" />
                <button type="submit" style={buttonStyle} disabled={isSubmitting}>
                    {
                        isSubmitting ? <span>Submitting..</span>
                            : (
                                <>
                                    <span style={{ marginRight: 10, padding: 10 }}>Create Budget</span>
                                    <CurrencyDollarIcon width={25} />
                                </>
                            )
                    }

                </button>
            </fetcher.Form >
        </div >
    )
}

export default BudgetForm