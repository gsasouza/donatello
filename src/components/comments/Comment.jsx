import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Text = styled.span`
  font-size: 16px;
  margin-left: 15px;
  font-style: italic;
  color: #3e3e74;
`;

const Comment = ({ comment }) => {
  return (
    <Wrapper>
      <Avatar src={'https://via.placeholder.com/50'} />
      <Text>{comment}</Text>
    </Wrapper>
  );
};

export default Comment;
