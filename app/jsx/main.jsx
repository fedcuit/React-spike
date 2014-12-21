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

require(['app', 'todoapp'], function (App, TodoApp) {
    // use app here
    React.renderComponent(
        <App />,
        document.getElementById('app')
    );
    React.renderComponent(<TodoApp />, document.getElementById('app'));
});
