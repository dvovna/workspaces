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

            _.bindAll(this, "onOverviewerStateChange");

            this.state = new WS.WorkspacesStateModel();

            this.overviewer = new Overviewer({
                onStateChange: this.onOverviewerStateChange
            });

            this.wssController = new WS.WorkspacesController({
                overviewer: this.overviewer
            });

            this.switcherController = new WS.SwitcherController({
                switcherId: this.options.switcherId
            });

            this.switcherController.on("switching", this.onWorkspaceSwitching, this);

            this.state.on("change", this.onStateChange, this);
            this.state.on("change:active", this.onStateChangeActive, this);
            this.state.on("change:switching", this.onStateChangeSwitching, this);

            this.wssController.on('showed', this.onWSOpened, this);
            this.wssController.on('hidden', this.onWSHiddend, this);
        },

        index: function (args) {
            if (!args) { return; }

            this.state.set(this.deparam(args));
        },

        onWorkspaceSwitching: function (flag) {
            this.state.set("switching", flag);
        },

        onWSOpened: function (placement) {
            this.state.set("switching", "false");

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
            console.log('hello');
            var active = this.state.get("active");

            if (active) { this.wssController.showWS(active); }
        },

        onStateChangeSwitching: function () {
            var switching = this.state.get("switching");

            if (switching === "false") { this.wssController.hideAllCollectors(); }
            if (switching === "true") { this.wssController.showAllCollectors(); }
        },

        deparam: function (querystring) {
            querystring = querystring.substring(querystring.indexOf('?') + 1).split('&');

            var params = {}, pair, d = decodeURIComponent, i;

            for (i = querystring.length; i > 0; ) {
                pair = querystring[--i].split('=');
                params[d(pair[0])] = d(pair[1]);
            }

            return params;
        },

        onOverviewerStateChange: function (data) {
            return true;
        }
    });

}(window));
