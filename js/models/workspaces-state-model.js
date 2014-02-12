/*jslint nomen:true*/
/*global window, WS, $, Backbone, _*/

(function (W, WS, $, Backbone, _) {
    "use strict";

    WS.WorkspacesStateModel = Backbone.Model.extend({
        defaults: {
            active: 0 //0-nothing opened, 1-left, 2-top, 3-right
        },

        initialize: function (options) {
            console.log('workspaces state!!');
        }
    });
}(window, WS, $, Backbone, _));
