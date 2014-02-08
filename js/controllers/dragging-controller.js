/*jslint nomen:true*/
/*global window, document, WS, $, Backbone, _*/

(function (W, WS, $, Backbone, U) {
    "use strict";

    WS.DraggingController = Backbone.View.extend({
        initialize: function (options) {
            this.options = options || {};

            U.bindAll(this, "onMousedown", "onMouseup", "onMouseMove", "triggerDragging");

            $('img').on("mousedown.ws", this.onMousedown);
            $('img').on("mouseup.ws", this.onMouseup);
        },

        onMousedown: function (e) {
            $(e.target).attr("draggable", true);
            $(document).on("mousemove.ws", this.onMouseMove);
            this.timerId = W.setTimeout(this.triggerDragging, 1000);
        },

        onMouseup: function (e) {
            if (!this.timerId) { return; }

            $(document).off("mousemove.ws");
            W.clearTimeout(this.timerId);
            this.trigger('dragged');
        },

        onMouseMove: function () {
            if (!this.timerId) { return; }

            W.clearTimeout(this.timerId);
            this.triggerDragging();
        },

        triggerDragging: function () {
            $(document).off("mousemove.ws");
            this.trigger('dragging');
        }
    });
}(window, WS, $, Backbone, _));
