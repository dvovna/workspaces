(function () {
    'use strict';

    OVW.OverviewerModel = Backbone.Model.extend({
        defaults: {
            activeImgIndx: 0
        },

        initialize: function () {
            _.bindAll(this, "onSuccess");

            this.on("change:itemId", this.fetch, this);
        },
        /**
         * I need here a set of links on small images
         * details about this product
         * see mocks.js
         */
        fetch: function () {
            $.ajax({
                url: this.url(),
                type: "GET",
                dataType: 'json',
                success: this.onSuccess,
                error: function (error) {
                    alert("Hippi don't make me sad", error);
                }
            });
        },

        url: function () {
            var itemId = this.get("itemId") || "";

            if (!itemId) { return; }

            return this.get("path") + "?itemId=" + itemId;
        },

        onSuccess: function (data) {
            this.set(data, {silent: true});

            this.trigger('loaded');
        }
    });
}());
