(function () {
    'use strict';

    OVW.DescriptionView = Backbone.View.extend({
        templateId: "#description",
        className: "descriptionContainer",
        tagName: "div",

        initialize: function (options) {
            this.options = options || {};

            this.template = _.template($(this.templateId).html());

            this.model.on("loaded", this.render, this);
        },

        render: function () {
            this.data = this.model.get("itemData");
            this.$el.html(this.template(this));
        },

        get: function (fieldName) {
            return this.data[fieldName];
        }
    });
}());
