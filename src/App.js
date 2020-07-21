import React from 'react';
import InputComponent from './components/inputComponent'
import CardElementComponent from './components/cardElement'
import ExpenseComponent from './components/expense'
import ExpenseInputComponent from './components/expenseInput'
import Dollar from './dollar.jpg'
import Expenses from './expenses.png'
import Savings from './savings.png'
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      budget:0,
      expenses:[],
      sumOfExpenses:0,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(_budget){
  
    if(_budget === "") _budget = '0'
    this.setState({
      budget:parseInt(_budget)
    })
  }
  handleClick = (_nameOfExpense,_valueOfExpense) => {
    const temp = [...this.state.expenses]
    console.log('before the push',temp)
    temp.push(
      {
        name:_nameOfExpense,
        value:_valueOfExpense
      }
    )
    console.log("from adding",temp)
    /*const sumOfExpenses = this.state.expenses.reduce((sum,element) => {
          sum = parseInt(element.value) + sum
          return sum
        },0) */
    this.setState(
      {
        expenses:temp,
      }
    )
  }

  deleteExpense = (indexOfExpense) => {
    const temp = [...this.state.expenses]
    //console.log(temp)
    temp.splice(indexOfExpense,1)
    this.setState(
      {
        expenses:temp
      }
    )
  }

  componentDidUpdate(prevProps,prevState){
    //console.log("from cdu prevState",prevState.expenses,"newState",this.state.expenses)
    if(prevState.expenses !== this.state.expenses){
      //console.log("entered CDU")
      const sumOfExpenses = this.state.expenses.reduce((sum,element) => {
          sum = parseInt(element.value) + sum
          return sum
        },0)
      this.setState(
        {
          sumOfExpenses:sumOfExpenses
        }
      )
    }
  }
  render(){
    //console.log(this.state.budget - this.state.sumOfExpenses)
    //console.log(this.state.sumOfExpenses)
    //console.log(this.state.expenses)
    return(
      <main>
        <nav>
          <h1 className="center-title">Expense Tracker</h1>
        </nav>
        <InputComponent placeholder='Enter your budget here' handleChange={this.handleChange} />
        <div className="cards">
          <CardElementComponent name="Budget" img={Dollar} value={this.state.budget}/>
          <CardElementComponent name="Expenses" img={Expenses} value={this.state.sumOfExpenses?this.state.sumOfExpenses:0}/>
          <CardElementComponent name="Savings" img={Savings} value={this.state.expenses.length === 0 ? this.state.budget:this.state.budget - this.state.sumOfExpenses}/>
        </div>
        <ExpenseInputComponent handleClick = {this.handleClick}/>
        {this.state.expenses.length !== 0 ? this.state.expenses.map((element,index) => {
          return (
            <ExpenseComponent nameOfExpense = {`${element.name} - ${element.value}`} key={index} deleteExpense = {this.deleteExpense} index={index}/>
          )
        }):null}
    </main>
    )
    
  }
}

export default App;
