/*jslint nomen:true*/
/*global window, WS, $, Backbone, _*/

(function () {
    'use strict';

    WS.SwitcherView = Backbone.View.extend({
        initialize: function (options) {
            this.options = options || {};
            console.log('switcher view');
        }
    });
}());