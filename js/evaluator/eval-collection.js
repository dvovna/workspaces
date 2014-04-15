(function (W, Backbone) {
    'use strict';

    W.Eval = W.Eval || {};
    W.Eval.ListCollection = Backbone.Collection.extend({
        model: W.Eval.EvalItemModel,

        initialize: function (options) {
            this.options = options || {};

            this.itemsModel = new W.Eval.ItemsModel();
            this.disabledFieldsCollection = new W.Eval.DisabledFieldsCollection();

            this.disabledFieldsCollection.on("add", this.onChange, this);
            this.on("change", this.onChange, this);
        },

        onChange: function () {
            var self = this;

            if (this.disabledFieldsCollection.length) { this.removeDisabledFields(); }

            this.itemsModel.clear();

            _.each(this.models, function (model) {
                var fieldArray = [],
                    fields = model.get("fields");

                _.each(fields, function (field) {
                    fieldArray = self.getArrayByType(field.type);

                    self.itemsModel.set(field.type, fieldArray);
                });
            });

            this.trigger("ready");
        },

        removeDisabledFields: function () {
            var disabledFieldsTypes = this.disabledFieldsCollection.getDisabledFieldsTypes();

            _.each(this.models, function (model) {
                var fields = model.get("fields");

                _.each(fields, function (field, ind) {
                    if (_.indexOf(disabledFieldsTypes, field.type) !== -1) {
                        delete fields[ind];
                    }
                });
                model.set('fields', fields, {silent: true});
            });
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
            this.add({
                id: parseInt(id, 10),
                endpoint: this.options.endpoint
            });
        },

        disableFieldByType: function (type, name) {
            this.disabledFieldsCollection.add({
                type: type,
                name: name
            });
        }
    });
}(window, Backbone));
