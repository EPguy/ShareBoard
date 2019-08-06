import React, {useCallback, useState} from 'react';
import {Form, Input, Icon,Button} from 'antd';
import Link from 'next/link';
import axios from 'axios';

export const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
      setter(e.target.value);
    }, []);
    return [value, handler];
};
const login = () => {
    const [id, onChangeId] = useInput('');
    const [name, onChangeName] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, onChangePasswordCheck] = useInput('');

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        axios.post("http://18.220.117.207:5000/auth/signUp/student", {
            id: id,
            password: password,
            name: name
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
      }, [id, password]);
    return (
        <div>
            <style jsx>
                {`
                    .loginWrapper{
                        height: 600px;
                    }
                    .logo {
                        margin-left: 900px;
                        margin-top: 100px;
                        width: 100px;
                    }
                    .BrandText{
                        margin-left: 750px;
                        margin-top: 25px;
                        margin-bottom: 70px;
                        width: 400px;
                        height: 20.5px;
                        font-family: GROBOLD;
                        font-size: 30px;
                        font-weight: bold;
                        font-style: normal;
                        font-stretch: normal;
                        line-height: 1.21;
                        letter-spacing: normal;
                        text-align: center;
                        color: #000000;       
                    }
                `}
            </style>
            <div className="loginWrapper">
                <div className="test">
                    <img className="logo" alt="example" src={`https://i.ibb.co/10JLgtg/logo2.png`} />
                    <div className="BrandText">학생 계정 생성</div>
                    <Form>
                        <div style={{marginLeft:'800px', width:'300px'}}>
                            <label style={{display:'inline'}} htmlFor="user-name">이름</label>
                            <Input
                            value={name}
                            onChange={onChangeName}
                            name="user-name"
                            />
                        </div>
                        <div style={{marginTop: '10px',marginLeft:'800px', width:'300px'}}>
                            <label style={{display:'inline'}} htmlFor="user-id">아이디</label>
                            <Input
                            value={id}
                            onChange={onChangeId}
                            name="user-id"
                            />
                        </div>
                        <div style={{marginTop: '10px', marginLeft:'800px', width:'300px'}}>
                            <label style={{display:'inline'}} htmlFor="user-Password">비밀번호</label>
                            <Input
                                value={password}
                                onChange={onChangePassword}
                                name="user-Password"
                                type="password"
                            />
                        </div>
                        <div style={{marginTop: '10px', marginLeft:'800px', width:'300px'}}>
                            <label style={{display:'inline'}} htmlFor="user-Password-Check">비밀번호 확인</label>
                            <Input
                                value={passwordCheck}
                                onChange={onChangePasswordCheck}
                                name="user-Password-Check"
                                type="password"
                            />
                        </div>
                        <Button  onClick={onSubmit} style={{marginTop: '20px', marginLeft:'800px', width:'300px'}} type="primary" htmlType="submit" className="login-form-button">
                            Sign up
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default login;