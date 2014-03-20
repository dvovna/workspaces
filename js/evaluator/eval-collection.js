(function (W, Backbone) {
    'use strict';

    W.Eval = W.Eval || {};
    W.Eval.ItemsCollection = Backbone.Collection.extend({
        model: W.Eval.EvalItemModel,

        initialize: function (options) {
            this.options = options || {};

            this.on("change", this.onModelChange, this);
        },

        setId: function (id) {
            this.push(new this.model({
                id: parseInt(id, 10),
                endpoint: this.options.endpoint
            }));
        },

        onModelChange: function () {
            console.log('dooo');
        }
    });
}(window, Backbone));
