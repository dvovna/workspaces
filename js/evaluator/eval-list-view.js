(function (W, Backbone, U, $) {
    'use strict';

    W.Eval = W.Eval || {};
    W.Eval.ListView = Backbone.View.extend({
        tagName: "ul",
        className: "evaluator",
        template: U.template($("#list-view-tpl").html()),

        events: {
            "click .fieldName": "onDisableFieldClick",
            "click button": "onItemRemoveClick"
        },

        initialize: function (options) {
            this.options = options || {};

            this.disabledFieldsView = new W.Eval.DisabledFieldsView({
                collection: this.collection.disabledFieldsCollection
            });

            this.collection.on("ready", this.render, this);
        },

        render: function () {
            this.$el.html(this.template(this.collection.itemsModel));
            this.disabledFieldsView.render();
            this.$el.find(".disabledFieldsList").replaceWith(this.disabledFieldsView.$el);
        },

        onDisableFieldClick: function (e) {
            var fieldType = $(e.target).attr('id'),
                fieldName = $(e.target).text();

            e.preventDefault();

            this.collection.disableFieldByType(fieldType, fieldName);
        },

        onItemRemoveClick: function (e) {
            var itemId = $(e.target).attr('id');

            this.collection.removeItem(itemId);
        }
    });
}(window, Backbone, _, $));
