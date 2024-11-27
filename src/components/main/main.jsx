import React from "react";
import styled from "styled-components";
import main1 from "../../img/main1.png";
import main2 from "../../img/main2.png";
import search from "../../img/Search.png";
import filter from "../../img/filter.png";
import Header from "../header.jsx";
import Footer from "../Footer/footer.jsx";
import { NavLink } from "react-router-dom";
import { CATALOG_ROUTE } from "../../utils/consts";
import 'mdb-ui-kit/css/mdb.min.css';
import 'mdb-ui-kit/js/mdb.min.js';

export const Main = () => {
  return (
    <Container>
      <Header />
      <Banner>
        <PromoText>Самые популярные книги уже здесь!</PromoText>
        <SubText>Скидки до 50% на бестселлеры.</SubText>
        <NavLink to={CATALOG_ROUTE}>
          <PromoButton>Купить сейчас</PromoButton>
        </NavLink>
      </Banner>
      {/* <MainContent>
        <SearchWrapper>
          <SearchInput placeholder="Введите название книги..." />
          <SearchButton>Искать</SearchButton>
        </SearchWrapper>
        <PopularBooks>
          <SectionTitle>Популярные книги</SectionTitle>
          <BooksGrid>
            <BookCard>
              <BookImage src={main1} alt="Book 1" />
              <BookTitle>Книга 1</BookTitle>
              <BookPrice>500₽</BookPrice>
            </BookCard>
            <BookCard>
              <BookImage src={search} alt="Book 2" />
              <BookTitle>Книга 2</BookTitle>
              <BookPrice>750₽</BookPrice>
            </BookCard>
          </BooksGrid>
        </PopularBooks>
      </MainContent> */}
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to right, #9c27b0, #6a1b9a);
  padding: 50px 20px;
  color: white;
  text-align: center;
`;

const PromoText = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const SubText = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
`;

const PromoButton = styled.button`
  margin-top: 20px;
  background-color: #fff;
  color: #6a1b9a;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #f2eefa;
  }
`;

const MainContent = styled.div`
  padding: 20px;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 50%;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  outline: none;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #6a1b9a;
  color: white;
  font-weight: bold;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  :hover {
    background-color: #9c27b0;
  }
`;

const PopularBooks = styled.div`
  margin-top: 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const BookImage = styled.img`
  width: 100px;
  height: 150px;
  margin-bottom: 10px;
`;

const BookTitle = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

const BookPrice = styled.p`
  color: #6a1b9a;
  font-size: 1.2rem;
`;
