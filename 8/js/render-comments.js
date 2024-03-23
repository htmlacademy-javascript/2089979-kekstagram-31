const STEP_COUNT = 5;
let currentCount = 0;
let comments = [];

const photoModal = document.querySelector('.big-picture');
const commentsList = photoModal.querySelector('.social__comments');
const commentItemTemplate = commentsList.querySelector('.social__comment');
const commentsCount = photoModal.querySelector('.social__comment-count');
const commentsLoader = photoModal.querySelector('.social__comments-loader');
commentsList.innerHTML = '';

const renderNextComments = () => {
  const userCommentFragment = document.createDocumentFragment();
  const renderedComments = comments.slice(currentCount, currentCount + STEP_COUNT);
  const renderedCommentsLength = renderedComments.length + currentCount;

  renderedComments.forEach((comment) => {
    const commentItem = commentItemTemplate.cloneNode(true);

    commentItem.querySelector('.social__picture').src = comment.avatar;
    commentItem.querySelector('.social__picture').alt = comment.name;
    commentItem.querySelector('.social__text').textContent = comment.message;

    userCommentFragment.appendChild(commentItem);
  });

  commentsList.appendChild(userCommentFragment);

  commentsCount.firstChild.textContent = renderedCommentsLength;
  commentsCount.querySelector('.social__comment-total-count').textContent = comments.length;

  if (renderedCommentsLength >= comments.length){
    commentsLoader.classList.add('hidden');
  }
  currentCount += STEP_COUNT;
};

const clearComments = () => {
  currentCount = 0;
  commentsList.innerHTML = '';
  commentsLoader.classList.remove('hidden');
  commentsLoader.removeEventListener('click', renderNextComments);
};

const renderComments = (currentPhotoComments) => {
  comments = currentPhotoComments;
  renderNextComments();

  commentsLoader.addEventListener('click', renderNextComments);
};

export {clearComments, renderComments};
