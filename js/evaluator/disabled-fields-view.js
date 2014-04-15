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
            this.$el.html(this.template(this.model.attributes));

            this.delegateEvents();
        },

        onRestoreClick: function (e) {
            e.preventDefault();

            console.log('restore');
        }
    });
}(window));
