import React, { useState } from 'react';
import { AanalysticsDiv } from './index'


const AnalysticPosts = () => {
    return (
        <AanalysticsDiv>
            <h2>{sessionStorage.getItem('session')}</h2>
        </AanalysticsDiv>
    );
};

export default AnalysticPosts;