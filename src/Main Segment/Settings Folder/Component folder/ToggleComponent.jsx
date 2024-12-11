import React, { useState } from "react";

export default function ToggleSwitch() {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn((prevState) => !prevState);
    };

    return (
        <div
            onClick={handleToggle}
            style={{
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
                padding: "3px",
            }}
        >
            <div
                style={{
                    width: "40px",
                    height: "15px",
                    backgroundColor: isOn ? "black" : "gray",
                    borderRadius: "15px",
                    position: "relative",
                    transition: "background-color 0.3s",
                }}
            >
                <div
                    style={{
                        width: "15px",
                        height: "10px",
                        backgroundColor: "white",
                        borderRadius: "50%",
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        left: isOn ? "calc(100% - 20px)" : "5px",
                        transition: "left 0.3s",
                    }}
                />
            </div>
            <span
                style={{
                    marginLeft: "10px",
                    fontSize: "16px",
                    color: isOn ? "black" : "gray",
                }}
            >
                {isOn ? "ON" : "OFF"}
            </span>
        </div>
    );
}
