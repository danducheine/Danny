#pragma strict
var timeStyle:GUIStyle;
var Star:Texture;
var mytime:int=0;
var time:int=10;

function Start () {



}
function OnGUI () {

GUI.Label(Rect(10,10,200,200),"Time : "+(time-(mytime)),timeStyle);
mytime++;


GUI.Label( Rect(800,20,70,70),Star);
GUI.Label( Rect(880,20,70,70),Star);
GUI.Label( Rect(950,20,70,70),Star);


}

function Update () {

  //transform.Translate(Vector3.forward*Time.deltaTime*10);
  //transform.Translate(Vector3.back*Time.deltaTime*10);
  //transform.Translate(Vector3.up*Time.deltaTime*10);
  transform.Translate(Vector3.down*Time.deltaTime*10);
    
    
  

}