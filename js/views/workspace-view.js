/*jslint nomen:true*/
/*global window, WS, $, Backbone, _*/

(function (W, WS, $, Backbone, _) {
    "use strict";

    WS.WorkspaceView = Backbone.View.extend({
        tagName: "div",

        initialize: function (options) {
            this.options = options || {};

            _.bindAll(this, "onClose");

            this.$el.append($("<button class='close'>Close</button>"));
            this.$el.find(".close").bind("click", this.onClose);
        },

        onClose: function (e) {
            e.preventDefault();

            this.trigger("close");
        },

        show: function () {
            var coords = {};

            coords[this.options.placement] = "0px";

            this.$el.animate(coords, 500);
        },

        hide: function () {
            var coords = {};

            coords[this.options.placement] = "-2000px";

            this.$el.animate(coords, 500);
        }
    });
}(window, WS, $, Backbone, _));
