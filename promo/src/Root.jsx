import React from 'react';
import { Composition } from 'remotion';
import { Promo, PROMO_DURATION, FPS } from './Promo.jsx';

export const RemotionRoot = () => {
  return (
    <Composition
      id="Promo"
      component={Promo}
      durationInFrames={PROMO_DURATION}
      fps={FPS}
      width={1920}
      height={1080}
    />
  );
};
