function Check(input, errorMsg) {
    this.init = function () {
        this.hide();
        this.eve();
        this.okBt();
    };
    this.hide = function () {//初始化全部隐藏
        $("." + errorMsg).css({ "opacity": 0 });
    };
    this.eve = function () {//光标移入移出
        $("." + input).focus(function () {
            //
        });
        $("." + input).blur(function () {
            var _val = $(this).val();
            if (!_val) {  //没有输入值
                $(this).next().css({ "opacity": 1 });
                console.log($(this).next().attr("data-name") + "栏目输入有误");
            } else {  //输入值
                var type = $(this).attr("data-type");
                switch (type) {
                    case "text":
                        console.log("text类型");
                        break;
                    case "sex":
                        console.log("sex类型");
                        break;
                    case "time":
                        console.log("time类型");
                        break;
                    case "tel":
                        console.log("tel类型");
                        break;
                    default:
                        break;
                }
                $(this).next().css({ "opacity": 0 });
            }
        });
    }
    this.okBt = function () {
        $(".okBt").click(function () {
            var bool = true;
            $("." + input).each(function () {
                var value = $(this).val(); //这里的value就是每一个input的value值~
                if (!value) {
                    $(this).next().css({ "opacity": 1 });
                    bool = false;
                }
            });
            if (bool == true) {
                console.log("验证通过!");
            }
        })
    }
}