(function (W, Backbone) {
    'use strict';

    W.Eval = W.Eval || {};
    W.Eval.ListView = Backbone.View.extend({
        tagName: "ul",
        className: "evaluator",

        template: _.template($("#list-view-tpl").html()),

        initialize: function (options) {
            this.options = options || {};
        },

        render: function () {
            this.$el.html(this.template(this.collection));
        }
    });
}(window, Backbone));
