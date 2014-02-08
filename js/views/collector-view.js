/*jslint nomen:true*/
/*global WS, $, Backbone, _*/

(function () {
    "use strict";

    WS.CollectorView = Backbone.View.extend({
        tagName: "div",
        className: "wsHidden wsCollector",

        initialize: function (options) {
            this.options = options || {};

            _.bindAll(this, "onDrop", "hide");

            this.draggingController = new WS.DraggingController();

            this.draggingController.on("dragging", this.show, this);
            this.draggingController.on("dragged", this.hide, this);

            this.$el.on("dragover.ws", this.allowDropping);
            this.$el.on("drop.ws", this.onDrop);

            $("body").on("dragover.ws", this.allowDropping);
            $("body").on("drop.ws", this.hide);
        },

        show: function () {
            this.$el.removeClass("wsHidden");
        },

        hide: function () {
            this.$el.addClass('wsHidden');
        },

        onDrop: function () {
            this.hide();
        },

        allowDropping: function (e) {
            e.preventDefault();
        }
    });
}());
