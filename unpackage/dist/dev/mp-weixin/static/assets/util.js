var ajax = function ({
	url = "",
	data = {},
	type = 'post',
	dataType = "json",
	isLoad = true
} = {}) {
	return new Promise((resolve, reject) => {
		if (isLoad) {
			wx.showLoading({
				title: '请求中',
				mask: true
			})
		}
		// data.session_id = getApp().globalData.session_id;
		wx.request({
			url: url,
			data: data,
			method: type,
			dataType: dataType,
			success: (result) => {
				if (result.statusCode === 200) {
					resolve(result.data)
				} else {
					reject()
					console.log("请求出错" + result.errMsg)
				}
			},
			fail: () => {
				console.log("请求出错");
			},
			complete: () => {
				if (isLoad) {
					wx.hideLoading()
				}
			}
		});
	});
}

function showTost(message) {
	uni.showToast({
		title: message,
		icon: "none",
		duration: 2000
	});
}

function imgAddPath(list, imgSele, path) {
	let eachArr = list;
	let arr = [];
	eachArr.forEach((item) => {
		item[imgSele] = path + item[imgSele];
		arr.push(item);
	});
	// list = arr;
	return list;
}

function returnPrev() {
	showTost("参数错误");
	setTimeout(() => {
		uni.navigateBack({
			delta:1
		});
	}, 1500);
}
module.exports = {
	ajax: ajax,
	showTost: showTost,
	imgAddPath,
	returnPrev

}
