import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  position: relative;
  overflow: hidden;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  height: 45vh;
  /* z index can be applied only when position prop */
  z-index: 2; 
`;

const Header = ({ data }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      
    </HeaderContainer>
    <Img
      sizes={data.caveLightImg.sizes}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '125%',
      }}
    />
  </HeaderWrapper>
);

export default Header;
