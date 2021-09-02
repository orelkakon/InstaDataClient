import profile from './../Assets/profile.jpg'
import phoneLogo from './../Assets/phone_logo.png'
import mailLogo from './../Assets/mail.jpg'
import instaLogo from './../Assets/insta.png'
import linkedinLogo from './../Assets/linkedin.png'

const About = () => {
    return (
        <div>
            <br />
            <div style={{ textAlign: 'center' }}>
                <img src={profile} alt="Orel Profile" style={{ borderRadius: '35%', width: '200px', height: '200px' }} />
                <p style={{ color: 'white' }}>
                    Hey,
                    I'm Orel Kakon! <br />
                    I'm Software Engineer with B.Sc degree in Software Engineering from Ben Gurion University Of Negev.<br />
                    Full Stack developer with a lot experience in Web development.<br />
                    This website is cool and useful tool, Im developed this for everyone, Welcome and Enjoy 😃.<br />
                </p>
                <br /><br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <a href="https://www.instagram.com/orelkakon/" style={{ textDecoration: "none", fontSize: "33px", color: "#fff", paddingRight: '2px'  }}> <img src={instaLogo} alt="instaLogo" height="33px" /></a>
                    <a href="mailto:orelkak@post.bgu.ac.il" style={{ textDecoration: "none", fontSize: "33px", color: "#fff", paddingRight: '6px' }}> <img src={mailLogo} alt="phoneLogo" height="30px" /></a>
                    <a href="tel:+97254-4650-494" style={{ textDecoration: "none", fontSize: "33px", color: "#fff", paddingRight: '2px' }}> <img src={phoneLogo} alt="phoneLogo" height="30px" /></a>
                    <a href="https://il.linkedin.com/in/orel-kakon-323928218" style={{ textDecoration: "none", fontSize: "33px", color: "#fff" }}> <img src={linkedinLogo} alt="linkedinLogo" height="36px" /></a>
                </div>
                <br/><br/><br/><br/><br/>
            </div>
        </div>
    )
}

export default About;