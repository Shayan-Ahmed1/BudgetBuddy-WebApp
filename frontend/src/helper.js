// local Storage (Will be replace by fetch API)
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

// create income
export const createIncome = ({ name, amount, date }) => {
  const newIncome = {
    id: crypto.randomUUID(),
    name: name,
    amount: +amount,
    createdAt: date,
  };

  const existingIncomes = fetchData("incomes") ?? [];
  return localStorage.setItem(
    "incomes",
    JSON.stringify([...existingIncomes, newIncome])
  );
};

// create budget
export const createBudget = ({ name, amount, date }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: date,
    amount: +amount,
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};

// create expense
export const createExpense = ({ name, amount, budget, date }) => {
  const newExpense = {
    id: crypto.randomUUID(),
    name: name,
    amount: +amount,
    budgetId: budget,
    createdAt: date,
  };

  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newExpense])
  );
};
