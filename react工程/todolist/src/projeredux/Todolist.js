import React, {Component} from 'react';
import 'antd/dist/antd.css';
import {Input,List} from 'antd';
import store from './../store'
import {getInputChangeAction,getListAddItemAction,getListDetItemAction}from './../store/actionCreator'


class Todolist extends Component {
    constructor(props) {
        super(props);//调用Component的钩子
        this.state=store.getState()
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleStoreChange=this.handleStoreChange.bind(this)
        this.handleListAdd=this.handleListAdd.bind(this)

        store.subscribe(this.handleStoreChange)
    }
    render() {
        return (
            <div style={{marginTop:'10px',marginLeft:'10px'}}>
                <div>
                     <Input placeholder='todo info' style={{width:'300px',marginRight:'10px'}} value={this.state.inputValue}
                     onChange={this.handleInputChange}/>
                    <button onClick={this.handleListAdd}>提交</button>
                </div>
                <List style={{width:'300px',marginTop:'10px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => (<List.Item onClick={this.handleDeletItem.bind(this,index)}>{item}</List.Item>)}
                />
            </div>
        );
    }

    handleInputChange(e){
        const action=getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleStoreChange(){
        this.setState(store.getState())
    }
    handleListAdd(){
        const action=getListAddItemAction()
        store.dispatch(action)
    }
    handleDeletItem(index){
        const action=getListDetItemAction(index)
        store.dispatch(action)
    }
}


export default Todolist;