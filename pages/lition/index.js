import React from 'react';
import { Header } from '../../components'

const LitionPage = () => (
    <div>
        <Header />
        <h1>Hey from lition</h1>
    </div>
);

LitionPage.getInitialProps = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => (resolve({hey: "ssssasd"})), 2000);
    });
    // reduxStore.dispatch();
    return promise
};

export default LitionPage;