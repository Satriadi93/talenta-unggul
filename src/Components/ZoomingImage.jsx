// ZoomingImage.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const zoomAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

const ZoomContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const ZoomImage = styled.img`
  width: 100%;
  height: 100%;
  animation: ${zoomAnimation} 10s linear infinite;
`;

const ZoomingImage = ({ src, alt }) => {
  return (
    <ZoomContainer>
      <ZoomImage src={src} alt={alt} />
    </ZoomContainer>
  );
};

export default ZoomingImage;
