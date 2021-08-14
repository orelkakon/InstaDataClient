import React, { useState } from 'react';
import { AanalysticsDiv, KindSearchButton } from './index'
import hashtagLogo from './../Assets/hashtag.png'
import locationLogo from './../Assets/location.jpg'
import userLogo from './../Assets/user.png'


const AnalysticPosts = () => {
    const [searchUser, setSearchUser] = useState("")
    const [searchLocation, setSearchLocation] = useState("")
    const [searchHashtag, setSearchHashtag] = useState("")
    const [searchChosen, setSearchChosen] = useState("")

    const handleReset = () => {
        setSearchHashtag("")
        setSearchLocation("")
        setSearchUser("")
    }

    const handleKind = (kind) => {
        setSearchChosen(kind)
    }

    return (
        <AanalysticsDiv>
            <h2>{sessionStorage.getItem('session')}</h2>
            <KindSearchButton onClick={() => handleKind("users")} show={searchChosen === "users"} logo={userLogo} />
            <KindSearchButton onClick={() => handleKind("locations")} show={searchChosen === "locations"} logo={locationLogo} />
            <KindSearchButton onClick={() => handleKind("hashtags")} show={searchChosen === "hashtags"} logo={hashtagLogo} />
            <br /><br />
            {
                searchChosen === "users" &&
                <input type="text" placeholder="Search Users..." onChange={e => setSearchUser(e.target.value)}></input>
            }
            {
                searchChosen === "locations" &&
                <input type="text" placeholder="Search Locations..." onChange={e => setSearchLocation(e.target.value)}></input>
            }
            {
                searchChosen === "hashtags" &&
                <input type="text" placeholder="Search Hashtags..." onChange={e => setSearchHashtag(e.target.value)}></input>
            }
            <br />
            <button>Submit</button>
            <button onClick={() => handleReset()}>Reset</button>
        </AanalysticsDiv>
    );
};

export default AnalysticPosts;