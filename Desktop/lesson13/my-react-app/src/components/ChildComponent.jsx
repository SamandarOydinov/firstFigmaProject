import React, { memo } from "react";

const ChildComponent = memo(function ChildComp(props) {
    const { onClick } = props;
    return (
        <div>
            <h1 className="">Child Component</h1>
            <button className="py-1 px-5 bg-amber-400" onClick={onClick}>Click</button>
        </div>
    )
});

export default ChildComponent;