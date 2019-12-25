import React, { Component } from 'react'
import { Button } from 'antd';
import config from "../../utils/config";
// import axios from 'axios';
import request from '../../utils/request';

export default class Auth extends Component {
    componentDidMount() {
        let _code = window.location.search.split("?code=")[1];
        let {Client_ID, Client_Secret} = config;
        console.log(_code)
        console.log(Client_ID)
        console.log(Client_Secret)
        
        request("https://github.com/login/oauth/access_token", {
            method: 'POST',
            body: JSON.stringify({
                client_id: Client_ID,
                client_secret: Client_Secret,
                code: _code
            }),
            headers: { 
                'Accept': 'application/json', 
            }
        }).then(data => {
            console.log(data);
        })

        // axios({
        //     method: 'POST',
        //     url: 'https://github.com/login/oauth/access_token',
        //     data: {
        //         client_id: Client_ID,
        //         client_secret: Client_Secret,
        //         code: _code
        //     },
        //     headers: {
        //         Accept: 'application/json',
        //     },
        // }).then(reponse => {
        //     console.log(reponse, '--------返回结果result-----')
        // })
    }

    render() {
        return (
            <div style={{margin: '60px auto',textAlign:'center'}}>
                <p><span>Client ID</span><br/>0cbc3d825bc046987287</p>
                <p><span>Client Secret</span><br/>711007098434f6676db69ae203a0f724951376aa</p>
                <Button style={{width: "300px"}} type="primary">Auth</Button>
            </div>
        )
    }
}
