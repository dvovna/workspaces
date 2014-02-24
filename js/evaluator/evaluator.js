(function (W, Backbone) {
    'use strict';

    W.Evaluator = Backbone.Router.extend({
        initialize: function (options) {
            this.options = options || {};
        }
    });
}(window, Backbone));
