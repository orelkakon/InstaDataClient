import React, { useState, useEffect } from 'react';
import axios from 'axios'
import config from './../config.json'
import { getAreNotFollowingBack, getINotFollowingBack, getMutualFollows } from './utils'
import { InfoBox, AanalysticsDiv, SearchBox, PostsBox, UsersDiv, StarBox, SearchInput } from './index'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Modal from 'react-modal';
import { XButton, SearchResult } from './index'

// const getProfileImage = async (setSrcImg) => {
//     const username = sessionStorage.getItem('session')
//     const result = await axios({
//         method: 'post',
//         url: `${config.protocol}://${config.host}:${config.port}${config.urls.getprofile}`,
//         data: {
//             username: username
//         }
//     })
//     setSrcImg(result.data)
//     return
// }

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '75%',
        height: '60%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'black',
        color: 'white'
    },
};

const getStatistics = async (setFollowings, setFollowers, setAreNotFollowingBack, setINotFollowingBack, setMutualFollows, setLoader) => {
    const username = sessionStorage.getItem('session')
    const result1 = await axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.getmyfollowings}`,
        data: {
            username: username
        }
    })
    const result2 = await axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.getmyfollowers}`,
        data: {
            username: username
        }
    })
    const following = result1.data
    const followers = result2.data
    setFollowings(following)
    setFollowers(followers)
    setAreNotFollowingBack(getAreNotFollowingBack(following, followers))
    setINotFollowingBack(getINotFollowingBack(following, followers))
    setMutualFollows(getMutualFollows(following, followers))
    setLoader(false)
    return
}



const Analystics = () => {
    // const [srcImg, setSrcImg] = useState('')
    const [followings, setFollowings] = useState([])
    const [followers, setFollowers] = useState([])
    const [AreNotFollowingBack, setAreNotFollowingBack] = useState([])
    const [INotFollowingBack, setINotFollowingBack] = useState([])
    const [mutualFollows, setMutualFollows] = useState([])
    const [loader, setLoader] = useState(true)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalGroup, setModalGroup] = useState([])
    const [modalTitle, setModalTitle] = useState("")
    const [searchUser, setSearchUser] = useState("")
    
    function openModal(kind) {
        if (kind === "following") {
            setModalGroup(followings)
            setModalTitle(kind)
        }
        else if (kind === "followers") {
            setModalGroup(followers)
            setModalTitle(kind)
        }
        else if (kind === "AreNotFollowingBack") {
            setModalGroup(AreNotFollowingBack)
            setModalTitle("Are Not Following Back")
        }
        else if (kind === "INotFollowingBack") {
            setModalGroup(INotFollowingBack)
            setModalTitle("Im Not Following Back")
        }
        else { // mutual
            setModalGroup(mutualFollows)
            setModalTitle(kind)
        }
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setSearchUser("")
    }

    const isSearched = (element) => {
        return searchUser.length >= 2 && element.includes(searchUser)
    }

    useEffect(() => {
        getStatistics(setFollowings, setFollowers, setAreNotFollowingBack, setINotFollowingBack, setMutualFollows, setLoader);
    }, [])
    return (
        <AanalysticsDiv>
            <h2 style={{fontFamily:'cursive'}}>{sessionStorage.getItem('session')}</h2>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <PostsBox onClick={() => window.location.href = "/Analystics/posts"} />
                <StarBox onClick={() => window.location.href = "/Analystics/stars"} />
                <SearchBox onClick={() => window.location.href = "/Analystics/search"} />
            </div>
            <br />
            <div>
                {
                    loader &&
                    <Loader
                        type="Oval"
                        color="#fff"
                        height={50}
                        width={50}
                    />
                }
            </div>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="users modal"
                >
                    <XButton onClick={closeModal} />
                    <UsersDiv>
                        <h2 style={{textDecoration:"underline", fontWeight:"bold"}}>{modalTitle}</h2>
                        <SearchInput type="text" id="search" placeholder="Search User..." onChange={e => setSearchUser(e.target.value)}></SearchInput>
                        <br />
                        {
                            modalGroup && modalGroup.map((element, index) => <SearchResult isSearched={isSearched(element)} key={index} onClick={() => window.open(`https://www.instagram.com/${element}/`)}>{element}</SearchResult>)
                        }
                    </UsersDiv>
                </Modal>
            </div>
            <InfoBox onClick={() => openModal('following')}>
                <h3>Following<br /></h3>
                <h1>{followings.length}</h1>
            </InfoBox>
            <InfoBox onClick={() => openModal('followers')}>
                <h3>Followers<br /></h3>
                <h1>{followers.length}</h1>
            </InfoBox>
            <br />
            <InfoBox onClick={() => openModal('AreNotFollowingBack')}>
                <h3>Are Not Following Back<br /></h3>
                <h1>{AreNotFollowingBack.length}</h1>
            </InfoBox>
            <InfoBox onClick={() => openModal('INotFollowingBack')}>
                <h3>I'm Not Following Back<br /></h3>
                <h1>{INotFollowingBack.length}</h1>
            </InfoBox>
            <br />
            <InfoBox onClick={() => openModal('Mutual')}>
                <h3>Mutual Friends<br /></h3>
                <h1>{mutualFollows.length}</h1>
            </InfoBox>
        </AanalysticsDiv>

    )
}

export default Analystics;