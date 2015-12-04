/*
var LoadingScreenLayer = cc.Layer.extend({
	ctor:function () {
		//////////////////////////////
		//  super init first
		this._super();

		/////////////////////////////
		//  add a menu item with "X" image, which is clicked to quit the program
		//    you may modify it.
		// ask the window size
		var size = cc.winSize;

		var winsize = cc.director.getWinSize();
		// calculate the center point
		var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

		var mainscene = ccs.load(res.MainScene_json);
		this.addChild(mainscene.node);

		var label = new cc.LabelTTF("Loading Screen", "Lobster", 64,cc.TEXT_ALIGNMENT_CENTER);
		//label.setAnchorPoint(centerpos);
		label.setPosition(centerpos);
		cc.log(size);
		this.addChild(label);

		return true;
	}
});

var LoadingScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		var layer = new LoadingScreenLayer();
		this.addChild(layer);
	}
});
*/

var scene_mainscreen;
var scene_mainmenu;

var scene_partymenu;

var scene_shopmenu;
var scene_npcmenu;
var scene_questmenu;

var scene_dungeonmenu;
var scene_dungeonmap;
var scene_settings;

var AppScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		//var layer = new LoadingScreenLayer();
		//var layer = new MainLayer();
		//layer.init();
		//this.addChild(layer);
		
		if(scene_mainscreen != null){
			cc.director.runScene(scene_mainscreen);
		}else{
			scene_mainscreen = new MainMenuScene();
			cc.director.runScene(scene_mainscreen);
		}
	}
});

