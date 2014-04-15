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
            this.disabledFieldsCollection.on("remove", this.onChange, this);
            this.on("change", this.onChange, this);
            this.on("remove", this.onChange, this);
        },

        onChange: function () {
            var self = this;

            this.updateDisabledFields();

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

        updateDisabledFields: function () {
            var disabledFieldsTypes = this.disabledFieldsCollection.getDisabledFieldsTypes();

            _.each(this.models, function (model) {
                var fields = model.get("fields");

                _.each(fields, function (field, ind) {
                    if (_.indexOf(disabledFieldsTypes, field.type) !== -1) {
                        field.disabled = true;
                    } else {
                        field.disabled = false;
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
                    if (field.type === type && !field.disabled) { arr.push(field); }
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
        },

        removeItem: function (id) {
            this.remove(this.where({id: parseInt(id, 10)}));
        }
    });
}(window, Backbone));
