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

            $(".evaluator").html(this.listView.$el);

            this.set(13);

            this.ListCollection.on("change", this.onCollectionChange, this);
        },

        onCollectionChange: function () {
//            this.ListCollection.reset();
            console.log("render");
            this.listView.render();
        },

        set: function (id) {
            this.ListCollection.setId(id);
        }
    });
}(window, Backbone));
