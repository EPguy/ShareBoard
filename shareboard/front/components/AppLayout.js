import React from 'react';
import Link from 'next/link';
import { Menu, Typography } from 'antd';
const AppLayout = ({children}) => {
    const dummy = {
        classname: "DSM"
    }
    return (
        <div>
            <Menu mode="horizontal" style={{
                    height: '300',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '17px'
                }}>
                <Menu.SubMenu title="SubMenu" style={{marginLeft: '20px'}}>
                    <Menu.Item><Link href="/user/info"><a>내 정보</a></Link></Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="class" style={{marginLeft: '700px'}}><Link href="/class"><a>수업</a></Link></Menu.Item>
                <Menu.Item key="project"><Link href="/project"><a>과제</a></Link></Menu.Item>
                <Menu.Item key="group"><Link href="/group"><a>모둠</a></Link></Menu.Item>
                <Menu.Item key="setting"><Link href="/setting"><a>관리</a></Link></Menu.Item>
                <Menu.Item key="login" style={{marginLeft: '700px'}}><Link href="/login"><a>로그인</a></Link></Menu.Item>
            </Menu>
        </div>
    )
}

export default AppLayout;