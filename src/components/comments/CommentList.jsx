import React from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';
import { MdArrowBack } from 'react-icons/md';

import Box from '../common/Box';
import Content from '../common/Content';
import ScreenLabel from '../common/ScreenLabel';
import AnimatedDots from '../common/AnimatedDots';
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

const LoadingLabel = styled.span`
  margin: auto;
  font-size: 50px;
  color: #3e3e74;
  display: flex;
  align-items: flex-end;
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

const EmptyLabel = styled(LoadingLabel)`
  font-size: 30px;
`;

const CommentContainer = ({
  commentsRef,
  comments,
  addComment,
  title,
  children
}) => {
  return (
    <Content>
      <Row>
        <BackButton onClick={() => navigate('/')}>
          <MdArrowBack size={'2.5em'} />
        </BackButton>
        <ScreenLabel>{`${title} Comments`}</ScreenLabel>
      </Row>
      <Box>
        <CommentsContainer ref={commentsRef}>{children}</CommentsContainer>
        <NewComment addComment={addComment} />
      </Box>
    </Content>
  );
};

const CommentList = ({ title }) => {
  const { comments, addComment, isLoading } = useComments({ title });
  const commentsRef = useScrollToBottom({ items: comments });
  if (isLoading)
    return (
      <CommentContainer
        comments={comments}
        commentsRef={commentsRef}
        addComment={addComment}
        title={title}
      >
        <LoadingLabel>
          Loading
          <AnimatedDots />
        </LoadingLabel>
      </CommentContainer>
    );
  if (!comments.length)
    return (
      <CommentContainer
        comments={comments}
        commentsRef={commentsRef}
        addComment={addComment}
        title={title}
      >
        <EmptyLabel> There's no comments yet </EmptyLabel>
      </CommentContainer>
    );
  return (
    <CommentContainer
      comments={comments}
      commentsRef={commentsRef}
      addComment={addComment}
      title={title}
    >
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </CommentContainer>
  );
};

export default CommentList;
