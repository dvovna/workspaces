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

            Test.mocked.OverviewerMock = window.Overviewer;
            window.Overviewer = Backbone.Router.extend();
        },

        unMock: function () {
            WS.WorkspacesController = Test.mocked.workspacesControllerMock;
            WS.SwitcherController = Test.mocked.switcherControllerMock;
            WS.WorkspacesStateModel = Test.mocked.WorkspacesStateModelMock;
            window.Overviewer = Test.mocked.OverviewerMock;
        },

        before: function () {
            Test.workspacesControllerSpy = W.spyOn(WS.WorkspacesController.prototype, "initialize");
            Test.switcherControllerSpy = W.spyOn(WS.SwitcherController.prototype, "initialize");
            Test.workspacesStateModelSpy = W.spyOn(WS.WorkspacesStateModel.prototype, "initialize");
            Test.overviewerSpy = W.spyOn(window.Overviewer.prototype, "initialize");

            Test.obj = new W.Workspaces({
                switcherId: "test"
            });
        },

        initTest: function () {
            W.expect(Test.workspacesControllerSpy).toHaveBeenCalledWith({
                overviewer: Test.obj.overviewer,
                state: Test.obj.state
            });
            W.expect(Test.switcherControllerSpy).toHaveBeenCalledWith({
                switcherId: "test"
            });
            W.expect(Test.workspacesStateModelSpy).toHaveBeenCalledWith();
            W.expect(Test.overviewerSpy).toHaveBeenCalledWith({
                onStateChange: Test.obj.onOverviewerStateChange
            });
        }
    });
}(WS, Backbone, window));
