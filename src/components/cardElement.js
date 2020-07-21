import React from 'react'

class CardElementComponent extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
           <div className="card-element">
        	<h1 className='card-title'>{this.props.name}</h1>
            <div className="card-img"><img src={this.props.img} /></div>
            <p class="card-value">{this.props.value?this.props.value:0}</p>
           </div> 
        )
    }
}
export default CardElementComponent
