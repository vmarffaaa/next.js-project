import React from "react";

const StarRating = ({ rating = 0, totalStars = 5 }) => {
    return (
        <div>
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                const fillPercent = Math.min(Math.max(rating - index, 0), 1) * 100;

                return (
                    <span
                        key={index}
                        style={{
                            position: "relative",
                            display: "inline-block",
                            width: "1.3em",
                            height: "1.3em",
                            lineHeight: "1em",
                            fontSize: "2em",
                            color: "#4b4431",
                            overflow: "hidden",
                            cursor: "pointer",
                        }}
                    >
            <span
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: `${fillPercent}%`,
                    height: "100%",
                    color: "#ffc107",
                    overflow: "hidden",
                }}
            >
              ★
            </span>
            ★
          </span>
                );
            })}
        </div>
    );
};

export default StarRating;
