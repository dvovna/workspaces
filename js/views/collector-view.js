/*jslint nomen:true*/
/*global WS, $, Backbone, _*/

(function () {
    "use strict";

    WS.CollectorView = Backbone.View.extend({
        tagName: "div",
        className: "wsHidden wsCollector",

        initialize: function (options) {
            this.options = options || {};

            this.draggingController = new WS.DraggingController();

            this.draggingController.on("dragging", this.show, this);
        },

        show: function () {
            console.log('show');
            this.$el.removeClass("wsHidden");
        }
    });
}());
