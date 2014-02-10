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

            Test.mocked.switcherControllerMock = WS.SwitcherController;
            WS.SwitcherController = Backbone.View.extend();
        },

        unMock: function () {
            WS.WorkspaceController = Test.mocked.workspaceControllerMock;
            WS.WorkspaceModel = Test.mocked.workspaceModelMock;
            WS.SwitcherController = Test.mocked.switcherControllerMock;
        },

        before: function () {
            Test.workspaceControllerSpy = W.spyOn(WS.WorkspaceController.prototype, "initialize");
            Test.workSpaceModelSpy = W.spyOn(WS.WorkspaceModel.prototype, "initialize");
            Test.switcherControllerSpy = W.spyOn(WS.SwitcherController.prototype, "initialize");

            Test.obj = new W.Workspaces();
        },

        initTest: function () {
            W.expect(Test.workspaceControllerSpy).toHaveBeenCalledWith({
                model: Test.obj.topWorkspaceModel
            });
            W.expect(Test.workSpaceModelSpy).toHaveBeenCalledWith();
            W.expect(Test.switcherControllerSpy).toHaveBeenCalledWith();
        }
    });
}(WS, Backbone, window));
