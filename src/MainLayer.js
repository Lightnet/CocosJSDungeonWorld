var MainLayer = cc.Layer.extend({
	
	ctor:function() {
		this._super();
		cc.associateWithNative( this, cc.LayerColor );
	},

	//
	init:function () {
		this._super();
		cc.log("main layer...");
		// get the screen size of your game canvas
		var winsize = cc.director.getWinSize();
		// calculate the center point
		var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

		//var spritebg = cc.Sprite(res.btn_red_matte9);
		//spritebg.setPosition(centerpos); 
		//this.addChild(spritebg);

		cc.MenuItemFont.setFontSize(60);
		//create a menu and assign onPlay event callback to it
		var menuItemPlay = new cc.MenuItemSprite(
				new cc.Sprite(res.btn_blue_matte9), // normal state image
				new cc.Sprite(res.btn_white_matte9), // select state image
				this.onPlay, this);
		var menu = new cc.Menu(menuItemPlay);  //7. create the menu
		menu.setPosition(centerpos);
		this.addChild(menu);
		cc.log(centerpos);

		cc.log("==init");
	},
	onPlay : function(){
		cc.log("==onplay clicked");
	}

});