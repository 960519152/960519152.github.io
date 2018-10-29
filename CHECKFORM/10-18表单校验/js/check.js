var flagnumber = 0; //全局判断标识
function Check(input, errorMsg) {
    this.init = function () {
        this.hide();
        this.eve();
        this.okBt();
    };
    this.hide = function () {//初始化全部隐藏
        $("." + errorMsg).css({ "opacity": 0 });
    };
    this.test = function (thisinfo) {
        var _val = $(thisinfo).val(); //输入的值
        var datatype = $(thisinfo).next().attr("data-name"); //获取需要提示的关键词

        console.log(_val);
        if (!_val) {  //没有输入值
            flagnumber++;
            $(thisinfo).next().css({ "opacity": 1 }).html(datatype + "不能为空");
        } else {  //输入值验证
            var type = $(thisinfo).attr("data-type");
            $(thisinfo).next().html(datatype + "输入有误");
            switch (type) {
                case "text":
                    $(thisinfo).next().css({ "opacity": 0 });
                    break;
                case "tel":
                    var zzTel = /^1(3|4|5|7|8)\d{9}$/;
                    if (!(zzTel.test(_val))) {
                        $(thisinfo).next().css({ "opacity": 1 });
                        flagnumber++;
                    } else {
                        $(thisinfo).next().css({ "opacity": 0 });
                    }
                    break;
                default:
                    break;
            }
        }
    },
        this.eve = function () {//光标移入移出
            var thisTest = this.test;//获取test函数对象
            $("." + input).blur(function () {
                thisTest(this);
            });
        }
    this.okBt = function () {
        var thisTest = this.test;//获取test函数对象
        $(".okBt").click(function () {
            flagnumber = 0; //每点击一次就初始化一次
            $("." + input).each(function () {
                thisTest(this);
            });
            if (flagnumber == 0) {
                alert("验证通过!");
            } else {
                alert("请检查输入！");
            }
        })
    }
}