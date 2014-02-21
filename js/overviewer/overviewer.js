window.OVW = {};

(function () {
    'use strict';

    window.Overviewer = Backbone.Router.extend({
//        routes: {
//            "active/:id/:index": "active",
//            "*index": "index"
//        },

        initialize: function (options) {
            this.options = options || {};

            this.overvierModel = new OVW.OverviewerModel({
                path: "getOverview",
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
            this.overvierModel.on("change:itemId", this.updateUrl, this);
        },

        index: function (id) {
            if (!id && !this.overvierModel.get("itemId")) {
                return;
            }

            this.overvierModel.set({
                itemId: parseInt(id) || this.options.itemId
            }, {silent: true});

            this.updateUrl();
            this.overvierModel.fetch();
        },

        active: function (id, index) {
            this.overvierModel.set({
                itemId: parseInt(id),
                activeImgIndx: parseInt(index)
            }, {silent: true});

            this.overvierModel.fetch();
        },

        updateUrl: function () {
            var url = "active/" + this.overvierModel.get("itemId") + "/" + this.overvierModel.get("activeImgIndx");
            if (typeof this.options.onStateChange === "function") {
                this.options.onStateChange.call(this, url);
                return;
            }
            this.navigate(url);
        },

        onActiveSwitch: function (indx) {
            this.overvierModel.set("activeImgIndx", parseInt(indx));

            this.updateUrl();
        },

        setItemId: function (itemId) {
            console.log('here');
            this.overvierModel.set("itemId", itemId);
        }
    });
}());