var gold = 100
var goldGain = 5;
var minersAmount = 0;
var text = "";
var i = setInterval(passiveGoldGain, 1000);
var j = setInterval(updateTexts, 1000);

// Text Positions
document.getElementById("upgradeGoldGain").onclick = function() {upgradeGoldGain()};
document.getElementById("upgradeGoldGain").style.fontWeight = 900;
document.getElementById("upgradeGoldGain").style.position = "absolute";
document.getElementById("upgradeGoldGain").style.top = "50px";

document.getElementById("goldText").style.position = "absolute";
document.getElementById("goldText").style.left = "10px";

document.getElementById("goldGainText").style.position = "absolute";
document.getElementById("goldGainText").style.left = "100px";

function passiveGoldGain(){
  console.log(gold);
  console.log(goldGain);
  console.log(minersAmount);
  gold += goldGain
  text = "Gold: " + gold;
}

function upgradeGoldGain(){
  minersAmount += 1;
  goldGain = (minersAmount)*2
  upgradeGoldGainCost += (minersAmount)*4
}


function updateTexts(){
  document.getElementById("goldGainText").innerHTML = "+ " + goldGain;
  document.getElementById("goldText").innerHTML = text;
  document.getElementById("upgradeGoldGain").onmouseover = function(){document.getElementById("upgradeGoldGainCost").innerHTML = "Cost: " + upgradeGoldGainCost};
}
