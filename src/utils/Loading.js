import React from "react";

const Loading = () => {
    return (
        <div
            className="loading"
            style={{
                top: "0",
                marginBlock: "auto",
                paddingBlock: "20px",
                display: "flex",
                position: "absolute",
                width: "100%",
                alignItems: "center",
                justifyContent: "center"
            }}>
            <div className="circle-container">
                <div className="circle">
                    <svg viewBox="25 25 50 50" >
                        <circle
                            cx="50"
                            cy="50"
                            r="20"
                            fill="none"
                            stroke="#09c6f9"
                            strokeWidth="2.5" />
                    </svg>
                </div>
            </div>
        </div >
    )
}

export default Loading;