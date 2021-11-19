import React from 'react';
import './App.css';
// styled와 keyframes를 불러옵니다!
import styled, {keyframes} from "styled-components";
function App() {
return (
<div className="App">
<Box></Box>
</div>
);
}
// 박스를 먼저 하나 만들어줍니다
const Box = styled.div`
width: 100px;
height: 100px;
background: green;
`;

export default App;
