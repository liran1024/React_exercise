import React, {Component,fragment} from 'react';

class Todoitem extends Component{
    constructor(props) {
        super(props);//调用Component的钩子
        this.handleclick=this.handleclick.bind(this)
    }

    render(){
        const  {item}=this.props
        return (
            <fragment>
                <div onClick={this.handleclick}>
                    {item}
                </div>
            </fragment>
        )
    }
    handleclick(){
        const  {handleitemdele,index}=this.props
        handleitemdele(index)
    }

}

export  default Todoitem;