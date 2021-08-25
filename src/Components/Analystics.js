import React, { useState, useEffect } from 'react';
import axios from 'axios'
import config from './../config.json'
import { getAreNotFollowingBack, getINotFollowingBack, getMutualFollows } from './utils'
import { InfoBox, AanalysticsDiv, SearchBox, PostsBox } from './index'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Modal from 'react-modal';
import {XButton, SearchResult} from './index'

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
        width:'75%',
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

    function openModal(kind) {
        if(kind === "following")
            setModalGroup(followings)
        else if(kind === "followers")
            setModalGroup(followers)
        else if(kind === "AreNotFollowingBack")
            setModalGroup(AreNotFollowingBack)
        else if(kind === "INotFollowingBack")
            setModalGroup(INotFollowingBack)
        else // mutual
            setModalGroup(mutualFollows)
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    useEffect(() => {
        getStatistics(setFollowings, setFollowers, setAreNotFollowingBack, setINotFollowingBack, setMutualFollows, setLoader);
    }, [])
    return (
        <AanalysticsDiv>
            <h2>{sessionStorage.getItem('session')}</h2>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <PostsBox onClick={() => window.location.href = "/Analystics/posts"} />

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
                    contentLabel="users modal"
                >
                    <XButton onClick={closeModal}/>
                    <br/>
                    {
                        modalGroup && modalGroup.map(element => <SearchResult onClick={() => window.open(`https://www.instagram.com/${element}/`)}>{element}</SearchResult>)
                    }
                </Modal>
            </div>
            <InfoBox onClick={() => openModal('following')}>
                <h5>Following<br /></h5>
                <h3>{followings.length}</h3>
            </InfoBox>
            <InfoBox onClick={() => openModal('followers')}>
                <h5>Followers<br /></h5>
                <h3>{followers.length}</h3>
            </InfoBox>
            <br />
            <InfoBox onClick={() => openModal('AreNotFollowingBack')}>
                <h5>Are Not Following Back<br /></h5>
                <h3>{AreNotFollowingBack.length}</h3>
            </InfoBox>
            <InfoBox onClick={() => openModal('INotFollowingBack')}>
                <h5>I'm Not Following Back<br /></h5>
                <h3>{INotFollowingBack.length}</h3>
            </InfoBox>
            <br />
            <InfoBox onClick={() => openModal('mutual')}>
                <h5>Mutual Friends<br /></h5>
                <h3>{mutualFollows.length}</h3>
            </InfoBox>
        </AanalysticsDiv>

    )
}

export default Analystics;