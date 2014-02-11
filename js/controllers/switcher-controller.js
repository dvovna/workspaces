/*jslint nomen:true*/
/*global window, WS, $, Backbone, _*/

(function (W, WS, $, Backbone, _) {
    "use strict";

    WS.SwitcherController = Backbone.View.extend({
        initialize: function (options) {
            this.options = options || {};

            _.bindAll(this, "onSwitch");

            this.switcherEl = this.options.switcherId ? $(this.options.switcherId) : $(".wsSwitcher");

            this.switcherEl.on("click", this.onSwitch);
        },

        onSwitch: function (e) {
            e.preventDefault();

            this.trigger("switch", 1);
        }
    });
}(window, WS, $, Backbone, _));
