import React from 'react'

function Loading(){
    const loaderStyle = {
      width: '10rem',
      height: '10rem',
      display: 'inline-block',
      borderRadius: '50%',
      border: '1rem solid rgb(255, 255, 255)',
      borderLeftColor: 'rgb(0, 60, 255)',
      borderTopColor: 'rgb(0, 60, 255)',
      animation: 'rotate 1000ms infinite linear'
    };
  
    const bodyStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    };
  
    const rotateKeyframes = `
      @keyframes rotate {
        to {
          transform: rotate(1turn)
        }
      }
    `;
  
    return (
      <div style={bodyStyle}>
        <style>
          {rotateKeyframes}
        </style>
        <span style={loaderStyle}></span>
      </div>
    );
  };

export default Loading
