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

            this.overviewer = new W.Overviewer({
                onStateChange: this.onOverviewerStateChange
            });

            this.evaluator = new W.Evaluator({
                endpoint: "/test/",
                onStateChange: this.onItemRemoved
            });

            this.evaluator.on("remove", this.onItemRemoved, this);

            this.wssController = new WS.WorkspacesController({
                overviewer: this.overviewer,
                evaluator: this.evaluator,
                state: this.state
            });

            this.switcherController = new WS.SwitcherController({
                switcherId: this.options.switcherId
            });

            this.switcherController.on("switching", this.onWorkspaceSwitching, this);

            this.state.on("change", this.onStateChange, this);
            this.state.on("change:active", this.onStateChangeActive, this);
            this.state.on("change:switching", this.onStateChangeSwitching, this);
            this.state.on("change:leftWSItemId", this.onStateChangeLeftWSItemId, this);
            this.state.on("change:topWSItemIds", this.onStateChangeTopWSItemId, this);
            this.state.on("change:activeImgIndx", this.onStateChangeActiveImgIndx, this);

            this.wssController.on('showed', this.onWSOpened, this);
            this.wssController.on('hidden', this.onWSHiddend, this);
        },

        index: function (args) {
            if (!args) { return; }

            this.state.set($.deparam(args));
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
            var active = this.state.get("active");

            if (active) { this.wssController.showWS(active); }
        },

        onStateChangeSwitching: function () {
            var switching = this.state.get("switching");

            if (switching === "false") { this.wssController.hideAllCollectors(); }
            if (switching === "true") { this.wssController.showAllCollectors(); }
        },

        onOverviewerStateChange: function (data) {
            this.state.set(data);
        },

        onItemRemoved: function (removedId) {
            var ids = this.state.get("topWSItemIds") || [];

            _.each(ids, function (id, indx) {
                if (parseInt(id, 10) === parseInt(removedId, 10)) { delete ids[indx]; }
            });

            this.state.set({topWSItemIds: ids});

            this.onStateChange();
        },

        onStateChangeLeftWSItemId: function () {
            this.overviewer.setItemId(this.state.get("leftWSItemId"));
        },

        onStateChangeTopWSItemId: function () {
            var ids = this.state.get("topWSItemIds") || [],
                self = this;

            _.each(ids, function (id) {
                self.evaluator.set(id);
            });
        },

        onStateChangeActiveImgIndx: function () {
            this.overviewer.setActiveImgIndx(this.state.get("activeImgIndx"));
        }
    });

}(window));
