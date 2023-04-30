import React from "react"
import styled from "styled-components"

const FooterWrapper=styled.section`
  position: absolute;
width: 198px;
height: 110px;
left: 629px;
bottom:-300px;
`
const Separator=styled.div`
position: absolute;
height: 2px;
width: 1072px;
left: -484px;

bottom: 130%;

background: #EBEEF2;
border-radius: 0px;
transform: matrix(1, 0, 0, -1, 0, 0);
`
const Cont = styled.text`
position: absolute;
left: 18.69%;
right: 27.27%;
top: 0%;
bottom: 87.27%;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 14px;
/* identical to box height, or 100% */

letter-spacing: 1.4px;
text-transform: uppercase;

color: #657085;
`
const Links=styled.text`
  position: absolute;
left: 0%;
right: 9.6%;
top: 35.45%;
bottom: 43.64%;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
/* identical to box height, or 140% */
color: #1C202B;
`
const Mail=styled.a`
  position: absolute;
left: 10%;
right: 9.6%;
top: 35.45%;
bottom: 43.64%;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
/* identical to box height, or 140% */
text-decoration: none;
color: #1C202B;
`

const Git=styled.text`
  position: absolute;
left: 20%;
right: 0%;
top: 79.09%;
bottom: 0%;
margin-top: 25px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
/* identical to box height, or 140% */


color: #1C202B;
`


const Footer =()=>{
    return(
<FooterWrapper>
        <Separator/>
        <Cont>CONTACT US</Cont>
        <Links>
          <Mail href="mailto:ylianadans@gmail.com">ylianadans@gmail.com</Mail>
          <Git>github: manulia</Git>
        </Links>
      </FooterWrapper>
    );
}

export default Footer;

