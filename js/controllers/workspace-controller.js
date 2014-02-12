/*jslint nomen:true*/
/*global WS, $, Backbone, _*/

(function () {
    "use strict";

    WS.WorkspaceController = Backbone.View.extend({
        initialize: function (options) {
            this.options = options || {};

            this.collectorView = new WS.CollectorView({
                className: this.options.placement + " wsHidden wsCollector"
            });
            this.workspaceView = new WS.WorkspaceView({
                className: this.options.placement + " wsWorkspace",
                placement: this.options.placement
            });

            this.state = this.options.state || {};

            this.collectorView.on("dropped.ws", this.onDropped, this);

            $("body").append(this.collectorView.$el);
            $("body").append(this.workspaceView.$el);
        },

        onDropped: function () {
            this.workspaceView.show();
        },

        showWS: function () {
            this.workspaceView.show();
        },

        hideWS: function () {
            this.workspaceView.hide();
        }
    });
}());
