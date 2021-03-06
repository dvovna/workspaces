/*jslint nomen:true*/
/*global window, WS, $, Backbone, _, Test, document*/

(function (WS, Backbone, W) {
    'use strict';

    WS.DraggingControllerTests = WS.Test.extend({
        testImgEl: "#testImg",

        before: function () {
//            W.loadFixtures('fixture.html');

            Test.triggerSpy = W.spyOn(WS.DraggingController.prototype, "trigger");

            Test.obj = new WS.DraggingController();
        },

        mousedownHandlerTest: function () {
            W.runs(function () {
                Test.obj.onMousedown({target: ""});
            });

            W.waitsFor(function () {
                return !Test.triggerSpy.wasCalled;
            }, "", 800);

            W.waitsFor(function () {
                return Test.triggerSpy.wasCalled;
            }, "", 1000);
        },

        mouseMoveHandlerTest: function () {
            $(Test.testImgEl).trigger('mousedown');
            Test.obj.timerId = 100500;
            Test.obj.onMouseMove();

            W.expect(Test.triggerSpy).toHaveBeenCalledWith("dragging");
        }
    });
}(WS, Backbone, window));
