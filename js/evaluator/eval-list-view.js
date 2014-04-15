(function (W, Backbone, U, $) {
    'use strict';

    W.Eval = W.Eval || {};
    W.Eval.ListView = Backbone.View.extend({
        tagName: "ul",
        className: "evaluator",
        template: U.template($("#list-view-tpl").html()),

        events: {
            "click .fieldName": "onDisableFieldClick"
        },

        initialize: function (options) {
            this.options = options || {};

            this.disabledFieldsView = new W.Eval.DisabledFieldsView({
                model: this.collection.disabledFieldsModel
            });
        },

        render: function () {
            this.$el.html(this.template(this.collection.itemsModel));
            this.disabledFieldsView.render();
            this.$el.find(".disabledFieldsList").replaceWith(this.disabledFieldsView.$el);
        },

        onDisableFieldClick: function (e) {
            console.log($(e.target).attr("id"));
            var fieldType = $(e.target).val();

            e.preventDefault();

            this.collection.disableFieldByType(fieldType);
        }
    });
}(window, Backbone, _, $));
