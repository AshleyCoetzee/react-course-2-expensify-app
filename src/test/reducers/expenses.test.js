import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([])

});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        id: 4,
        description: 'Food',
        note: '',
        amount: 200,
        createdAt: 4500000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
})

test('should edit expense', () => {
    const note = 'new note'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            note
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].note).toBe(note)
})

test('should not edit an expense if id not found', () => {
    const note = 'new note'
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-20',
        updates: {
            note
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})