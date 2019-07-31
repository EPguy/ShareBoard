import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';

const ShareBoard = ({Component}) => {
    return (
        <div>
            <Head>
                <title>ShareBoard</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <AppLayout/>
            <Component/>
        </div>
    )
}

ShareBoard.propTypes = {
    Component: PropTypes.elementType.isRequired
}

export default ShareBoard;