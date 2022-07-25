const getAllComments = (comments) => {
  comments.forEach((comment) => {
    $('.comments-list').append(`
        <div class='comment-item'>
          <div class='comment-header'>
            <h4>${comment.name}</h4>
            <h5>${comment.date}</h5>
          </div>
        <div class='comment-body'>
          <p>${comment.review}</p>
        </div>
        </div>
    `);
  });
};

export default getAllComments;

