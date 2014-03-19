(function (W, Backbone) {
    'use strict';

    window.W = W || {};

    W.Evaluator = Backbone.Router.extend({
        initialize: function (options) {
            this.options = options || {};

            this.itemsCollection = new W.EvalCollection();
        },

        set: function () {

        }
    });
}(window, Backbone));
