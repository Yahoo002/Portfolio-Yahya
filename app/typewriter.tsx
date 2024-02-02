import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypingComponent = () => {
  return (
    <TypeAnimation
      sequence={['Hi, I am a Cloud Architect', 600, 'Hi, I am a Developer', 600, 'Hi, I am a Polyglot', 600, 'Hi, I am an AvGeek', 600]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default TypingComponent;