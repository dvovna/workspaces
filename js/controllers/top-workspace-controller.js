(function () {
    WS.TopWorkspaceController = WS.WorkspaceController.extend({
        onDropped: function (args) {
            this.trigger("dropped", args);
        }
    });
}());
