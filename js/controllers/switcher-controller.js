/*jslint nomen:true*/
/*global window, WS, $, Backbone, _*/

(function (W, WS, $, Backbone, _) {
    "use strict";

    WS.SwitcherController = Backbone.View.extend({
        initialize: function (options) {
            this.options = options || {};

            _.bindAll(this, "onSwitching", "onOffSwitching");

            this.switcherEl = this.options.switcherId ? $(this.options.switcherId) : $(".wsSwitcher");

            this.switcherEl.on("click", this.onSwitching);
            $("body").on("click", this.onOffSwitching);
        },

        onSwitching: function (e) {
            e.preventDefault();
            e.stopPropagation();

            this.trigger("switching", "true");
        },

        onOffSwitching: function (e) {
            this.trigger("switching", "false");
        }
    });
}(window, WS, $, Backbone, _));
