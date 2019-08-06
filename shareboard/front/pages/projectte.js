import React, {useState} from 'react';
import {Typography, Card, Collapse, Button, Icon, Modal, Form, Input, Upload } from 'antd';
const Project = () => {
    const [visible, onChangeVisible] = useState(false);
    const dummy = {
        topic: "김주성의 클래스",
        task: [
            {
                body: "공부하기",
                date: "2019-07-03"
            },
            {
                body: "프로젝트하기",
                date: "2019-07-06"
            },
        ],
        data: [
            {
                body: "공부하기",
                date: "2019-07-03",
                num: '5',
                user: [
                    "홍길동",
                    "괴물이",
                    "페이커"
                ]
            },
            {
                body: "프로젝트하기",
                date: "2019-07-06",
                num: '7'
            },
            {
                body: "프로젝트하기",
                date: "2019-07-03",
                num: '9'
            },
        ]
    }
    return (
        <div className="classWrapper">
            <style  jsx>
                {`
                    .classWrapper{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    }
                    .classTitle{
                        width: 1000px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        font-size: 20px;
                        border-bottom: 1px solid black;
                    }
                    .classBody{
                        width: 1000px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        flex-direction: row;
                    }
                    .topic{
                        margin-top: 100px;
                        
                    }
                    .task{
                        margin-top: 40px;
                        width: 213px;
                    }
                    .data{
                        margin-left: 40px;
                        width: 787px;
                    }
                    .item + .item{
                        margin-top: 1px;
                    }
                `}
            </style>
            <div style={{marginTop: '40px'}}className="classBody">
                <div className="task item">
                    <Card style={{ display:'flex', justifyContent:'center', alignItems:'center', height: 150, width:200}}>
                        <div style={{marginLeft: '8px', fontSize:'20px'}}>과제 생성하기</div>
                        <Icon onClick={() => onChangeVisible(true)} type="plus" style={{ marginTop: '20px', marginLeft: '50px', fontSize: '30px', color: '#08c' }} theme="outlined" />
                    </Card>    
                </div>
                <div className="data item">
                    <div style={{ marginBottom: '5px', display: 'flex', weight:'756px', fontWeight: 'bold', fontFamily: 'NanumSquareB', fontSize: '17px'}}>
                        <div style={{ marginLeft: '40px', flex:'3', display:'inline'}}>제목</div>
                        <div style={{ marginLeft: '190px', flex:'2', display:'inline'}}>마감일</div>
                        <div style={{ flex:'1', display:'inline'}}>제출 인원</div>
                    </div>
                    <Collapse>
                        {
                            dummy.data.map((v,i) => {
                                return (
                                    <Collapse.Panel header={
                                        <div style={{display: 'flex'}}>
                                            <div style={{flex:'2', display:'inline'}}>{v.body}</div>
                                            <div style={{flex:'1', display:'inline'}}>{v.date}</div>
                                            <div style={{display:'inline'}}>{v.num}/20</div>
                                        </div>}
                                        key={i}>
                                        <div style={{fontSize: '16px'}}>
                                            <div style={{marginRight: '20px', fontFamily: 'NanumSquareR', display:'inline'}}>{i+1}.</div>
                                            <div style={{paddingRight: '40px', borderRight: 'solid 0.5px #707070', display:'inline'}}>홍길동</div>
                                            <div style={{marginLeft: '40px', display:'inline'}}>2019.08.06 오전 08:32 제출</div>
                                        </div>
                                    </Collapse.Panel>
                                )
                            })
                        }
                    </Collapse>
                </div>
            </div>
            <Modal
                title="과제 생성하기"
                visible={visible}
                onOk={() => onChangeVisible(false)}
                onCancel={() => onChangeVisible(false)}
            >
                <Form>
                    <div>
                        <label style={{display:'inline'}} htmlFor="task-name">과제명</label>
                        <Input
                            name="task-name"
                        />
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <label style={{ display:'inline'}} htmlFor="task-body">과제 내용</label>
                        <Input.TextArea
                            rows={10}
                            name="task-body"
                        />
                    </div>
                    <div style={{marginTop: '20px'}}>과제 양식 첨부 파일</div>
                    <Upload name="class-image">
                        <Button>
                        <Icon type="upload" /> Upload
                        </Button>    
                    </Upload>
                </Form>
            </Modal>
        </div>
    )
}

export default Project;