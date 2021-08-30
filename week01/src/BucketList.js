import React from 'react'; 

function Bucketlist(props){
    return (
        <div>버킷 리스트</div>
    );
}
const BucketList = (props) => {
    
    console.log(props);

    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트)를 반환
    return (
        <div>
            버킷 리스트
        </div>
    );
}

export default BucketList;