window.onload = function () {

    var i, len;

    var info = document.getElementsByClassName("info");
    
    // 左边框效果
    for(i = 0, len = info.length; i < len; i++) {

        var opaBox, intrText, under;
        info[i].onmouseenter = function (e) {

            opaBox = this.querySelector(".opa-box");
            intrText = this.querySelector(".intr-text");
            under = this.parentNode.querySelector(".u");

            opaBox.style.opacity = 1;
            intrText.style.color = "#ff9900";
            under.style.webkitTransform='translateY(0px)'
        }
        info[i].onmouseleave = function (e) {
            opaBox.style.opacity = 0;
            intrText.style.color = "#000";
            under.style.webkitTransform='translateY(-17px)'
        }
    }

    // 右边框效果
    var rightInfo = document.getElementsByClassName("list");
    var rightBox, rightTextBox;
    for(i = 0, len = rightInfo.length; i < len; i++) {
        rightInfo[i].onmouseenter = function () {
            rightBox = this.querySelector(".right-box");
            rightTextBox = this.querySelector(".right-text-box");

            rightBox.style.display = "inline-block";
            rightTextBox.style.display = "none";
            console.log(this.querySelector(".right-box"));
            console.log(this.querySelector(".right-text-box"));
        }

        rightInfo[i].onmouseleave = function () {
            rightBox.style.display = "none";
            rightTextBox.style.display = "inline-block";
        }

    }
}