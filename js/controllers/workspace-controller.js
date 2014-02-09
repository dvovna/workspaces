/*jslint nomen:true*/
/*global WS, $, Backbone, _*/

(function () {
    "use strict";

    WS.WorkspaceController = Backbone.View.extend({
        initialize: function (options) {
            this.options = options || {};

            this.collectorView = new WS.CollectorView();

            $("body").append(this.collectorView.$el);
        }
    });
}());
