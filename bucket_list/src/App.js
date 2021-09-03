import React from "react";

import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

import BucketList from "./BucketList";
import styled from "styled-components";
import Detail from "./Detail";
import NotFound from "./NotFound";

// 리덕스 스토어와 연결하기 위해 connect 호출
import {connect} from 'react-redux';
// 리덕스 모듈에서 (bucket 모듈에서) 액션 생성 함수 두개를 가져오기
import {loadBucket, createBucket} from './redux/modules/bucket';

// 리덕스 store에 있는 상태값을 props의 형태로 넣어준다.
// 컴포넌트에 넣어주는 역할이다.
const mapStateToProps = (state) => {
  return {bucket_list : state.bucket.list};
}

// 디스패치 역할.
// 값을 변화시키기 위한 액션 생성 함수를 props로 받아오기 위한 함수.
const mapDispatchToProps = (dispatch) => {
  return{
    load: () => {
      dispatch(loadBucket());
    },
    create: (new_item) => {
      dispatch(createBucket(new_item));
    }
  }
};


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
    };

    this.text = React.createRef();
  }

  componentDidMount() {
    console.log(this.props);
  }

  addBucketList = () => {
    const new_item = this.text.current.value;
    this.props.create(this.text.current.value);
  };

  // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
  render() {
    return (
      <div className="App">
        <Container>
          <Title>내 버킷리스트</Title>
          <Line />

          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <BucketList list={this.props.bucket_list} history={this.props.history}/>}
            />
            <Route path="/detail" component={Detail}/>
            <Route render={(props) => ( <NotFound history={this.props.history}/>)}/>
          </Switch>

        </Container>
        {/* 인풋박스와 추가하기 버튼을 넣어줬어요. */}
        <Input>
          <input type="text" ref={this.text} />
          <button onClick={this.addBucketList}>추가하기</button>
        </Input>
      </div>
    );
  }
}

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

// withRouter 적용
// connect 사용
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));