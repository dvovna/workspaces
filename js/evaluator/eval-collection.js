(function (W, Backbone) {
    'use strict';

    W.Eval = W.Eval || {};
    W.Eval.EvalCollection = Backbone.Collection.extend({
        itemIds: [],

        initialize: function (options) {
            this.options = options || {};

        },

        fetch: function () {
            $.ajax({
                url: this.url(),
                success: function (data) {
                    console.log(data);
                }
            });
        },

        url: function () {
            //what it should build? number of ids, or each urls for each id
            return this.options.path + "1";
        },

        setId: function (id) {
            this.itemIds.push(W.parseInt(id));
        }
    });
}(window, Backbone));
