/*jslint nomen:true*/
/*global window, WS, $, Backbone, _*/

(function (W, WS, $, Backbone, _) {
    "use strict";

    WS.WorkspacesStateModel = Backbone.Model.extend({
        defaults: {
            active: WS.Constants.NONE,
            switching: 'false'
        },

        initialize: function (options) {
            console.log('workspaces state!!');
        }
    });
}(window, WS, $, Backbone, _));
