// Created by iWeb 2.0.4 local-build-20100226

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,24),url:'Anreise_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Anreise_files/stroke_1.png'},{rect:new IWRect(1,-1,120,2),url:'Anreise_files/stroke_2.png'},{rect:new IWRect(121,-1,2,2),url:'Anreise_files/stroke_3.png'},{rect:new IWRect(121,1,2,24),url:'Anreise_files/stroke_4.png'},{rect:new IWRect(121,25,2,2),url:'Anreise_files/stroke_5.png'},{rect:new IWRect(1,25,120,2),url:'Anreise_files/stroke_6.png'},{rect:new IWRect(-1,25,2,2),url:'Anreise_files/stroke_7.png'}],new IWSize(122,26)),shadow_1:new IWShadow({blurRadius:10,offset:new IWPoint(4.2426,4.2426),color:'#000000',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Anreise_files/AnreiseMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
