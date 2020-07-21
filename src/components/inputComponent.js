import React from 'react'

class InputComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            text:""
        }
    }
    handleChange = async (event) => {
        const RegEx = /^([1-9])[0-9]*$/g
        if(event.target.value.match(RegEx) === null && event.target.value !== ""){
            window.alert("Enter a valid amount!")
            return
        }
        await this.setState(
            {
                text:event.target.value
            }
        )
        this.props.handleChange(this.state.text)
    }
    render(){

        return(
            <input type="text" placeholder={this.props.placeholder} value={this.state.text} className="input" id={this.props.id?this.props.id:""} onChange={this.handleChange}/>
        )
    }
}
export default InputComponent
