/*jslint nomen:true*/
/*global window, WS, $, Backbone, _, Test*/

(function (WS, Backbone, W) {
    'use strict';

    WS.WorkspacesControllerTest = WS.Test.extend({
        workspaceControllerSpy: {},

        mock: function () {
            Test.mocked.workspacesControllerMock = WS.WorkspacesController;
            WS.WorkspacesController = Backbone.View.extend();

            Test.mocked.switcherControllerMock = WS.SwitcherController;
            WS.SwitcherController = Backbone.View.extend();

            Test.mocked.WorkspacesStateModelMock = WS.WorkspacesStateModel;
            WS.WorkspacesStateModel = Backbone.View.extend();
        },

        unMock: function () {
            WS.WorkspacesController = Test.mocked.workspacesControllerMock;
            WS.SwitcherController = Test.mocked.switcherControllerMock;
            WS.WorkspacesStateModel = Test.mocked.WorkspacesStateModelMock;
        },

        before: function () {
            Test.workspacesControllerSpy = W.spyOn(WS.WorkspacesController.prototype, "initialize");
            Test.switcherControllerSpy = W.spyOn(WS.SwitcherController.prototype, "initialize");
            Test.workspacesStateModelSpy = W.spyOn(WS.WorkspacesStateModel.prototype, "initialize");

            Test.obj = new W.Workspaces({
                switcherId: "test"
            });
        },

        initTest: function () {
            W.expect(Test.workspacesControllerSpy).toHaveBeenCalledWith();
            W.expect(Test.switcherControllerSpy).toHaveBeenCalledWith({
                switcherId: "test"
            });
            W.expect(Test.workspacesStateModelSpy).toHaveBeenCalledWith();
        }
    });
}(WS, Backbone, window));
