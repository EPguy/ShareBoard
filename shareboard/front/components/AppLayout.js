import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {Col, Row, Card,Icon, Button, Modal, Form, Input, Upload, Menu} from 'antd';

let checkMain = false;

const AppLayout = ({children}) => {
    const [joinVisible, onChangeJoinVisible] = useState(false);
    const [addVisible, onChangeAddVisible] = useState(false);
    const [settingVisible, onChangeSettingVisible] = useState(false);
    useEffect(() => {
        console.log(window.location.href);
        if(window.location.href === "http://localhost:3000/") {
            checkMain = true;
        } else {
            checkMain = false;
        }
        console.log(checkMain)
    });
    return (
        <div>
            <Menu mode="horizontal" style={{
                height: '300',
                display: 'flex',
                alignItems: 'center',
                fontSize: '17px'
            }}>
                <Menu.SubMenu title="SubMenu" style={{marginLeft: '20px'}}>
                    <Menu.Item><Link href="/"><a>메인 화면</a></Link></Menu.Item>
                    <Menu.Item onClick={() => onChangeAddVisible(true)}><a>클래스 추가</a></Menu.Item>
                    <Menu.Item onClick={() => onChangeJoinVisible(true)}><a>클래스 가입하기</a></Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="class" style={{marginLeft: '700px'}}><Link href="/class"><a>작업</a></Link></Menu.Item>
                <Menu.Item onClick={() => onChangeSettingVisible(true)}><a>관리</a></Menu.Item>
                <Menu.Item key="project"><Link href="/project"><a>과제</a></Link></Menu.Item>
                <Menu.Item key="group"><Link href="/group"><a>모둠</a></Link></Menu.Item>
                <Menu.Item key="setting"><Link href="/document"><a>자료</a></Link></Menu.Item>
                <Menu.Item key="login" style={{marginLeft: '600px'}}><Link href="/login"><a>로그인</a></Link></Menu.Item>
            </Menu>
            <Modal
                title="클래스 가입하기"
                visible={joinVisible}
                onOk={() => onChangeJoinVisible(false)}
                onCancel={() => onChangeJoinVisible(false)}
            >
                <Form>
                    <div>
                        <label style={{display:'inline'}} htmlFor="join-code">초대 코드 입력</label>
                        <Input
                            name="join-code"
                        />
                    </div>
                </Form>
            </Modal>
            <Modal
                title="클래스 생성하기"
                visible={addVisible}
                onOk={() => onChangeAddVisible(false)}
                onCancel={() => onChangeAddVisible(false)}
            >
                <Form>
                    <div>
                        <label style={{display:'inline'}} htmlFor="class-name">클래스 명</label>
                        <Input
                            name="class-name"
                        />
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <label style={{display:'inline'}} htmlFor="class-introduce">클래스 소개</label>
                        <Input.TextArea
                            rows={10}
                            name="class-introduce"
                        />
                    </div>
                    <div style={{marginTop: '20px'}}>클래스 대표 이미지</div>
                    <Upload name="class-Representative-image">
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