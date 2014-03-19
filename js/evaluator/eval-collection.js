(function () {
    'use strict';

    GL.EvalCollection = Backbone.Collection.extend({
        initialize: function (options) {
            this.options = options || {};

        },

        fetch: function () {
            $.ajax({
                url: this.url(),
                success: function (data) {
                    console.log(data);
                }
            });
        },

        url: function () {
            return this.options.path + "1";
        }
    });
}());
