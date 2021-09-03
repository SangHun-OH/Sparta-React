// bucket.js

// Actions
const LOAD = 'bucket/LOAD';
const CREATE = 'bucket/CREATE';

// initialState
const initialState = {
    list: ["영화관 가기", "매일 책읽기", "수영 배우기"],
}


// Action Creaters
// 액션 함수를 컴포넌트에서 불러오기 때문에 export 사용
// export defualt 는 reducer에 사용할 것이기 때문에 export로만 사용.
export const loadBucket = (bucket) => {
    return { type: LOAD, bucket };
}

export const createBucket = (bucket) => {
    return {type: CREATE, bucket};
}


// Reducer
// 아무것도 넘기지 않으면 기본값을 넘기는것.
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "bucket/LOAD":
        return state;
  
    case "bucket/CREATE":
        const new_bucket_list = [...state.list, action.bucket];
        return { list: new_bucket_list };

    default: return state;
  }
}

