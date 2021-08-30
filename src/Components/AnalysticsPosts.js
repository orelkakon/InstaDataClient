import React, { useState, useEffect } from 'react';
import { AanalysticsDiv, PostCatagoryBox, XButton, UsersDiv } from './index'
import goodLogo from './../Assets/good.png'
import badLogo from './../Assets/bad.png'
import Modal from 'react-modal';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import axios from 'axios'
import config from './../config.json'
import { getMyMostCommented, getMyMostLiked, getMyMostPopluar } from './utils'
import Post from './Post'

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

const geyMyPostsData = async (setLikes, setComments, setPopluar, setLoader) => {
    const username = sessionStorage.getItem('session')
    const postsData = await axios({
        method: 'post',
        url: `${config.protocol}://${config.host}:${config.port}${config.urls.getmypostsdata}`,
        data: {
            username: username
        }
    })
    const topComments = getMyMostCommented(postsData.data)
    setComments(topComments)
    const topLikes = getMyMostLiked(postsData.data)
    setLikes(topLikes)
    const topPopluar = getMyMostPopluar(postsData.data)
    setPopluar(topPopluar)

    setLoader(false)
    return;
}

const AnalysticPosts = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [loader, setLoader] = useState(true)
    const [likes, setLikes] = useState([])
    const [comments, setComments] = useState([])
    const [popluar, setPopluar] = useState([])
    const [modalGroup, setModalGroup] = useState([])
    const [modalTitle, setModalTitle] = useState("")
    const [top, setTop] = useState(1)

    const isPositive = () => {
        return modalTitle.includes("Most")
    }

    const isLikeOrCommentOrBoth = () => {
        return modalTitle.includes('Popular') ? 'Both' : (modalTitle.includes('Liked') ? 'like' : 'comment')
    }

    const openModal = (kind) => {
        if (kind === "MyMostPopularPosts") {
            setModalGroup([...popluar].reverse().slice(0, top))
            setModalTitle("My Most Popular Posts")
        }
        else if (kind === "MyLeastPopularPosts") {
            setModalGroup(popluar.slice(0, top))
            setModalTitle("My Least Popular Posts")
        }
        else if (kind === "MyMostLikedPosts") {
            setModalGroup([...likes].reverse().slice(0, top))
            setModalTitle("My Most Liked Posts")
        }
        else if (kind === "MyLeastLikedPosts") {
            setModalGroup(likes.slice(0, top))
            setModalTitle("My Least Liked Posts")
        }
        else if (kind === "MyMostCommentedPosts") {
            setModalGroup([...comments].reverse().slice(0, top))
            setModalTitle("My Most Commented Posts")
        }
        else if (kind === "MyLeastCommentedPosts") {
            setModalGroup(comments.slice(0, top))
            setModalTitle("My Least Commented Posts")
        }
        setIsOpen(true);
    }
    const closeModal = () => { setIsOpen(false) }
    useEffect(() => {
        geyMyPostsData(setLikes, setComments, setPopluar, setLoader);
    }, [])
    return (
        <AanalysticsDiv>
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
                                    <h2 style={{ textDecoration: "underline", fontWeight: "bold", color: isPositive() ? 'green' : 'red' }}>{modalTitle}</h2>
                                    <br />
                                    {
                                        modalGroup && modalGroup.map((post, index) => <><Post key={index} url={post[0]} likes={post[1]} comments={post[2]} positive={isPositive()} postKind={isLikeOrCommentOrBoth()} /><br /></>)
                                    }
                                </>
                        }
                    </div>

                </UsersDiv>
            </Modal>
            <h2 style={{ fontFamily: 'cursive' }}>{sessionStorage.getItem('session')}</h2>
            <label>Choose a Top search </label>
            <select style={{ width: '50px', height: '30px', color: 'white', backgroundColor: 'black', fontSize: '17px' }} name="top" id="tops" onChange={(e) => setTop(Number(e.target.value))}>
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="10">10</option>
            </select>
            <br />
            <PostCatagoryBox positive={true} onClick={() => openModal("MyMostPopularPosts")}>
                <h5>My Most Popular Posts<br /></h5>
                <img style={{ height: '50px', width: '50px', display: 'inline-block' }} src={goodLogo} alt="good" />
            </PostCatagoryBox>
            <PostCatagoryBox positive={false} onClick={() => openModal("MyLeastPopularPosts")}>
                <h5>My Least Popular Posts<br /></h5>
                <img style={{ height: '50px', width: '50px', display: 'inline-block' }} src={badLogo} alt="good" />
            </PostCatagoryBox>
            <PostCatagoryBox positive={true} onClick={() => openModal("MyMostLikedPosts")}>
                <h5>My Most Liked Posts<br /></h5>
                <img style={{ height: '50px', width: '50px', display: 'inline-block' }} src={goodLogo} alt="good" />
            </PostCatagoryBox>
            <PostCatagoryBox positive={false} onClick={() => openModal("MyLeastLikedPosts")}>
                <h5>My Least Liked Posts<br /></h5>
                <img style={{ height: '50px', width: '50px', display: 'inline-block' }} src={badLogo} alt="good" />
            </PostCatagoryBox>
            <PostCatagoryBox positive={true} onClick={() => openModal("MyMostCommentedPosts")}>
                <h5>My Most Commented Posts<br /></h5>
                <img style={{ height: '50px', width: '50px', display: 'inline-block' }} src={goodLogo} alt="good" />
            </PostCatagoryBox>
            <PostCatagoryBox positive={false} onClick={() => openModal("MyLeastCommentedPosts")}>
                <h5>My Least Commented Posts<br /></h5>
                <img style={{ height: '50px', width: '50px', display: 'inline-block' }} src={badLogo} alt="good" />
            </PostCatagoryBox>
            <br />
        </AanalysticsDiv>
    );
};

export default AnalysticPosts;