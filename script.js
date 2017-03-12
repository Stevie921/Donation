function collect() {
  var donation = document.getElementById("amount").value;
  var required = document.getElementById("requiredNum").innerHTML;
  required = required -= donation;
  document.getElementById("requiredNum").innerHTML = required;

  var total = 668;
  var progress = total - required;
  var percentage = progress / total * 100;
  document.getElementById("progressbar").style.width = percentage + "%";
  document.getElementById("progressbar").style.maxWidth = "100%";

  var addOne = 1;
  var count = document.getElementById("count").innerHTML;
  var countNum = Number(count);
  countNum = countNum += addOne;
  document.getElementById("count").innerHTML = countNum;

  if (percentage >= 100) {
    document.getElementById("give-btn").disabled = true;
    document.getElementById("required-para").innerHTML = "project is 100% funded!";
    document.getElementById("required").style.backgroundColor =
      "#1DA362";
 }
 
}

function social_media(){
  var  toggle = document.getElementById("social");
  if(toggle.style.display === 'none'){
    toggle.style.display = 'block';
  }
  else {
    toggle.style.display = 'none';
  }
 
}