#pragma strict
function Start () {
 
}
 
function Update () {
 
}
var BG: Texture;
var myPlay : Texture;
var myPlay2 : Texture;
var myOp : Texture;
var myOp2 : Texture;
var myExit : Texture;
var myExit2 : Texture;
var myLogo : Texture;
var my:GUIStyle;
function OnGUI(){
    //GUI.Label( Rect(100,100,500,500),"Start Game");
    GUI.Label( Rect(0,0,1024,768),BG);
    
    
    GUI.skin.button.normal.background= myPlay;
    GUI.skin.button.hover.background= myPlay2;
    GUI.skin.button.active.background= myPlay2;

    if(GUI.Button( Rect(30,430,200,150),""))//myPlay,my))
    {
    Application.LoadLevel("sc2");
    }
    
    if (GUI.Button( Rect(260,430,200,150),""))//myOp))
       {
    Application.LoadLevel("option");
    }
    
    if (GUI.Button( Rect(490,430,200,150),""))//myExit))
    {
  Application.LoadLevel("cra");
    }
    
    if (GUI.Button( Rect(720,430,200,150),""))//"Howtoplay"))
    {
       Application.Quit();
    }

    
     
}