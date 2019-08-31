import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #816da0;
  border-radius: 0 0 30px 30px;
  margin: auto -15px -17px -15px;
  border: 1px solid #816da0;
`;

const Input = styled.input`
  background-color: #816da0;
  color: #ffffff;
  border: none;
  font-size: 18px;
  padding: 30px 15px;
  flex: 1;
  border-radius: 30px;
  &::placeholder {
    color: #dcdcdc;
  }
`;

const Button = styled.button`
  border: none;
  &:not([disabled]) {
    &:hover {
      background-color: #342940;
      transition: ease-in 0.1s;
    }
    cursor: pointer;
    background-color: #3e3e74;
  }
  color: #ffffff;
  font-size: 18px;
  border-radius: 30px;
  margin: 15px;
  padding: 15px;
`;

const NewComment = ({ addComment }) => {
  const [comment, setComment] = React.useState('');
  const handleSend = () => {
    addComment(comment);
    return setComment('');
  };
  return (
    <Wrapper>
      <Input
        value={comment}
        onChange={e => setComment(e.target.value)}
        placeholder={'Add new comment'}
      />
      <Button disabled={!comment} onClick={handleSend}>
        Send
      </Button>
    </Wrapper>
  );
};

export default NewComment;
