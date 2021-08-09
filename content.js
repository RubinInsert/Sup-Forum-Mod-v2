    // Loading in
console.log("Insert Name's Forum Modification")







		function FillEmptyPinSlot(topic) {

			  for (Pinned_Slot = 1; Pinned_Slot <= 10; Pinned_Slot++) {

  				if (localStorage.getItem("Pinned_" + Pinned_Slot) == null) {
	  				localStorage.setItem('Pinned_' + Pinned_Slot, topic);
	  				console.log("Slot #" + Pinned_Slot + ", was available and was filled.");
	  				break;
	  				} 
				}
			}
			// Insert As  A <script> tag for global use cause fuck using any other method.
		$('body').prepend(`
			<script>
					function FillEmptyPinSlot(topic) {

			  for (Pinned_Slot = 1; Pinned_Slot <= 10; Pinned_Slot++) {

  				if (localStorage.getItem("Pinned_" + Pinned_Slot) == null) {
	  				localStorage.setItem('Pinned_' + Pinned_Slot, topic);
	  				localStorage.setItem('Pinned_' + Pinned_Slot + '_URL', location.href.split("?")[0])
	  				console.log("Slot #" + Pinned_Slot + ", was available and was filled.");
	  				break;
	  				} 
				}
			}
			</script>
			`)
        if (window.location.href == "https://forum.superiorservers.co/") { 
 			

        	 $('.cForumList:first').hide() // Hide the "Servers" List



        	// Functions
	        	function UpdateServerCount() {
	        		// Update DarkRP Player Count (Out of 384 Players)
					fetch("https://superiorservers.co/api/servers").then(servers => servers.json())
					.then((servers) => {
						servers = servers.response.Servers; // Json contains all server info.
						var Discord_Pcount = `${servers[0].Players}/${servers[0].MaxPlayers}`
						var TS_Pcount = `${servers[1].Players}/${servers[1].MaxPlayers}`
						var DT_Pcount = `${servers[2].Players}/${servers[2].MaxPlayers}`;
						var C18_Pcount = `${servers[3].Players}/${servers[3].MaxPlayers}`;
						var ZRP_Pcount = `${servers[4].Players}/${servers[4].MaxPlayers}`;
						var CWRP_Pcount = `${servers[5].Players}/${servers[5].MaxPlayers}`;
						var Training_Pcount = `${servers[6].Players}/${servers[6].MaxPlayers}`;
						var Events_Pcount = `${servers[7].Players}/${servers[7].MaxPlayers}`;
						// DARK RP
							$(".DRP_PC").html(`<img src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png" style="width: 15px;">&nbsp${servers[2].Players + servers[3].Players + servers[4].Players}/384`);
							console.log(servers);
							$(".DRP_PC").attr("data-ipstooltip", ""); // Honestly dunno why this is needed but seems like the tool tip doesnt work without it
							$(".DRP_PC").attr("_title", "DT: " + DT_Pcount + " | C18: " + C18_Pcount + " | ZRP: " + ZRP_Pcount);
							// data-ipstooltip="" _title="Connect to Danktown" ----- !!! IMPORTANT FOR THE TWO LINES ABOVE, Adds a SUP themed tool tip.
						// CLONEWARS RP
							$(".CWRP_PC").html(`<img src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png" style="width: 15px;">&nbsp${servers[5].Players + servers[6].Players + servers[7].Players}/384`);
							$(".CWRP_PC").attr("data-ipstooltip", "");
							$(".CWRP_PC").attr("_title", "CWRP: " + CWRP_Pcount + " | Training: " + Training_Pcount + " | Events: " + Events_Pcount);
						// MILRP
							$(".MilRP_PC").html(`<img src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png" style="width: 15px;">&nbsp${servers[8].Players}/128`);
						// Discord & TS3
							$(".TS_PC").html(`<img src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png" style="width: 15px;">&nbsp${servers[0].Players + servers[1].Players}/${servers[0].MaxPlayers}`);
							$(".TS_PC").attr("data-ipstooltip", "");
							$(".TS_PC").attr("_title", "TS3: " + TS_Pcount + " | Discord: " + Discord_Pcount);	
					})
	        		// Update Teamspeak3 Player Count (Under Community Heading)




	        		console.log("# Insert's Forum Modification #  Updated Server Player Counts")

	        	}


	    // Player Count Related 

        	// Dark RP Player Count Bubble & Styling for all custom elementsCSS)
	 			$("#ipsLayout_mainArea > section > ol.ipsList_reset.cForumList.splitview > li:nth-child(4) > div").prepend(`
				<style>
				h3.PlayerCount {
				background: #222;
				border-radius:25px;
				padding: 7px;
				float: right;
				}
				.dragging_PH {
				border-color: gray;
				border-style: dashed;
				border-width: 2px;
				}
				</style>



				<div class="DRP_PCContainer" style="text-align: right; position:relative">
					<h3 class="DRP_PC PlayerCount" style="bold:true;">
						<img src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png" style="width: 15px;">
				 	Loading... </h3>
				</div>
				`);
	 		// Clone Wars RP Player Count Bubble
	 			$("#ipsLayout_mainArea > section > ol.ipsList_reset.cForumList.splitview > li:nth-child(5) > div").prepend(`
				<div class="CWRP_PCContainer " style="text-align: right; position:relative">
					<h3 class="CWRP_PC PlayerCount" style="bold:true;">
						<img src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png" style="width: 15px;">
				 	Loading... </h3>
				</div>
				`);
	 		// Military RP Player Count Bubble
	 			$("#ipsLayout_mainArea > section > ol.ipsList_reset.cForumList.splitview > li:nth-child(6) > div").prepend(`
				<div class="MilRP_PCContainer " style="text-align: right; position:relative">
					<h3 class="MilRP_PC PlayerCount" style="bold:true;">
						<img src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png" style="width: 15px;">
				 	Loading... </h3>
				</div>
				`);
	 		// TeamSpeak3 User Count Bubble
	 			$("#ipsLayout_mainArea > section > ol.ipsList_reset.cForumList.splitview > li:nth-child(1) > div").prepend(`
				<div class="Community_Container " style="text-align: right; position:relative">
					<h3 class="TS_PC PlayerCount" style="bold:true;">
						<img src="https://www.pinclipart.com/picdir/big/496-4968268_profile-icon-png-white-clipart.png" style="width: 15px;">
				 	Loading... </h3>
				</div>
				`);

	 		// Initial Server Count Loader
			startup_PlayerCLoad = window.setInterval(function() {
				if ($('#MilRP > div.cForumGrid__hero > div > div > ul > li:nth-child(1)').length) {
					UpdateServerCount();
					clearInterval(startup_PlayerCLoad);
				}

			}, 100); // Load Server Count on page startup (0.1 second delay)
 			window.setInterval(UpdateServerCount, 30500); // Start a timer which is *roughly* in-line with the forum update for player count.

 	// Pinned Topic Related ------- On the Home Page
			var Pinned_PostCount = 0;
			for (Pin_Counter_Loop = 1; Pin_Counter_Loop <= 11; Pin_Counter_Loop++) { // For Loop, Counts the amount of posts that are supposed to be pinned.
				if (localStorage.getItem("Pinned_" + Pin_Counter_Loop) != null) {
					Pinned_PostCount += 1;
                }
			}
			if (Pinned_PostCount >= 1) {
					$("#nbRecTPTabsTabBar_yydduq41c > ul").prepend(`
 				<li role="presentation">
					<a href="#" id="nbRecTPTabsTabPinned_yydduq41c_Hide" role="tab" class="ipsTabs_item Pinned_Tab_Button" data-action="nbRecentTopicsPostsActin" data-nbrectptabs-key="pinned" aria-selected="true">Pinned</a>
				</li>


 				`); // This Adds a Pinned Button to the Recent Page
					$("#nbRecTPTabsTabContent_yydduq41c").append(`
 					<div id="ipsTabs_nbRecTPTabsTabBar_yydduq41c_nbRecTPTabsTabPinned_yydduq41c_Hide_panel" class="ipsTabs_panel  ipsHide Pinned_Tab" aria-hidden="true" style="display: none;">

					</div>`);
					for (Pinned_Count = 1; Pinned_Count <= 10; Pinned_Count++) {
						if (localStorage.getItem("Pinned_" + Pinned_Count) != null) {
							$("#ipsTabs_nbRecTPTabsTabBar_yydduq41c_nbRecTPTabsTabPinned_yydduq41c_Hide_panel").append(`
						<ul class="ipsDataList ipsDataList_reducedSpacing">
							<li class="ipsDataItem ipsDataItem_unread">
								<div class="MoveHandler">
									<div class="ipsDataItem_main draggable_ Post_InsertName" draggable="true">
									` + localStorage.getItem("Pinned_" + Pinned_Count) + `
									<img src="https://s3.superiorservers.co/forums/reactions/disagree.png" class="Pin_Remover" title="Remove This Post" style="width:15px;"onclick="localStorage.removeItem('Pinned_` + Pinned_Count + `'); localStorage.removeItem('Pinned_` + Pinned_Count + `_URL'); $(this).parent().html('<p> Post Removed! </p>')"></img>
									</div>
								</div>
							</li>
						</ul>


 					`);
						}
					}

					$('.Pinned_TimePosted > span > span > time').each(function () {
						Time_Posted = new Date($(this).attr("datetime")).getTime();
						Time_Now = new Date().getTime();
						Pinned_TimeAgo = (Time_Now - Time_Posted) / 1000 / 60 / 60 / 24
						if (Pinned_TimeAgo < 1) {
							$(this).text("Less than a Days Ago")


						} else if (Pinned_TimeAgo >= 365) {
							$(this).text("More than a Year Ago")

						} else {
							$(this).text(Math.round(Pinned_TimeAgo) + " Days Ago")

			}

					});
					sortable('.Pinned_Tab', {
						placeholderClass: 'dragging_PH',
						forcePlaceholderSize: true,
					});
					sortable('.Pinned_Tab')[0].addEventListener('sortupdate', function (e) {
						$('.Pin_Remover').remove();
						$('.Post_InsertName').each(function (Post_Num) {
							localStorage.setItem("Pinned_" + (Post_Num + 1), $(this).html())
							$(this).append(`<img src="https://s3.superiorservers.co/forums/reactions/disagree.png" class="Pin_Remover" title="Remove This Post" style="width:15px;"onclick="localStorage.removeItem('Pinned_` + (Post_Num + 1) + `'); localStorage.removeItem('Pinned_` + (Post_Num + 1) + `_URL'); $(this).parent().html('<p> Post Removed! </p>')"></img>`)
						});
						console.log(" # Insert's Forum Modification # Pins Tab _DRAGUPDATE");
					});
			}
 }

// Dragging Functionality to Re-Order the Pinned List
/*
const draggables = document.querySelectorAll('.draggable_');
const container = document.querySelector('#ipsTabs_nbRecTPTabsTabBar_yydduq41c_nbRecTPTabsTabPinned_yydduq41c_Hide_panel');
draggables.forEach(function(draggable) { // Detect when User begins dragging a post
	console.log("#Insert Name's Forum Modification #  Innitializing Draggable Function");
	draggable.addEventListener("dragstart", function (event) {
		console.log("#Insert Name's Forum Modification #  User Begun Dragging")
		draggable.classList.add("dragging");


	})
	draggable.addEventListener("dragend", function (event) { // Detect when a User stops dragging a post
		console.log("#Insert Name's Forum Modification #  User Stopped Dragging")
		draggable.classList.remove("dragging");


	})
})
container.addEventListener("dragover", function (event) { // If a player is dragging over the Recents Page
	event.preventDefault();


})

*/
 //Function to Pin a Post / Save a Post to Local Storage (Checkbox to Pin)

/* 

 if(window.location.href.includes("/forum/")) { // If you are on a forum page (Not inside a post)
 	$('.ipsDataItem').append(`<input type="checkbox" class="Pin_A_Post" style="filter: invert(100%); opacity: 1;"></input>`);

	$('.Pin_A_Post').change(function() {
		if($(this).is(':checked')) {
	  var topic = $(this).siblings('div.ipsDataItem_main').html();
	  	FillEmptyPinSlot(topic);

		}
	});


 } */

 // Bans Page Filters and OverHaul
if (window.location.href.includes("superiorservers.co/bans")) { 
	// Function / Callbacks
	function gamemodeSearch(gName) {
		fetch("https://superiorservers.co/api/bans?draw=1&length=100&start=0").then(initialBanSearch => initialBanSearch.json())
		.then((initialBanSearch) => {
			var allBansRaw = [];
			var processedBans = [];
			for (var i = 0; i < initialBanSearch.recordsTotal/100; i++) {
			allBansRaw.push(fetch("https://superiorservers.co/api/bans?draw=1&length=100&start=" + i * 100).then(data => data.json()));
			}
			Promise.all(allBansRaw).then((allBansJSON) => {
				for(var i = 0; i < allBansJSON.length; i++) {
					tempBans = allBansJSON[i].data
					for(var z = 0; z < tempBans.length; z++) {
						if(tempBans[z][2] == gName) {
						processedBans.push(tempBans[z]);
						}
					}
				}
			var banTable = document.getElementsByTagName("tbody")[0];
			banTable.innerHTML = "";
			for(var i = 0; i < 100; i++) {
            if (100 > processedBans.length) break;
			var banElem = document.createElement("tr");
			var banTime = "";
			if (processedBans[i][9] != "") {
				banElem.classList.add("supSuccess");
			}
			if (processedBans[i][10] == true) {
				banElem.classList.add("supDanger");
			}
			banTime = util.TimeToString(processedBans[i][7]);
			if (processedBans[i][7] <= 0) banTime = "Permanent";
	
	
			banElem.innerHTML = 
			`<td>${processedBans[i][0]}</td>
			<td>${util.FormatDate(processedBans[i][1])}</td>
			<td>${processedBans[i][2]}</td>
			<td>
			   <a href="/profile/${processedBans[i][4]}/" target="_blank"></a>
			   <div class="infobox">
				  <a href="/profile/${processedBans[i][4]}/" target="_blank">
					 <div class="tableavatar">
						<img class="avatar avatar-sm avatar-rounded" data-original="/api/avatar/${processedBans[i][4]}" src="/api/avatar/${processedBans[i][4]}" style="display: inline-block;">
					 </div>
					 ${processedBans[i][3]}
				  </a>
			   </div>
			</td>
			<td>
			   <a href="/profile/${processedBans[i][6]}/" target="_blank"></a>
			   <div class="infobox">
				  <a href="/profile/${processedBans[i][6]}/" target="_blank">
					 <div class="tableavatar">
						<img class="avatar avatar-sm avatar-rounded" data-original="/api/avatar/${processedBans[i][6]}" src="/api/avatar/${processedBans[i][6]}" style="display: inline-block;">
					 </div>
					 ${processedBans[i][5]}
				  </a>
			   </div>
			</td>
			<td>${banTime}</td>
			<td>${util.Linkify(processedBans[i][8])}</td>
			<td>${processedBans[i][9]}</td>`;
			banTable.appendChild(banElem);
			}
			});
		})
	}
	function staffSearch(staffSteam) {
		fetch("https://superiorservers.co/api/bans?draw=1&length=100&start=0").then(initialBanSearch => initialBanSearch.json())
		.then((initialBanSearch) => {
			var allBansRaw = [];
			var processedBans = [];
			for (var i = 0; i < initialBanSearch.recordsTotal/100; i++) {
			allBansRaw.push(fetch("https://superiorservers.co/api/bans?draw=1&length=100&start=" + i * 100).then(data => data.json()));
			}
			Promise.all(allBansRaw).then((allBansJSON) => {
				for(var i = 0; i < allBansJSON.length; i++) {
					tempBans = allBansJSON[i].data
					for(var z = 0; z < tempBans.length; z++) {
						if(tempBans[z][6] == staffSteam) {
						processedBans.push(tempBans[z]);
						}
					}
				}
			var banTable = document.getElementsByTagName("tbody")[0];
			banTable.innerHTML = "";
			for(var i = 0; i < processedBans.length; i++) {
			var banElem = document.createElement("tr");
			var banTime = "";
			if (processedBans[i][9] != "") {
				banElem.classList.add("supSuccess");
			}
			if (processedBans[i][10] == true) {
				banElem.classList.add("supDanger");
			}
			banTime = util.TimeToString(processedBans[i][7]);
			if (processedBans[i][7] <= 0) banTime = "Permanent";
	
	
			banElem.innerHTML = 
			`<td>${processedBans[i][0]}</td>
			<td>${util.FormatDate(processedBans[i][1])}</td>
			<td>${processedBans[i][2]}</td>
			<td>
			   <a href="/profile/${processedBans[i][4]}/" target="_blank"></a>
			   <div class="infobox">
				  <a href="/profile/${processedBans[i][4]}/" target="_blank">
					 <div class="tableavatar">
						<img class="avatar avatar-sm avatar-rounded" data-original="/api/avatar/${processedBans[i][4]}" src="/api/avatar/${processedBans[i][4]}" style="display: inline-block;">
					 </div>
					 ${processedBans[i][3]}
				  </a>
			   </div>
			</td>
			<td>
			   <a href="/profile/${processedBans[i][6]}/" target="_blank"></a>
			   <div class="infobox">
				  <a href="/profile/${processedBans[i][6]}/" target="_blank">
					 <div class="tableavatar">
						<img class="avatar avatar-sm avatar-rounded" data-original="/api/avatar/${processedBans[i][6]}" src="/api/avatar/${processedBans[i][6]}" style="display: inline-block;">
					 </div>
					 ${processedBans[i][5]}
				  </a>
			   </div>
			</td>
			<td>${banTime}</td>
			<td>${util.Linkify(processedBans[i][8])}</td>
			<td>${processedBans[i][9]}</td>`;
			banTable.appendChild(banElem);
			}
			});
		})
	}
	

	// CSS Styling
	/* For Potential Additions to the filters ( Filters_Insert ):
	 
	 	justify-content: space-around;
		display:flex;
		flex-direction: row;
		flex-wrap: wrap;
		*/
	$('head').append(`
		<style>
		.Filters_Panel_Insert {
		background: rgba(0,0,0,0.3);
		position: sticky; 
		top:25%; 
		left:0px; 
		max-width:13%; 
		overflow: hidden;
		}
		.Server_Filters_Insert {
		background: rgba(0, 100, 255, 0.15);
		}
		.Filters_Insert {
		padding: 3%;
		}
		.Filter_Insert {
		padding: 2%;
		border-radius: 15px;
		margin-top: 3%;
		}
		.Filters_Title {
		font-size: 15px!important;
		font-weight: bolder;
		}	
		.Bans_Check {
		position:sticky;
		filter: inverted(100%);
		background: rgba(0,0,0,0);
		}
		.Staff_Search {
		background: rgba(0, 0, 0, 1);
		width: 60%;
		position:sticky;
		border-radius: 15px;
		border: none;
		white-space: nowrap;
		}
		.Loading {
		background: #323232;
		width: 150px;
		padding: 15px;
		color: #fff;
		position: fixed;
		bottom: -20%;
		border-radius: 3px;
		font-size: 16px;
		text-align: center;
		z-index: 15000;
		left: 50%;
		animation-duration: 2s;
		animation-fill-mode: forwards;
		}
		@keyframes slidedown-Load {
		0% {bottom: 10%;}
		100% {bottom: -20%;}
		}
		@keyframes slideup-Load {
		100% {bottom: 10%;}
		}
		</style>


	`);
	// Stop Overflow to up to 150% zoom.
	$('.container').css("min-width", "50%");
	$('.container').css("max-width", "75%");
	// Filter Menu
	$(".navbar").after(`

<div class='Filters_Panel_Insert'>
		<div class="panel-heading panel" style="background:rgba(0,0,0,0.8)">
			<h3 class="panel-title Ban_Customs_Title"> Filters </h3>
		</div>
		<div class="Filters_Insert">
			<div class="Server_Filters_Insert Filter_Insert">
					<h4 class="Server_Filters_Title_Insert Filters_Title"> Server Type </h4>
					<div>
						<button class="DarkRP_Bans Bans_Check" style="position:sticky;">
    							<span>&nbsp;&nbsp;DARKRP&nbsp;&nbsp;</span> </button>
								<br>
					</div>
					<div>
						<button class="CWRP_Bans Bans_Check" style="position:sticky;">
    							<span>&nbsp;&nbsp;CWRP&nbsp;&nbsp;</span> </button>
								<br>
					</div>
					<div>
						<button class="MILRP_Bans Bans_Check" style="position:sticky;">
								<span>&nbsp;&nbsp;MILRP&nbsp;&nbsp;</span"> </button>
								<br>
					</div>
				</div>
		<div class="Server_Filters_Insert Filter_Insert">
					<h4 class="Server_Filters_Title_Insert Filters_Title"> Staff Search </h4>
					<div>
						<input style="position:sticky;" class="Staff_Search"placeholder="Staff Steam ID">
    							<button class="Bans_Check Staff_Bans"> Search </button  
								<br>
					</div>
				</div>
			</div>
	</div>
			`);
	$('body').append(`<div class="Loading"> <i class="Loading_Symb"> </i>Loading...</div>`); // For when someone uses a filter, it will show up.
	var totalBans = $.getJSON("https://superiorservers.co/api/bans?draw=1&length=10&start=0"); // Gets the total amount of bans by calling the smallest JSON req. Possible.
	$('.DarkRP_Bans').on("click", function () {
		$('.Loading').css("animation-name", "slideup-Load");
		setTimeout(() => {
			gamemodeSearch("DarkRP & Zombies");
			$('.Loading').css("animation-name", "slidedown-Load");
		}, 1500);
		
	});
	$('.CWRP_Bans').on("click", function () {
		$('.Loading').css("animation-name", "slideup-Load");
		setTimeout(function() {
			gamemodeSearch("CWRP");
			$('.Loading').css("animation-name", "slidedown-Load");
		}, 1500);
		
	});
	$('.MILRP_Bans').on("click", function () {
		$('.Loading').css("animation-name", "slideup-Load");
		setTimeout(() => {
			gamemodeSearch("MilRP");
			$('.Loading').css("animation-name", "slidedown-Load");
		}, 1500);
		
	});
	$('.Staff_Bans').on("click", function () {
		$('.Loading').css("animation-name", "slideup-Load");
		setTimeout(() => {
			staffSearch(steam.SteamIDTo64($('.Staff_Search').val().trim()));
			$('.Loading').css("animation-name", "slidedown-Load");
		}, 1500);
		
	});

// tableUpdater = setInterval(banTableUpdate, 500); // Timer to update the bans table incase User changes the table in any way

}
if(window.location.href.includes("/topic/")) { // If you are INSIDE the post, Add a button to pin the topic


 	// Initialize Variables and Set up a variable which contains the format for pinning a post	
 	$('body').prepend(`
 		<script>
		var Post_Title = $('.ipsType_pageTitle').text()
		var Post_URL = window.location.href;
		var Post_Owner = $('.ipsType_reset').children('.ipsType_normal').html()

		var topic = \`
		<div class="ipsDataItem_main ">
									
		<h4 class="ipsDataItem_title ipsContained_container">
		<span class="ipsType_break ipsContained">
		<a href="\` + Post_URL + \`" class="" title="\` + Post_Title + \`" data-ipshover="" data-ipshover-target="\` + Post_URL + \`?preview=1" data-ipshover-timeout="1.5" id="ips_uid_770_3">
		<span>
		\` + Post_Title + \`
		</span>
		</a>
		</span>
		</h4>
		<div class="ipsDataItem_meta ipsType_reset ipsType_light ipsType_blendLinks Pinned_TimePosted">
		<span>
		\` + Post_Owner + \`
		</div>
		\`;
		</script>
		`);


 				for (Pinned_Slot = 1; Pinned_Slot <= 10; Pinned_Slot++) {

	  				if (localStorage.getItem("Pinned_" + Pinned_Slot + "_URL") == location.href.split("?")[0]) {

	  						$('#ipsLayout_mainArea > div.ipsPageHeader.ipsResponsive_pull.ipsBox.ipsPadding.sm\\:ipsPadding\\:half.ipsMargin_bottom > div.ipsPageHeader__meta.ipsFlex.ipsFlex-jc\\:between.ipsFlex-ai\\:center.ipsFlex-fw\\:wrap.ipsGap\\:3 > div.ipsFlex-flex\\:01.ipsResponsive_hidePhone > div').append(`
							<button style="background: rgba(23, 126, 201, 1); border-radius: 5px; border: none; padding: 3px; height: 30px; color: white;">&nbspPost Pinned!&nbsp</button>
							`);

							break;
		  				} else {
		  					if (Pinned_Slot == 10) { 
		  					$('#ipsLayout_mainArea > div.ipsPageHeader.ipsResponsive_pull.ipsBox.ipsPadding.sm\\:ipsPadding\\:half.ipsMargin_bottom > div.ipsPageHeader__meta.ipsFlex.ipsFlex-jc\\:between.ipsFlex-ai\\:center.ipsFlex-fw\\:wrap.ipsGap\\:3 > div.ipsFlex-flex\\:01.ipsResponsive_hidePhone > div').append(`
							<button style="background: rgba(255, 255, 255, 0.8); border-radius: 5px; border: none; padding: 3px; height: 30px" onclick="FillEmptyPinSlot(window.topic); $(this).text('Post Pinned!'); $(this).attr('onclick',''); $(this).css('background', 'rgba(23, 126, 201, 1)'); $(this).css('color', 'white');">&nbspPin Post&nbsp</button>
							`);

		  				}

		  			}
				}

/*
		$('#ipsLayout_mainArea > div.ipsPageHeader.ipsResponsive_pull.ipsBox.ipsPadding.sm\\:ipsPadding\\:half.ipsMargin_bottom > div.ipsPageHeader__meta.ipsFlex.ipsFlex-jc\\:between.ipsFlex-ai\\:center.ipsFlex-fw\\:wrap.ipsGap\\:3 > div.ipsFlex-flex\\:01.ipsResponsive_hidePhone > div').append(`
			<button style="background: rgba(255, 255, 255, 0.8); border-radius: 5px; border: none; padding: 3px; height: 30px" onclick="window.FillEmptyPinSlot(window.topic); $(this).text('Post Pinned!'); $(this).attr('onclick',''); $(this).css('background', 'rgba(23, 126, 201, 1)'); $(this).css('color', 'white');">Pin Post</button>



			`)

*/

}

