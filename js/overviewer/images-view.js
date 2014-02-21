(function () {
    'use strict';

    OVW.ImageView = Backbone.View.extend({
        templateId: "#imgGallery",
        className: "imgViewer",
        tagName: "div",

        events: {
            "click .imgView": "onImgClick"
        },

        initialize: function (options) {
            this.options = options || {};

            this.activeImgView = new OVW.ActiveImgView({
                model: this.model
            });

            this.template = _.template($(this.templateId).html());

            this.model.on("loaded", this.render, this);
        },

        render: function () {
            this.$el.html(this.template(this));
            this.activeImgView.render();
            this.$el.find(".bigImgContainer").append(this.activeImgView.$el);
        },

        getImgsLinks: function () {
            return this.model.get("imgLinks").smallImgs;
        },

        onImgClick: function (e) {
            var el = $(e.target);

            e.preventDefault();

            if (!el.hasClass("imgView")) { el = el.closest('.imgView'); }

            if (el.hasClass('active')) { return; }

            this.$el.find(".active").removeClass("active");

            $(el).addClass("active");

            this.trigger("imgSwitch", el.find("img").attr("id"));
        }
    });
}());
