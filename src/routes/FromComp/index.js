import React from 'react';

class FromComp extends React.Component{
    constructor(props) {
        super(props);
    }

    handleSubmit = () => {
        const { validateFields, getFieldsValue, getFieldValue, resetFields } = this.props; 
        // validateFields((err, values) => {
        //     if(!err){
        //         console.log(values, '返回值')
        //     }
        // });

        // getFieldsValue([{user: 'zhangsan'}])
        // const item = getFieldValue('user');
        // console.log(item, '--------item------')
        resetFields();
    }

    render() {
        const { getFieldDecorator } = this.props; 
        return (
            <div>
                <p>FromItem Form 表单提交</p>
                {
                    getFieldDecorator('user', {
                        rules: [{ required: true, message: '请输入姓名' }],
                    })(
                        <input type="请输入姓名" />
                    )
                }
                {
                    getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <input type="请输入密码" />
                    )
                }
                <button onClick={() => this.handleSubmit()}>提交</button>
            </div>
        )
    }
}

const CreateForm = (Comp) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state={};
            this.options = {}
        }

        handleChange = (e, filed) => {
            this.setState({[filed]: e.target.value});
        }

        handleBlur = (e, filed) => {
            if(e.target.value != ''){
                this.setState({[`${filed}message`]: ''})
            } else {
                if(this.options[filed]['rules'][0].required) {
                    this.setState({[`${filed}message`]: this.options[filed]['rules'][0]['message']})
                }
            }
        }

        getFieldDecorator = (filed, option) => {
            this.options[filed] = option;
            return (InputComp) => {
                return (
                    <div>
                        {React.cloneElement(InputComp, {
                            value: this.state[filed] || '',
                            onChange: (e) => this.handleChange(e, filed),
                            onBlur: (e) => this.handleBlur(e, filed)
                        })}
                        <p style={{color: 'red'}}>{this.state[`${filed}message`]}</p>
                    </div>
                )
            }
        }

        validateFields = (fn) => {
            let error=false;
            Object.keys(this.options).map((k, i) => {
                if(JSON.stringify(k) == '{}') {
                    error = false;
                } else {
                    if(this.options[k]['rules'][0].required){
                        if(this.state[k] == '' || this.state[k] == undefined){
                            error = true;
                            this.setState({[`${k}message`]: this.options[k]['rules'][0].message})
                        }
                    } else {
                        error = false;
                    }
                }
            });
            let _value = {};
            Object.keys(this.state).map((params) => {
                if(!params.includes('message')){
                    _value[params] = this.state[params]
                }
            })
            return fn(error, _value)
        }

        // 获取一组输入控件的值，如不传入参数，则获取全部组件的值
        getFieldsValue = (arrList) => {
            // arrList.map(k => {
            //     const _params = Object.keys(k)[0];
            //     this.setState({k, [`${_params}message`]: ''});
            // })
        }

        // 获取一个输入控件的值
        getFieldValue = (type) => {
            return this.state[type];
        }

        // 重置一组输入控件的值
        resetFields = () => {
            // this.state={};
            // this.forceUpdate();
        }

        // 设置一组输入控件的值
        setFieldsValue = () => {
            
        }

        render() {
            const _props = { ...this.props,
                getFieldDecorator: this.getFieldDecorator,
                validateFields: this.validateFields,
                getFieldsValue: this.getFieldsValue,
                getFieldValue: this.getFieldValue,
                resetFields: this.resetFields,
                setFieldsValue: this.setFieldsValue,
            }
            return (
                <div>
                    <Comp {..._props}/>
                </div>
            )
        }
    }
}

export default CreateForm(FromComp);