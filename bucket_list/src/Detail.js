// 리액트 패키지를 불러온다.
import React from "react";

// redux hook을 불러온다.
import { useDispatch, useSelector } from "react-redux";
// 내가 만든 액션 생성 함수를 불러온다.
import {deleteBucket} from "./redux/modules/bucket";

const Detail = (props) => {
    const dispatch = useDispatch();
    
    
  // 스토어에서 상태값 가져오기
  const bucket_list = useSelector((state) => state.bucket.list);
  // url 파라미터에서 인덱스 가져오기
  let bucket_index = parseInt(props.match.params.index);

  console.log(props);
  return (
    <div>
      <h1>{bucket_list[bucket_index]}</h1>
      <button onClick={() => {
        //   dispatch(); <- 괄호안에는 액션 생성 함수가 들어가야한다.
        // 예
        dispatch(deleteBucket(bucket_index));
        props.history.goBack();
      }}>삭제하기</button>
    </div>
  );
};

export default Detail;