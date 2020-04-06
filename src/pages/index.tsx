import React from 'react';

import styled from '@emotion/styled';

type ContainerProps = {};
type Props = {} & ContainerProps;

const Component: React.FCX<Props> = ({ className }) => <div className={className}>test</div>;

const StyledComponent = styled(Component)`
  @media screen and (max-width: 1100px) {
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-height: 430px) {
  }
`;

const Container: React.FCX<ContainerProps> = (props) => <StyledComponent {...props} />;

export const config = { amp: true };
export default Container;
