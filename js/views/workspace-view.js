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
            this.$el.animate({bottom: "0px"}, 1000);
        }
    });
}(window, WS, $, Backbone, _));
