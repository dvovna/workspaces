/*jslint nomen:true*/
/*global window, WS, $, Backbone, _*/

(function (W, WS, $, Backbone, _) {
    "use strict";

    WS.WorkspaceView = Backbone.View.extend({
        initialize: function (options) {
            console.log('test!!');
        },

        show: function () {
            this.$el.show();
        }
    });
}(window, WS, $, Backbone, _));
