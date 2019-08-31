import React from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';
import { MdArrowBack } from 'react-icons/md';

import Box from '../common/Box';
import Content from '../common/Content';
import ScreenLabel from '../common/ScreenLabel';
import Comment from './Comment';
import NewComment from './NewComment';
import useScrollToBottom from './hooks/useScrollToBottom';
import useComments from './hooks/useComments';

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 250px);
  overflow: auto;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const BackButton = styled.button`
  border: none;
  background: transparent;
  color: #ffffff;
  margin-right: 10px;
  margin-top: 6px;
  cursor: pointer;
  &:hover {
    color: #3e3e74;
  }
`;

const CommentList = ({ title }) => {
  const { comments, addComment } = useComments();
  const commentsRef = useScrollToBottom({ items: comments });
  return (
    <Content>
      <Row>
        <BackButton onClick={() => navigate('/')}>
          <MdArrowBack size={'2.5em'} />
        </BackButton>
        <ScreenLabel>{`${title} Comments`}</ScreenLabel>
      </Row>
      <Box>
        <CommentsContainer ref={commentsRef}>
          {comments.map(comment => (
            <Comment comment={comment} />
          ))}
        </CommentsContainer>
        <NewComment addComment={addComment} />
      </Box>
    </Content>
  );
};

export default CommentList;
