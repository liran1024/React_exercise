// 本节讲父子传参
// 代码优化---注意事项
//同步设置数据
// this.setState({
//     变量:''
// })
//异步设置数据---参数prevState代表修改前的数据状态
// this.setState((prevState)=>({
//     变量:''
// }))
import React, {Component,fragment} from 'react';
import Todoitem from './Todoitem'
class Todolist extends Component {
    constructor(props) {
        super(props);//调用Component的钩子
        this.state = {
            inputValue: '',
            list: ['11', '222'],
        };
        // 在constructor周期里将bin(this)的this指向Todolist实例将优化性能
        this.handleInputdele=this.handleInputdele.bind(this)
        this.handleSubmlit=this.handleSubmlit.bind(this)
        this.handleInputChange=this.handleInputChange.bind(this)
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
                    <input value={this.state.inputValue} onChange={this.handleInputChange} className="input" id="insertArea"/>
                    <button onClick={this.handleSubmlit}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                              <Todoitem
                                  key={index}
                                  item={item}
                                  index={index}
                                  handleitemdele={this.handleInputdele}
                              >
                              </Todoitem>
                            )
                        })
                    }
                </ul>
            </fragment>
        );
    }

    handleInputChange(e) {
        var value=e.target.value
        this.setState(()=>({
            inputValue:value
        }))

    }

    handleSubmlit() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }

    handleInputdele(index) {
        this.setState((prevState) => {
            var list = prevState.list
            list.splice(index,1)
            return{
                // list:list
                list
            }
        })

    }
}


export default Todolist;