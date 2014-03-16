(function (W, Backbone) {
    'use strict';

    window.W = W || {};
    W.Evaluator = Backbone.Router.extend({
        initialize: function (options) {
            this.options = options || {};

            console.log('success');
            //what it should do:d
            /**
             * 1. should remember 'disabled' properties for calculating
             * 2. should restore 'disabled' prop to the disabled container and exclude them from calculating
             * 3. should  xk
             */
        }
    });
}(window, Backbone));
