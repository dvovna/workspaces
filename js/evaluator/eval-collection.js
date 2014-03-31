(function (W, Backbone) {
    'use strict';

    W.Eval = W.Eval || {};
    W.Eval.ListCollection = Backbone.Collection.extend({
        model: W.Eval.EvalItemModel,

        initialize: function (options) {
            this.options = options || {};

            _.bindAll(this, "createFieldsCollection");

            this.itemsCollection = new W.Eval.ItemsCollection();

            this.on("change", this.onChange, this);
        },

        onChange: function () {
            _.map(this.models, this.createFieldsCollection);
        },

        createFieldsCollection: function (model) {
            if (!model.attributes.hasOwnProperty("fields")) { return; }


            console.log('foo', model.attributes);

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
