import React from 'react';

import styled from '@emotion/styled';

type ContainerProps = {};
type Props = {} & ContainerProps;

const desktopWebp = require(`assets/Desktop.png?webp`);
const desktopPng = require(`assets/Desktop.png`);
const ipadWebp = require(`assets/iPadPro11.png?webp`);
const ipadPng = require(`assets/iPadPro11.png`);
const iphoneWebp = require(`assets/iPhoneX.png?webp`);
const iphonePng = require(`assets/iPhoneX.png`);

const Component: React.FCX<Props> = ({ className }) => (
  <main className={className}>
    <picture id='desktop'>
      <source srcSet={desktopWebp} type='image/webp' />
      <source srcSet={desktopPng} type='image/png' />
      <img src={desktopPng} alt='test' />
    </picture>
    <picture id='ipad'>
      <source srcSet={ipadWebp} type='image/webp' />
      <source srcSet={ipadPng} type='image/png' />
      <img src={ipadPng} alt='test' />
    </picture>
    <picture id='iphone'>
      <source srcSet={iphoneWebp} type='image/webp' />
      <source srcSet={iphonePng} type='image/png' />
      <img src={iphonePng} alt='test' />
    </picture>
  </main>
);

const StyledComponent = styled(Component)`
  #desktop {
    img {
      width: 100%;
    }
  }
  #ipad {
    display: none;
  }
  #iphone {
    display: none;
  }
  @media screen and (max-width: 1100px) {
    #desktop {
      display: none;
    }
    #ipad {
      display: block;
      img {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    #ipad {
      display: none;
    }
    #iphone {
      display: block;
      img {
        height: 100%;
      }
    }
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX<ContainerProps> = (props) => <StyledComponent {...props} />;

export default Container;
