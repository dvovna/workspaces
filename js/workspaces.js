var WS = WS || {};
var Workspaces = {};
WS.Constants = {};
WS.Constants = {
    TOP: "top",
    LEFT: "left",
    BOTTOM: "bottom",
    RIGHT: "right",
    NONE: "none"
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

            this.leftWorkspaceController.on('showed', this.onWSOpened, this);
            this.rightWorkspaceController.on('showed', this.onWSOpened, this);
            this.topWorkspaceController.on('showed', this.onWSOpened, this);

            this.leftWorkspaceController.on('hidden', this.onWSHiddend, this);
            this.rightWorkspaceController.on('hidden', this.onWSHiddend, this);
            this.topWorkspaceController.on('hidden', this.onWSHiddend, this);
        },

        index: function (args) {
            if (!args) { return; }

            this.state.set(this.deparam(args));
        },

        onWorkspaceSwitching: function (flag) {
            this.state.set("switching", flag);
        },

        onWSOpened: function (placement) {
            this.state.set("active", placement, {silent: true});

            this.onStateChange();
        },

        onWSHiddend: function () {
            this.state.set("active", WS.Constants.NONE, {silent: true});

            this.onStateChange();
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
            var consts = WS.Constants;

            this.hideAllWS();

            if (active === consts.LEFT) { this.leftWorkspaceController.showWS(); }
            if (active === consts.TOP) { this.topWorkspaceController.showWS(); }
            if (active === consts.RIGHT) { this.rightWorkspaceController.showWS(); }
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
