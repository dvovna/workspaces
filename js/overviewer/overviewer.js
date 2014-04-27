window.OVW = {};

(function () {
    'use strict';

    window.Overviewer = Backbone.Router.extend({
        initialize: function (options) {
            this.options = options || {};

            this.overvierModel = new OVW.OverviewerModel({
                path: this.options.endPoint,
                itemId: this.options.itemId || ""
            });

            this.imageView = new OVW.ImageView({
                model: this.overvierModel
            });

            this.descriptionView = new OVW.DescriptionView({
                model: this.overvierModel
            });

            this.overviewerEl = $("<div class='overviewWS'></div>");
            this.overviewerEl.append(this.imageView.$el);
            this.overviewerEl.append(this.descriptionView.$el);

            this.imageView.on("imgSwitch", this.onActiveSwitch, this);
        },

        onActiveSwitch: function (indx) {
            this.overvierModel.set("activeImgIndx", parseInt(indx));

            if (typeof this.options.onStateChange === "function") {
                this.options.onStateChange.call(this, {activeImgIndx: indx});
            }
        },

        setItemId: function (itemId) {
            this.overvierModel.set("itemId", parseInt(itemId));
        },

        setActiveImgIndx: function (indx) {
            this.overvierModel.set("activeImgIndx", parseInt(indx), {silent: true});
        }
    });
}());