(function (W, Backbone) {
    'use strict';

    W.Evaluator = Backbone.Router.extend({
        initialize: function (options) {
            this.options = options || {};

            this.ListCollection = new W.Eval.ListCollection({
                endpoint: this.options.endpoint
            });

            this.listView = new W.Eval.ListView({
                collection: this.ListCollection
            });

            this.ListCollection.reset();

            this.evaluatorEl = this.listView.$el;

            this.ListCollection.on("change", this.onCollectionChange, this);
            this.ListCollection.on("remove", this.onItemRemove, this);
        },

        onCollectionChange: function () {
            this.listView.render();
        },

        onItemRemove: function (id) {
            this.trigger("remove", id);
        },
        /**
         * public setter
         */
        set: function (id) {
            this.ListCollection.setId(id);
        }
    });
}(window, Backbone));
