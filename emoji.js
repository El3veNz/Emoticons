/**
 * @license Copyright (C) 2012-2014 Bram Driesen "Omicron" and other contributors
 *
 * This program is free software: you are not allowed to redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
function showEmoji(e,t,n){$("#emoji_listfeed").append('<div class="emoji_feed"><strong>'+t+":</strong></div>");$("#emoji_listfeed").append('<div class="emoji_feed"><table style="width:100%;">');for(i=0;i<e.length;i++){if(i==0){}var r=e[i];switch(r){case"+1":$("#emoji_listfeed").append('<td class="emoji_feed" style="width:20px"><span id="'+n+"_"+i+'" onclick="paste(this)" ><img src="http://www.emoji-cheat-sheet.com/graphics/emojis/'+"plus1"+'.png" alt="'+i+'" style="cursor:pointer" title="'+r+'" /></span></td>');break;default:$("#emoji_listfeed").append('<td class="emoji_feed" style="width:20px"><span id="'+n+"_"+i+'" onclick="paste(this)" ><img src="http://www.emoji-cheat-sheet.com/graphics/emojis/'+r+'.png" alt="'+i+'" style="cursor:pointer" title="'+r+'" /></span></td>');break}if(i%11==0&&i!=0&&i<12){$("#emoji_listfeed").append("</tr><tr>")}if((i+1)%12==0&&i>12){$("#emoji_listfeed").append("</tr><tr>")}}$("#emoji_listfeed").append("</tr></table></div>")}function showEmoji2(e,t,n){$("#emoji_listfeed2").append('<div class="emoji_feed"><strong>'+t+":</strong></div>");$("#emoji_listfeed2").append('<div class="emoji_feed"><table style="WITH:100%;">');for(i=0;i<e.length;i++){if(i==0){$("#emoji_listfeed2").append("<tr>")}var r=e[i];switch(r){case"+1":$("#emoji_listfeed2").append('<td class="emoji_feed" style="width:20px"><span id="'+n+"_"+i+'" onclick="paste(this)" ><img src="http://www.emoji-cheat-sheet.com/graphics/emojis/'+"plus1"+'.png" alt="'+i+'" style="cursor:pointer" title="'+r+'" /></span></td>');break;default:$("#emoji_listfeed2").append('<td class="emoji_feed" style="width:20px"><span id="'+n+"_"+i+'" onclick="paste(this)" ><img src="http://www.emoji-cheat-sheet.com/graphics/emojis/'+r+'.png" alt="'+i+'" style="cursor:pointer" title="'+r+'" /></span></td>');break}if(i%11==0&&i!=0&&i<12){$("#emoji_listfeed2").append("</tr><tr>")}if((i+1)%12==0&&i>12){$("#emoji_listfeed2").append("</tr><tr>")}}$("#emoji_listfeed2").append("</tr></table></div>")}function showEmoji3(e,t,n){var r="#emoji_listfeed"+3;$(r).append('<div class="emoji_feed"><strong>'+t+":</strong></div>");$(r).append('<div class="emoji_feed"><table style="width:100%;">');for(i=0;i<e.length;i++){if(i==0){$(r).append("<tr>")}var s=e[i];switch(s){case"+1":$(r).append('<td class="emoji_feed" style="width:20px"><span alt="'+s+'" id="'+n+"_"+i+'" onclick="addFavorite(this)" ><img src="http://www.emoji-cheat-sheet.com/graphics/emojis/'+"plus1"+'.png" alt="'+i+'" style="cursor:pointer" title="'+s+'" /></span></td>');break;default:$(r).append('<td class="emoji_feed" style="width:20px"><span alt="'+s+'" id="'+n+"_"+i+'" onclick="addFavorite(this)" ><img src="http://www.emoji-cheat-sheet.com/graphics/emojis/'+s+'.png" alt="'+i+'" style="cursor:pointer" title="'+s+'" /></span></td>');break}if(i%11==0&&i!=0&&i<12){$(r).append("</tr><tr>")}if((i+1)%12==0&&i>12){$(r).append("</tr><tr>")}}$(r).append("</tr></table></div>")}function showEmoji4(e,t,n){$("#emoji_listfeed4").append('<div class="emoji_feed"><strong>'+t+":</strong></div>");$("#emoji_listfeed4").append('<div class="emoji_feed"><table style="width:100%;">');for(i=0;i<e.length;i++){if(i==0){$("#emoji_listfeed4").append("<tr>")}var r=e[i];switch(r){case"+1":$("#emoji_listfeed4").append('<td class="emoji_feed" style="width:20px"><span alt="'+r+'" id="'+n+"_"+i+'" onclick="deleteFavorite(this)" ><img src="http://www.emoji-cheat-sheet.com/graphics/emojis/'+"plus1"+'.png" alt="'+i+'" style="cursor:pointer" title="'+r+'" /></span></td>');break;default:$("#emoji_listfeed4").append('<td class="emoji_feed" style="width:20px"><span alt="'+r+'" id="'+n+"_"+i+'" onclick="deleteFavorite(this)" ><img src="http://www.emoji-cheat-sheet.com/graphics/emojis/'+r+'.png" alt="'+i+'" style="cursor:pointer" title="'+r+'" /></span></td>');break}if(i%11==0&&i!=0&&i<12){$("#emoji_listfeed4").append("</tr><tr>")}if((i+1)%12==0&&i>12){$("#emoji_listfeed4").append("</tr><tr>")}}$("#emoji_listfeed4").append("</tr></table></div>")}function paste(e){function t(e,t,n,r){if(e.indexOf(r)>=0){for(i=0;i<n.length;i++){if(i==t){var o=n[i];s=r;return o}}}else{return null}}var n=$(e).attr("id");var r=n.substring(2);var s;var o=t(n,r,popular,"e");var u=t(n,r,people,"p");var a=t(n,r,nature,"n");var f=t(n,r,objects,"o");var l=t(n,r,places,"l");var c=t(n,r,symbols,"s");var h=t(n,r,favoriteList,"f");switch(s){case"e":var p=":"+o+": ";break;case"p":var p=":"+u+": ";break;case"n":var p=":"+a+": ";break;case"o":var p=":"+f+": ";break;case"l":var p=":"+l+": ";break;case"s":var p=":"+c+": ";break;case"f":var p=":"+h+": ";break;default:alert("FATAL ERROR!");break}var d=document.getElementById("chat-input-field").value;document.getElementById("chat-input-field").value=d+" "+p;document.getElementById("chat-input-field").focus();show()}function show(){if(lockvar==false){if(shown==false){var e=$(this).next();$("#blackback").animate({marginLeft:parseInt(e.css("marginLeft"),10)==0?e.outerWidth():-348});setTimeout(function(){$("#emoji_list").fadeIn();$("#min_button").show();$("#plus_button").show();$("#favorites_button").show();$("#info_button").show();$("#emoji_button").show();$("#lock_button").show();$("#stop_button").show()},300);$("#showimage").attr("title","Hide");$("#showimage").attr("src","http://brams.sinners.be/plugdjcodes/images/arrow-up-4-512.png");shown=true}else{$("#emoji_list").fadeOut();setTimeout(function(){$("#min_button").hide();$("#plus_button").hide();$("#favorites_button").hide();$("#info_button").hide();$("#emoji_button").hide();$("#lock_button").hide();$("#stop_button").hide();var e=$(this).next();$("#blackback").animate({marginLeft:parseInt(e.css("marginLeft"),10)==0?e.outerWidth():-50})},300);$("#showimage").attr("title","Show");$("#showimage").attr("src","http://brams.sinners.be/plugdjcodes/images/arrow-down-4-512.png");shown=false}}}function lock(){if(lockvar==false){lockvar=true;$("#lockimage").attr("src","http://brams.sinners.be/plugdjcodes/images/padlock_closed.png");$("#lockimage").attr("title","Unlock the list")}else{lockvar=false;$("#lockimage").attr("src","http://brams.sinners.be/plugdjcodes/images/padlock_open.png");$("#lockimage").attr("title","Lock the list")}}function info(){alert("Click on any emoji you want, it pastes it in the end of your current chat message. \nThe star is where your favorites are, you can add and remove favorites in the plus and minus section.\nThe lock will prevent the list from getting hidden when you click on an emoji.\nThe yellow name (Omicron) is the creator of the script\nPeople with red names are VIPs.\n\nCommands: \n/shareEmoji : Sends the link to the script in the chat if you want to share \n/pic sends a picture of the script in the chat.\n/bug : Found a bug?\n/idea : Have an idea?\n\nFun commands:\n/spark [text] : Makes your text look pretty in the chat \n/brofist @name: gives a brofist\n/high5 @name: gives a high five\n/smack @name: smacks with a random object\n/boom : sends KABOOM in the chat\n/chill : take a chill pill\n/monkey : Monkey business\n/hammer : Ban hammer!\n/beer : Who wants a beer?\n/fist : raise your fist!\n/ace : ace of spades\n/warface : show me your warface!")}function showFavorites(){if(infavorites==false){if(fromplusminus==true){$("#emoji_listfeed2").html("");showEmoji2(favoriteList,"Favorites","f")}$("#emoji_listfeed").hide();$("#emoji_listfeed3").hide();$("#emoji_listfeed4").hide();$("#emoji_listfeed2").show();infavorites=true;fromplusminus=false}}function plus(){$("#emoji_listfeed").hide();$("#emoji_listfeed2").hide();$("#emoji_listfeed4").hide();$("#emoji_listfeed3").show();fromplusminus=true;infavorites=false}function minus(){$("#emoji_listfeed4").html("");$("#emoji_listfeed4").append('<div class="emoji_feed"><span class="top_message"><strong style="color:red">- Delete from favorites</strong></span></div>');showEmoji4(favoriteList,"Favorites","f");localStorage.setItem("favoriteList",JSON.stringify(favoriteList))}function addFavorite(e){var t=$(e).attr("alt");for(var n in favoriteList){if(favoriteList[n]==t){API.chatLog("Allready on the list",true);var r=true;break}else{var r=false}}if(r==false||favoriteList.length==0){favoriteList.push(t);localStorage.setItem("favoriteList",JSON.stringify(favoriteList))}}function stop(){var e=confirm("You are about to stop the script.\n Are you sure you want to proceed?");if(e==true){API.chatLog("Emojiscript stopped!",true);$("#emoji_list").remove();$("#min_button").remove();$("#plus_button").remove();$("#favorites_button").remove();$("#info_button").remove();$("#emoji_button").remove();$("#lock_button").remove();$("#stop_button").remove();$("#show_button").remove();$("#blackback").remove();API.off(API.CHAT_COMMAND,chatCommand)}}function chatCommand(e){if(e.indexOf("/spark ")==0){var t=e.substr(7).trim();API.sendChat(" :sparkles: :star: :dizzy: "+t+" :dizzy: :star: :sparkles:")}if(e.indexOf("/brofist @")==0){var n=e.substr(10).trim();API.sendChat("Brofist  :punch: @"+n)}if(e.indexOf("/high5 @")==0){var n=e.substr(8).trim();API.sendChat("High five man :hand: @"+n)}if(e.indexOf("/smack @")==0){var r=["newspaper :newspaper:","rubber chicken :chicken:","flashlight :flashlight:","hammer :hammer:","shoe :mans_shoe:","piece of pizza :pizza:","lollipop :lollipop:","banana :banana:","anchor :anchor: Auch!","bike :bike:","rose :rose: WTF?","wrench :wrench:","gun :gun:","postal horn :postal_horn: uhm...","moneybag :moneybag:","book :green_book:","book :closed_book:","book :blue_book:","book :orange_book:","notebook :notebook:","ledger :ledger:","trophy :trophy:"];var i=Math.floor(Math.random()*r.length);var n=e.substr(8).trim();API.sendChat("/me Smacks @"+n+" with a "+r[i])}switch(e){case"/boom":API.sendChat(" :boom:  :boom: KABOOM  :boom:  :boom: ");break;case"/chill":API.sendChat("Take a chill pill :pill:");break;case"/monkey":API.sendChat("Monkey business :speak_no_evil:");break;case"/hammer":API.sendChat("Ban hammer :hammer:");break;case"/beer":API.sendChat("Who wants a beer? :beer:");break;case"/fist":API.sendChat(":fist: RAISE YOUR FIST :fist:");break;case"/ace":API.sendChat(":spades: THE ACE OF SPADES!  :spades:");break;case"/warface":API.sendChat("SHOW ME YOUR WARFACE :goberserk:");break;case"/shareEmoji":API.sendChat("Get this handy script that shows you all of the emoji's right here on plug.dj! link: http://plugdjcodes.wordpress.com/2013/12/23/emoji-quick-select-list-v3-0/");break;case"/pic":API.sendChat("Check this pic of this awesome emoji script! http://i.imgur.com/0YR138j.png");break;case"/bug":API.chatLog("Found a bug? :bug: Message me on skype: bramdriesen");break;case"/idea":API.chatLog("Ideas? :bulb: Message me on skype: bramdriesen");break;case"/test":if(VIP==true){API.chatLog("TEST")}break;default:break}}function emojichat(e){if(e.type.indexOf("message")!==-1||e.type.indexOf("mention")!==-1||e.type.indexOf("emote")!==-1){if(e.from.id===developer&&API.getUser().id!==developer){var t=API.getUser(developer).permission;if(t===0){$(".cid-"+e.chatID).append('<i class="icon icon-chat-creator"></i>')}$(".cid-"+e.chatID+" .icon").css({"background-image":"url(http://brams.sinners.be/plugdjcodes/images/coder.png)",left:"7px",top:"7px","background-position":"0px 0px","background-repeat":"no-repeat"})}for(var n in VIPs){if(VIPs[n]==e.from.id){var t=API.getUser(VIPs[n]).permission;$(".cid-"+e.chatID+" .from").css({color:"red"});if(t===0){$(".cid-"+e.chatID).append('<i class="icon icon-chat-creator"></i>')}$(".cid-"+e.chatID+" .icon").css({"background-image":"url(http://brams.sinners.be/plugdjcodes/images/vip.png)",left:"7px",top:"7px","background-position":"0px 0px","background-repeat":"no-repeat"})}}}if(e.type.indexOf("message")!==-1&&e.from.id===developer){var r=e.text.substr(6);if(r===".update"){a.append('<div class="emoji-update">The emoji script has recieved an update. Please refresh your browser and restart the script.<div>');a.append("<style>#chat .emoji-update{border-left: 3px solid orange; color:orange; font-weight:700; padding-left:25px;}</style>");b&&a.scrollTop(a[0].scrollHeight);$("#emoji_listfeed .top_message1").html('<strong style="color:orange;text-decoration:underline">UPDATED:</strong> Please refresh and reload the script');document.getElementById("chat-sound").playMentionSound();document.getElementById("chat-sound").playChatSound();document.getElementById("chat-sound").playMentionSound()}}}var shown=false;var lockvar=false;var infavorites=false;var fromplusminus=false;var popular=["smiley","grinning","wink","open_mouth","smirk","frowning","sob","+1","-1","wave","heart","broken_heart","trollface","squirrel","hankey"],people=["bowtie","smile","laughing","blush","smiley","relaxed","smirk","heart_eyes","kissing_heart","kissing_closed_eyes","flushed","relieved","satisfied","grin","wink","stuck_out_tongue_winking_eye","stuck_out_tongue_closed_eyes","grinning","kissing","kissing_smiling_eyes","stuck_out_tongue","sleeping","worried","frowning","anguished","open_mouth","grimacing","confused","hushed","expressionless","unamused","sweat_smile","sweat","disappointed_relieved","weary","pensive","disappointed","confounded","fearful","cold_sweat","persevere","cry","sob","joy","astonished","scream","neckbeard","tired_face","angry","rage","triumph","sleepy","yum","mask","sunglasses","dizzy_face","imp","smiling_imp","neutral_face","no_mouth","innocent","alien","yellow_heart","blue_heart","purple_heart","heart","green_heart","broken_heart","heartbeat","heartpulse","two_hearts","revolving_hearts","cupid","sparkling_heart","sparkles","star","star2","dizzy","boom","collision","anger","exclamation","question","grey_exclamation","grey_question","zzz","dash","sweat_drops","notes","musical_note","fire","hankey","poop","shit","+1","thumbsup","-1","thumbsdown","ok_hand","punch","facepunch","fist","v","wave","hand","raised_hand","open_hands","point_up","point_down","point_left","point_right","raised_hands","pray","point_up_2","clap","muscle","metal","fu","walking","runner","running","couple","family","two_men_holding_hands","two_women_holding_hands","dancer","dancers","ok_woman","no_good","information_desk_person","raising_hand","bride_with_veil","person_with_pouting_face","person_frowning","bow","couplekiss","couple_with_heart","massage","haircut","nail_care","boy","girl","woman","man","baby","older_woman","older_man","person_with_blond_hair","man_with_gua_pi_mao","man_with_turban","construction_worker","cop","angel","princess","smiley_cat","smile_cat","heart_eyes_cat","kissing_cat","smirk_cat","scream_cat","crying_cat_face","joy_cat","pouting_cat","japanese_ogre","japanese_goblin","see_no_evil","hear_no_evil","speak_no_evil","guardsman","skull","feet","lips","kiss","droplet","ear","eyes","nose","tongue","love_letter","bust_in_silhouette","busts_in_silhouette","speech_balloon","thought_balloon","feelsgood","finnadie","goberserk","godmode","hurtrealbad","rage1","rage2","rage3","rage4","suspect","trollface"],nature=["sunny","umbrella","cloud","snowflake","snowman","zap","cyclone","foggy","ocean","cat","dog","mouse","hamster","rabbit","wolf","frog","tiger","koala","bear","pig","pig_nose","cow","boar","monkey_face","monkey","horse","racehorse","camel","sheep","elephant","panda_face","snake","bird","baby_chick","hatched_chick","hatching_chick","chicken","penguin","turtle","bug","honeybee","ant","beetle","snail","octopus","tropical_fish","fish","whale","whale2","dolphin","cow2","ram","rat","water_buffalo","tiger2","rabbit2","dragon","goat","rooster","dog2","pig2","mouse2","ox","dragon_face","blowfish","crocodile","dromedary_camel","leopard","cat2","poodle","paw_prints","bouquet","cherry_blossom","tulip","four_leaf_clover","rose","sunflower","hibiscus","maple_leaf","leaves","fallen_leaf","herb","mushroom","cactus","palm_tree","evergreen_tree","deciduous_tree","chestnut","seedling","blossom","ear_of_rice","shell","globe_with_meridians","sun_with_face","full_moon_with_face","new_moon_with_face","new_moon","waxing_crescent_moon","first_quarter_moon","waxing_gibbous_moon","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","last_quarter_moon_with_face","first_quarter_moon_with_face","moon","earth_africa","earth_americas","earth_asia","volcano","milky_way","partly_sunny","octocat","squirrel"],objects=["bamboo","gift_heart","dolls","school_satchel","mortar_board","flags","fireworks","sparkler","wind_chime","rice_scene","jack_o_lantern","ghost","santa","christmas_tree","gift","bell","no_bell","tanabata_tree","tada","confetti_ball","balloon","crystal_ball","cd","dvd","floppy_disk","camera","video_camera","movie_camera","computer","tv","iphone","phone","telephone","telephone_receiver","pager","fax","minidisc","vhs","sound","speaker","mute","loudspeaker","mega","hourglass","hourglass_flowing_sand","alarm_clock","watch","radio","satellite","loop","mag","mag_right","unlock","lock","lock_with_ink_pen","closed_lock_with_key","key","bulb","flashlight","high_brightness","low_brightness","electric_plug","battery","calling","email","mailbox","postbox","bath","bathtub","shower","toilet","wrench","nut_and_bolt","hammer","seat","moneybag","yen","dollar","pound","euro","credit_card","money_with_wings","e-mail","inbox_tray","outbox_tray","envelope","incoming_envelope","postal_horn","mailbox_closed","mailbox_with_mail","mailbox_with_no_mail","door","smoking","bomb","gun","hocho","pill","syringe","page_facing_up","page_with_curl","bookmark_tabs","bar_chart","chart_with_upwards_trend","chart_with_downwards_trend","scroll","clipboard","calendar","date","card_index","file_folder","open_file_folder","scissors","pushpin","paperclip","black_nib","pencil2","straight_ruler","triangular_ruler","closed_book","green_book","blue_book","orange_book","notebook","notebook_with_decorative_cover","ledger","books","bookmark","name_badge","microscope","telescope","newspaper","football","basketball","soccer","baseball","tennis","8ball","rugby_football","bowling","golf","mountain_bicyclist","bicyclist","horse_racing","snowboarder","swimmer","surfer","ski","spades","hearts","clubs","diamonds","gem","ring","trophy","musical_score","musical_keyboard","violin","space_invader","video_game","black_joker","flower_playing_cards","game_die","dart","mahjong","clapper","memo","pencil","book","art","microphone","headphones","trumpet","saxophone","guitar","shoe","sandal","high_heel","lipstick","boot","shirt","tshirt","necktie","womans_clothes","dress","running_shirt_with_sash","jeans","kimono","bikini","ribbon","tophat","crown","womans_hat","mans_shoe","closed_umbrella","briefcase","handbag","pouch","purse","eyeglasses","fishing_pole_and_fish","coffee","tea","sake","baby_bottle","beer","beers","cocktail","tropical_drink","wine_glass","fork_and_knife","pizza","hamburger","fries","poultry_leg","meat_on_bone","spaghetti","curry","fried_shrimp","bento","sushi","fish_cake","rice_ball","rice_cracker","rice","ramen","stew","oden","dango","egg","bread","doughnut","custard","icecream","ice_cream","shaved_ice","birthday","cake","cookie","chocolate_bar","candy","lollipop","honey_pot","apple","green_apple","tangerine","lemon","cherries","grapes","watermelon","strawberry","peach","melon","banana","pear","pineapple","sweet_potato","eggplant","tomato","corn"],places=["house","house_with_garden","school","office","post_office","hospital","bank","convenience_store","love_hotel","hotel","wedding","church","department_store","european_post_office","city_sunrise","city_sunset","japanese_castle","european_castle","tent","factory","tokyo_tower","japan","mount_fuji","sunrise_over_mountains","sunrise","stars","statue_of_liberty","bridge_at_night","carousel_horse","rainbow","ferris_wheel","fountain","roller_coaster","ship","speedboat","boat","sailboat","rowboat","anchor","rocket","airplane","helicopter","steam_locomotive","tram","mountain_railway","bike","aerial_tramway","suspension_railway","mountain_cableway","tractor","blue_car","oncoming_automobile","car","red_car","taxi","oncoming_taxi","articulated_lorry","bus","oncoming_bus","rotating_light","police_car","oncoming_police_car","fire_engine","ambulance","minibus","truck","train","station","train2","bullettrain_front","bullettrain_side","light_rail","monorail","railway_car","trolleybus","ticket","fuelpump","vertical_traffic_light","traffic_light","warning","construction","beginner","atm","slot_machine","busstop","barber","hotsprings","checkered_flag","crossed_flags","izakaya_lantern","moyai","circus_tent","performing_arts","round_pushpin","triangular_flag_on_post","jp","kr","cn","us","fr","es","it","ru","gb","uk","de"],symbols=["one","two","three","four","five","six","seven","eight","nine","keycap_ten","1234","zero","hash","symbols","arrow_backward","arrow_down","arrow_forward","arrow_left","capital_abcd","abcd","abc","arrow_lower_left","arrow_lower_right","arrow_right","arrow_up","arrow_upper_left","arrow_upper_right","arrow_double_down","arrow_double_up","arrow_down_small","arrow_heading_down","arrow_heading_up","leftwards_arrow_with_hook","arrow_right_hook","left_right_arrow","arrow_up_down","arrow_up_small","arrows_clockwise","arrows_counterclockwise","rewind","fast_forward","information_source","ok","twisted_rightwards_arrows","repeat","repeat_one","new","top","up","cool","free","ng","cinema","koko","signal_strength","u5272","u5408","u55b6","u6307","u6708","u6709","u6e80","u7121","u7533","u7a7a","u7981","sa","restroom","mens","womens","baby_symbol","no_smoking","parking","wheelchair","metro","baggage_claim","accept","wc","potable_water","put_litter_in_its_place","secret","congratulations","m","passport_control","left_luggage","customs","ideograph_advantage","cl","sos","id","no_entry_sign","underage","no_mobile_phones","do_not_litter","non-potable_water","no_bicycles","no_pedestrians","children_crossing","no_entry","eight_spoked_asterisk","eight_pointed_black_star","heart_decoration","vs","vibration_mode","mobile_phone_off","chart","currency_exchange","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","ophiuchus","six_pointed_star","negative_squared_cross_mark","a","b","ab","o2","diamond_shape_with_a_dot_inside","recycle","end","on","soon","clock1","clock130","clock10","clock1030","clock11","clock1130","clock12","clock1230","clock2","clock230","clock3","clock330","clock4","clock430","clock5","clock530","clock6","clock630","clock7","clock730","clock8","clock830","clock9","clock930","heavy_dollar_sign","copyright","registered","tm","x","heavy_exclamation_mark","bangbang","interrobang","o","heavy_multiplication_x","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","white_flower","100","heavy_check_mark","ballot_box_with_check","radio_button","link","curly_loop","wavy_dash","part_alternation_mark","trident","black_square","white_square","white_check_mark","black_square_button","white_square_button","black_circle","white_circle","red_circle","large_blue_circle","large_blue_diamond","large_orange_diamond","small_blue_diamond","small_orange_diamond","small_red_triangle","small_red_triangle_down","shipit"];var VIPs=["52d1788496fba504497e0326","50eb4614d6e4a904cd2d55ea","512d14fe3e083e1248d1375f","50f91e0796fba55b429da03f","52161c1e877b921f33cb7073","51c6159a3b79036fdfa81ffc"];var key;var VIP=false;var developer="50fa7853d6e4a90144d485e0";var a=$("#chat-messages"),b=a.scrollTop()>a[0].scrollHeight-a.height()-20;for(key in VIPs){if(VIPs[key]===API.getUser().id){VIP=true}}if(typeof Storage!=="undefined"){if(localStorage.favoriteList){var retrievedData=localStorage.getItem("favoriteList");var favoriteList=JSON.parse(retrievedData)}else{API.chatLog("Pas de favoris trouvés",alert);var favoriteList=[]}}else{alert("Sorry your browser doesnt support localstorage so the fovorites wont work.")}a.append('<div class="emoji-start">Script démmaré !<div>');a.append("<style>#chat .emoji-start{border-left: 3px solid green; color:green; font-weight:700; font-size:13px; padding-left:25px;}</style>");b&&a.scrollTop(a[0].scrollHeight);API.chatLog("Astuce: Vous pouvez partager le script avec la commande /shareEmoji.");$("#emoji_list").remove();$("#chat").append('<div id="emoji_list" style="width:348px;height:507px;position:absolute;top:46px;right:345px;background-color:black;opacity: .91;z-number:10000"></div>');$("#emoji_list").append('<div id="emoji_header" style="width:348px;height:42px;position:absolute;top:0px;left:0px;"><span style="color:white;font-family: CalgaryScript,Arial,sans-serif;font-size:28px;font-weight:400;position:absolute;left:15px;top:0">Emoji List<img style="float:right;margin-top:2px;margin-left: 8px;" src="http://plug.dj/_/static/images/chat_bubble.0707cbd.png"/></span></div>');$("#emoji_list").append('<div id="emoji_listfeed" style="width:333px;height:470px;position:absolute;bottom:0px;right:0px;overflow-x: hidden;overflow-y: auto;"></div>');$("#emoji_listfeed").append("<style>.emoji_feed{padding:5px;padding-left:1px;word-wrap:break-word;width:308px;position:relative;} .emoji_feed img{height:20px;}</style>");$("#emoji_listfeed").append('<div class="emoji_feed"><span class="top_message1">Liste d'émoticones <strong style="color:red">Version 3.0.1 ALPHA </strong>Traduit par El3veN</span></div>');if(VIP===true){$("#emoji_listfeed").append('<div class="emoji_feed"><span class="top_message2"><strong style="color:red">Membre VIP</strong></span></div>')}if(developer===API.getUser().id){$("#emoji_listfeed").append('<div class="emoji_feed"><span class="top_message2"><strong style="color:#0DDEFC">Developer version!</strong></span></div>')}$("#emoji_list").append('<div id="emoji_listfeed2" style="width:333px;height:470px;position:absolute;bottom:0px;right:0px;overflow-x: hidden;overflow-y: auto;"></div>');$("#emoji_listfeed2").append("<style>.emoji_feed{padding:5px;padding-left:1px;word-wrap:break-word;width:308px;position:relative;} .emoji_feed img{height:20px;}</style>");$("#emoji_listfeed2").hide();$("#emoji_list").append('<div id="emoji_listfeed3" style="width:333px;height:470px;position:absolute;bottom:0px;right:0px;overflow-x: hidden;overflow-y: auto;"></div>');$("#emoji_listfeed3").append("<style>.emoji_feed{padding:5px;padding-left:1px;word-wrap:break-word;width:308px;position:relative;} .emoji_feed img{height:20px;}</style>");$("#emoji_listfeed3").append('<div class="emoji_feed"><span class="top_message"><strong style="color:green">+ Add to favorites</strong></span></div>');$("#emoji_listfeed3").hide();$("#emoji_list").append('<div id="emoji_listfeed4" style="width:333px;height:470px;position:absolute;bottom:0px;right:0px;overflow-x: hidden;overflow-y: auto;"></div>');$("#emoji_listfeed4").append("<style>.emoji_feed{padding:5px;padding-left:1px;word-wrap:break-word;width:308px;position:relative;} .emoji_feed img{height:20px;}</style>");$("#emoji_listfeed4").append('<div class="emoji_feed"><span class="top_message"><strong style="color:red">- Delete from favorites</strong></span></div>');$("#emoji_listfeed4").hide();$("#show_button").remove();$("#chat-header").append("<style>#show_button img{margin-left:2.5px;margin-top:2.5px;}</style>");$("#chat-header").append('<div id="show_button" style="width:30px;height:30px;z-number:10000; margin-left:-40px;margin-top:7px;cursor:pointer"><img id="showimage" style="margin-top:1px;" title="Show the list" src="http://brams.sinners.be/plugdjcodes/images/arrow-down-4-512.png" alt="smiley" width="27" height="27" onclick="show()"/></div>');$("#lock_button").remove();$("#chat-header").append("<style>#lock_button img{margin-left:2.5px;margin-top:2.5px;}</style>");$("#chat-header").append('<div id="lock_button" style="width:30px;height:30px;z-number:10000; margin-left:-78px;margin-top:-30px;cursor:pointer"><img id="lockimage" title="lock the list" src="http://brams.sinners.be/plugdjcodes/images/padlock_open.png" alt="lock" width="23" height="23" onclick="lock()"/></div>');$("#lock_button").hide();$("#emoji_button").remove();$("#chat-header").append("<style>#emoji_button img{margin-left:2.5px;margin-top:2.5px;}</style>");$("#chat-header").append('<div id="emoji_button" style="width:30px;height:30px;z-number:10000; margin-left:-120px;margin-top:-30px;cursor:pointer"><img id="listimage" title="List" src="http://brams.sinners.be/plugdjcodes/images/emoticon-30-512.png" alt="smiley" width="23" height="23" onclick="emojis()"/></div>');$("#emoji_button").hide();$("#info_button").remove();$("#chat-header").append("<style>#info_button img{margin-left:2.5px;margin-top:2.5px;}</style>");$("#chat-header").append('<div id="info_button" style="width:30px;height:30px;z-number:10000; margin-left:-340px;margin-top:-30px;cursor:pointer"><img id="infoimage" title="Script information" src="http://brams.sinners.be/plugdjcodes/images/question-mark-4-512.png" alt="lock" width="20" height="20" onclick="info()"/></div>');$("#info_button").hide();$("#favorites_button").remove();$("#chat-header").append("<style>#favorites_button img{margin-left:2.5px;margin-top:2.5px;}</style>");$("#chat-header").append('<div id="favorites_button" style="width:30px;height:30px;z-number:10000; margin-left:-160px;margin-top:-30px;cursor:pointer"><img id="infoimage" title="Favorites list" src="http://brams.sinners.be/plugdjcodes/images/star-2-512.png" alt="lock" width="23" height="23" onclick="showFavorites()"/></div>');$("#favorites_button").hide();$("#plus_button").remove();$("#chat-header").append("<style>#plus_button img{margin-left:2.5px;margin-top:2.5px;}</style>");$("#chat-header").append('<div id="plus_button" style="width:30px;height:30px;z-number:10000; margin-left:-200px;margin-top:-30px;cursor:pointer"><img id="plusimage" title="Add Favorites" src="http://brams.sinners.be/plugdjcodes/images/plus-512.png" alt="lock" width="23" height="23" onclick="plus()"/></div>');$("#plus_button").hide();$("#min_button").remove();$("#chat-header").append("<style>#min_button img{margin-left:2.5px;margin-top:2.5px;}</style>");$("#chat-header").append('<div id="min_button" style="width:30px;height:30px;z-number:10000; margin-left:-240px;margin-top:-30px;cursor:pointer"><img id="minimage" title="Delete Favorites" src="http://brams.sinners.be/plugdjcodes/images/minus-512.png" alt="lock" width="23" height="23" onclick="minus()"/></div>');$("#min_button").hide();$("#stop_button").remove();$("#chat-header").append("<style>#stop_button img{margin-left:2.5px;margin-top:2.5px;}</style>");$("#chat-header").append('<div id="stop_button" style="width:30px;height:30px;z-number:10000; margin-left:-310px;margin-top:-30px;cursor:pointer"><img id="stopimage" title="Stop the script" src="http://brams.sinners.be/plugdjcodes/images/exit-512.png" alt="Stop" width="20" height="20" onclick="stop()"/></div>');$("#stop_button").hide();$("#blackback").remove();$("#chat-header").append('<div id="blackback" style="width:348px;height:46px;z-number:10000; left:0;margin-left:-50px;margin-top:-37px; display:block; background-color:#0A0A0A;color:black;"></div>');$("#emoji_list").slideUp();showEmoji(popular,"Populaires","e");showEmoji(people,"Personnages","p");showEmoji(nature,"Nature","n");showEmoji(objects,"Objets","o");showEmoji(places,"Places","l");showEmoji(symbols,"Symboles","s");showEmoji2(favoriteList,"Favoris","f");showEmoji3(popular,"Populaires","e");showEmoji3(people,"Peronnages","p");showEmoji3(nature,"Nature","n");showEmoji3(objects,"Objets","o");showEmoji3(places,"Places","l");showEmoji3(symbols,"Symboles","s");API.on(API.CHAT_COMMAND,chatCommand);_$context.on("chat:receive",emojichat)
