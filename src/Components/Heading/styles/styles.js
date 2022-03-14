import styled from 'styled-components';

const StyledHeading = styled.div`
font-family: Inter;
-moz-osx-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased;
font-size: 160%;
letter-spacing: -2px;
font-weight: lighter;
width: 100%;
margin-left: 25%;
display: flex;
color: purple;

h2 {
${({ style }) => style && style};
}
`;

export default StyledHeading;
