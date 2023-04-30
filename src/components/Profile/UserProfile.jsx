import React from "react";
import "./UserProfile.css";
import logo from '../../img/logo.svg'
import { NavLink } from "react-router-dom";

const UserProfile=()=>{
    return(
<div class="user-profile">
  <div class="header">
        <div class="userHeader">
      <div class="HeaderUserName">Ульяна Мануйлова</div>

      <img class="foto" src="foto.png" />
    </div>
    <NavLink to="/"><img class="logo" src={logo}>
     </img></NavLink>
    
  </div>

  <div class="userInfo">
    <div className="bg"></div>
        <div class="UserName">Ульяна Мануйлова</div>

    <div class="avatar">
      <img class="foto2" src="foto2.png" />
    </div>

    <div class="edit">
      <div class="button">
        <div class="sign-up">Редактировать</div>
      </div>
    </div>

    <div class="chats">
      <div class="button">
        <div class="sign-up">Чаты</div>
      </div>
    </div>
  </div>

  <div class="profile-infos">
    <div class="cvbg"></div>

    <div class="job">Frontend Developer</div>

    <div class="name">Ульяна Мануйлова</div>

    <div class="cv">Резюме</div>

    <div class="cvinfo">
      <div class="about">
        <div class="------">О себе</div>

        <div class="qweqweqwe">qweqweqwe</div>
      </div>

      <div class="education">
        <div class="-----------">Образование</div>

        <div class="qweqweqwe">qweqweqwe<br /></div>
      </div>

      <div class="expirience">
        <div class="-----------">Опыт работы</div>

        <div class="fhdhdfhf">fhdhdfhf</div>
      </div>

      <div class="skills">
        <div class="------">Навыки</div>

        <div class="lisnjashd">lisnjashd</div>
      </div>

      <div class="contacts">
        <div class="--------">Контакты</div>

        <div class="ylianadans-gmail-com">ylianadans@gmail.com</div>
      </div>
    </div>
  </div>
</div>
    );

}

export default UserProfile;