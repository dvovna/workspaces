/*jslint nomen:true*/
/*global window, WS, $, Backbone, _, jasmine, Test*/

var WS = WS || {};
var Test = {};

(function (window, WS, $, Backbone, _, jasmine) {
    "use strict";

    WS.Test = Backbone.View.extend({
        obj: {},
        mocked: {},

        initialize: function () {
            this.addBeforeAfter();
        },
        /**
         * add before and after handlers to jasmine current test env
         */
        addBeforeAfter: function () {
            var self = this;
            jasmine.getEnv().beforeEach(function () {
                Test = self;

                if (typeof self.mock === "function") {
                    self.mock.call();
                }

                if (typeof self.before === 'function') {
                    self.before.call();
                }
            });
            jasmine.getEnv().afterEach(function () {
                self.clearHtmlRunner();

                if (typeof self.unMock === "function") {
                    self.unMock.call();
                }

                if (typeof self.after === 'function') {
                    self.after.call();
                }
            });
        },

        clearHtmlRunner: function () {
            //should clear all elts except #HTMLReporter in the body
            $("body > :not(#HTMLReporter)").remove();
        }
    });

}(window, WS, $, Backbone, _, jasmine));