import React from 'react';
import { Typography, Form, Input, Icon, Button, Upload } from 'antd';

const addclass = () => {
    const fileList = [
        {
          uid: null,
          name: null,
          status: null,
          url: null,
          thumbUrl: null,
        },
    ];

    const props = {
        action: null,
        listType: null,
        defaultFileList: null,
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
                            <Upload {...props} name="class-image">
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