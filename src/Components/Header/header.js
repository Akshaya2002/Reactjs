import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Header/header.css';
import styled from 'styled-components';
import Logo from '../../assets/aXesslogo.svg';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  color: rgb(255, 255, 255);
  font-weight: bold;
  background: linear-gradient(to left, rgb(114, 210, 104), rgb(63, 156, 53) 1%) rgb(0, 165, 70);
  line-height: 36px;
  padding: 2px 16px;
  margin-left: 10px;
  border: 1px solid rgb(0, 165, 70);
  font-size: 13px;
  border-radius: 26px;
  letter-spacing: normal;
  min-width: 104px;
  transition: background-color 0.2s linear 0s;
  cursor: pointer;
`;

const StyledHeader = styled.header`
  height: 57px;
  line-height: 56px;
  background-color: #fff !important;
  box-shadow: 0 2px 13px 0 rgb(0 0 0 / 25%);
`;
class Header extends React.Component {
  render() {
    return (
      <div class="header">
        <StyledHeader>
          <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
            <img src={Logo} alt="" />
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Community</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">APIs</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Use Cases</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Academy</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Join Us</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <div class="button">
              <Button class="profile">
                <span class="button">
                  <svg aria-hidden="true" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                </span>
            Profile
            </Button>
              <Button class="primary">
                <svg aria-hidden="true" data-prefix="fas" data-icon="sign-out-alt" class="svg-inline--fa fa-sign-out-alt fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path></svg>
            Sign Out
            </Button>
            </div>
          </nav>
        </StyledHeader>
      </div>
    )
  }
}
export default Header;