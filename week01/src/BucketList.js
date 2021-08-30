import React from 'react'; 

const BucketList = ({list}) => {
    // props 가 아닌 {list} 를 사용
    // props를 log 찍어보면 list: [a,b,c] 가 나오는데 {list} 로 받아온다면 어트리뷰트 값만 가져올 수 있다.

    const my_lists = list;
    // list 를 my_lists에 넣어준다.
    console.log(my_lists);
    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
    return (
        <div>
            {
               my_lists.map((list, index) => {
                    // 콘솔을 확인해봅시다 :)
                    console.log(list, index);
                    return (<div key={index}>{list}</div>);
                })
            }
        </div>
    );
}

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default BucketList;