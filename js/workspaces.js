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
                placement: WS.Constants.TOP
            });
            this.rightWorkspaceController = new WS.WorkspaceController({
                model: this.topWorkspaceModel,
                placement: WS.Constants.RIGHT
            });
            this.leftWorkspaceController = new WS.WorkspaceController({
                model: this.topWorkspaceModel,
                placement: WS.Constants.LEFT
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
            var active = this.state.get("active");

            this.showWS(active);
            this.navigate($.param(this.state.attributes));
        },

        showWS: function (active) {
            active = parseInt(active);
            if (active === 0) { this.hideAllWS(); }
            if (active === 1) {
                this.hideAllWS();
                this.leftWorkspaceController.showWS();
            }
            if (active === 2) {
                this.hideAllWS();
                this.topWorkspaceController.showWS();
            }
            if (active === 3) {
                this.hideAllWS();
                this.rightWorkspaceController.showWS();
            }
        },

        hideAllWS: function () {
            this.leftWorkspaceController.hideWS();
            this.topWorkspaceController.hideWS();
            this.rightWorkspaceController.hideWS();
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
