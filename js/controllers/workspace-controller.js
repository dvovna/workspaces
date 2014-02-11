/*jslint nomen:true*/
/*global WS, $, Backbone, _*/

(function () {
    "use strict";

    WS.WorkspaceController = Backbone.View.extend({
        initialize: function (options) {
            this.options = options || {};

            this.collectorView = new WS.CollectorView();
            this.workspaceView = new WS.WorkspaceView();
            this.state = this.options.state || {};

            this.collectorView.on("dropped.ws", this.onDropped, this);

            $("body").append(this.collectorView.$el);
            $("body").append(this.workspaceView.$el);

            this.state.on("change:active", this.onStateChange, this);
        },

        onDropped: function () {
            this.workspaceView.show();
        },

        onStateChange: function () {
            this.workspaceView.show();
        }
    });
}());
