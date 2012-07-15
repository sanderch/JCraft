$(document).ready(function () {
    $(document).click(function () {
        if (world != undefined) {
            alert(world.selected);
        }
    });
});

function WCWorld() {
    this.name = "WCCorld";
    var selected; // = new Array();
    this.select = function (obj) {
        if (selected != undefined && selected.div != undefined)
        selected.div.style.backgroundColor = '';
        selected = obj;
    };
    this.addCharacter = function (obj) {
        obj.WCContainer = this;
    };
}
// ftbl
function WCObject(name, top, left, race) {
    //debugger;

    this.WCContainer = undefined; //  = new WCWorld();
    this.name = name;
    this.div = document.createElement("div");
    var d = new Date();
    this.div.setAttribute("id", name
                        + d.getFullYear()
                        + d.getMonth()
                        + d.getDay()
                        + d.getHours()
                        + d.getMinutes()
                        + d.getSeconds()
                        + d.getMilliseconds()
                        + Math.abs(Math.random() * 1000));
    this.div.setAttribute("style", "position:absolute;height:10px;width:10px;backgroung-color:red;top:" + top + "px;left:" + left + "px;");
    this.img = document.createElement("img");
    this.img.setAttribute("id", name);
    var imgpath;
    if (race == undefined) {
        imgpath = "Images/Building/" +  name + ".png";
    } else {
        imgpath = "Images/Building/" + race+ '/' + name + ".png";
    }
    this.img.setAttribute("src", imgpath);
    this.div.appendChild(this.img);
    document.body.appendChild(this.div);
    var wcContainer = this.WCContainer;
    var select1 = this.select;
    this.div.onclick = function () {
        if (wcContainer != undefined) {
            alert(wcContainer.name + "adf");
            wcContainer.select(this);
            select1();
        } else { alert('no world'); }
    };
    this.select = function () {
        alert("qwdfsw");
        this.div.currentStyle.background = "red";
    };

}

var WCCharacter = function (name, top, left, race) {
    var that = new WCObject(name, top, left, race);
    var imgpath;
    that.race = race;
    if (race == undefined) {
        imgpath = "Images/Character/" + name + ".png";
    } else {
        imgpath = "Images/Character/" + race + '/' + name + ".png";
    }
    that.img.setAttribute("src", imgpath);

    var wcContainer = that.WCContainer;

    that.div.onclick = function () {
        if (that.WCContainer != undefined) {
            //alert(that.WCContainer.name + "sdf");
            that.WCContainer.select(that);
            that.selectMe();
        } else { alert('no world'); }
    };

    that.selectMe = function () {
        that.div.style.backgroundColor = 'Red';
    };

    that.move = function (x, y) {
        alert(x + y);
    };

    return that;
};


//WCCharacter.prototype = new WCObject(name, top, left, race);

