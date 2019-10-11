(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{193:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var r=a(202),n=a.n(r),i=(window.GLOBAL,function(){function e(){this.$request=void 0,this.dataMethodDefaults=void 0,this.$request=n.a.create({baseURL:"http://10.10.5.237:8081",headers:{token:"1234","Content-Type":"application/json"}}),this.$request.interceptors.response.use(function(e){return e.data},function(e){return Promise.reject(e)})}return e.prototype.request=function(e,t,a){return this.$request.post("/"+e,{HEAD:{token:"1234"},BODY:t}).then(a)},e}())},204:function(e,t,a){"use strict";var r=a(15),n=a.n(r),i=a(193),c=function(e){return e},s=function(e){var t=e.HEAD,a=e.BODY;if("000"===t.CODE){var r=a.rows;r.forEach(function(e,t){e.key=t});var n=["orderNo","createTime","realName","payeeMobile","txnAmount","buyAmount","agentName","txnState"].map(function(e){var t={title:"",dataIndex:e,key:e};switch(e){case"orderNo":t.title="订单号";break;case"createTime":t.title="交易时间";break;case"realName":t.title="交易用户";break;case"payeeMobile":t.title="交易手机号";break;case"txnAmount":t.title="VIP金额(元)";break;case"buyAmount":t.title="VIP类型",t.render=function(e){switch(e){case 9e3:return"90天";case 15e3:return"180天";default:return""}};break;case"agentName":t.title="所属代理商";break;case"txnState":t.title="交易状态",t.render=function(e){switch(e){case 1:return"下单成功";case 2:return"交易中";case 3:return"交易成功";case 4:return"冲正成功";case 10:return"交易失败";case 11:return"冲正失败";default:return""}}}return t});e.BODY.header=n,e.BODY.rows=r}return e},o=function(e){var t=e.HEAD,a=e.BODY;if("000"===t.CODE){var r=a.rows;r.forEach(function(e,t){e.key=t});var n=["orderNo","createTime","realName","payeeMobile","bindSn","txnAmount","txnType","agentName","txnState"].map(function(e){var t={title:"",dataIndex:e,key:e};switch(e){case"orderNo":t.title="订单号";break;case"createTime":t.title="交易时间";break;case"realName":t.title="交易用户";break;case"payeeMobile":t.title="交易手机号";break;case"bindSn":t.title="序列号";break;case"txnAmount":t.title="交易金额(元)";break;case"txnType":t.title="交易类型",t.render=function(e){switch(e){case 1:return"刷卡";case 2:return"NFC";case 3:return"QRCODE";default:return""}};break;case"agentName":t.title="所属代理商";break;case"txnState":t.title="交易状态\t",t.render=function(e){switch(e){case 1:return"下单成功";case 2:return"交易中";case 3:return"交易成功";case 4:return"冲正成功";case 10:return"交易失败";case 11:return"冲正失败";default:return""}}}return t});e.BODY.header=n,e.BODY.rows=r}return e},l=function(e){var t=e.HEAD,a=e.BODY;if("000"===t.CODE){var r=a.rows;r.forEach(function(e,t){e.key=t});var n=["orderNo","createTime","realName","payeeMobile","txnAmount","agentName","txnState"].map(function(e){var t={title:"",dataIndex:e,key:e};switch(e){case"orderNo":t.title="订单号";break;case"createTime":t.title="交易时间";break;case"realName":t.title="交易用户";break;case"payeeMobile":t.title="交易手机号";break;case"txnAmount":t.title="还款金额(元)";break;case"agentName":t.title="所属代理商";break;case"txnState":t.title="交易状态",t.render=function(e){switch(e){case 1:return"下单成功";case 2:return"交易中";case 3:return"交易成功";case 4:return"冲正成功";case 10:return"交易失败";case 11:return"冲正失败";default:return""}}}return t});e.BODY.header=n,e.BODY.rows=r}return e},u=function(e){var t=e.HEAD,a=e.BODY;if("000"===t.CODE){var r=a.rows;r.forEach(function(e,t){e.key=t});var n=["orderNo","createTime","bindSn","profitType","realName","mobile","shareAmount","toPrice","agentName"].map(function(e){var t={title:"",dataIndex:e,key:e};switch(e){case"orderNo":t.title="订单号";break;case"createTime":t.title="返现时间";break;case"bindSn":t.title="序列号";break;case"profitType":t.title="返现类型",t.render=function(e){switch(e){case 1:return"激活返现";case 2:return"VIP返现";case 3:return"活动返现";default:return""}};break;case"realName":t.title="用户姓名";break;case"mobile":t.title="手机号";break;case"shareAmount":t.title="返现金额(元)";break;case"toPrice":t.title="抵扣金额(元)";break;case"agentName":t.title="所属代理商"}return t});e.BODY.header=n,e.BODY.rows=r}return e},m=function(e){var t=e.HEAD,a=e.BODY;if("000"===t.CODE){var r=a.rows;r.forEach(function(e,t){e.key=t});var n=["withdrawId","orderNo","createTime","agentName","mobile","amount","fee","actualAmount","payBankNo","payTime","state"].map(function(e){var t={title:"",dataIndex:e,key:e};switch(e){case"withdrawId":t.title="出款id";break;case"orderNo":t.title="订单号";break;case"createTime":t.title="申请时间";break;case"agentName":t.title="用户姓名";break;case"mobile":t.title="手机号";break;case"amount":t.title="提现金额(元)";break;case"fee":t.title="手续费(元)";break;case"actualAmount":t.title="实际到账金额(元)";break;case"payBankNo":t.title="到账银行卡";break;case"payTime":t.title="付款时间";break;case"state":t.title="状态",t.render=function(e){switch(e){case 1:return"处理中";case 2:return"清算中";case 3:return"成功";case 10:return"失败";default:return""}}}return t});e.BODY.header=n,e.BODY.rows=r}return e},d=function(e){var t=e.HEAD,a=e.BODY;if("000"===t.CODE){var r=a.rows;r.forEach(function(e,t){e.key=t});var n=["orderNo","createTime","sn","txnType","realName","mobile","agentName","agentMobile","txnAmount","shareAmount","profitState"].map(function(e){var t={title:"",dataIndex:e,key:e};switch(e){case"orderNo":t.title="订单号";break;case"createTime":t.title="交易时间";break;case"sn":t.title="序列号";break;case"txnType":t.title="交易类型",t.render=function(e){switch(e){case 1:return"刷卡";case 2:return"NFC";case 3:return"QRCODE";default:return""}};break;case"realName":t.title="交易用户姓名";break;case"mobile":t.title="交易用户手机号";break;case"agentName":t.title="分润用户";break;case"agentMobile":t.title="分润用户手机号";break;case"txnAmount":t.title="交易金额(元)";break;case"shareAmount":t.title="分润金额(元)";break;case"profitState":t.title="分润状态",t.render=function(e){switch(e){case 1:return"未分润";case 10:return"已分润";default:return""}}}return t});e.BODY.header=n,e.BODY.rows=r}return e},h=function(e){var t=e.HEAD,a=e.BODY;if("000"===t.CODE){var r=a.rows;r.forEach(function(e,t){e.key=t});var n=["versionId","versionNum","url","isForced","record","createTime","intVersionNum","versionType"].map(function(e){var t={title:"",dataIndex:e,key:e};switch(e){case"versionId":t.title="ID";break;case"versionNum":t.title="版本号";break;case"url":t.title="更新地址";break;case"isForced":t.title="是否强制更新",t.render=function(e){switch(e){case 1:return"强制更新";case 10:return"不强制更新";default:return""}};break;case"record":t.title="描述";break;case"createTime":t.title="添加时间";break;case"intVersionNum":t.title="内部版本号";break;case"versionType":t.title="类型",t.render=function(e){return"1"==e?"ios":"2"==e?"安卓":void 0}}return t});e.BODY.header=n,e.BODY.rows=r}return e},p=function(e){function t(){return e.apply(this,arguments)||this}n()(t,e);var a=t.prototype;return a.ORD_003=function(e){return this.request("ORD_003",e,o)},a.ORD_002=function(e){return this.request("ORD_002",e,s)},a.ORD_001=function(e){return this.request("ORD_001",e,l)},a.ORD_004=function(e){return this.request("ORD_004",e,d)},a.ORD_005=function(e){return this.request("ORD_005",e,u)},a.ORD_006=function(e){return this.request("ORD_006",e,m)},a.ORD_007=function(e){return this.request("ORD_007",e,c)},a.SYS_006=function(e){return this.request("SYS_006",e,h)},a.SYS_005=function(e){return this.request("SYS_005",e,c)},t}(i.a);t.a=new p},464:function(e,t,a){"use strict";a.r(t);var r=a(15),n=a.n(r),i=a(32),c=a(1),s=(a(197),a(200)),o=(a(191),a(189)),l=(a(181),a(187)),u=(a(101),a(178)),m=(a(182),a(188)),d=(a(183),a(190)),h=(a(179),a(180)),p=a(184),b=a.n(p),f=(a(185),a(192)),k=a(177),v=a.n(k),g=a(186),D=a.n(g),w=(a(195),a(194)),y=a(204),E=w.a.Option,C=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).searchParam={currentPage:1,pageSize:10},t.state={header:[],items:[],visible:!1,modalLoading:!1,btnDisabled:!1,tableLoading:!1,pagination:{total:0,current:0,pageSize:t.searchParam.size},currentItem:{}},t.addSure=function(){t.setState({visible:!0})},t.handleCancel=function(e){t.setState({visible:!1})},t.searchData=D()(b.a.mark(function e(){var a,r,n,i,c,s,o,l;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({tableLoading:!0}),e.next=3,y.a.SYS_006(t.searchParam);case 3:a=e.sent,r=a.HEAD,n=a.BODY,i=r.MSG,"000"===r.CODE?(c=n.header,s=n.rows,o=n.total,(l=v()({},t.state.pagination)).total=o,t.setState({header:c,items:s,tableLoading:!1,pagination:l})):f.a.error(i);case 8:case"end":return e.stop()}},e)})),t.handleOk=D()(b.a.mark(function e(){var a,r,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({modalLoading:!0}),e.next=3,y.a.SYS_005(t.state.currentItem);case 3:a=e.sent,r=a.HEAD,a.BODY,n=r.MSG,"000"===r.CODE?(f.a.success("添加成功"),t.setState({visible:!1}),t.searchData(),t.setState({modalLoading:!1})):f.a.error(n);case 8:case"end":return e.stop()}},e)})),t.handleChangeParam=function(e){return function(a){var r=Object.assign({},t.state.currentItem);switch(e){case"isForced":case"versionType":console.log("change value "+e+":"+a),r[e]=a,t.setState({currentItem:r});break;default:console.log("change value "+e+":"+a.target.value),r[e]=a.target.value,t.setState({currentItem:r})}}},t.handleTableChange=function(e){t.searchParam.currentPage=e.current,t.setState({pagination:e},function(){t.searchData()})},t.handleChange=function(e){return function(a){console.log("change value "+e+":"+a.target.value),t.searchParam[e]=a.target.value}},t}n()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.searchData()},a.render=function(){var e=this.state,t=e.header,a=e.items,r=e.tableLoading,n=e.pagination;return React.createElement(c.Fragment,null,React.createElement(l.a,null,React.createElement(m.a,{span:8},React.createElement(d.a.Item,{label:"手机号",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(h.a,{placeholder:"请输入手机号",onChange:this.handleChange("mobile")}))),React.createElement(m.a,{span:8},React.createElement(d.a.Item,{label:"名称",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(h.a,{placeholder:"请输入名称",onChange:this.handleChange("agentName")}))),React.createElement(m.a,{span:8},React.createElement(u.a,{type:"primary",style:{marginTop:4,position:"absolute",right:0},onClick:this.searchData},"查询"),React.createElement(u.a,{type:"primary",style:{marginTop:4,position:"absolute",right:80},onClick:this.addSure},"添加"))),React.createElement(o.a,{columns:t,onChange:this.handleTableChange,pagination:n,loading:r,dataSource:a,scroll:{x:2e3},size:"middle"}),this.renderaddModal())},a.renderaddModal=function(){var e=this.state,t=e.visible,a=(e.header,e.modalLoading),r=(e.items,e.tableLoading,e.pagination,e.policy,e.policyLoading,e.btnLoading,e.currentItem),n=void 0===r?{}:r,i=n.versionNum,c=void 0===i?"":i,o=n.url,l=void 0===o?"":o,m=n.record,p=void 0===m?"":m,b=n.intVersionNum,f=void 0===b?"":b;return React.createElement(s.a,{title:"新增版本",visible:t,onOk:this.handleOk,destroyOnClose:!0,onCancel:this.handleCancel,width:1e3,footer:[React.createElement(u.a,{key:"back",onClick:this.handleCancel},"取消"),React.createElement(u.a,{key:"submit",type:"primary",loading:a,onClick:this.handleOk},"确定添加")]},React.createElement(d.a.Item,{label:"版本号",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(h.a,{value:c,onChange:this.handleChangeParam("versionNum"),style:{width:300}})),React.createElement(d.a.Item,{label:"更新地址",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(h.a,{value:l,onChange:this.handleChangeParam("url"),style:{width:300}})),React.createElement(d.a.Item,{label:"是否强制更新",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(w.a,{style:{width:300},onChange:this.handleChangeParam("isForced")},React.createElement(E,{value:"1"},"强制更新"),React.createElement(E,{value:"10"},"不强制更新"))),React.createElement(d.a.Item,{label:"描述",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(h.a,{value:p,onChange:this.handleChangeParam("record"),style:{width:300}})),React.createElement(d.a.Item,{label:"内部版本号",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(h.a,{value:f,onChange:this.handleChangeParam("intVersionNum"),style:{width:300}})),React.createElement(d.a.Item,{label:"类型",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(w.a,{style:{width:300},onChange:this.handleChangeParam("versionType")},React.createElement(E,{value:"1"},"ios"),React.createElement(E,{value:"2"},"安卓"))))},t}(c.Component);a.d(t,"default",function(){return O});var O=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.match;return React.createElement("div",null,React.createElement(i.Switch,null,React.createElement(i.Route,{path:e.url+"/appManagement",component:function(e){return React.createElement(C,e)}})))},t}(c.Component)}}]);