//静态资源路径 
var imgHost = "https://xuanji.hnrhfhf.com/public/upload/";
var richImg = "https://xuanji.hnrhfhf.com/public/";
//接口路径 
var host = "https://xuanji.hnrhfhf.com";
var url = {
	//首页
	city_category: `${host}/wxapi/index/city_category`, // （完成）城市分类
	search: `${host}/wxapi/index/search`,  //（完成）content
	banner: `${host}/wxapi/index/banner`, //（完成）轮播图
	head: `${host}/wxapi/index/head`, //（完成）楼市头条
	recommend: `${host}/wxapi/index/recommend`, //（完成）热门推荐
	area: `${host}/wxapi/index/area`, //区域分类（完成）
	feature: `${host}/wxapi/index/feature`, //特色分类（完成）
	price: `${host}/wxapi/index/price`, //价格分类（完成）
	desc: `${host}/wxapi/index/desc`, //（完成）价格由高到低 参数:区域id(region_id) 特色id(feature_id) 价格id(price_id)
	asc: `${host}/wxapi/index/asc`, //（完成）价格由低到高 参数:区域id(region_id) 特色id(feature_id) 价格id(price_id)
	house: `${host}/wxapi/index/house`, //（完成）项目展示
	house_detail: `${host}/wxapi/index/house_detail`, //（完成）楼盘详情 参数:楼盘id(house_id)
	house_collect: `${host}/wxapi/index/house_collect`, //楼盘收藏 参数:楼盘id(house_id) 会员id(member_id)
	head_detail: `${host}/wxapi/index/head_detail `, //（完成）头条详情 article_id
	city_name: `${host}/wxapi/index/city_name`, //（完成）获取城市id
	sendMsg: `${host}/wxapi/center/sendMsg`, //（完成）发送验证码
	
	// 动态
	dynamic_index: `${host}/wxapi/dynamic/index`, //（完成） 动态
	// 动态详情
	dynamic_detail: `${host}/wxapi/dynamic/detail`, //（完成） 动态详情 article_id
	
	//推荐客户
	house_list: `${host}/wxapi/client/house`, //（完成）推荐楼盘列表
	client_recommend: `${host}/wxapi/client/tuijian`, //（完成）推荐客服提交 参数:会员id(member_id) 客户姓名(client_name)客服性别(client_sex)客户电话(client_tel) 备注(client_detail)
	client_detail: `${host}/wxapi/center/client_detail`, //（完成）
	
	//授权
	login: `${host}/wxapi/login/login`, //授权登录 （完成）
	register: `${host}/wxapi/login/register`, //注册 （完成）
	
	// 我的
	client: `${host}/wxapi/center/client`, //（完成）我的客户 参数:会员id(member_id) 客户状态(客服状态 1已推荐,2已到访,3认筹,4认购,5网签)
	collect: `${host}/wxapi/center/collect`, //（完成）我的收藏 参数:会员id(member_id)
	upload: `${host}/wxapi/center/upload`, //（完成）投诉与反馈 多图片上传
	complain: `${host}/wxapi/center/complain`, //（完成）投诉与反馈 参数:会员id(member_id)
	card: `${host}/wxapi/center/card`, 
	//（完成）添加银行卡 参数:持卡人姓名(card_name) 持卡人身份证号(card_sfz)银行卡预留号码(card_tel)开户银行(card_bank)开户行支行(card_branch)卡号(card_number)
	my_card: `${host}/wxapi/center/my_card`, //（完成）我的银行卡 参数:会员id(member_id)
	apply: `${host}/wxapi/center/apply`, //（完成）申请提现 参数:会员id(member_id)银行卡id(card_id)提现金额name值(money)
	record: `${host}/wxapi/center/record`, //（完成）提现记录  参数:会员id(member_id)
	sf_upload: `${host}/wxapi/center/upload`, //（完成）身份认证图片上传 参数:图片name(image_upload)
	update: `${host}/wxapi/center/update`, //（完成）身份认证 参数:持卡人姓名(user_name)手机号(user_tel)身份证正面照(user_zcard)身份证反面照(user_fcard)邮箱(user_email)服务区域(user_server)擅长房源类型(user_good)
	ucenter_money: `${host}/wxapi/center/money`, //money
	my_message_list: `${host}/wxapi/center/my_message_list`,
	my_message_count: `${host}/wxapi/center/my_message_count`,
	message_detail: `${host}/wxapi/center/message_detail`,
	no_count: `${host}/wxapi/dynamic/no_count`,
	//我的团队
	count: `${host}/wxapi/team/count`, //（完成）团队数量 参数:会员id(member_id)
	team_conut: `${host}/wxapi/team/team_count`, //（完成）查看团员 参数:会员id(member_id)
	team_one: `${host}/wxapi/team/one `, //（完成）查看团员 参数:会员id(member_id)
	team_two: `${host}/wxapi/team/two`, //（完成）查看团员 参数:会员id(member_id)
	my_money: `${host}/wxapi/team/my_money`, //（完成）我的分销佣金记录 参数:会员id(member_id)
	qr_code: `${host}/wxapi/team/code`,
}
// //footer 
var footer = {
  list: [
    {
      pagePath: "../index/index",
      text: "首页",
      iconPath: "../../static/images/icon1.png",
      selectedIconPath: "../../static/images/icon1Hover.png"
    },
    {
      pagePath: "../dynamic/dynamic",
      text: "动态",
      iconPath: "../../static/images/icon2.png",
      selectedIconPath: "../../static/images/icon2Hover.png"
    },
    {
      pagePath: "../reCustomer/reCustomer",
      text: "推荐",
      iconPath: "../../static/images/icon5.png",
      selectedIconPath: "../../static/images/icon5.png"
    },
    {
      pagePath: "../team/team",
      text: "团队",
      iconPath: "../../static/images/icon3.png",
      selectedIconPath: "../../static/images/icon3Hover.png"
    },
    {
      pagePath: "../mine/mine",
      text: "我的",
      iconPath: "../../static/images/icon4.png",
      selectedIconPath: "../../static/images/icon4Hover.png"
    }
  ]
}
module.exports = {
	imgHost,
	host,
	url,
	footer,
	
}