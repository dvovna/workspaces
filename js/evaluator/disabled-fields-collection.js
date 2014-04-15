(function (W) {
    'use strict';

    W.Eval = W.Eval || {};
    W.Eval.DisabledFieldsCollection = Backbone.Collection.extend({
        initialize: function (options) {
            this.options = options || {};
        },

        getDisabledFieldsTypes: function () {
            var disabledFieldsTypes = [];

            _.each(this.models, function (model) {
                disabledFieldsTypes.push(model.get('type'));
            });

            return disabledFieldsTypes;
        }
    });
}(window));
