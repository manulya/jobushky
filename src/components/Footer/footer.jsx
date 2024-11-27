import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #f9f9f9;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid #ebeef2;
`;

const Separator = styled.div`
  width: 100%;
  height: 2px;
  background-color: #ebeef2;
  margin-bottom: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
`;

const Section = styled.div`
  margin: 10px 20px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const Title = styled.h4`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #1c202b;
  margin-bottom: 10px;
`;

const Link = styled.a`
  display: block;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #657085;
  text-decoration: none;
  margin: 5px 0;

  &:hover {
    color: #9c27b0;
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  width: 24px;
  height: 24px;
  background-color: #ebeef2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1c202b;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    background-color: #9c27b0;
    color: white;
  }
`;

const FooterNote = styled.p`
  margin-top: 20px;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  color: #657085;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Separator />
      <ContentWrapper>
        <Section>
          <Title>Контакты</Title>
          <Link href="mailto:info@bookstore.com">info@bookstore.com</Link>
          <Link href="tel:+123456789">+1 (234) 567-89</Link>
        </Section>
        <Section>
          <Title>Информация</Title>
          <Link href="/about">О нас</Link>
          <Link href="/privacy">Политика конфиденциальности</Link>
          <Link href="/terms">Условия использования</Link>
        </Section>
       
      </ContentWrapper>
      <FooterNote>© 2024 Bookery. Все права защищены.</FooterNote>
    </FooterWrapper>
  );
};

export default Footer;
