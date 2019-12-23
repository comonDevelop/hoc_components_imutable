import React from 'react';
import {Input, Button} from 'antd';

// 高阶组件包装
function kFromCreate(Comp) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state={

            }
            this.options={};
        }


        handleChange = (e) => {
            const {name, value} = e.target;
            console.log(name, value, '------handleChange-----')
            this.setState({[name]: value}, () => {
                this.valadatorFiled(name)
            })
        }

        getFiledDec = (filed, option) => {
            this.options[filed] = option;
            return InputComp => {
                return (
                    <div>
                        {
                            React.cloneElement(InputComp, {
                                name: filed,
                                value: this.state[filed] || '',
                                onChange: this.handleChange
                            })
                        }
                    </div>
                )
            }
        }

        valadatorFiled = (file) => {
            console.log(file, '----file----')
            const rules = this.state.options[file].rules;
            const result = !rules.some(rule => {
                if(rule.required){ 
                    if(!this.state[file]){
                        this.setState({[`${file}+Message`]: rule.message})
                    }
                    return true;
                }
            })
            if (result) {
                this.setState({[`${file}+Message`]: ""})
            }
            return result;
        }

        validate = (callback) => {
            const rets =  Object.keys(this.options).map(file => {
                this.valadatorFiled(file);
            })
            const result = rets.every(k => k == true);
            callback(result, this.state);
        }

        render() {
            return <Comp getFiledDec={this.getFiledDec} validate={this.validate}></Comp>
        }
    }
}


class AntdForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    submitBtn = () => {
        const {validate} = this.props;
        validate((err, values) => {
            if (!err) {

            }
        }) 
    }

    render() {
        const { getFiledDec } = this.props;
        return (
            <div style={{width: '400px', padding: '60px 20px', margin: '0 auto'}}>
                Form 表单的自定义<br/>
                {getFiledDec("userName",{
                    rules: [{required: true, message: '请输入名字'}]
                })(<Input />)}
                {getFiledDec("password",{
                    rules: [{required: true, message: '请输入密码'}]
                })(<Input type="password"/>)}
                <Button type="primary" onClick={() => this.submitBtn()}>点击提交</Button>
            </div>
        )
    }
}

export default kFromCreate(AntdForm);