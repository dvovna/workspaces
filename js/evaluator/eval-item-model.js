(function (W, Backbone) {
    'use strict';

    W.Eval = W.Eval || {};
    W.Eval.EvalItemModel = Backbone.Model.extend({
        initialize: function (options) {
            this.options = options || {};

            _.bindAll(this, "onSuccess");

            this.fetch();
        },

        fetch: function () {
            if (!this.get('id')) { return; }

            $.getJSON(this.url(), this.onSuccess);
        },

        url: function () {
            return this.get('endpoint') + this.get('id');
        },

        onSuccess: function (data) {
            this.set('fields', data);
        }
    });
}(window, Backbone));
