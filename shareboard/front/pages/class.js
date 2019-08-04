import React from 'react';
import {Typography, Card} from 'antd';
const Class = () => {
    const dummy = {
        topic: "자바스크립트",
        task: [
            "공부하기",
            "프로젝트하기",
            "보완하기"
        ],
        data: {
            date: "2019-08-04",
            text: "안녕하세요"
        },
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
                <div className="topic item"><Typography.Title mark>주제: {dummy.topic}</Typography.Title></div>
            </div>
            <div className="classBody">
                <div className="task item">
                    <Card title="남은 과제">
                        {dummy.task.map((v,i) => {
                            return (
                                <p key={i}>{v}</p>
                            )
                        })}
                    </Card>    
                </div>
                <div className="data item">
                    <Card title={dummy.data.date}>
                        {dummy.data.text}
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Class;