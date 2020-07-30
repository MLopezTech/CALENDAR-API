


var boxArray = $(".form-control");


boxArray.forEach(function (myElement) {
  {
    if (this.moment === "ago") {
      this.style.color = ".past";
    }
    else if (this.moment === "from now") {
      this.style.color = ".future";
    }
    else {
      this.style.color = ".present";
    }

  };
});








// box array
var boxArray = $(".form-control");
for (let i = 0; i < boxArray.length; i++) {
  let val = getCookie("box" + i);
  boxArray[i].value = val != null ? val : "";
}




document.getElementById("date").innerHTML = moment();

console.log(moment());
function test(box) {
  setCookie("box" + box, boxArray[box].value);




}

function setCookie(name, value) {
  document.cookie = name + "=" + value + ";path=/;";




}

function Cookies(name) {
  var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return v ? v[2] : null;
}




