define([
		'require',
		'extensions/adapt-editorial/js/adapt-editorial'
	],function() {

	var Adapt = require("coreJS/adapt");
	var Block = Adapt.editorial.blockStore.block;

	var Image = Block.extend({
		className: function() {
			var classes = Block.prototype.className.call(this);
			return classes.trim();
		},
		postRender: function() {
			this.$el.imageready(_.bind(function() {
				this.trigger("ready");
			},this));
		},
		template: "editorial-image"
	});

	Adapt.editorial.register("image", Image);

	return Image;

});