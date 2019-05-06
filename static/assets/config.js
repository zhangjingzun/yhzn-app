//静态资源路径 
var imgHost = "http://192.168.0.102:8089/public/upload/";
var richImg = "http://192.168.0.102:8089/public/";
//接口路径 
var host = "http://192.168.0.102:8089";
var url = {
	//首页
	bannerList: `${host}/banner/get`,
	hotProduct: `${host}/shop/hot`,
	recProduct: `${host}/shop/recommend`,
	productDetail: `${host}/shop/getDetail`,
	classicList: `${host}/classic/get`,
	productClassic: `${host}/shop/classic`,
	about: `${host}/info/get`,
}
module.exports = {
	imgHost,
	host,
	url
}