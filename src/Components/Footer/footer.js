import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import '../Footer/footer.css';

// const StyledFooter = styled.footer__SocialBox - sc - `
//     background: rgb(24, 33, 42);
//     width: 60px;
//     height: 60px;
//     border-radius: 60px;
//     display: inline-block;
//     margin: 0px 10px;
//     color: rgb(255, 255, 255);
//     line-height: 60px;
//     font-size: 24px;
//     transition: background-color 0.3s linear 0s;
//     margin-bottom: 20px;
//     text-align: center;
// `;
class Footer extends React.Component {
    render() {
        return (
            // <StyledFooter>
            <Container fluid className="footer">
                <Container>
                    <div class="footer__SocialBox-sc-10b9a4y-1 ctdEIh">
                        <a target="_blank" href="https://www.facebook.com/standardchartered " class="footer__SocialIcon-sc-10b9a4y-0 bUZmXg">
                            <svg aria-hidden="true" data-prefix="fab" data-icon="facebook-f" class="svg-inline--fa fa-facebook-f fa-w-9 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512">
                                <path fill="currentColor" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></svg></a>
                        <a target="_blank" href="https://www.twitter.com/stanchart " class="footer__SocialIcon-sc-10b9a4y-0 bUZmXg">
                            <svg aria-hidden="true" data-prefix="fab" data-icon="twitter" class="svg-inline--fa fa-twitter fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a>
                        <a target="_blank" href="https://www.linkedin.com/company/standardchartered/ " class="footer__SocialIcon-sc-10b9a4y-0 bUZmXg">
                            <svg aria-hidden="true" data-prefix="fab" data-icon="linkedin" class="svg-inline--fa fa-linkedin fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a>
                        <a target="_blank" href="https://www.youtube.com/standardchartered " class="footer__SocialIcon-sc-10b9a4y-0 bUZmXg"><svg aria-hidden="true" data-prefix="fab" data-icon="youtube" class="svg-inline--fa fa-youtube fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg></a>

                        <nav class="navbar navbar-expand-sm bg-secondary navbar-dark">
                            <ul class="navbar-nav">
                                <li class="navbar-item active">
                                    <a class="navbar-link" href="#">Legal Notice</a>
                                </li>
                                <li class="navbar-item active">
                                    <a class="navbar-link" href="#">Online Interaction Guidelines</a>
                                </li>
                                <li class="navbar-item active">
                                    <a class="navbar-link" href="#">Privacy</a>
                                </li>
                                <li class="navbar-item active">
                                    <a class="navbar-link" href="#">Regulatory Compliance Statement</a>
                                </li>
                                <li class="navbar-item active">
                                    <a class="navbar-link" href="#">Accessibility</a>
                                </li>
                                <li class="navbar-item active">
                                    <a class="navbar-link" href="#">Cookies</a>
                                </li>
                                <li class="navbar-item active">
                                    <a class="navbar-link" href="#">Group Website</a>
                                </li>
                            </ul>
                        </nav>
                        <p class="footer">?? Standard Chartered 2021</p>
                    </div>
                </Container>
            </Container >
            // </StyledFooter>
        )
    }
}
export default Footer;