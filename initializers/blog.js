module.exports = {
    loadPriority: 1000,
    startPriority: 1000,
    stopPriority: 1000,
    initialize: function(api, next) {
        api.blog = {
            // constants
            separator: ";",
            postPrefix: "posts",
            commentPrefix: "comments:",
            // posts
            postAdd: function(userName, title, content, next) {},
            postView: function(userName, title, next) {},
            postsList: function(userName, next) {},
            postEdit: function(userName, title, content, next) {},
            postDelete: function(userName, title, next) {},
            // comments
            commentAdd: function(userName, title, commenterName, comment, next) {},
            commentsView: function(userName, title, next) {},
            commentDelete: function(userName, title, commentId, next) {},
        }

        next();
    },
    start: function(api, next) {
        next();
    },
    stop: function(api, next) {
        next();
    }
};
