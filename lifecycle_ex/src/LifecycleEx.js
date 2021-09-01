import React from "react";

class LifecycleEx extends React.Component {

// 생성자 함수
  constructor(props) {
    super(props);
    
    this.state = {
      cat_name: '나비',
    };

    console.log('in constructor!');
  }

  changeCatName = () => {

      this.setState({cat_name: '바둑이'});

      console.log('고양이 이름을 바꾼다!');
  }

  componentDidMount(){
    console.log('in componentDidMount!');
  }

  componentDidUpdate(prevProps, prevState){
      console.log(prevProps, prevState);
      console.log('in componentDidUpdate!');
  }

  componentWillUnmount(){
      console.log('in componentWillUnmount!');
  }

  render() {

    console.log('in render!');

    return (
      <div>
        <h1>제 고양이 이름은 {this.state.cat_name}입니다.</h1>
        <button onClick={this.changeCatName}>고양이 이름 바꾸기</button>
      </div>
    );
  }
}

export default LifecycleEx;