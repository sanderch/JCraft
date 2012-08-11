$(document).ready(function () {
    $(document).click(function () {
//        if (world != undefined) {
//            alert('document click' + world.selected);
//        }
    });
});

function JCWorld() {
    this.name = "JCWorld";
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
    var jcContainer = this.JCContainer;
    var select1 = this.select;
    this.div.onclick = function () {
        debugger;
        if (jcContainer != undefined) {
            alert(jcContainer.name + "adf");
            jcContainer.select(this);
            select1();
        } else { alert('no world'); }
    };
    this.select = function () {
        alert("qwdfsw");
        this.div.currentStyle.background = "red";
    };

    this.GetX = function() {
        return this.div.style.left;
    };
    
    this.GetY = function() {
        return this.div.style.top;
    };
}

var JCCharacter = function (name, top, left, race) {
    // debugger;
    var that = new JCObject(name, top, left, race);
    var imgpath;
    that.race = race;
    if (race == undefined) {
        imgpath = "Images/Character/" + name + ".png";
    } else {
        imgpath = "Images/Character/" + race + '/' + name + ".png";
    }
    that.img.setAttribute("src", imgpath);

    that.div.onclick = function () {
        debugger;
        if (that.JCContainer != undefined) {
            //alert(that.JCContainer.name + "sdf");
            that.JCContainer.select(that);
            that.selectMe();
        } else {
            alert('no world'); // fuuuu!
        }
    };

    that.selectMe = function () {
        debugger;
        that.div.style.backgroundColor = 'Red';
        that.move(that.div.offsetLeft + 10 + 'px', that.div.offsetTop + 10 + 'px');
    };

    that.move = function (x, y) {
        that.div.style.left = x;
        that.div.style.top = y;
    };

    return that; // inheritance huh?
};


//JCCharacter.prototype = new JCObject(name, top, left, race);

