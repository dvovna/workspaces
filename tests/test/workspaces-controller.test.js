/*jslint nomen:true*/
/*global window, WS, $, Backbone, _, Test*/

(function (WS, Backbone, W) {
    'use strict';

    WS.WorkspacesControllerTest = WS.Test.extend({
        workspaceControllerSpy: {},

        mock: function () {
            Test.mocked.workspaceControllerMock = WS.WorkspaceController;
            WS.WorkspaceController = Backbone.View.extend();

            Test.mocked.workspaceModelMock = WS.WorkspaceModel;
            WS.WorkspaceModel = Backbone.Model.extend();
        },

        unMock: function () {
            console.log('unMock');
            WS.WorkspaceController = Test.mocked.workspaceControllerMock;
            WS.WorkspaceModel = Test.mocked.workspaceModelMock;
        },

        before: function () {
            Test.workspaceControllerSpy = W.spyOn(WS.WorkspaceController.prototype, "initialize");
            Test.workSpaceModelSpy = W.spyOn(WS.WorkspaceModel.prototype, "initialize");

            Test.obj = new W.Workspaces();
        },

        workspaceInitTest: function () {
            W.expect(Test.workspaceControllerSpy).toHaveBeenCalledWith({
                model: Test.obj.topWorkspaceModel
            });
        },

        workspaceModelInitTest: function () {
            W.expect(Test.workSpaceModelSpy).toHaveBeenCalledWith();
        }
    });
}(WS, Backbone, window));
