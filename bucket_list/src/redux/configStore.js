import { createStore, combineReducers } from "redux";
import bucket from './modules/bucket';
import { createBrowserHistory } from "history";

// 브라우저 히스토리를 만들어준다.
export const history = createBrowserHistory();
// root 리듀서를 만들어준다.
// 나중에 리듀서를 여러개 만들게 되면 이곳에 추가한다.
const rootReducer = combineReducers({ bucket });

// 스토어를 만든다.
const store = createStore(rootReducer);

export default store;