//用户名校验
export function nameRule(rule, value, callback) {
    //
    //用户名由字母（大小写）、数字、下划线和短横线组成，长度在4到16个字符之间
    const pattern = /^[a-zA-Z0-9_-]{4,16}$/;
    if (value === "") {
        callback(new Error("请输入用户名"));
    } else if (!pattern.test(value)){
        callback(new Error("用户名由字母（大小写）、数字、下划线和短横线组成，长度在4到16个字符之间"));
    } else {
        callback();
    }
}

//密码正则校验
export function passwordRule(rule, value, callback) {
    //
    //用户名由字母（大小写）、数字、下划线和短横线组成，长度在4到16个字符之间
    const pattern = /^[a-zA-Z0-9_-]{4,16}$/;
    if (value === "") {
        callback(new Error("请输入用户名"));
    } else if (!pattern.test(value)){
        callback(new Error("用户名由字母（大小写）、数字、下划线和短横线组成，长度在4到16个字符之间"));
    } else {
        callback();
    }
}