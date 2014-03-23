(function (W, Backbone) {
    'use strict';

    W.Eval.EvalProcessor = Backbone.Model.extend({
        initialize: function (options) {
            this.options = options || {};
            this.collection = this.options.collection;

            this.collection.on("change", this.onCollectionChange, this);
        },

        onCollectionChange: function () {
            console.log(this.collection.models);

            _.each(this.collection.models, function (model) {
                console.log('tut', model.attributes);
            });

//            this.collection.reset();
        }
    });
}(window, Backbone));
