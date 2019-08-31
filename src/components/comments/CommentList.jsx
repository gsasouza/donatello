import React from 'react';

import Box from '../common/Box';
import Content from '../common/Content';
import ScreenLabel from '../common/ScreenLabel';

const CommentList = ({ title }) => {
  return (
    <Content>
      <ScreenLabel>{`${title} Comments`}</ScreenLabel>
      <Box>comments</Box>
    </Content>
  );
};

export default CommentList;
