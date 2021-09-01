// 리액트 패키지를 불러옵니다.
import React from 'react'; 

const BucketList = (props) => {
    

    const my_lists = props.list;

    console.log(props);

    return (
        <div className="lists">
            {
                 my_lists.map((list, index) => {
                    console.log(list);
                    return (<div className="list-item" key={index}>{list}</div>);
                })
            }
        </div>
    );
}

export default BucketList;