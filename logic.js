 // Initialize collapse button

  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

var completed;
var attended;

function Cocurricular_Field()
{
  //alert(document.getElementById("co_leaves").checked);
  var co_checkbox = document.getElementById("co_leaves");
  if(co_checkbox.checked == true)
  {
      var inputs_div = document.getElementById("inputs");
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
    document.getElementById("classes_to_attend").innerHTML = "Lemme Help xD!";
    document.getElementById("current_attendance").innerHTML = "Current Attendance";
    document.getElementById("per").innerHTML = "Really?!";
    document.getElementById("per").style["color"] = "F0800F";
}

function swapt(){
    document.getElementById("conducted").value = attended;
    document.getElementById("present").value = completed;
}

function calculate()
{
    completed = parseInt(document.getElementById("conducted").value);
    attended = parseInt(document.getElementById("present").value);
    if(!Number.isInteger(completed) || !Number.isInteger(attended))
    {
          throwError();
          document.getElementById("conducted").value = 0;
          document.getElementById("present").value = 0;
          return;
    }
    console.log(completed+" "+attended);
    var min_att = document.getElementsByTagName("form")[0].elements["min_att"].value;
    //var min_att = 75;
    if(attended > completed)
    {
         throwError();
         setTimeout(swapt,1000);
         setTimeout(calculate,2000);
         return;
    }

    if(document.getElementById("co_leaves").checked == true)
    {
       var leaves = parseInt(document.getElementById("co_leaves_count").value);
    }

    if(leaves)
    {
       attended+=leaves;
       if(attended > completed)
       {
          throwError();
          document.getElementById("co_leaves_count").value = 0;
          setTimeout(calculate,2000);
          return;
       }
    }

    var classes_to_attend = (((min_att/100)*completed) - attended) / ((100-min_att)/100);
    var classes_bunkable = (attended - (min_att/100*completed))/(min_att/100);

    if(classes_to_attend > 0)
    	document.getElementById("classes_to_attend").innerHTML = "You need to attend <b>" + Math.ceil(classes_to_attend) + "</b> hours of classes";
    else
    	document.getElementById("classes_to_attend").innerHTML = "You can afford to bunk <b>" + Math.floor(classes_bunkable) + "</b> hours of classes";
    var current_attendance = attended/completed*100;
    document.getElementById("current_attendance").innerHTML = "Current Attendance: ";
    document.getElementById("per").innerHTML = current_attendance.toFixed(2) + "%";
    if(current_attendance>85)
    		document.getElementById("per").style["color"] = "#46BD36";
    else if(current_attendance>75)
    		document.getElementById("per").style["color"] = "#DACA40";
    else
    		document.getElementById("per").style["color"] = "#C70039";


}
