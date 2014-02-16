/*jslint nomen:true*/
/*global WS, $, Backbone, _*/

(function () {
    "use strict";

    WS.WorkspaceController = Backbone.View.extend({
        initialize: function (options) {
            this.options = options || {};

            this.collectorView = new WS.CollectorView({
                className: this.options.placement + " wsCollector",
                placement: this.options.placement
            });
            this.workspaceView = new WS.WorkspaceView({
                className: this.options.placement + " wsWorkspace",
                placement: this.options.placement
            });

            this.collectorView.on("dropped.ws", this.onDropped, this);
            this.workspaceView.on("close", this.onWSClose, this);

            $("body").append(this.collectorView.$el);
            $("body").append(this.workspaceView.$el);
        },

        onDropped: function () {
            this.trigger('showed', this.options.placement);

            this.showWS();
        },

        onWSClose: function () {
            this.trigger("hidden");

            this.hideWS();
        },

        showWS: function () {
            this.workspaceView.show();
        },

        hideWS: function () {
            this.workspaceView.hide();
        },

        showCollector: function () {
            this.collectorView.show();
        },
        hideCollector: function () {
            this.collectorView.hide();
        }
    });
}());
