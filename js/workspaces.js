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

            this.switcherController.on("switching", this.onWorkspaceSwitching, this);

            this.state.on("change", this.onStateChange, this);
            this.state.on("change:active", this.onStateChangeActive, this);
            this.state.on("change:switching", this.onStateChangeSwitching, this);
        },

        index: function (args) {
            if (!args) { return; }

            this.state.set(this.deparam(args));
        },

        onWorkspaceSwitching: function (flag) {
            this.state.set("switching", flag);
        },

        onStateChange: function () {
            this.navigate($.param(this.state.attributes));
        },

        onStateChangeActive: function () {
            var active = this.state.get("active");

            if (active) { this.showWS(active); }
        },

        onStateChangeSwitching: function () {
            var switching = this.state.get("switching");

            if (switching === "false") { this.hideAllCollectors(); }
            if (switching === "true") { this.showAllCollectors(); }
        },

        showWS: function (active) {
            active = parseInt(active);

            this.hideAllWS();

            if (active === 1) { this.leftWorkspaceController.showWS(); }
            if (active === 2) { this.topWorkspaceController.showWS(); }
            if (active === 3) { this.rightWorkspaceController.showWS(); }
        },

        hideAllWS: function () {
            this.leftWorkspaceController.hideWS();
            this.topWorkspaceController.hideWS();
            this.rightWorkspaceController.hideWS();
        },

        hideAllCollectors: function () {
            this.leftWorkspaceController.hideCollector();
            this.topWorkspaceController.hideCollector();
            this.rightWorkspaceController.hideCollector();
        },

        showAllCollectors: function () {
            this.leftWorkspaceController.showCollector();
            this.topWorkspaceController.showCollector();
            this.rightWorkspaceController.showCollector();
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
