var res = {
		btn_red_matte9 : "res/btn_red_matte.9.png",
		btn_black9 : "res/btn_black.9.png",
		btn_white_matte9 : "res/btn_white_matte.9.png",
		btn_blue_matte9 : "res/btn_blue_matte.9.png",
		HelloWorld_png : "res/HelloWorld.png",
		MainMenuScene_json : "res/MainMenuScene.json",
		MainScene_json : "res/MainScene.json"
};

var g_resources = [];
for (var i in res) {
	g_resources.push(res[i]);
}

var scripts = [
    "MainMenuScene.js",
    "HelloWorldLayer.js",
    "MainLayer.js"
];

cc.loader.loadJs("src", scripts , function(err){
	if(err) return cc.log("load failed");
	//success
});