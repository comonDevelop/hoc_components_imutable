/** 作者: ludan
 *  时间: 2020-03-15 10:03:18
 *  修改者:  ludan
 *  最后修改人: 2020-03-15 10:03:18 
 *  开发模块：
 *  说明： form 表单书写
 */
import React from 'react';
import {Input, Button} from 'antd';

// 创建一个高阶组件、数据收集、与校验
function KFormCreate(Comp) { 
    return class extends React.Component{
        constructor(props) {
            super(props);
            this.state={}
            this.options={}
        };

        handleChange = (e) => {
            const {name, value} = e.target;
            this.setState({ [name]: value }, () => {
                this.validateFiled(name);
            });
        }

        validateFiled = filed => {
            const rules = this.options[filed].rules;
            const ret = !rules.some(rule => {
                console.log()
                if(rule.required) {
                    if(!this.state[filed]){
                        this.setState({
                            [filed+'Message']: rule.message,
                        })
                        return true;
                    }
                }
            })
            if(ret){
                this.setState({
                    [filed+'Message']: '',
                })
            }
            return ret;
        }

        validater = (fn) => {
            const rets = Object.keys(this.options).map(filed => {
                return this.validateFiled(filed);
            });
            const retType = rets.every(k => k == true);
            const Obj = {}, _arr = Object.keys(this.state).map(v => {
                if(!v.includes('Message')){
                    Obj[v] = this.state[v];
                }
            })
            fn(retType, Obj);
        }

        retsetValues = (item) => {
            this.setState({...this.state, ...item})
        }

        // 创建input装饰器
        getFileDecoretor = (filed, option) => {
            this.options[filed] = option;
            return InputComp => (
                <div style={{height: '52.3px'}}>
                    {React.cloneElement(InputComp, {
                        name: filed,
                        value: this.state[filed] || '',
                        onChange: (e) => this.handleChange(e) 
                    })}
                    <span style={{color: 'red'}}>{this.state[`${filed}Message`]}</span>
                </div>
            )
        }

        render() {
            return <Comp 
                getFileDecoretor={this.getFileDecoretor} 
                validater={this.validater} 
                retsetValues={this.retsetValues}
            />
        }
    }
}


class KForm extends React.Component {
    onSubmit = () => {
        const {validater} = this.props;
        validater((isvisible,values) => {
            if(isvisible){
                console.log(values, '提交内容')
            }
        })
    }

    onClear = () => {
        const {retsetValues} = this.props;
        retsetValues({userName: "", password: ''})
    }

    render() {
        const {getFileDecoretor} = this.props;
        return (
            <div style={{width: '400px', margin: '0 auto', padding: '30px', border: '1px solid #ddd', marginTop: '30px'}}>
                {
                    getFileDecoretor("userName", {
                        rules: [{required: true, message: '请输入用户名'}]
                    })(
                        <Input type="text" />
                    )
                }
                {
                    getFileDecoretor("password", {
                        rules: [{required: true, message: '请输入密码'}]
                    })(
                        <Input type="password" />
                    )
                }
                <Button style={{marginRight: '30px'}} onClick={this.onSubmit}>登陆</Button>
                <Button type="primary" onClick={this.onClear}>清空</Button>
            </div>
        )
    }
}


export default KFormCreate(KForm);
