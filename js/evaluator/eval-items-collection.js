(function (W, Backbone) {
    'use strict';

    W.Eval.ItemsCollection = Backbone.Collection.extend({
        initialize: function (options) {
            this.options = options || {};
        },

        getAllByType: function (type) {
            console.log(this.models);
            console.log(this.where({type: "picture"}));
            return this.where({type: "picture"});
        }
    });
}(window, Backbone));
