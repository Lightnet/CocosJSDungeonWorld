var HelloWorldLayer = cc.Layer.extend({
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

		var mainscene = ccs.load(res.MainScene_json);
		this.addChild(mainscene.node);

		return true;
	}
});