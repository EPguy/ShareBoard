import React, {useEffect} from 'react';
import Link from 'next/link';
import { Menu, Typography } from 'antd';

let checkMain = false;

const AppLayout = ({children}) => {
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
                    <Menu.Item><Link href="/addclass"><a>클래스 추가</a></Link></Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="class" style={{marginLeft: '700px'}}><Link href="/class"><a>작업</a></Link></Menu.Item>
                <Menu.Item key="project"><Link href="/project"><a>과제</a></Link></Menu.Item>
                <Menu.Item key="group"><Link href="/group"><a>모둠</a></Link></Menu.Item>
                <Menu.Item key="setting"><Link href="/setting"><a>관리</a></Link></Menu.Item>
               <Menu.Item key="login" style={{marginLeft: '700px'}}><Link href="/login"><a>로그인</a></Link></Menu.Item>
            </Menu>
        </div>
    )
}

export default AppLayout;