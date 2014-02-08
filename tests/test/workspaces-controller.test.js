/*jslint nomen:true*/
/*global window, WS, $, Backbone, _, Test*/

(function (WS, Backbone, W) {
    'use strict';

    WS.WorkspacesControllerTest = WS.Test.extend({
        workspaceControllerSpy: {},

        mock: function () {
            Test.mocked.workspaceControllerMock = WS.WorkspaceController;
            WS.WorkspaceController = Backbone.View.extend();

            Test.mocked.draggingControllerMock = WS.DraggingController;
            WS.DraggingController = Backbone.View.extend();
        },

        unMock: function () {
            WS.WorkspaceController = Test.mocked.workspaceControllerMock;
            WS.DraggingController = Test.mocked.draggingControllerMock;
        },

        before: function () {
            Test.workspaceControllerSpy = W.spyOn(WS.WorkspaceController.prototype, "initialize");
            Test.draggingControllerSpy = W.spyOn(WS.DraggingController.prototype, "initialize");

            Test.obj = new W.Workspaces();
        },

        workspaceInitTest: function () {
            W.expect(Test.workspaceControllerSpy).toHaveBeenCalledWith({
                placement: WS.Constants.TOP
            });
        },

        draggingControllerInitTest: function () {
            W.expect(Test.draggingControllerSpy).toHaveBeenCalledWith();
        }
    });
}(WS, Backbone, window));
