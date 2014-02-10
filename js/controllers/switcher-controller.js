/*jslint nomen:true*/
/*global window, WS, $, Backbone, _*/

(function (W, WS, $, Backbone, _) {
    "use strict";

    WS.SwitcherController = Backbone.View.extend({
        events: {
            "click #wsSwitcher": "onSwitch"
        },

        initialize: function (options) {
            console.log('switcher!!');
            _.bindAll(this, "onSwitch");

            $(".wsSwitcher").on("click", this.onSwitch);


            this.switcherView = new WS.SwitcherView();
        },

        onSwitch: function (e) {
            e.preventDefault();
            console.log("switch!");
        }
    });
}(window, WS, $, Backbone, _));
