//From https://github.com/EvanHahn/ScriptInclude
include=function(){function f(){var a=this.readyState;(!a||/ded|te/.test(a))&&(c--,!c&&e&&d())}var a=arguments,b=document,c=a.length,d=a[c-1],e=d.call;e&&c--;for(var g,h=0;c>h;h++)g=b.createElement("script"),g.src=arguments[h],g.async=!0,g.onload=g.onerror=g.onreadystatechange=f,(b.head||b.getElementsByTagName("head")[0]).appendChild(g)};
serialInclude=function(a){var b=console,c=serialInclude.l;if(a.length>0)c.splice(0,0,a);else b.log("Done!");if(c.length>0){if(c[0].length>1){var d=c[0].splice(0,1);b.log("Loading "+d+"...");include(d,function(){serialInclude([]);});}else{var e=c[0][0];c.splice(0,1);e.call();};}else b.log("Finished.");};serialInclude.l=new Array();

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    return vars;
}	 

serialInclude(['../lib/CGF.js',
'primitives/MyTriangle.js', 'primitives/MyRectangle.js', 'primitives/MyCylinder.js', 'primitives/MySphere.js',
'primitives/MyPlane.js', 'primitives/MyPatch.js', 'primitives/MyVehicle.js', 'primitives/MyTerrain.js',
'MyLSXScene.js', 'data/SceneInitials.js', 'data/SceneIllumination.js', 'data/SceneLight.js', 'LSXSceneGraph.js',
'LSXReader.js', 'data/SceneTexture.js', 'data/SceneGraphLeaf.js', 'data/SceneGraphLeafTerrain.js',
'data/SceneGraphLeafCylinder.js', 'data/SceneGraphLeafRectangle.js', 'data/SceneGraphLeafVehicle.js', 'data/SceneGraphLeafGameSet.js',
'data/SceneGraphLeafSphere.js', 'data/SceneGraphLeafPlane.js', 'data/SceneGraphLeafPatch.js', 'data/SceneGraphLeafTriangle.js', 'data/SceneMaterial.js',
'data/SceneGraphNode.js', 'MyInterface.js', 'Connection.js',
'animations/Animation.js', 'animations/LinearAnimation.js', 'animations/CircularAnimation.js',

'game/GameBoard.js','game/BoardTile.js','game/tiles/EmptyTile.js','game/tiles/BlackCircleTile.js',
'game/tiles/WhiteCircleTile.js','game/tiles/BlackSquareTile.js','game/tiles/WhiteSquareTile.js', 'game/Theme.js',
'game/TileStack.js','game/GameSet.js', 'game/Marker.js', 'animations/FadeAnimation.js',
'game/GameState.js', 'game/states/BoardSelectionState.js', 'game/states/ModeSelectionState.js',
'game/states/TowerSelectionState.js', 'game/BoardTower.js', 'game/towers/LightTower.js', 'game/towers/DarkTower.js',
'game/states/PlayGameState.js','animations/ParabolicAnimation.js', 'game/states/GameFinishedState.js',

main=function()
{
	// Standard application, scene and interface setup
    var app = new CGFapplication(document.body);
    var myScene = new MyLSXScene();
    var myInterface = new MyInterface();

    app.init();

    app.setScene(myScene);
    app.setInterface(myInterface);

	// get file name provided in URL, e.g. http://localhost/myproj/?file=myfile.xml 
	// or use "demo.xml" as default (assumes files in subfolder "scenes", check MySceneGraph constructor) 

    // create and load graph, and associate it to scene. 
    // Check console for loading errors
    var theme1 = new Theme(myScene, "wave.lsx", "Wave");
    var theme2 = new Theme(myScene, "sandbar.lsx", "Sandbar");
    var theme3 = new Theme(myScene, "test.lsx", "LAIG1");
    var theme4 = new Theme(myScene, "test2.lsx", "LAIG2");

    myScene.addTheme(theme1);
    myScene.addTheme(theme2);
    myScene.addTheme(theme3);
    myScene.addTheme(theme4);
    myScene.addUpdatable({
		update: function() {
			if (theme1.loaded) {
				myScene.setTheme(theme1.id);
				myScene.removeUpdatable(this);
			}
		}
	});

	myInterface.onSceneLoaded();
	
	// start
    app.run();
}

]);