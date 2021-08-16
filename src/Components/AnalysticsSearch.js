import React, { useState } from 'react';
import { AanalysticsDiv, KindSearchButton, SearchInput, SearchButtons, SearchResultDiv } from './index'
import hashtagLogo from './../Assets/hashtag.png'
import axios from 'axios'
import config from './../config.json'
import locationLogo from './../Assets/location.jpg'
import userLogo from './../Assets/user.png'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { notify } from './../App';
import Results from './Results'


const AnalysticsSearch = () => {
    const [searchUser, setSearchUser] = useState("")
    const [searchLocation, setSearchLocation] = useState("")
    const [searchHashtag, setSearchHashtag] = useState("")
    const [searchChosen, setSearchChosen] = useState("")
    const [loader, setLoader] = useState(false)
    const [results, setResults] = useState([])

    const handleReset = () => {
        setSearchHashtag("")
        setSearchLocation("")
        setSearchUser("")
        document.getElementById("search").value = ""
    }

    const handleKind = (kind) => {
        setSearchChosen(kind)
        setResults([])
    }

    const handleSubmit = async () => {
        setResults([])
        setLoader(true)
        let queryString = null
        let result = []
        if(document.getElementById("search").value === ""){
            notify("Empty search")
            setLoader(false)
            return;
        }
        switch (searchChosen) {
            case "users": {
                queryString = searchUser
                result = await axios({
                    method: 'post',
                    url: `${config.protocol}://${config.host}:${config.port}${config.urls.gettopsearch}`,
                    data: {
                        search: queryString
                    }
                })
                break
            }
            case "hashtags": {
                queryString = searchHashtag
                result = await axios({
                    method: 'post',
                    url: `${config.protocol}://${config.host}:${config.port}${config.urls.gettophashtag}`,
                    data: {
                        search: queryString
                    }
                })
                break
            }
            case "locations": {
                queryString = searchLocation
                result = await axios({
                    method: 'post',
                    url: `${config.protocol}://${config.host}:${config.port}${config.urls.gettoplocation}`,
                    data: {
                        search: queryString
                    }
                })
                break
            }
            default: {
                break
            }
        }
        sessionStorage.setItem('inputSearch', queryString)
        setResults(result.data)
        document.getElementById("search").value = ""
        setLoader(false)
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
                <SearchInput type="text" id="search" placeholder="Search Users..." onChange={e => setSearchUser(e.target.value)}></SearchInput>
            }
            {
                searchChosen === "locations" &&
                <SearchInput type="text" id="search" placeholder="Search Locations..." onChange={e => setSearchLocation(e.target.value)}></SearchInput>
            }
            {
                searchChosen === "hashtags" &&
                <SearchInput type="text" id="search" placeholder="Search Hashtags..." onChange={e => setSearchHashtag(e.target.value)}></SearchInput>
            }
            <br />
            {
                searchChosen &&
                <>
                    <SearchButtons onClick={() => handleSubmit()}>Search</SearchButtons>
                    <SearchButtons onClick={() => handleReset()}>Reset</SearchButtons>
                </>
            }
            <br />
            {
                loader &&
                <>
                <br/>
                <Loader
                    type="Oval"
                    color="#fff"
                    height={50}
                    width={50}
                />
                </>
            }
            <br />
            <SearchResultDiv>
                {
                    results.names && <Results results={results} kind={searchChosen}/>
                }
            </SearchResultDiv>
        </AanalysticsDiv>
    );
};

export default AnalysticsSearch;