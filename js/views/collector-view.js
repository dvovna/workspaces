/*jslint nomen:true*/
/*global WS, $, Backbone, _*/

(function () {
    "use strict";

    WS.CollectorView = Backbone.View.extend({
        tagName: "div",
        bodyId: "body",
        events: {
            "click": "onClick"
        },

        initialize: function (options) {
            this.options = options || {};

            _.bindAll(this, "onDrop", "hide");

            this.draggingController = new WS.DraggingController();

            this.draggingController.on("dragging", this.show, this);
            this.draggingController.on("dragged", this.hide, this);

            this.$el.on("dragover.ws", this.allowDropping);
            this.$el.on("drop.ws", this.onDrop);

            $(this.bodyId).on("dragover.ws", this.allowDropping);
            $(this.bodyId).on("drop.ws", this.hide);
            $(this.bodyId).on("click.ws", this.hide);
        },

        show: function () {
            var coords = {};

            coords[this.options.placement] = "0px";

            this.$el.animate(coords, 300);
        },

        hide: function () {
            var coords = {};

            coords[this.options.placement] = "-" + this.getCoordsForHiding(this.options.placement) + "px";

            this.$el.animate(coords, 300);
        },

        getCoordsForHiding: function (direction) {
            return direction === "top" ? this.$el.outerHeight() : this.$el.outerWidth();
        },

        onDrop: function () {
            this.trigger("dropped.ws", this.draggingController.targetEl.data());

            this.hide();
        },

        onClick: function (e) {
            e.preventDefault();
            e.stopPropagation();

            this.hide();

            this.trigger("selected");
        },

        allowDropping: function (e) {
            e.preventDefault();
        }
    });
}());
