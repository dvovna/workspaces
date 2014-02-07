var WS = {};
var Workspaces = {};
WS.Constants = {};
// WS.Constants = {
// 	TOP: "top",
// 	LEFT: "left",
// 	BOTTOM: "bottom",
// 	RIGHT: "right"
// }

/*jslint nomen:true*/
/*global WS, $, Backbone, _*/

(function () {
	"use strict";

	Workspaces = Backbone.Router.extend({
		initialize: function (options) {
			this.options = options || {};

			this.topWorkspace = new WS.Workspace({
				placement: WS.Constants.TOP
			});

			console.log('runned');
		}
	});

}());
