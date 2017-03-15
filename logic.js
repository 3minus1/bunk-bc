 // Initialize collapse button
  
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();





function Cocurricular_Field()
{
  //alert(document.getElementById("co_leaves").checked);
  var co_checkbox = document.getElementById("co_leaves");
  if(co_checkbox.checked == true)
  {
    var inputs_div = document.getElementById("inputs");  
 /* <div class="input-field col s12 m12 l12">
          <input id="present" type="text" class="validate">
          <label for="present">Classes Attended</label>
        </div> */
  var co_input_div = document.createElement("div");
  co_input_div.className = "input-field col s12 m12 l12";
  co_input_div.id = "co_field_div"
  var co_input_text = document.createElement("input");
  co_input_text.id = "co_leaves_count";
  co_input_text.type = "text";
  co_input_text.className = "validate";
  var co_input_label = document.createElement("label");
  co_input_label.for = "co_leaves_count";
  co_input_label.innerHTML = "Number of Co-Curricular Leaves";
  co_input_div.appendChild(co_input_text);
  co_input_div.appendChild(co_input_label);
  inputs_div.appendChild(co_input_div);

  }

  else
  {
    document.getElementById("co_field_div").remove();
  }
  
}

function throwError()
{
    document.getElementById("classes_to_attend").innerHTML = "Dude! Are you a human or what?!";
    document.getElementById("current_attendance").innerHTML = "Current Attendance";
    document.getElementById("per").innerHTML = "Whoa!";
    document.getElementById("per").style["color"] = "F0800F";
    
}


function calculate()
{
  //min_att = min_att.substring(0,2);
  //console.log("MIN ATT: "+min_att);

var conducted = parseInt(document.getElementById("conducted").value);
var present = parseInt(document.getElementById("present").value);
var min_att = document.getElementsByTagName("form")[0].elements["min_att"].value;
//var min_att = 75;
if(present > conducted)
{
   throwError();
   return;
}

if(document.getElementById("co_leaves").checked == true)
{
   var leaves = parseInt(document.getElementById("co_leaves_count").value);
}

if(leaves)
{
   present+=leaves;
   if(present > conducted)
   {
      throwError();
      return;
   }
}

var classes_to_attend = (((min_att/100)*conducted) - present) / ((100-min_att)/100);
var classes_bunkable = (present - (min_att/100*conducted))/(min_att/100);

if(classes_to_attend > 0)
	document.getElementById("classes_to_attend").innerHTML = "You need to attend <b>" + Math.ceil(classes_to_attend) + "</b> hours of classes";
else
	document.getElementById("classes_to_attend").innerHTML = "You can afford to bunk <b>" + Math.floor(classes_bunkable) + "</b> hours of classes";
var current_attendance = present/conducted*100;
document.getElementById("current_attendance").innerHTML = "Current Attendance: ";
document.getElementById("per").innerHTML = current_attendance.toFixed(2) + "%";
if(current_attendance>85)
		document.getElementById("per").style["color"] = "#46BD36";
else if(current_attendance>75)
		document.getElementById("per").style["color"] = "#DACA40";
else
		document.getElementById("per").style["color"] = "#C70039";


}