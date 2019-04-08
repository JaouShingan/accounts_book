export default {
    currentDay() {
        const current = new Date();
        return new Date(current.getFullYear(), current.getMonth(), current.getDate());
    },
    getDateTime(date) {
        if (!date) {
            return null;
        }
        const temp = new Date(date);
        return [
            `${temp.getFullYear()}-${temp.getMonth() + 1}-${temp.getDate()}`,
            `${temp.getHours()}:${temp.getMinutes()}`
        ];
    },
    formatDate(date, fmt = 'yyyy-MM-dd') {
        if (!date) {
            return null;
        }
        let result = fmt;
        try {
            const tempDate = new Date(date);
            var o = {
                "M+": tempDate.getMonth() + 1, //月份 
                "d+": tempDate.getDate(), //日 
                "h+": tempDate.getHours(), //小时 
                "m+": tempDate.getMinutes(), //分 
                "s+": tempDate.getSeconds(), //秒 
                "q+": Math.floor((tempDate.getMonth() + 3) / 3), //季度 
                "S": tempDate.getMilliseconds() //毫秒 
            };
            
            if (/(y+)/.test(result)) {
                result = result.replace(RegExp.$1, (tempDate.getFullYear() + "").substr(4 - RegExp.$1.length));
            }
            for (var k in o) {
                if (new RegExp("(" + k + ")").test(result)) {
                    result = result.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)))
                };
            }
        } catch (error) {
            result = error.message;
        }
        return result;
    }
}