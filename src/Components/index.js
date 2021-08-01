import styled from 'styled-components'

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
    position: fixed;
    bottom: 0;
    width: 100%;
    color: yellow;
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