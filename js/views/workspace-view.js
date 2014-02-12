/*jslint nomen:true*/
/*global window, WS, $, Backbone, _*/

(function (W, WS, $, Backbone, _) {
    "use strict";

    WS.WorkspaceView = Backbone.View.extend({
        tagName: "div",

        initialize: function (options) {
            this.options = options || {};
            console.log('workspace view!!');
        },

        show: function () {
            var coords = {};

            coords[this.options.placement] = "0px";

            this.$el.animate(coords, 1000);
        },

        hide: function () {
            var coords = {};

            coords[this.options.placement] = "-1500px";

            this.$el.animate(coords, 500);
        }
    });
}(window, WS, $, Backbone, _));
