window.addEventListener('load', function(){
let text1 = document.querySelector("#text1");
let P1 = document.querySelector(".P1");
let CanEnter = "on";
let Story = -1;
let s = "<p class = 'P1'>";
let e = "</p>";
let s_boyake = "<p class = 'boyake'>";
let s_kurayami = "<p class = 'kurayami'>";
let s_kinki = "<p class = 'kinki'>";

text1.innerHTML = s + "―いずれ花になる<ruby>双葉<rt>ふたば</rt></ruby>―" + e;


function AdvanceStory(){//ストーリーを進める
  Story += 1;



  if(Dialogue[Story].indexOf("boyake:") !== -1){
    Dialogue[Story] = Dialogue[Story].replace("boyake:", "");
    text1.innerHTML = s_boyake + Dialogue[Story] + e;
    CanEnter = "off";
    setTimeout( () => {CanEnter = "on";} , 500);
  }
  else if(Dialogue[Story].indexOf("kurayami:") !== -1){
    Dialogue[Story] = Dialogue[Story].replace("kurayami:", "");
    text1.innerHTML = s_kurayami + Dialogue[Story] + e;
    CanEnter = "off";
    setTimeout( () => {CanEnter = "on";} , 500);
  }
  else if(Dialogue[Story].indexOf("kinki:") !== -1){
    Dialogue[Story] = Dialogue[Story].replace("kinki:", "");
    text1.innerHTML = s_kinki + Dialogue[Story] + e;
    CanEnter = "off";
    setTimeout( () => {CanEnter = "on";} , 500);
  }
  else{
    text1.innerHTML = s + Dialogue[Story] + e;
    CanEnter = "off";
    setTimeout( () => {CanEnter = "on";} , 500);
  }
}

document.onkeydown = (e) => {//キー検知
  switch(e.keyCode){
  case 13:
    if(CanEnter == "on"){//Enterできる
          AdvanceStory()
          break;
    }
  }
}
})
