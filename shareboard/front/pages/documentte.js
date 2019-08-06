import React, {useState} from 'react';
import {Col, Row, Card,Icon, Button, Modal, Form, Input, Upload} from 'antd';

const Document = () => {
    const [visible, onChangeVisible] = useState(false);
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
                <Col span={4}>
                    <Card
                        style={{ boxShadow: '1.5px 1.5px 4px 0 rgba(0, 0, 0, 0.16)', marginLeft: '20px', marginTop: '20px'}}
                    >
                        <Icon onClick={() => onChangeVisible(true)} type="plus" style={{display:'flex', justifyContent:'center', alignItems:'center', height:'245px', fontSize: '50px'}}/>
                    </Card>
                </Col>
            </Row>
            <Modal
                title="수업 자료 올리기"
                visible={visible}
                onOk={() => onChangeVisible(false)}
                onCancel={() => onChangeVisible(false)}
            >
                <Form>
                    <div>
                        <label style={{display:'inline'}} htmlFor="doc-title">자료 제목</label>
                        <Input
                            name="doc-title"
                        />
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <label style={{ display:'inline'}} htmlFor="doc-body">자료 내용</label>
                        <Input.TextArea
                            rows={10}
                            name="doc-body"
                        />
                    </div>
                    <div style={{marginTop: '20px'}}>자료 첨부 파일</div>
                    <Upload name="class-image">
                        <Button>
                        <Icon type="upload" /> Upload
                        </Button>    
                    </Upload>
                    <div style={{marginTop: '20px'}}>대표 이미지 파일</div>
                    <Upload name="class-image">
                        <Button>
                        <Icon type="upload" /> Upload
                        </Button>    
                    </Upload>
                </Form>
            </Modal>
        </div>
    );
};

export default Document;