import styled from 'styled-components';

export const PageWrapper = styled.div`
  font-family: 'Montserrat', 'Helvetica', Arial, sans-serif;
  font-weight: normal;
  font-size: 18px;
  color: #f1f1f1;
  overflow-x: hidden;
  margin: 0;
`;

export const BackgroundPage = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(180deg, black 50%, transparent 100%);
  mask-image: linear-gradient(180deg, black 50%, transparent 100%);
`;

export const BackgroundImage = styled.div`
  width: 102%;
  height: 102%;
  position: absolute;
  top: -1%;
  left: -1%;
  background-position: center;
  background-size: cover;
  filter: blur(10px) brightness(50%);
  z-index: -1;
  background-image: url('https://cdx.monstercat.com?encoding=webp&url=https%3A%2F%2Fwww.monstercat.com%2Frelease%2F742779547347%2Fcover%3F2d63d815-aa33-48ab-9fc5-4986669d96ca&width=1024');
`;

export const HeaderContainerApp = styled.ul`
  font-size: 18px;
  list-style: none;
  position: absolute;
  top: 100px;
  right: 0;
  padding: 0;
  width: 50px;
  text-align: center;
  pointer-events: initial;
  margin-right: 1.2rem;
  z-index: -1;

  @media (max-width: 1184px) {
    display: flex;
    align-items: center;
    position: unset;
    justify-content: center;
    width: unset;
    top: 0px;
    left: 0px;
    right: 0px;
    margin: 0;
    height: 100%;
  }
`;
