(function (W, Backbone) {
    'use strict';

    W.Evaluator = Backbone.Router.extend({
        initialize: function (options) {
            this.options = options || {};

            this.itemsCollection = new W.Eval.ItemsCollection({
                endpoint: this.options.endpoint
            });

            this.listView = new W.Eval.ListView({
                collection: this.itemsCollection
            });

            this.itemsCollection.on("change", this.onCollectionChange, this);

            $(".evaluator").html(this.listView.$el);

            this.set(13);
        },

        onCollectionChange: function () {
            this.itemsCollection.reset();
            console.log("render");
            this.listView.render();
        },

        set: function (id) {
            this.itemsCollection.setId(id);
        }
    });
}(window, Backbone));
