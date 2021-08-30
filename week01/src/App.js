import React from 'react';
import logo from './logo.svg';
import './App.css';
import BucketList from './BucketList';

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class App extends React.Component {
  constructor(props){
    super(props);
    // App 컴포넌트의 state를 정의해준다.
    this.state = {
      list: ['영화관 가기', '매일 책읽기', '수영 배우기', '노래 배우기'],
    };
  }

  // 랜더 함수 안에 리액트 엘리먼트를 넣어준다.
  // 클래스 컴포넌트의 특징
  render() {
      return (
      <div className="App">
        <h1>내 버킷리스트</h1>
        {/* 컴포넌트를 넣어준다. */}
        {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
        <BucketList list={this.state.list}/>
      </div>
    );
  }
}

export default App;