(function () {
    'use strict';

    OVW.ActiveImgView = Backbone.View.extend({
        tagName: "img",

        initialize: function (options) {
            this.options = options || {};

            this.model.on("change:activeImgIndx", this.render, this);
        },

        render: function () {
            this.$el.attr("src", this.model.get("imgLinks").bigImgs[this.model.get("activeImgIndx")]);
        }
    });
}());
