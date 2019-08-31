import React from 'react';
import { firebaseDatabase } from '../../../firebase/config';

const getCommentByTitle = async title => {
  const doc = await firebaseDatabase
    .collection('comments')
    .doc(title.toLowerCase())
    .get();
  if (doc) {
    const data = doc.data();
    if (data) {
      const { comments } = doc.data();
      if (comments) return comments;
    }
  }
  return [];
};

const addCommentToTitle = (title, comments, newComment) => {
  const doc = firebaseDatabase.collection('comments').doc(title.toLowerCase());

  return doc.set({
    comments: [...comments, newComment]
  });
};

const useComments = ({ title }) => {
  const [isLoading, setLoading] = React.useState(true);
  const [comments, setComments] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const comments = await getCommentByTitle(title);
      setComments(comments);
      setLoading(false);
    })();
  }, [title]);

  const addComment = comment => {
    addCommentToTitle(title, comments, comment);
    setComments([...comments, comment]);
  };
  return {
    isLoading,
    comments,
    addComment
  };
};

export default useComments;
