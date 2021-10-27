import React from "react";
import { render } from "react-dom";

import { withRouter } from "react-router";
import { Route, Link, Switch } from "react-router-dom";

import Home from './Home';
import Cat from './Cat';
import Dog from './Dog';
import NotFound from "./NotFound";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    console.log(this.props);
  }


  render(){
    return (
    <div className='App'>
       <div>
          <Link to="/">Home으로 가기</Link>
          <Link to="/cat/nabi">Cat으로 가기</Link>
          <Link to="/dog">Dog으로 가기</Link>
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cat/:cat_name" component={Cat} />
          <Route path="/dog" component={Dog} />
        
          <Route component={NotFound}/>
        </Switch>

        <button onClick={() => {
          // props에 있는 history를 사용합니다.
          // push([이동할 주소])는 페이지를 이동시켜 줍니다.
          this.props.history.push('/cat/nabi');
        }}>
          /cat으로 가기
        </button>
        <button onClick={()=>{
          this.props.history.goBack();
        }}>뒤로가기
        </button>
    </div>
    );
  }
}

export default withRouter(App);

