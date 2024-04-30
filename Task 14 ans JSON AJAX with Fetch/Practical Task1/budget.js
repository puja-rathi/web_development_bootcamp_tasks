// Function to get data from session storage
function getDataFromSessionStorage(key) {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

// Function to save data to session storage
function saveDataToSessionStorage(key, data) {
    sessionStorage.setItem(key, JSON.stringify(data));
}

// Function to update the income list in HTML
function updateIncomeList() {
    const incomeListElement = document.getElementById('incomeList');
    incomeListElement.innerHTML = '';
    income.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: $${item.amount}`;
        incomeListElement.appendChild(listItem);
    });
}

// Function to update the expenses list in HTML
function updateExpensesList() {
    const expensesListElement = document.getElementById('expensesList');
    expensesListElement.innerHTML = '';
    expenses.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: $${item.amount}`;
        expensesListElement.appendChild(listItem);
    });
}

// Add event listener for adding income
document.getElementById('addIncomeBtn').addEventListener('click', () => {
    let newIncome = prompt("Enter new income item (name, amount, recurring separated by commas):");
    if (newIncome) {
        newIncome = newIncome.split(",");
        income.push({
            name: newIncome[0].trim(),
            amount: parseFloat(newIncome[1].trim()),
            recurring: newIncome[2].trim().toLowerCase() === 'true'
        });
        saveDataToSessionStorage('income', income);
        updateIncomeList();
    }
});

// Add event listener for adding expenses
document.getElementById('addExpenseBtn').addEventListener('click', () => {
    let newExpense = prompt("Enter new expense item (name, amount, recurring separated by commas):");
    if (newExpense) {
        newExpense = newExpense.split(",");
        expenses.push({
            name: newExpense[0].trim(),
            amount: parseFloat(newExpense[1].trim()),
            recurring: newExpense[2].trim().toLowerCase() === 'true'
        });
        saveDataToSessionStorage('expenses', expenses);
        updateExpensesList();
    }
});

// Load income and expenses data from session storage
let income = getDataFromSessionStorage('income');
let expenses = getDataFromSessionStorage('expenses');

// If no data exists in session storage, use default data
if (income.length === 0) {
    income = [
        { name: "Salary", amount: 4000, recurring: true },
        { name: "Freelance Work", amount: 1000, recurring: false },
        { name: "Investment Dividends", amount: 500, recurring: true },
        { name: "Gift", amount: 200, recurring: false },
        { name: "Rent Income", amount: 1200, recurring: true }
    ];
}

if (expenses.length === 0) {
    expenses = [
        { name: "Groceries", amount: 350, recurring: true },
        { name: "Rent", amount: 1200, recurring: true },
        { name: "Utilities", amount: 200, recurring: true },
        { name: "Dining Out", amount: 150, recurring: false },
        { name: "Entertainment", amount: 100, recurring: false }
    ];
}

// Update income and expenses lists in HTML
updateIncomeList();
updateExpensesList();