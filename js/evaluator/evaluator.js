(function (W, Backbone) {
    'use strict';

    W.Evaluator = Backbone.Router.extend({
        initialize: function (options) {
            this.options = options || {};

            this.itemsCollection = new W.Eval.EvalCollection();
        },

        set: function () {
            this.itemsCollection.setId(1);
            this.itemsCollection.fetch();
            //should set to the itemsCollection new id and trigger fetch on it
        }
    });
}(window, Backbone));
