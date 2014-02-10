/*jslint nomen:true*/
/*global window, WS, $, Backbone, _*/

(function (W, WS, $, Backbone, _) {
    "use strict";

    WS.WorkspaceView = Backbone.View.extend({
        tagName: "div",
        className: "wsWorkspace top",

        initialize: function (options) {
            console.log('test!!');
        },

        show: function () {
            this.$el.animate({top: "0px"}, 1000);
        }
    });
}(window, WS, $, Backbone, _));
