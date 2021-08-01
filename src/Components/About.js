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
                <p style={{color:'white'}}>
                    Hey, 
                    I'm Orel Kakon! <br/>
                    I'm Software Engineer with B.Sc degree in Software Engineering from Ben Gurion University Of Negev.<br/>
                    Full stack developer with a lot experience in Web development, System design and Complex application. <br/>
                    Love to solve problems, design systems, learn new things and share my experience with others. <br/>
                </p> 
                <img src={instaLogo} alt="instaLogo" height="30px" /><a href="https://www.instagram.com/orelkakon/" style={{ textDecoration: "none", fontSize: "33px", color: "#fff" }}> My Instagram</a>
                <br />
                <img src={linkedinLogo} alt="linkedinLogo" height="33px" /><a href="" style={{ textDecoration: "none", fontSize: "33px", color: "#fff" }}> My Linkedin</a>
                <br />
                <img src={mailLogo} alt="phoneLogo" height="30px" /><a href="mailto:orelkak@post.bgu.ac.il" style={{ textDecoration: "none", fontSize: "33px", color: "#fff" }}> Orelkak@post.bgu.ac.il</a>
                <br />
                <img src={phoneLogo} alt="phoneLogo" height="30px" /><a href="tel:+97254-4650-494" style={{ textDecoration: "none", fontSize: "33px", color: "#fff" }}> 054-4650494</a>
                
            </div>
        </div>
    )
}

export default About;