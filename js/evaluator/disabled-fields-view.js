(function (W) {
    'use strict';

    W.Eval = W.Eval || {};
    W.Eval.DisabledFieldsView = Backbone.View.extend({
        tagName: "li",
        className: "disabledFieldsList",
        template: _.template($("#disabled-view-tpl").html()),

        events: {
            'click li': "onRestoreClick"
        },

        initialize: function (options) {
            this.options = options || {};

            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.collection));

            this.delegateEvents();
        },

        onRestoreClick: function (e) {
            var fieldType = $(e.target).attr('id');

            e.preventDefault();

            this.collection.remove(this.collection.where({type: fieldType}));
        }
    });
}(window));
