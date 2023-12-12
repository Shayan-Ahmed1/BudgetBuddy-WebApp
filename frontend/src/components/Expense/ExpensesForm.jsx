import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

const budgets = [
  {
    id: "cccc24e5-c866-451b-b2e2-c90b937df32b",
    name: "Bills",
    createAt: 1701889282994,
    amount: 10000,
    color: "0 65% 50%",
  },
  {
    id: "a0f5891d-017c-4cf0-a13c-a83c8baf5f39",
    name: "Transport",
    createAt: 1701889295580,
    amount: 2000,
    color: "33 65% 50%",
  },
  {
    id: "4e4e0b9d-9ffc-4ca5-90b5-64cba405c974",
    name: "Health",
    createAt: 1701889304435,
    amount: 5000,
    color: "66 65% 50%",
  },
  {
    id: "8654b6b2-9fe4-47a4-8965-f5ce2625eacd",
    name: "Food",
    createAt: 1701889319495,
    amount: 2000,
    color: "99 65% 50%",
  },
  {
    id: "bb2e84d3-dcfa-4502-b4c6-d4b68ddac3b6",
    name: "Others",
    createAt: 1701889537685,
    amount: 11000,
    color: "132 65% 50%",
  },
];

const ExpensesForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      // clear form
      formRef.current.reset();
      // reset focus
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div>
      <h2>
        Add New{" "}
        <span>
          {budgets.length === 1 && `${budgets.map((budget) => budget.name)}`}
        </span>{" "}
        <span>Expense</span>
      </h2>
      <fetcher.Form method="post" ref={formRef}>
        <div>
          <div>
            <label htmlFor="newExpense">Expense Name</label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="eg: Coffee"
              ref={focusRef}
              required
            />
          </div>
          <div>
            <label htmlFor="newExpenseAmount">Amount</label>
            <input
              type="number"
              step="0.01"
              name="newExpenseAmount"
              id="newExpenseAmount"
              placeholder="15rs"
              required
            />
          </div>
          <div hidden={budgets.length === 1}>
            <label htmlFor="newExpenseBudget">Budget Category</label>
            <select name="newExpenseBudget" id="newExpenseBudget" required>
              {budgets
                .sort((a, b) => a.createdAt - b.createdAt)
                .map((budget) => {
                  return (
                    <option key={budget.id} value={budget.id}>
                      {budget.name}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <input type="hidden" name="_action" value="createExpense" />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Submitting..</span>
          ) : (
            <>
              <span>Add Expense</span>
              <PlusCircleIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};

export default ExpensesForm;
