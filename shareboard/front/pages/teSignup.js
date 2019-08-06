import React from 'react';
import {Form, Input, Icon,Button} from 'antd';
import Link from 'next/link';
const login = () => {
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
                    <div className="BrandText">선생님 계정 생성</div>
                    <Form>
                        <div style={{marginLeft:'800px', width:'300px'}}>
                            <label style={{display:'inline'}} htmlFor="user-name">이름</label>
                            <Input
                            name="user-name"
                            />
                        </div>
                        <div style={{marginTop: '10px',marginLeft:'800px', width:'300px'}}>
                            <label style={{display:'inline'}} htmlFor="user-id">아이디</label>
                            <Input
                            name="user-id"
                            />
                        </div>
                        <div style={{marginTop: '10px', marginLeft:'800px', width:'300px'}}>
                            <label style={{display:'inline'}} htmlFor="user-Password">비밀번호</label>
                            <Input
                                name="user-Password"
                                type="password"
                            />
                        </div>
                        <div style={{marginTop: '10px', marginLeft:'800px', width:'300px'}}>
                            <label style={{display:'inline'}} htmlFor="user-Password-Check">비밀번호 확인</label>
                            <Input
                                name="user-Password-Check"
                                type="password"
                            />
                        </div>
                        <div style={{marginTop: '10px', marginLeft:'800px', width:'300px'}}>
                            <label style={{display:'inline'}} htmlFor="user-School">소속학교</label>
                            <Input
                                name="user-School"
                                type="password"
                            />
                        </div>
                        <Button  style={{marginTop: '20px', marginLeft:'800px', width:'300px'}} type="primary" htmlType="submit" className="login-form-button">
                            Sign up
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default login;