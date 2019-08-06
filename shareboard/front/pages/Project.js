import React from 'react';
import {Typography, Card, Collapse } from 'antd';
const Project = () => {
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
                submit: false
            },
            {
                body: "프로젝트하기",
                date: "2019-07-06",
                submit: false
            },
            {
                body: "프로젝트하기",
                date: "2019-07-03",
                submit: false
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
            <div className="classTitle">
                <div className="topic item"><Typography.Title mark>{dummy.topic}</Typography.Title></div>
            </div>
            <div className="classBody">
                <div className="task item">
                    <Card title="미제출 과제">
                        {dummy.task.map((v,i) => {
                            return (
                                <div key={i} style={{borderLeft: '5px solid #adb5bd'}}>
                                    <p style={{marginLeft: '5px'}}>{v.body}</p>
                                    <p style={{marginLeft: '5px'}}>{v.date} 까지</p>
                                </div>
                            )
                        })}
                    </Card>    
                </div>
                <div className="data item">
                    <div style={{ marginBottom: '5px', display: 'flex', weight:'756px', fontWeight: 'bold', fontFamily: 'NanumSquareB', fontSize: '20px'}}>
                        <div style={{ marginLeft: '40px', flex:'4', display:'inline'}}>제목</div>
                        <div style={{ marginLeft: '50px', flex:'2', display:'inline'}}>마감일</div>
                        <div style={{ flex:'1', display:'inline'}}>제출여부</div>
                    </div>
                    <Collapse>
                        {
                            dummy.data.map((v,i) => {
                                return (
                                    <Collapse.Panel header={
                                        <div style={{display: 'flex'}}>
                                            <div style={{flex:'2', display:'inline'}}>{v.body}</div>
                                            <div style={{flex:'1', display:'inline'}}>{v.date}</div>
                                            <div style={{display:'inline'}}>{v.submit ? "제출함" : "제출안함"}</div>
                                        </div>}
                                        key={i}>
                                        <p>ㅁㄴㅇㄴㅁㅇㅁㄴ</p>
                                    </Collapse.Panel>
                                )
                            })
                        }
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

export default Project;