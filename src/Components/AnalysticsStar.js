import React, { useEffect, useState } from 'react';
import { AanalysticsDiv, StarButtonBox, BackBox } from './index'
import Modal from 'react-modal';
import { XButton, UsersDiv } from './index'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import axios from 'axios'
import config from './../config.json'
import User from './User'
import { getBestFollowers, getBestAdmires, sortDict } from './utils'

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


const getFollowersAdmiresData = async (setLoader, setBestLikesFollowers, setBestCommentFollowers, setBestLikesAdmires, setBestCommentAdmires) => {
    const username = sessionStorage.getItem('session')
    const postsData = await axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.getmydataposts}`,
        data: {
            username: username
        }
    })
    const bestFollowersData = getBestFollowers(postsData.data, username)
    setBestLikesFollowers(bestFollowersData[0])
    setBestCommentFollowers(bestFollowersData[1])
    const bestAdmiresData = getBestAdmires(postsData.data, username)
    setBestLikesAdmires(bestAdmiresData[0])
    setBestCommentAdmires(bestAdmiresData[1])

    setLoader(false)
}

const AnalysticsStar = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalGroup, setModalGroup] = useState([])

    const [bestLikesFollowers, setBestLikesFollowers] = useState([])
    const [bestCommentFollowers, setBestCommentFollowers] = useState([])
    const [bestLikesAdmires, setBestLikesAdmires] = useState([])
    const [bestCommentAdmires, setBestCommentAdmires] = useState([])

    const [top, setTop] = useState(1)
    const [modalTitle, setModalTitle] = useState("")
    const [loader, setLoader] = useState(true)

    const openModal = (kind) => {
        if (kind === "MostLikesFollowers") {
            setModalGroup(sortDict(bestLikesFollowers, top))
            setModalTitle("Most Likes Followers")
        }
        else if (kind === "MostCommentsFollowers") {
            setModalGroup(sortDict(bestCommentFollowers, top))
            setModalTitle("Most Comments Followers")
        }
        else if (kind === "MostLikesAdmires") {
            setModalGroup(sortDict(bestLikesAdmires, top))
            setModalTitle("Most Likes Admires")
        }
        else if (kind === "MostCommentsAdmires") {
            setModalGroup(sortDict(bestCommentAdmires, top))
            setModalTitle("Most Comments Admires")
        }
        setIsOpen(true);
    }
    const closeModal = () => { setIsOpen(false) }

    useEffect(() => {
        getFollowersAdmiresData(setLoader, setBestLikesFollowers, setBestCommentFollowers, setBestLikesAdmires, setBestCommentAdmires);
    }, [])
    return (
        <AanalysticsDiv>
            <BackBox onClick={() => window.location.href = "/Analystics"} />
            <br />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                style={customStyles}
                contentLabel="users modal"
            >
                <XButton onClick={closeModal} />
                <UsersDiv>
                    <div>
                        {
                            loader ?
                                <Loader
                                    type="Oval"
                                    color="#fff"
                                    height={50}
                                    width={50}
                                /> :
                                <>
                                    <h2 style={{ textDecoration: "underline", fontWeight: "bold", color: 'yellow' }}>{modalTitle}</h2>
                                    <br />
                                    {
                                        modalGroup && modalGroup.map((user, index) => <><User key={index} name={user[0]} value={user[1]} /><br /></>)
                                    }
                                </>
                        }
                    </div>
                </UsersDiv>
            </Modal>
            <h2>{sessionStorage.getItem('session')}</h2>
            <label>Choose a Top search </label>
            <select style={{ width: '60px', height: '30px', color: 'white', backgroundColor: 'black', fontSize: '17px' }} name="top" id="tops" onChange={(e) => setTop(Number(e.target.value))}>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
            <br />
            <h4 style={{ textDecoration: "underline" }}>MY BEST FOLLOWERS</h4 >
            <StarButtonBox onClick={() => openModal("MostLikesFollowers")}>
                Most Likes
            </StarButtonBox>
            <StarButtonBox onClick={() => openModal("MostCommentsFollowers")}>
                Most Comments
            </StarButtonBox>
            <h4 style={{ textDecoration: "underline" }}>MY SECRET ADMIRES</h4 >
            <StarButtonBox onClick={() => openModal("MostLikesAdmires")}>
                Most Likes
            </StarButtonBox>
            <StarButtonBox onClick={() => openModal("MostCommentsAdmires")}>
                Most Comments
            </StarButtonBox>
        </AanalysticsDiv>
    );
};

export default AnalysticsStar;