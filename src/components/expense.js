import React from 'react'

class ExpenseComponent extends React.Component{
    constructor(){
        super()
    }
    handleClick = () => {
        const indexOfExpense = this.props.index
        this.props.deleteExpense(indexOfExpense)
    }
    render(){
        return(
            <div className="expense-array" id="first-expense">
                <p>{this.props.nameOfExpense}</p>
                <button class="del-btn" onClick = {this.handleClick}>X</button>
            </div>
        )
    }
}
export default ExpenseComponent
