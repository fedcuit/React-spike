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

require(['todoapp', 'commentapp'], function (TodoApp, CommentApp) {
    var data = [
        {author: "Pete Hunt", text: "This is one comment"},
        {author: "Jordan Walke", text: "This is *another* comment"}
    ];

    React.renderComponent(<TodoApp />, $('#todoApp')[0]);
    React.renderComponent(<CommentApp data={data} />, $('#commentApp')[0]);
});
