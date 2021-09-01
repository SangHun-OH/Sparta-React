import React from 'react';
// 패키지에서 styled를 불러온다.
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <MyStyled bgColor={"red"}>hello React!</MyStyled>
    </div>
  );
}

// scss처럼 자기 자신을 지칭할 때 &를 쓸 수 있다.

const MyStyled = styled.div`
  width: 50vw;
  min-height: 150px;
  padding: 10px;
  border-radius: 15px;
  color: #fff;
  &:hover{
    background-color: #ddd;
  }
  background-color: ${(props) => (props.bgColor? "red" : "purple")};
`;

export default App;