import React from 'react';
import { AanalysticsDiv } from './index'


const AnalysticsSearch = () => {
    return (
        <AanalysticsDiv>
            <h2>{sessionStorage.getItem('session')}</h2>
        </AanalysticsDiv>
    );
};

export default AnalysticsSearch;