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
/*global window, WS, $, Backbone, _*/

(function (W) {
    "use strict";

    W.Workspaces = Backbone.Router.extend({
        routes: {
            "*index": "index"
        },

        initialize: function (options) {
            this.options = options || {};

            this.state = new WS.WorkspacesStateModel();

            this.topWorkspaceModel = new WS.WorkspaceModel();
            this.topWorkspaceController = new WS.WorkspaceController({
                model: this.topWorkspaceModel,
                state: this.state
            });

            this.switcherController = new WS.SwitcherController({
                switcherId: this.options.switcherId
            });

            $("body").append(this.topWorkspaceController.$el);

            this.switcherController.on("switch", this.onWorkspaceSwitch, this);

            this.state.on("change", this.onStateChange, this);
        },

        index: function (args) {
            this.state.set(this.deparam(args));
        },

        onWorkspaceSwitch: function (index) {
            this.state.set("active", index);
        },

        onStateChange: function () {
            this.navigate($.param(this.state.attributes));
        },

        deparam: function (querystring) {
            querystring = querystring.substring(querystring.indexOf('?') + 1).split('&');

            var params = {}, pair, d = decodeURIComponent, i;

            for (i = querystring.length; i > 0; ) {
                pair = querystring[--i].split('=');
                params[d(pair[0])] = d(pair[1]);
            }

            return params;
        }
    });

}(window));
