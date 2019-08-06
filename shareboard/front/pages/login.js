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
                            name="user-id"
                            />
                        </div>
                        <div style={{marginTop: '10px', marginLeft:'800px', width:'300px'}}>
                            <label style={{display:'inline'}} htmlFor="user-Password">비밀번호</label>
                            <Input
                                name="user-password"
                                type="password"
                            />
                        </div>
                        <Button  style={{marginTop: '20px', marginLeft:'800px', width:'300px'}} type="primary" htmlType="submit" className="login-form-button">
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
        </div>
    )
}

export default login;