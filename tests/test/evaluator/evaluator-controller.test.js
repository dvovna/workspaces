/*jslint nomen:true*/
/*global window, WS, $, Backbone, _, Test*/

(function (W) {
    "use strict";

    WS.EvaluatorControllerTest = WS.Test.extend({
        before: function () {
            W.Eval = W.Eval || {};
            W.Eval.EvalCollection = W.Eval.EvalCollection || Backbone.Collection.extend();
            Test.EvalCollectionInitSpy = W.spyOn(W.Eval.EvalCollection.prototype, "initialize");
            Test.triggerSpy = W.spyOn(WS.CollectorView.prototype, "trigger");

            Test.obj = new W.Evaluator();
        },

        initCollectionTest: function () {
            W.expect(Test.EvalCollectionInitSpy).toHaveBeenCalled();
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
