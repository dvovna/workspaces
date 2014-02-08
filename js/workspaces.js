var WS = WS || {};
var Workspaces = {};
WS.Constants = {};
WS.Constants = {
    TOP: "top",
    LEFT: "left",
    BOTTOM: "bottom",
    RIGHT: "right"
};

/*jslint nomen:true*/
/*global WS, $, Backbone, _*/

(function (W) {
    "use strict";

    W.Workspaces = Backbone.Router.extend({
        initialize: function (options) {
            this.options = options || {};

            this.draggingController = new WS.DraggingController({
                placement: WS.Constants.TOP
            });

            this.topWorkspaceController = new WS.WorkspaceController({
                placement: WS.Constants.TOP
            });

            console.log('runned');
        }
    });

}(window));
