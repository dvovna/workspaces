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
            console.log('redner', this.collection.models);
            this.$el.html(this.template(this.collection));

            this.delegateEvents();
        },

        onRestoreClick: function (e) {
            e.preventDefault();

            console.log('restore');
        }
    });
}(window));
