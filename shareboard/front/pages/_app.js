import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';
import cookie from 'react-cookies';
import axios from 'axios';

const ShareBoard = ({Component}) => {
    const [userInfo, onChangeUserInfo] = useState('');
    useEffect(() => {
        if(cookie.load('token')) {
            axios.get("http://18.220.117.207:5000/user/student", {
                headers: {
                    'token': cookie.load('token')
                }
            }).then(response => {
                console.log(response)
                onChangeUserInfo(response.data)
            }).catch(error => {
                console.log(error)
            })
        } else {
            onChangeUserInfo('')
        }
    }, [])
    return (
        <div>
            <Head>
                <title>ShareBoard</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
                <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css"/>
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"/>
            </Head>
            <AppLayout userInfo={userInfo}/>
            <Component userInfo={userInfo}/>
        </div>
    )
}

ShareBoard.propTypes = {
    Component: PropTypes.elementType.isRequired
}

export default ShareBoard;