(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{193:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(202),r=a.n(n),i=(window.GLOBAL,function(){function e(){this.$request=void 0,this.dataMethodDefaults=void 0,this.$request=r.a.create({baseURL:"http://10.10.5.237:8081",headers:{token:"1234","Content-Type":"application/json"}}),this.$request.interceptors.response.use(function(e){return e.data},function(e){return Promise.reject(e)})}return e.prototype.request=function(e,t,a){return this.$request.post("/"+e,{HEAD:{token:"1234"},BODY:t}).then(a)},e}())},205:function(e,t,a){"use strict";var n=a(177),r=a.n(n),i=a(15),c=a.n(i),o=a(193),s=function(e){return e},l=function(e){var t=e.HEAD,a=e.BODY;if("000"===t.CODE){var n=a.rows;n.forEach(function(e,t){e.key=t});var r=["agentLevel","agentName","mobile","idCard","createTime","invitationCode","parentName","sumAgent","sumSn","sumActivation","sumAmount","state"].map(function(e){var t={title:"",dataIndex:e,key:e};switch(e){case"agentLevel":t.title="代理商等级";break;case"agentName":t.title="名称";break;case"mobile":t.title="手机号";break;case"idCard":t.title="身份证号";break;case"createTime":t.title="加入时间";break;case"invitationCode":t.title="邀请码";break;case"parentName":t.title="上级代理";break;case"sumAgent":t.title="渠道数";break;case"sumSn":t.title="终端数";break;case"sumActivation":t.title="激活数";break;case"sumAmount":t.title="总交易";break;case"state":t.title="状态",t.render=function(e){switch(e){case 1:return"正常";case 10:return"已冻结";default:return""}}}return t});e.BODY.header=r,e.BODY.rows=n}return e},u=function(e){var t=e.HEAD,a=e.BODY;if("000"===t.CODE){var n=a.rows;n.forEach(function(e,t){e.key=t});var r=["messageId","type","toTarget","title","content","createTime"].map(function(e){var t={title:"",dataIndex:e,key:e};switch(e){case"messageId":t.title="id";break;case"type":t.title="类型",t.render=function(e){switch(e){case 1:return"公告";case 2:return"推送消息";default:return""}};break;case"toTarget":t.title="用户类型",t.render=function(e){switch(e){case 1:return"商户";case 2:return"代理商";default:return""}};break;case"title":t.title="标题";break;case"content":t.title="内容";break;case"createTime":t.title="创建时间"}return t});e.BODY.header=r,e.BODY.rows=n}return e},p=function(e){function t(){return e.apply(this,arguments)||this}c()(t,e);var a=t.prototype;return a.AGT_001=function(e){return this.request("AGT_001",e,l)},a.AGT_007=function(e){return this.request("AGT_007",e,s)},a.AGT_003=function(e){return this.request("AGT_003",e,s)},a.AGT_005=function(e){return this.request("AGT_005",r()({},e,{type:2}),s)},a.AGT_006=function(e){return this.request("AGT_006",e,s)},a.AGT_010=function(e){return this.request("AGT_010",e,s)},a.AGT_008=function(e){return this.request("AGT_008",e,s)},a.AGT_014=function(e){return this.request("AGT_014",e,s)},a.AGT_009=function(e){return this.request("AGT_009",e,s)},a.ACT_001=function(e){return this.request("ACT_001",e,s)},a.AGT_012=function(e){return this.request("AGT_012",e,s)},a.AGT_013=function(e){return this.request("AGT_013",e,s)},a.MSG_002=function(e){return this.request("MSG_002",e,u)},a.MSG_001=function(e){return this.request("MSG_001",e,s)},t}(o.a);t.a=new p},465:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a.n(n),i=a(32),c=a(1),o=(a(103),a(76)),s=a(221),l=a.n(s),u=(a(197),a(200)),p=(a(211),a(220)),m=(a(278),a(454)),d=(a(191),a(189)),h=(a(181),a(187)),b=(a(182),a(188)),g=(a(183),a(190)),v=(a(179),a(180)),f=(a(101),a(178)),C=a(177),R=a.n(C),y=a(184),E=a.n(y),S=(a(185),a(192)),k=a(186),w=a.n(k),A=(a(195),a(194)),I=a(205),x=A.a.Option,P=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).searchParam={mobile:"",agentName:"",currentPage:"1",pageSize:"10"},t.storageParam={policyId:""},t.state={policy:[],policy1:[],policy2:[],paybank:[],header:[],items:[],modalLoading:!1,tableLoading:!1,policyLoading:!1,visible:!1,componentModalVisible:!1,discountModalVisible:!1,pagination:{total:0,current:0,pageSize:t.searchParam.size},currentItem:{},curItem:{},componentItem:{},discountItem:{},btnDisabled:!0,agentRate:"",activationPrice:"",vip90Price:"",vip150Price:"",activityPrice:"",agentFee:"",txnFee:"",agentId:"",CST_RATE_MIN:"",CST_RATE_MAX:"",CST_FEE_MIN:"",CST_FEE_MAX:"",jhCashbackAmount:"",hdCashbackAmount:"",cashbackAmount:"",txnRate:"",txnRate1:"",activationRate:"",vipRate:"",activityRate:"",totalData:[],cityCode:"",bankName:"",paybankNo:"",bankLogUrl:""},t.addModal=function(){t.setState({visible:!0})},t.handleOk=function(e){console.log(e),setTimeout(function(){t.setState({modalLoading:!1,componentModalVisible:!1})},3e3)},t.addSure=w()(E.a.mark(function e(){var a,n,r,i,c,o,s;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.state.curItem,"{}"!=JSON.stringify(a)){e.next=4;break}return S.a.info("提交不能为空"),e.abrupt("return",!1);case 4:return t.setState({modalLoading:!0}),n={paybankNo:t.state.paybankNo,bankLogUrl:t.state.bankLogUrl,bankName:t.state.bankName},r=t.state.curItem,i={},Object.assign(i,n,r),e.next=11,I.a.AGT_009(i);case 11:c=e.sent,o=c.HEAD,c.BODY,s=o.MSG,"000"===o.CODE?(S.a.success("添加成功"),t.setState({visible:!1}),t.setState({modalLoading:!1}),t.state.curItem="",t.searchData()):(S.a.error(s),t.setState({modalLoading:!1}));case 16:case"end":return e.stop()}},e)})),t.componentModalCancel=function(e){console.log(e),t.setState({componentModalVisible:!1}),t.searchData()},t.handleCancelA=function(e){console.log(e),t.setState({visible:!1}),t.searchData()},t.searchPolicy=w()(E.a.mark(function e(){var a,n,r,i,c;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.AGT_007();case 2:a=e.sent,n=a.HEAD,r=a.BODY,i=n.MSG,"000"===n.CODE?(c=r.rows,t.setState({policy:c})):S.a.error(i);case 7:case"end":return e.stop()}},e)})),t.searchPolicy1=w()(E.a.mark(function e(){var a,n,r,i,c,o;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.AGT_013();case 2:if(a=e.sent,n=a.HEAD,r=a.BODY,i=n.MSG,"000"===n.CODE){for(c=r.res,o=0;o<c.length;o++)t.setState({bankLogUrl:c[o].bankLogUrl});t.setState({policy1:c})}else S.a.error(i);case 7:case"end":return e.stop()}},e)})),t.searchPolicy2=w()(E.a.mark(function e(){var a,n,r,i,c,o;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={cityCode:t.state.cityCode,bankName:t.state.bankName},e.next=3,I.a.AGT_012(a);case 3:n=e.sent,r=n.HEAD,i=n.BODY,c=r.MSG,"000"===r.CODE?(o=i.subBranchList,t.setState({policy2:o})):S.a.error(c);case 8:case"end":return e.stop()}},e)})),t.getItem=function(e){var a={};return t.state.items.forEach(function(t){t.agentId===e&&(a=t)}),a},t.searchData=w()(E.a.mark(function e(){var a,n,r,i,c,o,s,l;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({tableLoading:!0}),e.next=3,I.a.AGT_001(t.searchParam);case 3:a=e.sent,n=a.HEAD,r=a.BODY,i=n.MSG,"000"===n.CODE?(c=r.header,o=r.rows,s=r.total,(l=R()({},t.state.pagination)).total=s,c.push({title:"操作",dataIndex:"agentId",key:"agentId",fixed:"right",width:380,render:function(e){var a=t.getItem(e);return React.createElement("div",{className:"btn-group"},React.createElement(f.a,{size:"small",onClick:t.freezes(a)},10===a.state?"解冻":"冻结"),React.createElement(f.a,{style:{marginLeft:10},size:"small",onClick:t.setParam(a)},"设置分润参数"),React.createElement(f.a,{style:{marginLeft:10},size:"small",onClick:t.getParam(a)},"设置抵扣参数"),React.createElement(f.a,{style:{marginLeft:10},size:"small",onClick:t.resetPwd(a)},"重置密码"))}}),t.setState({header:c,items:o,tableLoading:!1,pagination:l})):S.a.error(i);case 8:case"end":return e.stop()}},e)})),t.freezes=function(e){return w()(E.a.mark(function a(){var n,r,i,c,o;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.setState({tableLoading:!0}),n=e.state,r=e.mobile,a.next=4,I.a.AGT_003({mobile:r,state:10===n?1:10});case 4:i=a.sent,c=i.HEAD,o=c.MSG,"000"===c.CODE?(S.a.success("成功"),t.searchData()):S.a.error(o);case 8:case"end":return a.stop()}},a)}))},t.setParam=function(e){return function(){if(1===e.agentLevel){var a=e.agentId;t.setState({componentModalVisible:!0,componentItem:{agentId:a}})}else S.a.info("您只能给一级代理商设置分润参数!")}},t.loadPolicy=function(){var e=w()(E.a.mark(function e(a){var n,r,i,c,o,s,l,u,p,m,d,h,b;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({policyLoading:!0}),n=t.state.componentItem.agentId,r=void 0===n?"":n,e.next=4,I.a.AGT_008({agentId:r,policyId:a});case 4:if(i=e.sent,c=i.HEAD,o=i.BODY,s=c.MSG,"000"===c.CODE){for(l=o.AgentPolicyPo,u=o.customerFee,p=o.PolicyConfigPo,m=o.VipCashBack,t.setState({CST_RATE_MIN:(100*u.CST_RATE_MIN).toFixed(2)}),t.setState({CST_RATE_MAX:(100*u.CST_RATE_MAX).toFixed(2)}),t.setState({CST_FEE_MIN:(u.CST_FEE_MIN/100).toFixed(2)}),t.setState({CST_FEE_MAX:(u.CST_FEE_MAX/100).toFixed(2)}),t.setState({jhCashbackAmount:p.jhCashbackAmount/100}),t.setState({hdCashbackAmount:p.hdCashbackAmount/100}),d=0;d<m.length;d++)9e3===m[d].buyAmount&&t.setState({cashbackAmount:m[d].cashbackAmount/100}),15e3===m[d].buyAmount&&t.setState({cashbackAmount1:m[d].cashbackAmount/100});l?(t.setState({agentRate:(100*l.agentRate).toFixed(3)}),t.setState({txnRate:(100*l.txnRate).toFixed(3)}),t.setState({activationPrice:l.activationPrice/100}),t.setState({vip90Price:l.vip90Price/100}),t.setState({vip150Price:l.vip150Price/100}),t.setState({activityPrice:l.activityPrice/100}),t.setState({agentFee:l.agentFee/100}),t.setState({txnFee:l.txnFee/100}),t.setState({policyLoading:!1,btnDisabled:!0})):(t.setState({agentRate:""}),t.setState({txnRate:""}),t.setState({activationPrice:""}),t.setState({vip90Price:""}),t.setState({vip150Price:""}),t.setState({activityPrice:""}),b={agentId:r,policyId:a},t.setState({componentItem:b,policyLoading:!1,btnDisabled:!1}),t.setState(((h={agentId:r}).agentId=r,h)))}else S.a.error(s);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t.loadPolicy1=function(){var e=w()(E.a.mark(function e(a){var n,r,i,c,o,s;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({policyLoading:!1}),n={agentId:a.agentId},e.next=4,I.a.AGT_014(n);case 4:r=e.sent,i=r.HEAD,c=r.BODY,o=i.MSG,"000"===i.CODE?(s=c.res)?(t.setState({txnRate1:100*s.txnRate}),t.setState({activationRate:100*s.activationRate}),t.setState({vipRate:100*s.vipRate}),t.setState({activityRate:100*s.activityRate}),t.setState({btnDisabled:!0})):(t.setState({txnRate1:""}),t.setState({activationRate:""}),t.setState({vipRate:""}),t.setState({activityRate:""}),t.setState({btnDisabled:!1})):S.a.error(o);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t.componentSure=w()(E.a.mark(function e(){var a,n,r,i,c;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=t.state.agentRate){e.next=3;break}return S.a.info("输入代理商费率"),e.abrupt("return",!1);case 3:if(""!=t.state.txnRate){e.next=6;break}return S.a.info("输入用户费率"),e.abrupt("return",!1);case 6:if(!(t.state.agentRate>t.state.txnRate)){e.next=9;break}return S.a.info("代理商费率必须小于用户费率"),e.abrupt("return",!1);case 9:if(""!=t.state.activationPrice){e.next=12;break}return S.a.info("输入激活返现"),e.abrupt("return",!1);case 12:if(""!=t.state.activityPrice){e.next=15;break}return S.a.info("输入活动返现"),e.abrupt("return",!1);case 15:if(""!=t.state.vip90Price){e.next=18;break}return S.a.info("输入vip返现"),e.abrupt("return",!1);case 18:if(""!=t.state.vip150Price){e.next=21;break}return S.a.info("输入vip返现"),e.abrupt("return",!1);case 21:return a={txnRate:(t.state.txnRate/100).toFixed(5),txnFee:100*t.state.txnFee,agentRate:(t.state.agentRate/100).toFixed(5),agentFee:100*t.state.agentFee,activationPrice:100*t.state.activationPrice,activityPrice:100*t.state.activityPrice,vip90Price:100*t.state.vip90Price,vip150Price:100*t.state.vip150Price,agentId:t.state.agentId},n=t.storageParam,r={},Object.assign(r,a,n),t.setState({modalLoading:!0}),e.next=28,I.a.AGT_006(r);case 28:i=e.sent,c=i.HEAD,i.BODY,c.MSG,"000"===c.CODE?(S.a.success("提交成功"),t.setState({componentModalVisible:!1}),t.setState({agentFee:""}),t.setState({modalLoading:!1}),t.searchData()):(S.a.error("数据格式有误，请检查"),t.setState({modalLoading:!1}));case 33:case"end":return e.stop()}},e)})),t.getParam=function(e){return function(){if(t.loadPolicy1(e),1===e.agentLevel){t.setState({tableLoading:!0});var a=e.agentId;t.setState({discountModalVisible:!0,discountItem:{agentId:a}}),t.setState({agentId:a})}else S.a.info("您只能给一级代理商设置分润参数!")}},t.discountSure=w()(E.a.mark(function e(){var a,n,r,i,c;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=/^\d+$|^\d+[.]?\d+$/,""!=t.state.txnRate1){e.next=4;break}return S.a.info("请输入分润"),e.abrupt("return",!1);case 4:if(a.test(t.state.txnRate1)){e.next=7;break}return S.a.info("只能输入数字"),e.abrupt("return",!1);case 7:if(!(t.state.txnRate1>100)){e.next=10;break}return S.a.info("分润费率最大值100"),e.abrupt("return",!1);case 10:if(""!=t.state.activationRate){e.next=13;break}return S.a.info("请输入激活返现"),e.abrupt("return",!1);case 13:if(a.test(t.state.activationRate)){e.next=16;break}return S.a.info("只能输入数字"),e.abrupt("return",!1);case 16:if(!(t.state.activationRate>100)){e.next=19;break}return S.a.info("激活返现费率最大值100"),e.abrupt("return",!1);case 19:if(""!=t.state.vipRate){e.next=22;break}return S.a.info("请输入VIP返现"),e.abrupt("return",!1);case 22:if(a.test(t.state.vipRate)){e.next=25;break}return S.a.info("只能输入数字"),e.abrupt("return",!1);case 25:if(!(t.state.vipRate>100)){e.next=28;break}return S.a.info("VIP返现费率最大值100"),e.abrupt("return",!1);case 28:if(""!=t.state.activityRate){e.next=31;break}return S.a.info("请输入活动返现"),e.abrupt("return",!1);case 31:if(a.test(t.state.activityRate)){e.next=34;break}return S.a.info("只能输入数字"),e.abrupt("return",!1);case 34:if(!(t.state.activityRate>100)){e.next=37;break}return S.a.info("活动返现费率最大值100"),e.abrupt("return",!1);case 37:return n={txnRate:t.state.txnRate1/100,activationRate:t.state.activationRate/100,vipRate:t.state.vipRate/100,activityRate:t.state.activityRate/100,agentId:t.state.agentId},e.next=40,I.a.AGT_010(n);case 40:r=e.sent,i=r.HEAD,r.BODY,c=i.MSG,"000"===i.CODE?(S.a.success("设置成功"),t.setState({discountModalVisible:!1}),t.searchData()):S.a.error(c);case 45:case"end":return e.stop()}},e)})),t.discountModalCancel=function(){t.setState({discountModalVisible:!1}),t.searchData()},t.resetPwd=function(e){return w()(E.a.mark(function a(){var n,r,i,c;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.setState({tableLoading:!0}),n=e.mobile,a.next=4,I.a.AGT_005({mobile:n});case 4:r=a.sent,i=r.HEAD,r.BODY,c=i.MSG,"000"===i.CODE?(S.a.success("密码重置成功"),t.searchData()):S.a.error(c);case 9:case"end":return a.stop()}},a)}))},t.handleChange=function(e){return function(a){console.log("change value "+e+":"+a.target.value),t.searchParam[e]=a.target.value}},t.handleTableChange=function(e){t.searchParam.currentPage=e.current,t.setState({pagination:e},function(){t.searchData()})},t.handleChangeParam=function(e){return function(a){var n=Object.assign({},t.state.curItem);switch(e){case"policyId":console.log("change value "+e+":"+a),n[e]!==a&&t.loadPolicy(a),n[e]=a;break;default:console.log("change value "+e+":"+a.target.value),n[e]=a.target.value,t.setState({curItem:n})}}},t.componentParam=function(e){return function(a){var n=Object.assign({},t.state.componentItem);switch(e){case"policyId":console.log("change value "+e+":"+a),n[e]!==a&&t.loadPolicy(a),t.storageParam[e]=a,n[e]=a,t.setState({componentItem:n});break;default:console.log("change value "+e+":"+a.target.value),n[e]=a.target.value,t.setState({componentItem:n})}}},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.searchData(),this.searchPolicy(),this.searchPolicy1(),this.init()},a.change=function(e){console.log(e.target.value);var t=e.target.value;this.setState({agentFee:e.target.value}),0==t?this.setState({txnFee:0}):this.setState({txnFee:3})},a.init=function(){var e=this;fetch("http://localhost:9000/public/city.json",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(t){var a=t.data,n=[];for(var r in a){var i=a[r].name,c=a[r].code,o=a[r].value,s=[];for(var l in o){var u={value:o[l].code,label:o[l].name};s.push(u)}var p={value:c,label:i,children:s};n.push(p),e.setState({totalData:n})}})},a.render=function(){var e=this.state,t=e.header,a=e.items,n=e.tableLoading,r=e.pagination,i=(e.modalLoading,e.currentItem),o=void 0===i?{}:i;e.policyLoading,e.policy,o.license,o.registration,o.personName,o.idCard,o.accountName,o.account,o.loginAccount,o.initialPassword,o.branch;return React.createElement(c.Fragment,null,React.createElement(h.a,null,React.createElement(b.a,{span:8},React.createElement(g.a.Item,{label:"手机号",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{placeholder:"请输入手机号",onChange:this.handleChange("mobile")}))),React.createElement(b.a,{span:8},React.createElement(g.a.Item,{label:"代理商名称",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{placeholder:"请输入代理商名称",onChange:this.handleChange("agentName")}))),React.createElement(b.a,{span:8},React.createElement(f.a,{type:"primary",style:{marginTop:4,position:"absolute",right:0},onClick:this.searchData},"查询"),React.createElement(f.a,{type:"primary",style:{marginTop:4,position:"absolute",right:80},onClick:this.addModal},"添加"))),React.createElement(d.a,{columns:t,onChange:this.handleTableChange,pagination:r,loading:n,dataSource:a,scroll:{x:2e3},size:"middle"}),this.renderModal(),this.renderaddModal(),this.renderdiscountModal())},a.renderaddModal=function(){var e=this.state,t=e.visible,a=e.modalLoading,n=(e.policy,e.policy1),r=e.policy2,i=e.policyLoading,c=e.curItem,o=void 0===c?{}:c,s=(e.btnDisabled,e.paybank,e.totalData),l=(e.cityCode,e.bankName,e.bankLogUrl,o.agentName),d=void 0===l?"":l,h=o.registrationNumber,b=void 0===h?"":h,C=o.legalPersonName,R=void 0===C?"":C,y=o.legalPersonCard,E=void 0===y?"":y,S=o.toPublicName,k=void 0===S?"":S,w=o.account,I=void 0===w?"":w,P=o.mobile,T=void 0===P?"":P,_=o.password,D=void 0===_?"":_,M=o.parentAgentId,G=void 0===M?"":M,L=o.parentFiliale,O=void 0===L?"":L;o.paybankId;return React.createElement(u.a,{title:"新增代理商(都为必填项)",visible:t,onOk:this.handleOkA,onCancel:this.handleCancelA,width:1e3,footer:[React.createElement(f.a,{key:"back",onClick:this.handleCancelA},"取消"),React.createElement(f.a,{key:"submit",type:"primary",loading:a,onClick:this.addSure},"确定添加")]},React.createElement(p.a,{tip:"加载中...",spinning:i},React.createElement(g.a.Item,{label:"营业执照名称",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{value:d,onChange:this.handleChangeParam("agentName"),style:{width:300}})),React.createElement(g.a.Item,{label:"注册号",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{value:b,onChange:this.handleChangeParam("registrationNumber"),style:{width:300}})),React.createElement(g.a.Item,{label:"法人姓名",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{value:R,onChange:this.handleChangeParam("legalPersonName"),style:{width:300}})),React.createElement(g.a.Item,{label:"法人身份证",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{maxLength:18,value:E,onChange:this.handleChangeParam("legalPersonCard"),style:{width:300}})),React.createElement(g.a.Item,{label:"(对公账户信息)户名",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{value:k,onChange:this.handleChangeParam("toPublicName"),style:{width:300}})),React.createElement(g.a.Item,{label:"选择开户行",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(A.a,{style:{width:300},onChange:function(e){var t=e;console.log(t),this.setState({bankName:t})}.bind(this)},n.map(function(e,t){e.bankLogId;var a=e.bankName;return React.createElement(x,{key:t,value:a},a)}))),React.createElement(g.a.Item,{label:"选择城市",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(m.a,{options:s,onChange:function(e){e[0];var t=e[1];this.setState({cityCode:t})}.bind(this),changeOnSelect:!0,style:{width:300}})),React.createElement(g.a.Item,{label:"支行联行号",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(A.a,{style:{width:300},onChange:function(e){var t=e;this.setState({paybankNo:t})}.bind(this),onFocus:this.searchPolicy2},r.map(function(e,t){var a=e.paybankNo,n=e.accbankNo;return React.createElement(x,{key:t,value:a},n)}))),React.createElement(g.a.Item,{label:"账号",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{value:I,onChange:this.handleChangeParam("account"),style:{width:300}})),React.createElement(g.a.Item,{label:"登录账号",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{value:T,onChange:this.handleChangeParam("mobile"),style:{width:300}})),React.createElement(g.a.Item,{label:"初始密码",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{value:D,onChange:this.handleChangeParam("password"),style:{width:300}})),React.createElement(g.a.Item,{label:"所属机构名称",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{value:G,onChange:this.handleChangeParam("parentAgentId"),style:{width:300}})),React.createElement(g.a.Item,{label:"所属分公司",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{value:O,onChange:this.handleChangeParam("parentFiliale"),style:{width:300}}))))},a.renderModal=function(){var e=this,t=this.state,a=t.componentModalVisible,n=t.modalLoading,r=t.policy,i=t.policyLoading,c=t.componentItem,s=void 0===c?{}:c,m=t.btnDisabled,d=t.agentRate,h=t.txnRate,b=t.activationPrice,C=t.vip90Price,R=t.vip150Price,y=t.activityPrice,E=(t.agentFee,t.txnFee),S=t.CST_RATE_MIN,k=t.CST_RATE_MAX,w=t.CST_FEE_MIN,I=t.CST_FEE_MAX,P=t.jhCashbackAmount,T=t.hdCashbackAmount,_=t.cashbackAmount,D=t.cashbackAmount1;t.agentId;return l()(s),React.createElement(u.a,{visible:a,title:"设置分润参数",onOk:this.handleOk,onCancel:this.componentModalCancel,width:1e3,footer:[React.createElement(f.a,{key:"back",onClick:this.componentModalCancel},"取消"),React.createElement(f.a,{key:"submit",type:"primary",disabled:m,loading:n,onClick:this.componentSure},"确定")]},React.createElement(p.a,{tip:"加载中...",spinning:i},React.createElement(g.a.Item,{label:"政策",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(A.a,{style:{width:280},onChange:this.componentParam("policyId")},r.map(function(e,t){var a=e.policyId,n=e.name;return React.createElement(x,{key:t,value:a},n)}))),React.createElement(g.a.Item,{label:"代理商费率（刷卡支付）",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{id:"agentRate",type:"number",onChange:function(t){return e.setState({agentRate:t.target.value})},placeholder:"",value:d,style:{width:280}}),React.createElement(o.a,{title:"prompt text"},React.createElement("span",null,"费率范围是",S,"%~",k,"%")),React.createElement(v.a,{onChange:this.change.bind(this),value:this.state.agentFee,placeholder:"",style:{width:280}}),React.createElement(o.a,{title:"prompt text"},React.createElement("span",null,"范围是",w,"~",I,"元"))),React.createElement(g.a.Item,{label:"用户费率（刷卡支付）",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{type:"number",onChange:function(t){return e.setState({txnRate:t.target.value})},placeholder:"",value:h,style:{width:280}}),React.createElement(o.a,{title:"prompt text"},React.createElement("span",null,"费率范围是",S,"%~",k,"%")),React.createElement(v.a,{type:"number",id:"teshu",disabled:!0,onChange:function(t){return e.setState({txnFee:t.target.value})},placeholder:"",value:E,style:{width:280}})),React.createElement(g.a.Item,{label:"激活返现",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{type:"number",onChange:function(t){return e.setState({activationPrice:t.target.value})},value:b,style:{width:280}}),React.createElement(o.a,{title:"prompt text"},React.createElement("span",null,"范围是0~",P,"元"))),React.createElement(g.a.Item,{label:"VIP返现(90天)",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{type:"number",onChange:function(t){return e.setState({vip90Price:t.target.value})},value:C,style:{width:280}}),React.createElement(o.a,{title:"prompt text"},React.createElement("span",null,"范围是0~",_,"元"))),React.createElement(g.a.Item,{label:"VIP返现(150天)",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{type:"number",onChange:function(t){return e.setState({vip150Price:t.target.value})},value:R,style:{width:280}}),React.createElement(o.a,{title:"prompt text"},React.createElement("span",null,"范围是0~",D,"元"))),React.createElement(g.a.Item,{label:"活动返现",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{type:"number",onChange:function(t){return e.setState({activityPrice:t.target.value})},value:y,style:{width:280}}),React.createElement(o.a,{title:"prompt text"},React.createElement("span",null,"范围是0~",T,"元")))))},a.renderdiscountModal=function(){var e=this,t=this.state,a=t.discountModalVisible,n=(t.modalLoading,t.policy,t.policyLoading),r=t.discountItem,i=void 0===r?{}:r,c=t.btnDisabled,o=t.txnRate1,s=t.activationRate,m=t.vipRate,d=t.activityRate;t.agentId;return l()(i),React.createElement(u.a,{visible:a,title:"设置抵扣参数",onOk:this.handleOkB,onCancel:this.discountModalCancel,width:1e3,footer:[React.createElement(f.a,{key:"back",onClick:this.discountModalCancel},"取消"),React.createElement(f.a,{key:"submit",type:"primary",disabled:c,onClick:this.discountSure},"确定")]},React.createElement(p.a,{tip:"加载中...",spinning:n},React.createElement(g.a.Item,{label:"分润",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{type:"number",placeholder:"费率范围0～100",value:o,onChange:function(t){return e.setState({txnRate1:t.target.value})},style:{width:300}}),"%"),React.createElement(g.a.Item,{label:"激活返现",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{type:"number",placeholder:"费率范围0～100",value:s,onChange:function(t){return e.setState({activationRate:t.target.value})},style:{width:300}}),"%"),React.createElement(g.a.Item,{label:"VIP返现",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{type:"number",placeholder:"费率范围0～100",value:m,onChange:function(t){return e.setState({vipRate:t.target.value})},style:{width:300}}),"%"),React.createElement(g.a.Item,{label:"活动返现",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(v.a,{type:"number",placeholder:"费率范围0～100",value:d,onChange:function(t){return e.setState({activityRate:t.target.value})},style:{width:300}}),"%")))},t}(c.Component);a.d(t,"default",function(){return T});var T=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.match;return React.createElement("div",null,React.createElement(i.Switch,null,React.createElement(i.Route,{path:e.url+"/agentManagement",component:function(e){return React.createElement(P,e)}})))},t}(c.Component)}}]);