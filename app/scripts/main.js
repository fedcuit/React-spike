/** @jsx React.DOM */
'use strict';

require.config({
    baseUrl: 'scripts',
    paths: {
        react: 'script/react.min'
    },
    shim: {
        react: {
            exports: 'React'
        }
    }
});

require(['todolist/todoapp', 'comment/commentapp'], function (TodoApp, CommentApp) {
    React.renderComponent(TodoApp(null ), $('#todoApp')[0]);
    React.renderComponent(CommentApp( {url:"scripts/comments.json"} ), $('#commentApp')[0]);
});
