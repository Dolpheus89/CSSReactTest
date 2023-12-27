import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height:320px;
  background-color: #fff;
  box-shadow: 2px 4px 4px 0 #02020252;
  border-radius: 10px;
  margin: auto 2%;
`;

const CoolBlueThingContainer = styled.div`
display: flex;
justify-content: space-between;
width:80%;
margin-top: 15%;
`

const CoolBlueThing = styled.div`
padding: 4px 8px;
color: rgb(44, 99, 250);
font-weight: bold;
border: 2px solid rgb(44, 99, 250);
box-shadow: -2px 2px 1px 0 rgb(188, 220, 255), inset 3px -2px 1px 0 rgb(188, 220, 255);
border-radius: 0 0 5px 5px;
text-shadow: 0 0 2px rgb(44, 99, 250);
position: relative;

&:before {
    content: '';
    display: flex;
    width: 100%;
    height: 8px;
    border: 2px solid rgb(44, 99, 250);
    border-bottom: 0px;
    box-shadow: -2px 3px 2px 0 rgb(188, 220, 255);
    border-radius: 4px 4px 0 0;
    position: absolute;
    top: -10px;
    left: -2px;
    mix-blend-mode: darken;

}
`

const Option = styled.div`
display: flex;
justify-content: center;
line-height: 8px;
height:15px;
border: 2px solid rgb(200, 200, 200);
border-radius: 7px;
padding:5px;
font-weight: bold;
margin-top:-10px;
`
const GreenStuff = styled.h1`
font-size:0.7rem;
color:#34b369;
background-color:#b6ffc780;
align-self: flex-start;
padding: 2% 4%;
border-radius:10px;
margin:10%;
text-shadow: 0 0 1px #34b369;
`
const Valores = styled.h2`
font-size:1.1rem;
width:80%;
`
const Formulario = styled.p`
color:grey;
width:80%;
`

const Styled = () => (
  <Container>
    <CoolBlueThingContainer>
        <CoolBlueThing id='special'>AI</CoolBlueThing>
        <Option>...</Option>
    </CoolBlueThingContainer>
    <GreenStuff>HABILITADO</GreenStuff>
    <Valores>Valores predeterminados en formulario</Valores>
    <Formulario>Formulario de campos con valores predeterminados</Formulario>
  </Container>
);

export default Styled;