import React, { Component } from 'react'
import { Input, Button } from 'antd'


function MFormCreate(Comp) { 
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state={}
            this.options={}
        }


        handleChange = (e) => {
            const {name, value} = e.target;
            console.log(value, '------value11111-----')
            this.setState({[name]: value}, () => {
                this.valadateFiles(name)
            })
        }

        getFiledDec = (filed, option) => {
            // 校验规则
            this.options[filed] = option;
            return InputComp => (
                <div>
                    {
                        React.cloneElement(InputComp, { // clone 复制组件
                            name: filed,
                            value: this.state[filed] || this.state[filed] === "" ? this.state[filed] : option.initialValue,
                            onChange: this.handleChange,
                        })
                    }
                    <p style={{color: 'red'}}>{this.state[filed+"Message"]}</p>
                </div>
            )
        }

        validate = callback => {
            const _object = {};
            const rets = Object.keys(this.options).map(filed => {
                this.valadateFiles(filed)
            })
            const ret = rets.every(v => v== true);
            Object.keys(this.state).map(k => {
                if (!k.includes("Message")) {
                    _object[k] = this.state[k]
                }
            })
            callback(ret, _object)
        }

        valadateFiles = (filed) => {
            // 校验规则
            const rules = this.options[filed].rules;
            const result = !rules.some(rule => {
                if (rule.required) {
                    if (!this.state[filed]) {
                        this.setState({[filed + "Message"]: rule.message});
                        return true;
                    }
                }
            })
            if (result) {
                this.setState({[filed + "Message"]: ""});
            }
            return result;
        }

        render() {
            return <Comp getFiledDec={this.getFiledDec} validate={this.validate}></Comp>
        }
    }
}   


class FormComp extends Component {
    submitBtn = () => {
        this.props.validate((err, values) => {
            if (!err) {
                // console.log(values, '------values-------')
            }
        });
    }

    render() {
        const {getFiledDec} = this.props;
        return (
            <div style={{width: "400px", padding: '60px 30px'}}>
                {
                    getFiledDec("name", {
                        initialValue: 'zhangsan',
                        rules: [{ required: true, message: '请输入姓名' }]
                    })(
                        <Input />
                    )
                }
                {
                    getFiledDec("password", {
                        rules: [{ required: true, message: '请输入密码' }]
                    })(
                        <Input type="password"/>
                    )
                }
                <Button style={{width: '342px'}} type="primary" onClick={() => this.submitBtn()}>提交</Button>
            </div>
        )
    }
}

export default MFormCreate(FormComp);