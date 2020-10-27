import React from "react";
import styled, { keyframes } from "styled-components";

const slideL2R = () => keyframes`
  0% {
    transform: translateX(-100vw);
  }
  99% {
    visibility: visible;
  }
  100% {
    visibility: visible;
    transform: translateX(0);
  }
`;

const SlideL2R = styled.div`
  visibility: hidden;
  animation: ${slideL2R()} ${(props) => props.time}s forwards;
  animation-delay: ${(props) => props.delay}s;
`;

export default function Slide({ children, delay, time }) {
  return (
    <SlideL2R delay={delay} time={time}>
      {children}
    </SlideL2R>
  );
}
