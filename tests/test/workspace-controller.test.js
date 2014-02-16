/*jslint nomen:true*/
/*global window, WS, $, Backbone, _, Test*/

(function (WS, Backbone, W) {
    'use strict';

    WS.WorkspaceControllerTest = WS.Test.extend({
        mock: function () {
            Test.mocked.CollectorViewMock = WS.CollectorView;
            WS.CollectorView = Backbone.View.extend();

            Test.mocked.WorkspaceViewMock = WS.WorkspaceView;
            WS.WorkspaceView = Backbone.View.extend();
        },

        unMock: function () {
            WS.CollectorView = Test.mocked.CollectorViewMock;
            WS.WorkspaceView = Test.mocked.WorkspaceViewMock;
        },

        before: function () {
            Test.workspaceViewSpy = W.spyOn(WS.WorkspaceView.prototype, "initialize");
            Test.collectorViewSpy = W.spyOn(WS.CollectorView.prototype, "initialize");

            Test.obj = new WS.WorkspaceController({
                placement: "top"
            });
        },

        workspaceInitTest: function () {
            W.expect(Test.workspaceViewSpy).toHaveBeenCalledWith({
                className: "top wsWorkspace",
                placement: "top"
            });

            W.expect(Test.collectorViewSpy).toHaveBeenCalledWith({
                className : 'top wsCollector',
                placement: "top"
            });
        }
    });
}(WS, Backbone, window));
