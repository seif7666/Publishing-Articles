const ADMIN_ID = "user-1";

export class Integration {
  static comments = [];
  static get requires() {
    return ["CommentsRepository"];
  }
  constructor(editor) {
    this.editor = editor;
  }
  init() {
    const usersPlugin = this.editor.plugins.get("Users");
    this.addAdminUser(usersPlugin);
    const commentsRepositoryPlugin =
      this.editor.plugins.get("CommentsRepository");
    this.setComments(commentsRepositoryPlugin);
  }

  addAdminUser(userRepo) {
    const admin = {
      id: ADMIN_ID,
      name: "Admin",
    };
    userRepo.addUser(admin);
    userRepo.addUser({
      id:'user-0',
      name:'Author'
    })
    userRepo.defineMe('user-0');
  }
  setComments = (commentsRepository) => {
    const commentThreads = new Map();
    this.fillCommentThreads(commentThreads, Integration.comments);
    for (let entry of commentThreads) {
      console.log(entry[1]);
      commentsRepository.addCommentThread(entry[1]);
    }
  };
   fillCommentThreads(commentThreads, comments) {
    for (let comment of comments) {
      if (!commentThreads.has(comment.threadID))
        commentThreads.set(comment.threadID, this.createCommentThread(comment));
      let commentsList = commentThreads.get(comment.threadID).comments; //commentThreads.get(comment.threadId).comments;
      commentsList.push({
        commentId: "comment-" + comment.id,
        authorId: ADMIN_ID,
        content: comment.content,
        createdAt: comment.created_at,
        attributes: {},
      });
    }
  }
   createCommentThread(comment) {
    return {
      threadId: comment.threadID,
      comments: [],
      context: {
        type: "text",
        value: comment.value,
      },
      unlinkedAt: null,
      resolvedAt: null,
      resolvedBy: null,
      attributes: {},
    };
  }
  
}
