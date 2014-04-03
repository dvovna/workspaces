(function (W, Backbone) {
    'use strict';

    W.Eval = W.Eval || {};
    W.Eval.ListCollection = Backbone.Collection.extend({
        model: W.Eval.EvalItemModel,

        initialize: function (options) {
            this.options = options || {};

            this.itemsModel = new W.Eval.ItemsModel();

            this.on("change", this.onChange, this);
        },

        onChange: function () {
            var self = this;

            _.each(this.models, function (model) {
                var fieldArray = [],
                    fields = model.get("fields");

//                console.log(model);

                _.each(fields, function (field) {
                    fieldArray = self.getArrayByType(field.type);

                    self.itemsModel.set(field.type, fieldArray);
                });

            });

            console.log(this.itemsModel.attributes);

        },

        getArrayByType: function (type) {
            var arr = [];

            _.each(this.models, function (model) {
                var fields = model.get("fields");

                _.each(fields, function (field) {
                    if (field.type === type) { arr.push(field); }
                });
            });

            return arr;
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
