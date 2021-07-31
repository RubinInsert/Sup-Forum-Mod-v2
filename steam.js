steam={IsSteamID32:function(input)
{return input&&/STEAM_0:[0-1]:\d{1,15}$/.test(input);},IsSteamID64:function(input)
{return input&&/7656\d{13}$/.test(input);},SteamIDTo32:function(steamid64)
{steamid64=steamid64.trim();steamId1=steamid64.substr(-1)%2;steamId2a=parseInt(steamid64.substr(0,4))-7656;steamId2b=steamid64.substr(4)-1197960265728;steamId2b=steamId2b-steamId1;return "STEAM_0:"+steamId1+":"+((steamId2a+steamId2b)/2);},SteamIDTo64:function(input)
{var parts=input.substr(6).split(':');var steamid32=Number(parts[1])+Number(parts[2])*2+1197960265728;return '7656'+steamid32;},NameID:function(name,steamid64)
{return name+'(<a href="http://steamcommunity.com/profiles/'+steamid64+'/">'+steam.SteamIDTo32(steamid64)+'</a>)'},InfoBox:function(name,steamid64,lazy)
{if(steamid64==0)
{return '<div class="tableavatar"><img class="avatar avatar-sm avatar-rounded" '+(lazy==false?'src':'data-original')+'="/static/images/console.png"></div><strong>CONSOLE</strong>';}
else
{return '<a href="/profile/'+steamid64+'/" target="_blank"><div class="infobox"><div class="tableavatar"><img class="avatar avatar-sm avatar-rounded" '+(lazy==false?'src':'data-original')+'="/api/avatar/'+steamid64+'"></div>'+name+'<div hidden> '+steamid64+' '+steam.SteamIDTo32(steamid64)+'</div></a></div>';}},InfoBox32:function(name,steamid,lazy)
{return steam.InfoBox(name,steam.SteamIDTo64(steamid),lazy);}}