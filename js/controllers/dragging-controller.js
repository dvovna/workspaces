/*jslint nomen:true*/
/*global window, WS, $, Backbone, _*/

(function (W, WS, $, Backbone, U) {
    "use strict";

    WS.DraggingController = Backbone.View.extend({
        tagName: "div",

        initialize: function (options) {
            this.options = options || {};

            U.bindAll(this, "onMousedown", "onMouseup", "onMouseMove", "triggerDragging");

            console.log('dragger!!');
            $('img').on("mousedown.ws", this.onMousedown);
            $('img').on("mouseup.ws", this.onMouseup);
        },

        render: function () {

        },

        onMousedown: function (e) {
            $(document).on("mousemove.ws", this.onMouseMove);
            this.timerId = W.setTimeout(this.triggerDragging, 1000);
        },

        onMouseup: function (e) {
            if (!this.timerId) { return; }

            $(document).off("mousemove.ws");
            W.clearTimeout(this.timerId);
        },

        onMouseMove: function () {
            if (!this.timerId) { return; }

            W.clearTimeout(this.timerId);
            this.triggerDragging();
        },

        triggerDragging: function () {
            console.log('trigger');
            $(document).off("mousemove.ws");
            this.trigger('dragging');
        }
    });
}(window, WS, $, Backbone, _));
