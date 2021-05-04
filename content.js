    // Loading in
console.log("test")
    // Initializing Variables
    var PinnedCount;
    var PinnedPostSlot;
    var Pins = true;


 // Styling Additional Assets
    $("#elUserNav").prepend(`
<style>
div.AddPinButton {
color:lime;


}
div.PinnedPost {
border:1px;
border-color:transparent transparent rgba(191,191,191,0.15) transparent;
border-style:solid;
display: inline-block;
}
.RemovePinButton_Image {
width: 15px;
height: 15px;
}
.RemovePinButton_Image:hover {
width: 15px;
height: 15px;
}
.RemovePinButton {
background-color: transparent;
border-color: transparent;
}
    </style>
	
`);


    // Function to find how long ago a post was posted, Used for live updating the since posted on pinned threads
	function DaySincePosted(dateToProcess) {
var date3 = Date.parse(dateToProcess)
var date_difference = Date.now() - date3
var date_difference_equalled = date_difference/60/60/60/60/24
if(Math.round(date_difference_equalled) <= 1) {
console.log("Posted Less than 1 day");
return "Less than 1 day ago";
} else {
console.log(Math.round(date_difference_equalled) + " Days Ago");
return Math.round(date_difference_equalled) + " Days Ago";
    }
}





    // Pinned Posts
    if (Pins == true) { // If Pins are enabled - START
        if (window.location.href == "https://forum.superiorservers.co/") { // If you are on the home page - START
            $('div.cForumList').prepend(`
<h2 class="ipsType_sectionTitle ipsType_reset cForumTitle PinnedTopics">
<a href="#" class="ipsPos_right ipsJS_show ipsType_noUnderline cForumToggle" data-action="toggleCategory" data-ipstooltip="" title="Toggle this category"></a>
<a href="." class="Pinned_C_Title">Pinned Topics</a>
</h2>
<div class="ipsfocusBox-inner Pinned_FadedBox">
<script>
function RemovePin(Remove_PinNumber) {
console.log("Pin #" + Remove_PinNumber + " Removed.");
localStorage.removeItem("PinnedPost" + Remove_PinNumber);
window.location.href = "."
    }
</script>

`);

            // ------------------- Adding Pinned Posts via localStorage

            // Adding Remove Pin Button to each Pinned Post
            var i;
            for (i = 1; i <= 5; i++) {
                if (localStorage.getItem("PinnedPost" + i) != null) {
                    $('div.Pinned_FadedBox').append("<div class='PinnedPost PinnedPost" + i + "' style='display: inline-block; overflow: hidden;'>" + localStorage.getItem("PinnedPost" + i) + "<button class='RemovePinButton' onclick='RemovePin(" + i + ")'><img class='RemovePinButton_Image' src='https://s3.superiorservers.co/forums/reactions/disagree.png'></img></button></div>");
                    $('div.PinnedPost').children('ul').remove(); // Remove Profile Picture
                    $('.fa-circle').parent('span').remove(); // Remove Unread "Notification" Circle
                    $('div.PinnedPost' + i + ' > div > div > span').children('time').html(DaySincePosted($('div.PinnedPost' + i + ' > div > div > span').children('time').attr("datetime"))); // Keep the "Posted on" tag up to date on pinned posts.
                    $('div.PinnedPost' + i + ' > div > div').children('time').html(DaySincePosted($('div.PinnedPost' + i + ' > div > div').children('time').attr("datetime"))); // Posts pinned from within the topic, will not have an extra span element wrapped around the time element.
                    /*
                        ipsDataItem_stats
                        ipsDataItem_lastPoster */
                }

            }
            PinnedCount = $('div.PinnedPost').length;
            localStorage.setItem("PinnedCount", PinnedCount) // Grab Number of Pinned Posts by counting the amount of elements
            $('a.Pinned_C_Title').text('Pinned Topics (' + PinnedCount + '/5)') // Replace the Pinned Topic's title with a live counter of topics you have pinned
            $('div.PinnedPost').children('div.AddPinButton').remove(); // Remove the Checkboxes from posts within the Pinned Menu
        } // If you are on the home page - END
        if (localStorage.getItem("PinnedCount") != "5" && window.location.pathname.split("/")[1] == "forum") { // If there is an empty spot on the pinned list, and you are on a forum page. - START
            $('li.ipsDataItem').append('<div class="AddPinButton"> <input class="PinPostMenu" type="checkbox"></div>'); // Add a button to pin posts on each post
        } // If there is an empty spot on the pinned list, and you are on a forum page. - END

        if (localStorage.getItem("PinnedCount") != "5" && window.location.pathname.split("/")[1] == "topic") {
            $('div.ipsPageHeader > div.ipsPos_right:first').prepend(`<script>


        function InPost_Pin() {
        console.log("Post Pinned")


        var m;
        for (m = 1; m <= 5; m++) {
                        if (localStorage.getItem("PinnedPost" + m) == null) {
                           localStorage.setItem("PinnedPost" + m, \`<div class="ipsDataItem_icon ipsPos_top">

</div>
<div class="ipsDataItem_main">
<h4 class="ipsDataItem_title ipsContained_container">
<span class="ipsType_break ipsContained">
<a href="\` + window.location.href + \`" title="Go to post" data-ipstooltip="">
\` + $('h1.ipsType_pageTitle > span > span').text() + \`
</a>
</span>
</h4>
<div class="ipsDataItem_meta ipsType_reset ipsType_light ipsType_blendLinks">
\` + $('span.ipsType_normal').html() + \`
</div></div>\`)
$('a.inPostPin_Button').attr('onclick', 'null')
$('a.inPostPin_Button').html('Post Pinned!')
break;
}
$('a.inPostPin_Button').html('Pinned Tab Full!')
      }

	  }
       </script>



        <div class="PinPost_Inside ipsButton ipsButton_link ipsButton_verySmall" data-role="followButton" data-following="false">
<a data-ipstooltip="" class="inPostPin_Button ipsType_blendLinks ipsType_noUnderline" data-ipshover="" data-ipshover-cache="false" data-ipshover-onclick="" onclick="InPost_Pin()" id="ips_uid_9552_3" _title="Pin This Post" style="">Pin Post</a>
\</div>

             `)


        }

        /* SAVES POST FROM WITHIN THE POST




        */


        $('input.PinPostMenu').change(function() { // IF ONE OF THE CHECK BOXES IS CHECKED - START
                if ($(this).is(':checked')) {
                    console.log("Checkbox is checked..");
                    for (PinnedPostSlot = 1; PinnedPostSlot <= 5; PinnedPostSlot++) {
                        if (localStorage.getItem("PinnedPost" + PinnedPostSlot) == null) { // If the First Pinned Post Slot is available, Paste HTML into it's slot
                            localStorage.setItem("PinnedPost" + PinnedPostSlot, $(this).closest('li.ipsDataItem').html()); // Copying the HTML of the post closest to the checkbox
                            $(this).parent().html("Pin Added");
                            break;
                        }
                    }
					$(this).parent().html("<b style='color:red;'>Pin Tab Full!</b>");
                } else {
                    console.log("Checkbox is not checked..");
                }
            } // IF ONE OF THE CHECK BOXES IS CHECKED - END


        )
    } // If Pins are enabled - END