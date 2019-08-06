import React from 'react';
import Link from 'next/link';
const signup = () => {
    return(
        <div>
            <style jsx>
                {`
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
                    .sign-up-img{
                        width: 250px;
                    }
                    .LB {
                        margin-top: 60px;
                        margin-left: 850px;
                        width: 200px;
                        height: 45px;
                        border-radius: 4px;
                        border: solid 3px #e2e2e2;
                        background-color: #ffffff;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .LT {
                        font-family: NanumSquareB;
                        font-size: 16px;
                        font-weight: normal;
                        font-style: normal;
                        font-stretch: normal;
                        line-height: 1.17;
                        letter-spacing: normal;
                        text-align: left;
                        color: #969696;
                    }
                `}
            </style>
            <img className="logo" alt="example" src={`https://i.ibb.co/10JLgtg/logo2.png`} />
            <div className="BrandText">SHARE BOARD</div>
            <div>
                <Link href="/stSignup"><img style={{marginLeft: '650px'}} className="sign-up-img"src={`https://i.ibb.co/5jTDPPm/1.png`} /></Link>
                <Link href="/teSignup"><img style={{marginLeft: '100px'}} className="sign-up-img" src={`https://i.ibb.co/mcqHv7d/2.png`} /></Link>
            </div>
            <div className="LB">
                    <div className="LT"><Link href="/login" >로그인 하러가기</Link></div>
            </div>
        </div>
    )
}

export default signup;