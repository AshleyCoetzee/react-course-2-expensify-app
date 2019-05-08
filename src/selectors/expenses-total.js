export default function getExpensesTotal(expenses) {
    return expenses.map(function(expense) { 
        return expense.amount })
        .reduce(function(sum, value){
        return sum + value;
    }, 0);   
}

