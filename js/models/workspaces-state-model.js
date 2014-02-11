/*jslint nomen:true*/
/*global window, WS, $, Backbone, _*/

(function (W, WS, $, Backbone, _) {
    "use strict";

    WS.WorkspacesStateModel = Backbone.Model.extend({
        defaults: {
            active: 0 //1-top, 2-right, 3-bottom, 4-left
        },

        initialize: function (options) {
            console.log('workspaces state!!');
        }
    });
}(window, WS, $, Backbone, _));
