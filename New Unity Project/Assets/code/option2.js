#pragma strict
var BG2: Texture;


function OnGUI () {
   GUI.Label( Rect(0,0,1024,768),BG2);
   
   
   
   if(Event.current.Equals(Event.KeyboardEvent("escape")))
	{
	Application.LoadLevel("gameplay1");
	}
	
	
}

function Update () {

}