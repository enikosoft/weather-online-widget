import styled from 'styled-components';

export const Loader = styled.div`
  height: 100svh;
  background-color: rgba(0, 0, 0, 0.9);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .preloader {
    position: absolute;
    margin-left: -55px;
    margin-top: -100px;
    height: 110px;
    width: 110px;
    left: 50%;
    top: 50%;

    svg {
      width: 110px;
      height: 110px;

      path {
        stroke: #9ea1a4;
        stroke-width: 0.25;
        fill: #241e20;
      }
    }

    #sun {
      opacity: 1;
      width: 65px;
      height: 65px;
      position: absolute;
      left: 45px;
      top: 10px;
      z-index: 1;

      animation-name: rotate;
      animation-duration: 5000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    #sun path {
      stroke-width: 0.18;
      fill: #939363;
    }

    #cloud {
      position: relative;
      z-index: 2;
    }

    .rain {
      position: absolute;
      width: 70px;
      height: 70px;
      margin-top: -32px;
      margin-left: 19px;

      .drop {
        opacity: 1;
        background: #66797f;
        display: block;
        float: left;
        width: 3px;
        height: 10px;
        margin-left: 4px;
        border-radius: 0px 0px 6px 6px;
        animation: drop 500ms infinite;
      }

      .drop:nth-child(1) {
        animation-delay: -900ms;
      }

      .drop:nth-child(2) {
        animation-delay: -1130ms;
      }

      .drop:nth-child(3) {
        animation-delay: -240ms;
      }

      .drop:nth-child(4) {
        animation-delay: -130ms;
      }

      .drop:nth-child(5) {
        animation-delay: -640ms;
      }

      .drop:nth-child(6) {
        animation-delay: -390ms;
      }

      .drop:nth-child(7) {
        animation-delay: -1300ms;
      }

      .drop:nth-child(8) {
        animation-delay: -105ms;
      }

      .drop:nth-child(9) {
        animation-delay: -790ms;
      }

      .drop:nth-child(10) {
        animation-delay: -525ms;
      }
    }
    .text {
      font-family: Helvetica, 'Helvetica Neue', sans-serif;
      letter-spacing: 1px;
      text-align: center;
      margin-left: -43px;
      font-weight: bold;
      margin-top: 20px;
      font-size: 12px;
      color: #a0a0a0;
      width: 200px;
    }
    @keyframes rotate {
      0% {
        transform: rotateZ(0deg);
      }

      100% {
        transform: rotateZ(360deg);
      }
    }

    @keyframes drop {
      50% {
        height: 45px;
        opacity: 0;
      }

      51% {
        opacity: 0;
      }

      100% {
        height: 1px;
        opacity: 0;
      }
    }
  }
`;
