/*jslint nomen:true*/
/*global window, WS, $, Backbone, _, Test*/

(function (W) {
    "use strict";

    WS.CollectorViewTest = WS.Test.extend({
        before: function () {
            Test.draggingControllerInitSpy = W.spyOn(WS.DraggingController.prototype, "initialize");
            Test.triggerSpy = W.spyOn(WS.CollectorView.prototype, "trigger");

            Test.obj = new WS.CollectorView();
        },

        initCollectorTest: function () {
            W.expect(Test.draggingControllerInitSpy).toHaveBeenCalled();
        },

        onDraggingEventTest: function () {
            Test.obj.draggingController.trigger('dragging');

            W.expect(Test.obj.$el).not.toHaveClass('wsHidden');
        },

        onDropppedEventTest: function () {
            var testObj = {test: "test"};

            Test.obj.draggingController.targetEl = {
                data: function () {
                    return testObj;
                }
            };

            Test.obj.$el.trigger("drop.ws");

            W.expect(Test.triggerSpy).toHaveBeenCalledWith("dropped.ws", testObj);
        }
    });
}(window));
