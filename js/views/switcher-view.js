/*jslint nomen:true*/
/*global window, WS, $, Backbone, _*/

(function () {
    'use strict';

    /**
     * here should be an implementation of the modal
     * window with clickable small previews of each workspace
     * for now it will be only one workspace.. so controller will do all work
     * @type {*|void}
     */
    WS.SwitcherView = Backbone.View.extend({
        initialize: function (options) {
            this.options = options || {};
        }
    });
}());