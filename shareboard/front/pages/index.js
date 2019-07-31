import React from 'react';
import { Card, Row, Col, Avatar  } from 'antd';

const Home = () => {
    
    const { Meta } = Card;

    const dummy = [
        {
            title: "DSM공모전",
            admin: "김주성",
            body: "공모전을 위한 클래스"
        },
        {
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
                            <Col span={4}>
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
                            </Col>
                        )
                    })
                }
            </Row>
            
        </div>
    )
}

export default Home;