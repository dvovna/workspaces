/*jslint nomen:true*/
/*global window, WS, $, Backbone, _, Test*/

(function (W) {
    'use strict';

    WS.SwitcherControllerTests = WS.Test.extend({
        before: function () {
//            W.loadFixtures("fixtures/fixture.html");
            $('body').append('<a id="switcher"></a>');

            Test.triggerSpy = W.spyOn(WS.SwitcherController.prototype, "trigger");

            Test.obj = new WS.SwitcherController({
                switcherId: "#switcher"
            });
        },

        onSwitcherClickTest: function () {
            $("#switcher").trigger("click");

            W.expect(Test.triggerSpy).toHaveBeenCalledWith("switching", 'true');
        },

        onBodyClickTest: function () {
            $("body").trigger("click");

            W.expect(Test.triggerSpy).toHaveBeenCalledWith("switching", 'false');
        }
    });
}(window));