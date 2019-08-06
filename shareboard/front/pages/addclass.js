import React, {useState} from 'react';
import { Typography, Form, Input, Icon, Button, Upload } from 'antd';

const addclass = () => {
    const [className, onChangeClassName] = useState('');
    const [classIntroduce, onChangeClassIntroduce] = useState('');

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    };

    return (
        <div>
            <style jsx>
                {`

                `}
            </style>
            <Typography.Title style={{marginTop: '100px', marginLeft: '860px'}} level={2}>클래스 생성하기</Typography.Title> 
            <Form>
                        <div style={{marginLeft:'830px', width:'300px'}}>
                            <label style={{display:'inline'}} htmlFor="class-name">클래스명</label>
                            <Input
                            name="class-name"
                            />
                        </div>
                        <div style={{marginLeft:'830px', width:'300px'}}>
                            <label style={{display:'inline'}} htmlFor="class-information">클래스 소개</label>
                            <Input.TextArea
                            rows={10}
                            name="class-information"
                            />
                        </div>
                        <div style={{marginLeft:'830px', width:'300px'}}>
                            <label style={{display:'inline'}} htmlFor="class-image">클래스 대표 이미지</label> <br/>
                            <Upload {...props}>
                                <Button>
                                <Icon type="upload" /> Upload
                                </Button>    
                            </Upload>
                        </div>
                        <Button  style={{marginTop: '20px', marginLeft:'830px', width:'300px'}} type="primary" htmlType="submit" className="login-form-button">
                            클래스 생성하기
                        </Button>
                    </Form>           
        </div>
    );
};

export default addclass;