import git from '../assets/github-142-svgrepo-com.svg'

function Footer(){

    return(
        <>
            <footer className='footer'>
                <div className='footerBrand'>
                    <h3>SITE NAME</h3>
                    <div>Your personal library, a creation of the CROOKED CAULDRON, where no road leads, yet all info meets</div>
                </div>

                <div className='footerLinks'>
                    <a href="">ABOUT</a>
                    <a href="">FAQ</a>
                    <a href="">CONTACT</a>
                    <a href="https://github.com/Klein-morettii/bookS.git"  target="_blank" rel="noopener noreferrer">
                        <img src={git} alt="github" className='gitImg'/>
                        GITHUB
                    </a>
                </div>

                <div className='footerCopy'>
                    <div>&copy;{new Date().getFullYear()} siteName</div>
                </div>
            </footer>
        </>
    );
}

export default Footer;