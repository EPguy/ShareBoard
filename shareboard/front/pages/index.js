import React from 'react';
import Link from 'next/link';
import { Card, Row, Col, Avatar  } from 'antd';

const Home = () => {
    
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
                                        style={{marginLeft: '20px', marginTop: '20px'}}
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