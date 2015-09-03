#pragma strict
var BG2: Texture;
var BG3: Texture;
var myPlay : Texture;
var myPlay2 : Texture;
var my:GUIStyle;

function OnGUI () {
   GUI.Label( Rect(0,0,1024,768),BG2);
   
     
    GUI.skin.button.normal.background= myPlay;
    GUI.skin.button.hover.background= myPlay2;
    GUI.skin.button.active.background= myPlay2;
	
    if (GUI.Button( Rect(260,430,200,150),""))
	{
	  Application.LoadLevel("option2");
	}
	
	
	
	
	
	
	
	
	
	
	
if(Event.current.Equals(Event.KeyboardEvent("escape")))
	{
	Application.LoadLevel("gameplay1");
	}
	
	}
function Start () {

}

function Update () {

}
