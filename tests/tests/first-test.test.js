/*jslint nomen:true*/
/*global JST, $, Backbone, _*/

(function () {
    JST.FirstTest = JST.Test.extend({
        before: function (test) {
        },

        after: function (test) {
            //tobe implemented
        },

        shouldWorkTest: function () {
            Test.sayHello(); //to show that it is possible to call methods from test class itself

            expect(true).toBe(true);
        },

        sayHello: function () {
            console.log('Hello people!');
        }
    });
}());
