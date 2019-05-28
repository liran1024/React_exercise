import React, {Component,fragment} from 'react';

class Todolist extends Component {
    constructor(props) {
        super(props);//调用Component的钩子
        this.state = {
            inputValue: '',
            list: ['11', '222']
        };
    }

    render() {
        return (
            // fragment内部封装的站位符
            <fragment>
                {
                    // 注释方式1--多行注释
                }
                {/*注释方式2--单行注释*/}
                <div>
                    <label htmlFor="insertArea">请输入内容</label>
                    <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)} className="input" id="insertArea"/>
                    <button onClick={this.handleSubmlit.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={this.handleInputdele.bind(this, index)}
                                    dangerouslySetInnerHTML={{__html: item}}
                                ></li>
                            )

                        })
                    }
                </ul>
            </fragment>
        );
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleSubmlit() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleInputdele(index) {
        var data = this.state.list
        data.splice(index, 1)//不能直接改变this.State里的变量
        this.setState({
            list: data
        })

    }
}


export default Todolist;