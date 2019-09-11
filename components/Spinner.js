import React from "react";

const SPINNER_SIZES = {
    small: 30,
    medium: 50,
    large: 70
};

const STROKE_WIDTHS = {
    small: 4,
    medium: 5,
    large: 6
};

const PATH_CLASS_NAMES = {
    small: "SmallSpinnerPath",
    medium: "MediumSpinnerPath",
    large: "LargeSpinnerPath"
};

export function Spinner({size = "small", ...props}) {
    const baseSize = SPINNER_SIZES[size];
    const pathSize = baseSize / 2;
    const strokeWidth = STROKE_WIDTHS[size];
    const pathRadius = `${baseSize / 2 - strokeWidth}px`;
    const className = PATH_CLASS_NAMES[size];
    const containerClassName = `SpinnerContainer SpinnerContainer-${size} ${
        props.className
        }`;

    return (
        <div className={containerClassName}>
            <svg
                className={className}
                width={baseSize}
                height={baseSize}
                viewBox={`0 0 ${baseSize} ${baseSize}`}
            >
                <circle
                    className="SpinnerPath"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    cx={pathSize}
                    cy={pathSize}
                    r={pathRadius}
                />
            </svg>
            <style jsx>
                {`
          .Spinner {
            animation: rotate 1.3s linear infinite;
          }

          .SpinnerContainer-large {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(270deg);
            }
          }

          .SmallSpinnerPath {
            stroke-dasharray: 100;
            stroke-dashoffset: 0;
            transform-origin: center;
            animation: SmallDash 1.3s ease-in-out infinite;
          }

          @keyframes SmallDash {
            0% {
              stroke-dashoffset: 100;
            }

            50% {
              stroke-dashoffset: 50;
              transform: rotate(135deg);
            }

            100% {
              stroke-dashoffset: 100;
              transform: rotate(450deg);
            }
          }

          .MediumSpinnerPath {
            stroke-dasharray: 150;
            stroke-dashoffset: 0;
            transform-origin: center;
            animation: MediumDash 1.3s ease-in-out infinite;
          }

          @keyframes MediumDash {
            0% {
              stroke-dashoffset: 150;
            }

            50% {
              stroke-dashoffset: 50;
              transform: rotate(135deg);
            }

            100% {
              stroke-dashoffset: 150;
              transform: rotate(450deg);
            }
          }

          .LargeSpinnerPath {
            stroke-dasharray: 200;
            stroke-dashoffset: 0;
            transform-origin: center;
            animation: LargeDash 1.3s ease-in-out infinite;
          }

          @keyframes LargeDash {
            0% {
              stroke-dashoffset: 200;
            }

            50% {
              stroke-dashoffset: 50;
              transform: rotate(135deg);
            }

            100% {
              stroke-dashoffset: 200;
              transform: rotate(450deg);
            }
          }
        `}
            </style>
        </div>
    );
}
