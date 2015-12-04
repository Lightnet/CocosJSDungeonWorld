var MainMenuLayer = cc.Layer.extend({
	sprite:null,
	ctor:function () {
		//////////////////////////////
		//  super init first
		this._super();

		/////////////////////////////
		//  add a menu item with "X" image, which is clicked to quit the program
		//    you may modify it.
		// ask the window size
		var size = cc.winSize;

		//var mainscene = ccs.load(res.MainScene_json);
		//this.addChild(mainscene.node);
		
		//var mainscene = ccs.load(res.MainMenuScene_csd);
		var mainscene = ccs.load(res.MainMenuScene_json);
		this.addChild(mainscene.node);
		//var node = cc.Loader();//().loadCsb("res/MainScene.csb");
		//cc.log(node);
		cc.log(cc);
		
		return true;
	}
});

var MainMenuScene = cc.Scene.extend({
	onEnter:function () {
		this._super();
		//var layer = new LoadingScreenLayer();
		var layer = new MainMenuLayer();
		this.addChild(layer);
	}
});