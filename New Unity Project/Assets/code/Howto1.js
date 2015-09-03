#pragma strict
var mypic:Texture;

function OnGUI () {
	GUI.Label(Rect(Screen.width/2,Screen.height/2,800,600),"How to");
	
if(Event.current.Equals(Event.KeyboardEvent("escape")))
	{
	Application.LoadLevel("gameplay1");
	}
}
function Start () {

}

function Update () {

}
