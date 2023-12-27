/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import Album1 from '../assets/rozes.jpg'

const titleStyle = css`
  font-weight: 100;
`;

const Pstyle = css`
color:#8f8f8f;
font-size:1rem;
`

const Star = css`
font-size:2rem;
color: orange;
margin-bottom:10px;
letter-spacing:5px;
`

const ContainerStyle = styled.div`
  width: 450px;
  height: 200px;
  margin: auto 2%;
  background-color: #fff;
  box-shadow: 2px 4px 4px 0 #02020252;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
`;

const AlbumImg = styled.img`
  height: 130px;
  width: 130px;
  background-image: url(${Album1});
  background-size: cover;
  border-radius: 5px 0 0 0;
`;

const AlbumTitle = styled.div`
  height: 128px;
  width: 278px;
  padding: 0 20px;
  border: 1px solid #EEE;
`;

const AlbumRate = styled.div`
  height: 70px;
  width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

function Emo() {
  return (
    <ContainerStyle>
      <AlbumImg />
      <AlbumTitle>
        <h1 css={titleStyle}>Rozes</h1>
        <p css={Pstyle}>Under the Grave <br />(2016)</p>
      </AlbumTitle>
      <AlbumRate>
        <p css={Pstyle}>Rate this album</p>
        <span css={Star}>&#9733;&#9733;&#9733;&#9733;&#9733; </span>
      </AlbumRate>
    </ContainerStyle>
  );
}

export default Emo;