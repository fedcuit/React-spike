/** @jsx React.DOM */
'use strict';

define([], function () {
    return React.createClass({
        handleSubmit: function (e) {
            e.stopPropagation();
            e.preventDefault();

            var $author = $(this.refs.author.getDOMNode());
            var $text = $(this.refs.text.getDOMNode());

            var author = $author.val().trim();
            var text = $text.val().trim();
            if (!author || !text) {
                return;
            }
            $author.val('');
            $text.val('');

            this.props.onCommemtSubmit({
                author: author,
                text: text
            });
        },

        render: function () {
            return (<form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" ref="author" />
                <input type="text" placeholder="Say something..." ref="text" />
                <input type="submit" value="Post"/>
            </form>);
        }
    });
});
