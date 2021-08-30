import styled from 'styled-components'
import searchLogo from './../Assets/search.png'
import postsLogo from './../Assets/posts.png'
import starLogo from './../Assets/star.png'
import xLogo from './../Assets/x.png'

// Header.js
export const HeaderList = styled.div`
    padding: 10px 10px 10px 10px;
    display: flex;
    justify-content: center;
    text-align: center;
`;

export const HeaderElement = styled.div`
    padding: 10px 10px 10px 10px;
    margin: 10px 10px 10px 10px;
    border: solid 2px purple;
    border-radius: 12px 12px 12px 12px;
    box-shadow: 2px 3px red;
    font-size: 17px;
`;

// Footer.js
export const FooterDiv = styled.div`
    text-align: center;
    position: relative;
    bottom: 0;
    width: 100%;
    max-height: 100%;
    color: yellow;
`;

// About.js
export const logoLink = styled.a`
    &:hover{
        transform: scale(1.5)
    }
`;


// SignIn.js
export const LoginForm = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const LogoutForm = styled.div`
    text-align: center;
`;

export const InputField = styled.input`
    color:white;
    padding: 10px;
    margin: 1px;
    border-radius:12px;
    box-shadow: 4px 4px 10px rgba(255, 255, 255, 0.438);
    background-color: #1a1a1a;
    ::placeholder {
        color: yellow;
        opacity: 1; /* Firefox */
    };
`;

export const LoginButton = styled.button`
    border: 5em;
    cursor: pointer;
    outline: none;
    font-size: 16px;
    -webkit-transform: translate(0);
    transform: translate(0);
    background-image: linear-gradient(45deg, purple, red);
    padding: 0.7em 2em;
    border-radius: 65px;
    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.538);
    -webkit-transition: box-shadow 0.25s;
    transition: box-shadow 0.25s;
    color: white;
    &:hover {
        background-image: linear-gradient(-45deg, red, purple);
        box-shadow: 0 12px 24px rgba(128, 128, 128, 0.1);
    };
    &:after {
        content: "";
        border-radius: 18px;
        position: absolute;
        margin: 4px;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        background: #0e0e10;
    };
`;

export const LogoutButton = styled.button`
    border: 5em;
    cursor: pointer;
    outline: none;
    font-size: 16px;
    -webkit-transform: translate(0);
    transform: translate(0);
    background-image: linear-gradient(45deg, red, purple);
    padding: 0.7em 2em;
    border-radius: 65px;
    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
    -webkit-transition: box-shadow 0.25s;
    transition: box-shadow 0.25s;
    color: white;
    &:hover {
        background-image: linear-gradient(-45deg, purple, red);
        box-shadow: 0 12px 24px rgba(128, 128, 128, 0.1);
    };
    &:after {
        content: "";
        border-radius: 18px;
        position: absolute;
        margin: 4px;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        background: #0e0e10;
    };
`;

// Analystics.js
export const AanalysticsDiv = styled.div`
    color: white;
    text-align: center;
    margin: auto;
`;

export const InfoBox = styled.button`
    border: 1px solid gray;
    border-radius: 5px 5px 5px 5px;
    height: 120px;
    width: 140px;
    color: white;
    background-color: transparent;
    cursor: pointer;
    padding: 10px 10px 10px 10px;
    margin: 10px 10px 10px 10px;
    opacity: 0.7;
    &:hover {
        opacity: 1;
        transform: scale(1.1)
    }
`;

export const PostsBox = styled.button`
    border: none;
    background: url(${postsLogo}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 60px;
    cursor: pointer;
    height: 60px;
    opacity: 0.7;
    &:hover {
        opacity: 1;
        transform: scale(1.1)
    }
`;

export const StarBox = styled.button`
    border: none;
    background: url(${starLogo}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 60px;
    cursor: pointer;
    height: 60px;
    opacity: 0.7;
    &:hover {
        opacity: 1;
        transform: scale(1.1)
    }
`;

export const SearchBox = styled.button`
    border: none;
    cursor: pointer;
    background: url(${searchLogo}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 50px;
    height: 50px;
    opacity: 0.7;
    &:hover {
        opacity: 1;
        transform: scale(1.1)
    }
`;

export const KindSearchButton = styled.button`
    cursor: pointer;
    border: ${props => props.show ? 'solid 0.5px white' : 'none'};
    background: url(${props => props.logo}) no-repeat center;
    opacity: ${props => props.show ? '1' : '0.3'};
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100px;
    height: 100px;
    margin: 2px;
    &:hover {
        opacity: 0.75;
        transform: scale(1.1)
    }
`;

export const SearchInput = styled.input`
    width: 300px;
    height: 30px;
    padding-left: 5px;
    font-size: 20px;
    border:none;
    margin: auto;
    margin-bottom: 10px;
    border-radius: 5px;
    ::placeholder {
        color: gray;
    };
`;

export const SearchButtons = styled.button`
    width: 90px;
    height: 30px;
    background-color: white;
    font-size: 20px;
    border:none;
    border-radius: 5px;
    margin: 5px;
    padding: 2px;
    cursor: pointer;
    &:hover{
        background-color: black;
        color: white;
        border: solid 1px white;
        transform: scale(1.1)
    }
`;

export const SearchResultDiv = styled.div`
    display: flex;
    justify-content:center;
    margin: auto;
    flex-direction: column;
    align-items: center;
`;

export const SearchResult = styled.button`
    border: solid 2px ${props => props.isSearched ? 'yellow' : 'white'};
    background-color: ${props => props.isSearched ? 'yellow' : 'white'};
    color: black;
    box-shadow: 3px 3px 5px gray;
    width: auto;
    min-height: 34px;
    
    border-radius: 15px;
    margin: 5px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    &:hover{
        background-color: black;
        color: white;
        transform: scale(1.1)
    }
`;

export const PostCatagoryBox = styled.button`
    border: 2px solid ${props => props.positive ? 'green' : 'red'};
    border-radius: 5px 5px 5px 5px;
    height: 170px;
    width: 170px;
    color: ${props => props.positive ? 'green' : 'red'};
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    padding: 5px 5px 5px 5px;
    margin: 10px 10px 10px 10px;
    opacity: 0.8;
    &:hover {
        opacity: 1;
        box-shadow: 2px 3px ${props => props.positive ? 'green' : 'red'};
        transform: scale(1.1)
    }
`;


export const XButton = styled.button`
    border: none;
    cursor: pointer;
    background: url(${xLogo}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 20px;
    height: 20px;
        
`;
export const UsersDiv = styled.div`
    text-align: center;
    margin: auto;
`;

export const PostBlock = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 2px ${props => props.positive ? 'green' : 'red'};
    border-radius: 20px;
    box-shadow: 5px 5px ${props => props.positive ? 'lightgreen' : 'lightcoral'};
    margin-bottom: 10px;
    text-align: center;
    margin: auto;
`;

export const StarButtonBox = styled.button`
    border: 2px solid yellow;
    border-radius: 5px 5px 5px 5px;
    height: 120px;
    width: 170px;
    color: yellow;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    padding: 5px 5px 5px 5px;
    margin: 10px 10px 10px 10px;
    opacity: 0.8;
    &:hover {
        opacity: 1;
        box-shadow: 2px 3px yellow;
        transform: scale(1.1)
    }
`;


export const UserDiv = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 1.8px yellow;
    background-color: black;
    color: white;
    border-radius: 20px;
    height: 50px;
    font-size: large;
    justify-content: center;
    box-shadow: 5px 5px #FFFF66;
    margin-bottom: 10px;
    text-align: center;
    margin: auto;
    cursor: pointer;
    &:hover{
        color: black;
        background-color: yellow;
    }
`;

export const AUserRef = styled.a`
    text-decoration: none;
    color: white;
    &:hover{
        color: black;
    }
`;