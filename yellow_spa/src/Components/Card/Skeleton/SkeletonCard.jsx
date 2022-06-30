import React from 'react';
import { SkeletonImage, SkeletonWrapper, SkeletonTitle, SkeletonRatingDate } from './skeletonStyled';

function SkeletonCard(props) {
    return (
        <>
        <SkeletonWrapper >
        <SkeletonImage />
        <SkeletonTitle></SkeletonTitle>
        <SkeletonRatingDate>
          <span></span>
          <span></span>
        </SkeletonRatingDate>
      </SkeletonWrapper>
      </>
    );
}

export default SkeletonCard;