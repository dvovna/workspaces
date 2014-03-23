(function (W, Backbone) {
    'use strict';

    W.Eval = W.Eval || {};
    W.Eval.ListCollection = Backbone.Collection.extend({
        model: W.Eval.EvalItemModel,

        initialize: function (options) {
            this.options = options || {};

            this.itemsCollection = new W.Eval.ItemsCollection();

            this.on("change", this.onChange, this);
        },

        onChange: function () {
            //should reset itself and populate with new models array
        },

        setId: function (id) {
            var model = new this.model({
                id: parseInt(id, 10),
                endpoint: this.options.endpoint
            });

            this.push(model);
        }
    });
}(window, Backbone));
