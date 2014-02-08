/*jslint nomen:true*/
/*global window, WS, $, Backbone, _, Test*/

(function (W) {
    "use strict";

    WS.CollectorViewTest = WS.Test.extend({
        before: function () {
            Test.draggingControllerInitSpy = W.spyOn(WS.DraggingController.prototype, "initialize");

            Test.obj = new WS.CollectorView();
        },

        initCollectorTest: function () {
            W.expect(Test.draggingControllerInitSpy).toHaveBeenCalled();
        },

        onDraggingEventTest: function () {
            Test.obj.draggingController.trigger('dragging');

            W.expect(Test.obj.$el).not.toHaveClass('wsHidden');
        }
    });
}(window));
