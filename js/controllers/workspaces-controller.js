/*jslint nomen:true*/
/*global WS, $, Backbone, _*/

(function (WS, $, Backbone) {
    'use strict';

    WS.WorkspacesController = Backbone.View.extend({
        initialize: function (options) {
            this.options = options || {};

            this.state = this.options.state;

            this.topWorkspaceModel = new WS.WorkspaceModel();
            this.topWorkspaceController = new WS.TopWorkspaceController({
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

            this.leftWorkspaceController.on("dropped", this.onLeftWSDropped, this);
            this.topWorkspaceController.on("dropped", this.onTopWSDropped, this);

            this.leftWorkspaceController.workspaceView.$el.append(this.options.overviewer.overviewerEl);
            this.topWorkspaceController.workspaceView.$el.append(this.options.evaluator.evaluatorEl);

            this.leftWorkspaceController.on('showed', this.onWSOpened, this);
            this.rightWorkspaceController.on('showed', this.onWSOpened, this);
            this.topWorkspaceController.on('showed', this.onWSOpened, this);

            this.leftWorkspaceController.on('hidden', this.onWSHiddend, this);
            this.rightWorkspaceController.on('hidden', this.onWSHiddend, this);
            this.topWorkspaceController.on('hidden', this.onWSHiddend, this);
        },

        onWSOpened: function (placement) {
            this.trigger('showed', placement);
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

        onWSHiddend: function () {
            this.trigger("hidden");
        },

        showWS: function (active) {
            var consts = WS.Constants;

            this.hideAllWS();

            if (active === consts.LEFT) { this.leftWorkspaceController.showWS(); }
            if (active === consts.TOP) { this.topWorkspaceController.showWS(); }
            if (active === consts.RIGHT) { this.rightWorkspaceController.showWS(); }
        },

        onLeftWSDropped: function (data) {
            this.state.set({leftWSItemId: data.itemId});
        },

        onTopWSDropped: function (data) {
            var arr = this.state.get("topWSItemIds") || [];

            arr = _.compact(arr);

            if (_.indexOf(arr, data.itemId) !== -1) { return; }

            arr.push(data.itemId);

            this.state.set({topWSItemIds: arr});
        }
    });
}(WS, $, Backbone));


