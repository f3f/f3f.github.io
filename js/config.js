﻿var app = {
  teams: [
    { name: '朱润亚', tel: '18610279719', email: 'zry@jusfoun.com', qq: '86427955', des: '猥琐大叔嘿嘿', url: 'https://zhu18.github.io',group:'*' },
    { name: '魏彬', tel: '13401095555', email: 'weibin@jusfoun.com', qq: '23004532', des: '懒而不惰~', url: 'https://weibsgz.github.io/',group:'pro2' },
    { name: '邵金东', tel: '15378789898', email: 'sjd@jusfoun.com', qq: '81288819', des: '谱写精彩人生', url: 'http://www.shaojindong.com/' ,group:'pro2'},
    { name: '柳杨', tel: '18601265717', email: 'ly@jusfoun.com', qq: '451870307', des: '没有强迫症的处女座', url: 'https://arsliuyang.github.io' ,group:'pro2'},
    { name: '陈胜', tel: '18602685946', email: 'chensheng@jusfoun.com', qq: '809966184', des: 'RUN FOR FREEDOM', url: 'https://halfmoonvic.github.io' ,group:'pro2'},
    { name: '温兴月', tel: '', email: 'wxy@jusfoun.com', qq: '', des: '学无止境', url: 'https://qilitianjian.github.io' ,group:'pro2'},
    { name: '李鹏飞', tel: '', email: '', qq: '', des: '认路比代码难', url: 'https://mrlipengfei.github.io' ,group:'pro2'},
    { name: '郭志敏', tel: '', email: '', qq: '', des: '不忘初心', url: 'https://gzmd.github.io' ,group:'pro2'},
    { name: '褚甜甜', tel: '', email: 'ctt@jusfoun.com', qq: '', des: '人...人如其名', url: 'https://chutiantian.github.io' ,group:'pro2'},
    { name: '王帅', tel: '15313163637', email: 'ws@jusfoun.com', qq: '188009510', des: '胖纸', url: 'https://ws880321.github.io' ,group:'pro1'},
    { name: '邢玮', tel: '18301150703', email: 'xw@jusfoun.com', qq: '1065641709', des: '随便看看', url: 'https://xingwGitHub.github.io' ,group:'pro1'},
    { name: '吉亚峰', tel: '', email: '', qq: '', des: '叫我27号', url: 'https://shjyf.github.io/' ,group:'pro1'},
    { name: '任传真', tel: '', email: 'rcz@jusfoun.com', qq: '', des: '近朱者赤', url: 'https://grapetree.github.io' ,group:'pro1'},
	{ name: '林源', tel: '', email: 'linyuan@jusfoun.com', qq: '', des: '诗和远方', url: 'https://lindybest.github.io/' ,group:'pro1'},
    { name: '杨羽珂', tel: '', email: '', qq: '', des: '多一个世界', url: 'https://yykaue.github.io/' ,group:'pro1'},
    { name: '杜万福', tel: '', email: '', qq: '', des: '不负有心人', url: 'https://hotwhy.github.io/' ,group:'pro1'},
    { name: '杨勇冠', tel: '17600801597', email: 'yyg@jusfoun.com', qq: '1135137781', des: '自律者自强 ...', url: 'https://yangyongguan.github.io' ,group:'pro3'},
    { name: '王杰', tel: '15001316150', email: 'wangjie@jusfoun.com', qq: '   674947294', des: '程序员', url: 'https://wangjie233.github.io/' ,group:'pro3'},
    { name: '杨微', tel: '18519292486', email: 'yangwei@jusfoun.com', qq: '873483161', des: '不一样色儿的呲花', url: 'https://vida77.github.io' ,group:'pro3'},
    { name: '冯彦文', tel: '15201565398', email: 'fyw@jusfoun.com', qq: '793268593', des: '我是冯老师', url: 'https://fengyw1989.github.io'  ,group:'pro3'},
    { name: '郑梦丽', tel: '', email: 'zml@jusfoun.com', qq: '', des: '个人博客', url: 'https://zhengmengli.github.io/'  ,group:'pro3'},
    { name: '王斌彦', tel: '', email: 'wby@jusfoun.com', qq: '', des: '面对着思索', url: 'https://uewby.github.io/' ,group:'pro3'},
    { name: '商业庆', tel: '13121730259', email: 'shangyeqing@jusfoun.com', qq: '1246283740', des: '恐怖如斯', url: 'https://btsyq.github.io' ,group:'pro1'},
    { name: '魏阁', tel: '18310634607', email: 'wg@jusfoun.com', qq: '3129168699', des: '努力 拼搏', url: 'https://gezi666.github.io' ,group:'pro1'},
    { name: '杨杰', tel: '17801129475', email: 'yangjie@jusfoun.com', qq: '624699461', des: '请叫我小胖', url: 'https://yangxujie666.github.io' ,group:'pro1'},
    { name: '李猛', tel: '18618133836', email: 'limeng@jusfoun.com', qq: '1526437167', des: '做好自己', url: 'https://menggege.github.io' ,group:'pub'},
    { name: '汝银娟', tel: '18611833241', email: 'ryj@jusfoun.com', qq: '1601450116', des: '90后女汉子', url: 'https://ruyinjuan.github.io'  ,group:'pub'},
    { name: '郭惠敏', tel: '15810169916', email: 'ghm@jusfoun.com', qq: '2777061859', des: '小萝莉', url: 'https://huiminguo.github.io'  ,group:'pub'},
    { name: '周志国', tel: '', email: 'zzg@jusfoun.com', qq: '', des: '勇往直前', url: 'https://yuyoo0508.github.io/'  ,group:'pub'},
     { name: '闫磊', tel: '', email: '', qq: '', des: '前端大狮子', url: 'https://yanlei0928.github.io/'  ,group:'pub'},
    { name: '张涛', tel: '', email: 'zhangtao@jusfoun.com', qq: '', des: '程序猿', url: 'https://zhangtao891116.github.io/'  ,group:'pub'},
    { name: '胡杰', tel: '', email: 'hujie@jusfoun.com', qq: '', des: ' 认真生活', url: 'https://prindarh.github.io/'  ,group:'pub'},
    { name: '李耀', tel: '', email: 'liyao@jusfoun.com', qq: '', des: ' 桃李不言，下自成蹊', url: 'https://liyao85.github.io/'  ,group:'pub'},
    { name: '彭庆凯', tel: '', email: 'pqk@jusfoun.com', qq: '', des: ' 脚踏实地', url: 'https://wuyax.github.io/'  ,group:'pub'},
    { name: '任新杰', tel: '15611346676', email: 'rxj@jusfoun.com', qq: '346494891', des: '做个特别的人', url: 'https://musishui.github.io' ,group:'pro4'},
    { name: '颜庭光', tel: '15201147857', email: 'ytg@jusfoun.com', qq: '522125842', des: '网易云音乐', url: 'https://MrGuang123.github.io'  ,group:'pro4'},
    { name: '韩凯波', tel: '18610815241', email: 'hkb@jusfoun.com', qq: '1342233762', des: '搬砖的', url: 'https://hankaibo.github.io'  ,group:'pro4'},
    { name: '吕颖萍', tel: '15201147857', email: 'lvyingping@jusfoun.com', qq: '383418784', des: '她倚在栏杆上', url: 'https://liquan007.github.io'  ,group:'pro4'},
    { name: '李妮', tel: '', email: 'lini@jusfoun.com', qq: '', des: '相信自己', url: 'https://lini000.github.io/'  ,group:'pro4'},
    { name: '冯红阳', tel: '', email: '', qq: '', des: '强烈求知欲', url: 'http://fenghongyang.applinzi.com/'  ,group:'pro4'},
	{ name: '徐媛媛', tel: '', email: '', qq: '', des: 'enjoy sunshine', url: 'https://nancyxu89.github.io/homepage/'  ,group:'pro4'},
      { name: '邹非凡', tel: '', email: '', qq: '', des: 'one pieces', url: 'https://feifan-xl.github.io/'  ,group:'pro4'}
    ]
};
