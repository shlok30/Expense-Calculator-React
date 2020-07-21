import React from 'react'

class ExpenseInputComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"",
            value:"",
            error:""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const RegEx = /^([1-9])[0-9]*$/g
        if(event.target.name === "value" && event.target.value.match(RegEx) === null && event.target.value !== ""){
            window.alert("Enter a valid amount!")
            return
        }
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
    }
    handleClick = () => {
        if(!this.state.name || !this.state.value){
                this.setState(
                    {
                        error:"One of the fields are missing"
                    }
                )
        }
        else{
            this.setState(
                {
                    error:""
                }
            )
            this.props.handleClick(this.state.name,this.state.value)
        }
    }
    render()
    {
        return(
            <div>
                <input type="text" placeholder="Enter name of expense" name="name" value={this.state.name} className="input" id='name-expense' onChange={this.handleChange}/>
                <input type="text" placeholder="Enter value of expense" name="value" value={this.state.value} className="input" id='value-expense' onChange={this.handleChange}/>
                <div className="add-btn">
                    <h1 className="center-title" onClick = {this.handleClick}>Add</h1>
                </div>
                {
                    this.state.error ? <p>{this.state.error}</p>:null
                }
                
            </div>
        )
    }
        
}
export default ExpenseInputComponent
