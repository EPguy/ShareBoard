import React, {useState, useEffect, useCallback} from 'react';
import Link from 'next/link';
import {Col, Row, Card,Icon, Button, Modal, Form, Input, Upload, Menu, DatePicker } from 'antd';
import axios from 'axios';
import cookie from 'react-cookies';

export const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
      setter(e.target.value);
    }, []);
    return [value, handler];
};

const AppLayout = ({userInfo, children}) => {
    const [joinVisible, onChangeJoinVisible] = useState(false);
    const [addVisible, onChangeAddVisible] = useState(false);
    const [settingVisible, onChangeSettingVisible] = useState(false);
    const [className, onChangeClassName] = useInput('');
    const [classIntroduce, onChangeClassIntroduce] = useInput('');
    const [imgURL, onChangeImgURL] = useState('');
    const [joinClassName, onChangeJoinClassName] = useInput('');
    const props = {
        name: 'img',
        action: 'http://18.220.117.207:5000/class/img',
        onChange(info) {
          if (info.file.status !== 'uploading') {
            onChangeImgURL(info.file.name)
          } 
        },
      };
    const onSubmit = () => {
        axios.post("http://18.220.117.207:5000/class",{
            className:className,
            info:classIntroduce,
            img: `http://18.220.117.207:5000/${imgURL}`
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
        console.log(className, classIntroduce, `http://18.220.117.207:5000/${imgURL}`)
    }
    const onJoin = () => {
        axios.post(`http://18.220.117.207:5000/class/join/:${joinClassName}`,{
            header: {
                'token': cookie.load('token')
            }
        }).then(response => {
            console.log(response)
            onChangeJoinVisible(false)
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
                <Menu mode="horizontal" style={{
                                height: '300',
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '17px'
                            }}
                            theme="dark"
                            >
                                <Menu.SubMenu title="SubMenu" style={{marginLeft: '20px'}}>
                                    <Menu.Item><Link href="/"><a>메인 화면</a></Link></Menu.Item>
                                    <Menu.Item onClick={() => onChangeAddVisible(true)}><a>클래스 추가</a></Menu.Item>
                                    <Menu.Item onClick={() => onChangeJoinVisible(true)}><a>클래스 가입하기</a></Menu.Item>
                                </Menu.SubMenu>
                                <Menu.Item key="class" style={{ marginLeft: '650px'}}><Link href="/class"><a>작업</a></Link></Menu.Item>
                                <Menu.Item onClick={() => onChangeSettingVisible(true)}><a>관리</a></Menu.Item>
                                <Menu.Item key="project"><Link href="/project"><a>과제</a></Link></Menu.Item>
                                <Menu.Item key="group"><Link href="/group"><a>모둠</a></Link></Menu.Item>
                                <Menu.Item key="setting"><Link href="/document"><a>자료</a></Link></Menu.Item>
                                {
                                    userInfo ? (
                                        <Menu.Item key="login" style={{marginLeft: '650px'}}><Link href="/login"><a>로그아웃</a></Link></Menu.Item>
                                    ) : (
                                        <Menu.Item key="login" style={{marginLeft: '650px'}}><Link href="/login"><a>로그인</a></Link></Menu.Item>
                                    )
                                }
                                
                </Menu>
            
            <Modal
                title="클래스 가입하기"
                visible={joinVisible}
                onOk={() => onJoin()}
                onCancel={() => onChangeJoinVisible(false)}
            >
                <Form>
                    <div>
                        <label style={{display:'inline'}} htmlFor="join-class-name">가입할 클래스명 입력</label>
                        <Input
                            value={joinClassName}
                            onChange={onChangeJoinClassName}
                            name="join-class-name"
                        />
                    </div>
                </Form>
            </Modal>
            <Modal
                title="클래스 생성하기"
                visible={addVisible}
                onOk={() => onSubmit()}
                onCancel={() => onChangeAddVisible(false)}
            >
                <Form>
                    <div>
                        <label style={{display:'inline'}} htmlFor="class-name">클래스 명</label>
                        <Input
                            value={className}
                            onChange={onChangeClassName}
                            name="class-name"
                        />
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <label style={{display:'inline'}} htmlFor="class-info">클래스 소개</label>
                        <Input
                            value={classIntroduce}
                            onChange={onChangeClassIntroduce}
                            name="class-info"
                        />
                    </div>
                    <div style={{marginTop: '20px'}}>클래스 대표 이미지</div>
                    <Upload {...props}>
                        <Button>
                            <Icon type="upload" /> Upload
                        </Button>    
                    </Upload>
                </Form>
            </Modal>
            <Modal
                title="관리"
                visible={settingVisible}
                onOk={() => onChangeSettingVisible(false)}
                onCancel={() => onChangeSettingVisible(false)}
            >
                <Form>
                    <div>
                        <label style={{display:'inline'}} htmlFor="class-code">수업 초대 코드</label>
                        <Input
                            name="class-code"
                        />
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <label style={{display:'inline'}} htmlFor="student-information">학생 정보</label>
                        <Input.TextArea
                            rows={10}
                            name="student-information"
                        />
                    </div>
                </Form>
            </Modal>    
        </div>
    )
}

export default AppLayout;