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

            this.parseBetterItems();

            this.countBetterItems();

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
        },

        parseBetterItems: function () {
            var fields = this.itemsModel.attributes,
                self = this;

            _.each(fields, function (itemArray) {
                _.each(itemArray, function (item) {
                    if (self.isBetterItem(itemArray, item)) {
                        item.isBetter = true;
                    } else {
                        item.isBetter = false;
                    }
                });
            });
        },

        isBetterItem: function (arr, item) {
            var bestItem;

            if (!item.evalRule) { return; }

            if (item.evalRule === "MAX") { bestItem = this.findMaxItem(arr); }
            if (item.evalRule === "MIN") { bestItem = this.findMinItem(arr); }

            return item.evalRule === "MAX" ? item.value >= bestItem : item.value <= bestItem;
        },

        findMaxItem: function (arr) {
            var maxItem = arr[0].value;

            _.each(arr, function (subItem) {
                if (maxItem < subItem.value) { maxItem = subItem.value; }
            });

            return maxItem;
        },

        findMinItem: function (arr) {
            var minItem = arr[0].value;

            _.each(arr, function (subItem) {
                if (minItem > subItem.value) { minItem = subItem.value; }
            });

            return minItem;
        },

        countBetterItems: function () {
            var fields = this.itemsModel.attributes,
                self = this;

            _.each(this.models, function (model) {
                if (!model.get('fields')) { return; }

                model.get('fields')[0].betterCount = self.getBetterFieldsNumber(model.get("fields"));
            });
        },

        getBetterFieldsNumber: function (fields) {
            var count = 0;


            _.each(fields, function (field) {
                if (field.isBetter) {
                    count += 1;
                }
            });

            return count;
        }
    });
}(window, Backbone));
