$(document).ready(function () {
    $(document).click(function () {
        if (world != undefined) {
            alert(world.selected);
        }
    });
});

function JCWorld() {
    this.name = "WCCorld";
    var selected; // = new Array();
    this.select = function (obj) {
        if (selected != undefined && selected.div != undefined)
        selected.div.style.backgroundColor = '';
        selected = obj;
    };
    this.addCharacter = function (obj) {
        obj.JCContainer = this;
    };
}
// ftbl
function JCObject(name, top, left, race) {
    //debugger;

    this.JCContainer = undefined; //  = new JCWorld();
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
    var wcContainer = this.JCContainer;
    var select1 = this.select;
    this.div.onclick = function () {
        debugger;
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

var JCCharacter = function (name, top, left, race) {
    var that = new JCObject(name, top, left, race);
    var imgpath;
    that.race = race;
    if (race == undefined) {
        imgpath = "Images/Character/" + name + ".png";
    } else {
        imgpath = "Images/Character/" + race + '/' + name + ".png";
    }
    that.img.setAttribute("src", imgpath);

    var wcContainer = that.JCContainer;

    that.div.onclick = function () {
        debugger;
        if (that.JCContainer != undefined) {
            //alert(that.JCContainer.name + "sdf");
            that.JCContainer.select(that);
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


//JCCharacter.prototype = new JCObject(name, top, left, race);

