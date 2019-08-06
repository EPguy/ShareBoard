import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { Card, Row, Col, Avatar  } from 'antd';
import axios from 'axios';
import cookie from 'react-cookies';

const Home = (userInfo) => {
    const [classArray, onChangeClassArray] = useState(null);

    useEffect(() => {
        console.log(userInfo.userInfo.id)
        if(userInfo !== '') {
            axios.get(`http://18.220.117.207:5000/class/:${userInfo.userInfo.id}`,{
                headers:{
                    'token': cookie.load('token')
                }
            }).then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
        } else {
            console.log("bye")
        }
    })
    const { Meta } = Card;

    const dummy = [
        {
            id: "1",
            title: "DSM공모전",
            admin: "김주성",
            body: "공모전을 위한 클래스"
        },
        {
            id: "2",
            title: "자바스크립트 클래스",
            admin: "으리야",
            body: "중급 개발자 이상만"
        }
    ]
    return (
        <div>
            <Row gutter={16}>
                {
                    dummy.map(v => {
                        return (
                            <Col key={v.id} span={4}>
                                <Link href={`/class?id=${v.id}`}>
                                    <Card 
                                        hoverable={true}
                                        style={{ boxShadow: '1.5px 1.5px 4px 0 rgba(0, 0, 0, 0.16)', marginLeft: '20px', marginTop: '20px'}}
                                        cover={
                                            <img
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                            />
                                        }
                                        
                                        > 
                                        <Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={v.title}
                                            description={v.body}
                                        />
                                    </Card>
                                </Link>
                            </Col>
                        )
                    })
                }
            </Row>
            
        </div>
    )
}

export default Home;