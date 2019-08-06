import React from 'react';
import {Col, Row, Card} from 'antd';

const Document = () => {
    return(
        <div>
            <Row gutter={16}>
                <Col span={4}>
                    <Card
                        style={{ boxShadow: '1.5px 1.5px 4px 0 rgba(0, 0, 0, 0.16)', marginLeft: '20px', marginTop: '20px'}}
                        cover={
                            <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                    >
                        <div style={{marginLeft: '80px', fontWeight:'bold', fontSize: '20px'}}>
                            삼각함수
                        </div>
                        <div style={{marginTop: '20px', marginLeft: '83px', fontWeight:'normal', fontSize: '15px'}}>
                            2019.08.16
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Document;