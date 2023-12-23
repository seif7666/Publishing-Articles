import { UserFactory } from "../../../model/user/UserFactory";

// Application data will be available under a global variable `appData`.
export const appData = {
  // Users data.
  users: [
    {
      id: "user-1",
      name: "Mex Haddox",
    },
    {
      id: "user-5",
      name: "Zee Croce",
    },
  ],

  // The ID of the current user.
  userId: "user-1",

  // Comment threads data.
  commentThreads: [
    {
      threadId: "thread-1",
      comments: [
        {
          commentId: "comment-1",
          authorId: "user-1",
          content: "<p>Are we sure we want to use a made-up disorder name?</p>",
          createdAt: new Date("09/20/2018 14:21:53"),
          attributes: {},
        },
        {
          commentId: "comment-2",
          authorId: "user-2",
          content: "<p>Why not?</p>",
          createdAt: new Date("09/21/2018 08:17:01"),
          attributes: {},
        },
      ],
      context: {
        type: "text",
        value: "Bilingual Personality Disorder",
      },
      unlinkedAt: null,
      resolvedAt: null,
      resolvedBy: null,
      attributes: {},
    },
  ],

  // Editor initial data.
  initialData: `<h2>
             <comment-start name="thread-1"></comment-start>
             Bilingual Personality Disorder
             <comment-end name="thread-1"></comment-end>
         </h2>
         <p>
             This may be the first time you hear about this made-up disorder but it actually isn’t so far from the truth.
             As recent studies show, the language you speak has more effects on you than you realize.
             According to the studies, the language a person speaks affects their cognition,
             behavior, emotions and hence <strong>their personality</strong>.
         </p>
         <p>
             This shouldn’t come as a surprise
             <a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since we already know</a>
             that different regions of the brain become more active depending on the activity.
             The structure, information and especially <strong>the culture</strong> of languages varies substantially
             and the language a person speaks is an essential element of daily life.
         </p>`,
};

export class CommentsIntegration {
  constructor(editor) {
    this.editor = editor;
  }

  static get requires() {
    return ["CommentsRepository"];
  }

  init() {
    const usersPlugin = this.editor.plugins.get("Users");
    const commentsRepositoryPlugin =
      this.editor.plugins.get("CommentsRepository");

    const currentUser = UserFactory.getInstance().getUser();
    console.log(currentUser.firstName + " " + currentUser.Id);
    usersPlugin.addUser({
      id:'user-'+currentUser.Id,
      name: currentUser.firstName
    });
    usersPlugin.defineMe('user-'+UserFactory.getInstance().getUser().Id);
    // Load the users data.
    // for (const user of appData.users) {
    //     usersPlugin.addUser(user);
    // }

    // Set the current user.

    // Load the comment threads data.
    // for ( const commentThread of appData.commentThreads ) {
    //     commentsRepositoryPlugin.addCommentThread( commentThread );
    // }

    /*
        // Set the adapter on the `CommentsRepository#adapter` property.
        commentsRepositoryPlugin.adapter = {
            addComment( data ) {
                console.log( 'Comment added', data );

                // Write a request to your database here. The returned `Promise`
                // should be resolved when the request has finished.
                // When the promise resolves with the comment data object, it
                // will update the editor comment using the provided data.
                return Promise.resolve( {
                    createdAt: new Date()       // Should be set on the server side.
                } );
            },

            updateComment( data ) {
                console.log( 'Comment updated', data );

                // Write a request to your database here. The returned `Promise`
                // should be resolved when the request has finished.
                return Promise.resolve();
            },

            removeComment( data ) {
                console.log( 'Comment removed', data );

                // Write a request to your database here. The returned `Promise`
                // should be resolved when the request has finished.
                return Promise.resolve();
            },

            addCommentThread( data ) {
                console.log( 'Comment thread added', data );

                // Write a request to your database here. The returned `Promise`
                // should be resolved when the request has finished.
                return Promise.resolve( {
                    threadId: data.threadId,
                    comments: data.comments.map( ( comment ) => ( { commentId: comment.commentId, createdAt: new Date() } ) ) // Should be set on the server side.
                } );
            },

            getCommentThread( data ) {
                console.log( 'Getting comment thread', data );

                // Write a request to your database here. The returned `Promise`
                // should resolve with the comment thread data.
                return Promise.resolve( {
                    threadId: data.threadId,
                    comments: [
                        {
                            commentId: 'comment-1',
                            authorId: 'user-2',
                            content: '<p>Are we sure we want to use a made-up disorder name?</p>',
                            createdAt: new Date(),
                            attributes: {}
                        }
                    ],
                    // It defines the value on which the comment has been created initially.
                    // If it is empty it will be set based on the comment marker.
                    context: {
                        type: 'text',
                        value: 'Bilingual Personality Disorder'
                    },
                    unlinkedAt: null,
                    resolvedAt: null,
                    resolvedBy: null,
                    attributes: {},
                    isFromAdapter: true
                } );
            },

            updateCommentThread( data ) {
                console.log( 'Comment thread updated', data );

                // Write a request to your database here. The returned `Promise`
                // should be resolved when the request has finished.
                return Promise.resolve();
            },

            resolveCommentThread( data ) {
                console.log( 'Comment thread resolved', data );

                // Write a request to your database here. The returned `Promise`
                // should be resolved when the request has finished.
                return Promise.resolve( {
                    resolvedAt: new Date(), // Should be set on the server side.
                    resolvedBy: usersPlugin.me.id // Should be set on the server side.
                } );
            },

            reopenCommentThread( data ) {
                console.log( 'Comment thread reopened', data );

                // Write a request to your database here. The returned `Promise`
                // should be resolved when the request has finished.
                return Promise.resolve();
            },

            removeCommentThread( data ) {
                console.log( 'Comment thread removed', data );

                // Write a request to your database here. The returned `Promise`
                // should be resolved when the request has finished.
                return Promise.resolve();
            }

        };*/
  }
}
