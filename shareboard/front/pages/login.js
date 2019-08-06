import React, {useCallback, useState} from 'react';
import {Form, Input, Icon, Button, Modal} from 'antd';
import Link from 'next/link';
import axios from 'axios';
import cookie from 'react-cookies';

export const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
      setter(e.target.value);
    }, []);
    return [value, handler];
};

const login = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [loginVisible, onChangeLoginVisible] = useState(false);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        axios.post("http://18.220.117.207:5000/auth/signIn", {
            id: id,
            password: password,
        }).then(response => {
            cookie.save('token',response.data.token)
            onChangeLoginVisible(true)
        }).catch(error => {
            onChangeLoginVisible(false)
            console.log(error)
        })
        console.log(id, password)
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
                    .RB{
                        margin-top: 5px;
                        display: inline;
                        margin-left: 800px;
                        width: 110.5px;
                        height: 10px;
                        font-family: NanumSquareB;
                        font-size: 12px;
                        font-weight: normal;
                        font-style: normal;
                        font-stretch: normal;
                        line-height: 1.17;
                        letter-spacing: normal;
                        text-align: left;
                        color: #969696;
                    }
                    .RB2{
                        margin-top: 5px;
                        margin-left: 150px;
                        display: inline;
                        width: 36.5px;
                        height: 11px;
                        font-family: NanumSquareB;
                        font-size: 12px;
                        font-weight: normal;
                        font-style: normal;
                        font-stretch: normal;
                        line-height: 1.15;
                        letter-spacing: normal;
                        text-align: left;
                        color: #a7cae9;
                    }
                `}
            </style>
            <div className="loginWrapper">
                <div className="test">
                    <img className="logo" alt="example" src={`https://i.ibb.co/10JLgtg/logo2.png`} />
                    <div className="BrandText">SHARE BOARD</div>
                    <Form>
                        <div style={{marginLeft:'800px', width:'300px'}}>
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
                                name="user-password"
                                type="password"
                            />
                        </div>
                        <Button  onClick={onSubmit} style={{marginTop: '20px', marginLeft:'800px', width:'300px'}} type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        <div className="RB_Wrapper">
                            <div className="RB">
                                계정이 없으신가요?
                            </div>
                            <div className="RB2">
                                <Link href="/signup">회원가입</Link>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            <Modal
                title="로그인 성공!"
                visible={loginVisible}
                onOk={() => window.location.href="/"}
                onCancel={() => window.location.href="/"}
            >
                <Form>
                    <div>로그인에 성공하였습니다!</div>
                </Form>
            </Modal>
        </div>
    )
}

export default login;