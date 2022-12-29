import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <Spinner className='mx-auto mt-5' animation="grow" />
        </div>
    );
};

export default Loading;