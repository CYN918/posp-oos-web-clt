(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{193:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(202),r=a.n(n),c=(window.GLOBAL,function(){function e(){this.$request=void 0,this.dataMethodDefaults=void 0,this.$request=r.a.create({baseURL:"http://localhost:8081/oos",headers:{token:"1234","Content-Type":"application/json"}}),this.$request.interceptors.response.use(function(e){return e.data},function(e){return Promise.reject(e)})}return e.prototype.request=function(e,t,a){return this.$request.post("/"+e,{HEAD:{token:"1234"},BODY:t}).then(a)},e}())},201:function(e,t,a){"use strict";var n=a(15),r=a.n(n),c=a(193),o=function(e){return e},i=function(e){var t=e.HEAD,a=e.BODY;if("000"===t.CODE){var n=a.rows;n.forEach(function(e,t){e.key=t});var r=["startSn","endSn","total","state","anentName","toAgentName","mobile","toMobile"].map(function(e){var t={title:"",dataIndex:e,key:e};switch(e){case"startSn":t.title="终端号始";break;case"endSn":t.title="终端号末";break;case"total":t.title="机具数量";break;case"state":t.title="终端状态",t.render=function(e){switch(e){case 1:return"下拨中";case 2:return"已下拨";case 10:return"已失效";default:return""}};break;case"anentName":t.title="划拨人";break;case"toAgentName":t.title="接收人";break;case"mobile":t.title="划拨人手机号";break;case"toMobile":t.title="接收人手机号"}return t});e.BODY.header=r,e.BODY.rows=n}return e},s=function(e){var t=e.HEAD,a=e.BODY;if("000"===t.CODE){var n=a.rows;n.forEach(function(e,t){e.key=t});var r=["prefix","sn15","random","secretKey","salt","factoryName","state"].map(function(e){var t={title:"",dataIndex:e,key:e};switch(e){case"prefix":t.title="前缀";break;case"sn15":t.title="序列号";break;case"random":t.title="随机位";break;case"secretKey":t.title="密钥";break;case"salt":t.title="盐钥";break;case"factoryName":t.title="厂商名称";break;case"state":t.title="状态",t.render=function(e){switch(e){case 1:return"已设置";case 10:return"未设置";default:return""}}}return t});e.BODY.header=r,e.BODY.rows=n}return e},l=function(e){var t=e.HEAD,a=e.BODY;if("000"===t.CODE){var n=a.rows;n.forEach(function(e,t){e.key=t});var r=["factoryId","factoryNo","factoryName","posModel","posName"].map(function(e){var t={title:"",dataIndex:e,key:e};switch(e){case"factoryId":t.title="厂商id";break;case"factoryNo":t.title="厂商编号";break;case"factoryName":t.title="厂商名称";break;case"posModel":t.title="支持终端型号";break;case"posName":t.title="终端名称"}return t});e.BODY.header=r,e.BODY.rows=n}return e},u=function(e){var t=e.HEAD,a=e.BODY;if("000"===t.CODE){var n=a.rows;n.forEach(function(e,t){e.key=t});var r=["policyActivationId","depositAmount","cashbackAmount","state","record"].map(function(e){var t={title:"",dataIndex:e,key:e};switch(e){case"policyActivationId":t.title="激活政策ID";break;case"depositAmount":t.title="押金金额(元)";break;case"cashbackAmount":t.title="返现金额(元)";break;case"state":t.title="状态",t.render=function(e){switch(e){case 1:return"上架";case 10:return"下架";default:return""}};break;case"record":t.title="描述"}return t});e.BODY.header=r,e.BODY.rows=n}return e},h=function(e){var t=e.HEAD,a=e.BODY;if("000"===t.CODE){var n=a.rows;n.forEach(function(e,t){e.key=t});var r=["policyActivityId","validDay","achieveAmount","state","cashbackAmount","record"].map(function(e){var t={title:"",dataIndex:e,key:e};switch(e){case"policyActivityId":t.title="活动返现政策ID";break;case"validDay":t.title="有效时间";break;case"achieveAmount":t.title="达标金额(元)";break;case"state":t.title="状态",t.render=function(e){switch(e){case 1:return"上架";case 10:return"下架";default:return""}};break;case"cashbackAmount":t.title="返现金额(元)";break;case"record":t.title="描述"}return t});e.BODY.header=r,e.BODY.rows=n}return e},d=function(e){var t=e.HEAD,a=e.BODY;if("000"===t.CODE){var n=a.rows;n.forEach(function(e,t){e.key=t});var r=["policyCouponId","achieveAmount","validDay","state","record"].map(function(e){var t={title:"",dataIndex:e,key:e};switch(e){case"policyCouponId":t.title="抵扣券ID";break;case"achieveAmount":t.title="面额(元)";break;case"validDay":t.title="有效天数(天)";break;case"state":t.title="状态",t.render=function(e){switch(e){case 1:return"上架";case 10:return"下架";default:return""}};break;case"record":t.title="描述"}return t});e.BODY.header=r,e.BODY.rows=n}return e},m=function(e){var t=e.HEAD,a=e.BODY;if("000"===t.CODE){var n=a.rows;n.forEach(function(e,t){e.key=t});var r=["buyAmount","validDay","rate","state","cashbackAmount","record"].map(function(e){var t={title:"",dataIndex:e,key:e};switch(e){case"buyAmount":t.title="购买金额(元)";break;case"validDay":t.title="有效时间(天)";break;case"rate":t.title="费率(%)";break;case"state":t.title="状态",t.render=function(e){switch(e){case 1:return"上架";case 10:return"下架";default:return""}};break;case"cashbackAmount":t.title="返现金额(元)";break;case"record":t.title="描述"}return t});e.BODY.header=r,e.BODY.rows=n}return e},p=function(e){var t=e.HEAD,a=e.BODY;if("000"===t.CODE){var n=a.jsonValues;n.forEach(function(e,t){e.key=t});var r=["startSn","endSn","total"].map(function(e){var t={title:"",dataIndex:e,key:e};switch(e){case"startSn":t.title="终端号始";break;case"endSn":t.title="终端号末";break;case"total":t.title="总数"}return t});e.BODY.header=r,e.BODY.rows=n}return e},g=function(e){var t=e.HEAD,a=e.BODY;if("000"===t.CODE){var n=a.rows;n.forEach(function(e,t){e.key=t});var r=["name","state","record","jhRecord","hdRecord","yhRecord"].map(function(e){var t={title:"",dataIndex:e,key:e};switch(e){case"name":t.title="政策名称";break;case"state":t.title="状态",t.render=function(e){switch(e){case 1:return"正常";case 10:return"下架";default:return""}};break;case"record":t.title="描述";break;case"jhRecord":t.title="激活描述";break;case"hdRecord":t.title="活动描述";break;case"yhRecord":t.title="优惠描述"}return t});e.BODY.header=r,e.BODY.rows=n}return e},b=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.POS_001=function(e){return this.request("POS_001",e,s)},a.POS_002=function(e){return this.request("POS_002",e,o)},a.POS_007=function(e){return this.request("POS_007",e,o)},a.POS_009=function(e){return this.request("POS_009",e,l)},a.POS_010=function(e){return this.request("POS_010",e,o)},a.POS_008=function(e){return this.request("POS_008",e,o)},a.POS_002=function(e){return this.request("POS_002",e,o)},a.POS_013=function(e){return this.request("POS_013",e,i)},a.ACT_001=function(e){return this.request("ACT_001",e,u)},a.ITY_001=function(e){return this.request("ITY_001",e,h)},a.ACT_002=function(e){return this.request("ACT_002",e,o)},a.ITY_002=function(e){return this.request("ITY_002",e,o)},a.COU_001=function(e){return this.request("COU_001",e,d)},a.COU_002=function(e){return this.request("COU_002",e,o)},a.VIP_001=function(e){return this.request("VIP_001",e,m)},a.VIP_002=function(e){return this.request("VIP_002",e,o)},a.PLC_001=function(e){return this.request("PLC_001",e,g)},a.PLC_002=function(e){return this.request("PLC_002",e,o)},a.POS_014=function(e){return this.request("POS_014",e,o)},a.POS_003=function(e){return this.request("POS_003",e,o)},a.AGT_007=function(e){return this.request("AGT_007",e,o)},a.POS_004=function(e){return this.request("POS_004",e,o)},a.POS_006=function(e){return this.request("POS_006",e,o)},a.POS_005=function(e){return this.request("POS_005",e,p)},a.POS_012=function(e){return this.request("POS_012",e,o)},a.POS_011=function(e){return this.request("POS_011",e,o)},t}(c.a);t.a=new b},459:function(e,t,a){"use strict";a.r(t);var n=a(15),r=a.n(n),c=a(32),o=a(1),i=(a(197),a(200)),s=(a(183),a(190)),l=(a(179),a(180)),u=(a(191),a(189)),h=(a(181),a(187)),d=(a(182),a(188)),m=(a(101),a(178)),p=a(184),g=a.n(p),b=a(177),v=a.n(b),f=(a(185),a(192)),y=a(186),C=a.n(y),k=(a(195),a(194)),E=a(201),D=k.a.Option,A=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).searchParam={currentPage:1,pageSize:10},t.storageParam={policyCouponId:"",policyActivityId:"",policyActivationId:""},t.state={header:[],items:[],tableLoading:!1,btnLoading:!1,modalLoading:!1,visible:!1,policy:[],policy1:[],policy2:[],pagination:{total:0,current:0,pageSize:t.searchParam.size},currentItem:{},btnDisabled:!0},t.showModal=function(){t.setState({visible:!0})},t.handleOk=C()(g.a.mark(function e(){var a,n,r,c;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.state.currentItem,"{}"!=JSON.stringify(a)){e.next=4;break}return f.a.info("提交不能为空"),e.abrupt("return",!1);case 4:return t.setState({modalLoading:!0}),e.next=7,E.a.PLC_002(v()({},t.state.currentItem));case 7:n=e.sent,r=n.HEAD,n.BODY,c=r.MSG,"000"===r.CODE?(f.a.success("添加成功"),t.setState({visible:!1}),t.searchData(),t.state.currentItem="",t.setState({modalLoading:!1})):(f.a.error(c),t.setState({modalLoading:!1}));case 12:case"end":return e.stop()}},e)})),t.handleCancel=function(e){console.log(e),t.setState({visible:!1}),t.storageParam=""},t.getItem=function(e){var a={};return t.state.items.forEach(function(t){t.agentId===e&&(a=t)}),a},t.searchData=C()(g.a.mark(function e(){var a,n,r,c,o,i,s,l;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({tableLoading:!0}),e.next=3,E.a.PLC_001(t.searchParam);case 3:a=e.sent,n=a.HEAD,r=a.BODY,c=n.MSG,"000"===n.CODE?(o=r.header,i=r.rows,s=r.total,(l=v()({},t.state.pagination)).total=s,t.setState({header:o,items:i,tableLoading:!1,pagination:l})):f.a.error(c);case 8:case"end":return e.stop()}},e)})),t.loadPolicy1=function(){var e=C()(g.a.mark(function e(a){var n,r,c,o,i,s;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({policyLoading:!0}),n=t.state.currentItem.policyActivationId,void 0===n?"":n,e.next=4,E.a.ACT_001(t.searchParam);case 4:r=e.sent,c=r.HEAD,o=r.BODY,i=c.MSG,"000"===c.CODE?(s=o.rows,t.setState({policy:s})):f.a.error(i);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t.loadPolicy2=function(){var e=C()(g.a.mark(function e(a){var n,r,c,o,i,s;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({policyLoading:!0}),n=t.state.currentItem.policyCouponId,void 0===n?"":n,e.next=4,E.a.COU_001(t.searchParam);case 4:r=e.sent,c=r.HEAD,o=r.BODY,i=c.MSG,"000"===c.CODE?(s=o.rows,t.setState({policy1:s})):f.a.error(i);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t.loadPolicy3=function(){var e=C()(g.a.mark(function e(a){var n,r,c,o,i,s;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({policyLoading:!0}),n=t.state.currentItem.policyActivityId,void 0===n?"":n,e.next=4,E.a.ITY_001(t.searchParam);case 4:r=e.sent,c=r.HEAD,o=r.BODY,i=c.MSG,"000"===c.CODE?(s=o.rows,t.setState({policy2:s})):f.a.error(i);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),t.handleTableChange=function(e){t.searchParam.currentPage=e.current,t.setState({pagination:e},function(){t.searchData()})},t.handleChange=function(e){return function(a){console.log("change value "+e+":"+a.target.value),t.searchParam[e]=a.target.value}},t.handleChangeParam=function(e){return function(a){var n=Object.assign({},t.state.currentItem);switch(e){case"policyActivationId":case"policyCouponId":case"policyActivityId":case"state":console.log("change value "+e+":"+a),n[e]=a,t.setState({currentItem:n});break;default:console.log("change value "+e+":"+a.target.value),n[e]=a.target.value,t.setState({currentItem:n})}}},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.searchData(),this.loadPolicy1(),this.loadPolicy2(),this.loadPolicy3()},a.render=function(){var e=this.state,t=e.header,a=(e.modalLoading,e.items),n=e.tableLoading,r=e.pagination;e.policy;return React.createElement(o.Fragment,null,React.createElement(h.a,null,React.createElement(d.a,{span:3},React.createElement(m.a,{type:"primary",style:{marginTop:4,position:"absolute",left:0},onClick:this.searchData},"查询"),React.createElement(m.a,{type:"primary",style:{marginTop:4,position:"absolute",left:80},onClick:this.showModal},"添加"))),React.createElement(u.a,{columns:t,onChange:this.handleTableChange,pagination:r,loading:n,dataSource:a,scroll:{x:2e3},size:"middle",style:{position:"relative",top:40}}),this.renderaddModal())},a.renderaddModal=function(){var e=this.state,t=e.visible,a=(e.header,e.modalLoading),n=(e.items,e.tableLoading,e.pagination,e.policy),r=e.policy1,c=e.policy2,o=(e.policyLoading,e.btnLoading,e.btnDisabled,e.currentItem),u=void 0===o?{}:o,h=u.name,d=void 0===h?"":h,p=u.record,g=void 0===p?"":p;u.state;return React.createElement(i.a,{title:"添加政策",visible:t,onOk:this.handleOk,onCancel:this.handleCancel,destroyOnClose:!0,width:1e3,footer:[React.createElement(m.a,{key:"back",onClick:this.handleCancel},"取消"),React.createElement(m.a,{key:"submit",type:"primary",loading:a,onClick:this.handleOk},"确定添加")]},React.createElement(s.a.Item,{label:"政策名称",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:d,onChange:this.handleChangeParam("name"),style:{width:300}})),React.createElement(s.a.Item,{label:"激活返现",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(k.a,{onChange:this.handleChangeParam("policyActivationId"),style:{width:300}},n.map(function(e,t){var a=e.policyActivationId,n=e.record;return React.createElement(D,{key:t,value:a},n)}))),React.createElement(s.a.Item,{label:"优惠券",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(k.a,{onChange:this.handleChangeParam("policyCouponId"),style:{width:300}},r.map(function(e,t){var a=e.policyCouponId,n=e.record;return React.createElement(D,{key:t,value:a},n)}))),React.createElement(s.a.Item,{label:"活动返现",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(k.a,{onChange:this.handleChangeParam("policyActivityId"),style:{width:300}},c.map(function(e,t){var a=e.policyActivityId,n=e.record;return React.createElement(D,{key:t,value:a},n)}))),React.createElement(s.a.Item,{label:"选择状态",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(k.a,{style:{width:300},onChange:this.handleChangeParam("state")},React.createElement(D,{value:"1"},"上架"),React.createElement(D,{value:"10"},"下架"))),React.createElement(s.a.Item,{label:"描述",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:g,onChange:this.handleChangeParam("record"),style:{width:300}})))},t}(o.Component),w=k.a.Option,S=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).searchParam={policyName:"",currentPage:1,pageSize:10},t.state={header:[],items:[],modalLoading:!1,visible:!1,policy:[],pagination:{total:0,current:0,pageSize:t.searchParam.size},currentItem:{},depositAmount:"",cashbackAmount:"",trade:"",freeDay:"",cashbackDay:""},t.showModal=function(){t.setState({visible:!0})},t.handleCancel=function(e){console.log(e),t.setState({visible:!1})},t.getItem=function(e){var a={};return t.state.items.forEach(function(t){t.agentId===e&&(a=t)}),a},t.searchData=C()(g.a.mark(function e(){var a,n,r,c,o,i,s,l,u;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.ACT_001(t.searchParam);case 2:a=e.sent,n=a.HEAD,r=a.BODY,c=n.MSG,"000"===n.CODE?(o=r.header,i=r.rows,s=r.total,l=[],i.forEach(function(e,t){var a={cashbackAmount:e.cashbackAmount/100,depositAmount:e.depositAmount/100,policyActivationId:e.policyActivationId,state:e.state,record:e.record};l.push(a)}),(u=v()({},t.state.pagination)).total=s,t.setState({header:o,items:l,tableLoading:!1,pagination:u})):f.a.error(c);case 7:case"end":return e.stop()}},e)})),t.sureAdd=C()(g.a.mark(function e(){var a,n,r,c,o,i,s;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=/^\d+$|^\d+[.]?\d+$/,""!=t.state.depositAmount){e.next=4;break}return f.a.info("请输入激活金额"),e.abrupt("return",!1);case 4:if(a.test(t.state.depositAmount)){e.next=7;break}return f.a.info("只能输入数字"),e.abrupt("return",!1);case 7:if(""!=t.state.cashbackAmount){e.next=10;break}return f.a.info("请输入返现金额"),e.abrupt("return",!1);case 10:if(a.test(t.state.cashbackAmount)){e.next=13;break}return f.a.info("只能输入数字"),e.abrupt("return",!1);case 13:if(""!=t.state.freeDay){e.next=16;break}return f.a.info("输入免手续费天数"),e.abrupt("return",!1);case 16:if(""!=t.state.cashbackDay){e.next=19;break}return f.a.info("输入返现期限天数"),e.abrupt("return",!1);case 19:if(""!=t.state.trade){e.next=22;break}return f.a.info("请输入激活返现条件金额"),e.abrupt("return",!1);case 22:if(a.test(t.state.trade)){e.next=25;break}return f.a.info("只能输入数字"),e.abrupt("return",!1);case 25:return n={depositAmount:100*t.state.depositAmount,cashbackAmount:100*t.state.cashbackAmount,trade:100*t.state.trade},r=t.state.currentItem,c={},Object.assign(c,n,r),t.setState({modalLoading:!0}),e.next=32,E.a.ACT_002(c);case 32:o=e.sent,i=o.HEAD,o.BODY,s=i.MSG,"000"===i.CODE?(f.a.success("添加成功"),t.setState({visible:!1}),t.state.currentItem="",t.state.depositAmount="",t.state.cashbackAmount="",t.state.trade="",t.searchData(),t.setState({modalLoading:!1})):(f.a.error(s),t.setState({modalLoading:!1}));case 37:case"end":return e.stop()}},e)})),t.handleTableChange=function(e){t.searchParam.currentPage=e.current,t.setState({pagination:e},function(){t.searchData()})},t.handleChange=function(e){return function(a){console.log("change value "+e+":"+a.target.value),t.searchParam[e]=a.target.value}},t.handleChangeParam=function(e){return function(a){var n=Object.assign({},t.state.currentItem);switch(e){case"policyId":case"state":console.log("change value "+e+":"+a),n[e]=a,t.setState({currentItem:n});break;case"depositAmount":console.log("change value "+e+":"+a.target.value),t.setState({depositAmount:a.target.value});break;case"cashbackAmount":console.log("change value "+e+":"+a.target.value),t.setState({cashbackAmount:a.target.value});break;case"trade":console.log("change value "+e+":"+a.target.value),t.setState({trade:a.target.value});break;default:console.log("change value "+e+":"+a.target.value),n[e]=a.target.value,t.setState({currentItem:n}),t.setState({freeDay:a.target.value}),t.setState({cashbackDay:a.target.value})}}},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.searchData()},a.render=function(){var e=this.state,t=e.header,a=e.items,n=e.pagination;e.policy;return React.createElement(o.Fragment,null,React.createElement(h.a,null,React.createElement(d.a,{span:3},React.createElement(m.a,{type:"primary",style:{marginTop:4,position:"absolute",left:0},onClick:this.searchData},"查询"),React.createElement(m.a,{type:"primary",style:{marginTop:4,position:"absolute",left:80},onClick:this.showModal},"添加"))),React.createElement(u.a,{columns:t,onChange:this.handleTableChange,pagination:n,dataSource:a,scroll:{x:1e3},size:"middle",style:{position:"relative",top:40}}),this.renderaddModal())},a.renderaddModal=function(){var e=this.state,t=e.visible,a=(e.header,e.items,e.pagination,e.policy,e.currentItem),n=void 0===a?{}:a,r=e.modalLoading,c=e.depositAmount,o=e.cashbackAmount,u=e.trade,h=n.record,d=void 0===h?"":h,p=n.freeDay,g=void 0===p?"":p,b=n.cashbackDay,v=void 0===b?"":b;n.state;return React.createElement(i.a,{title:"新增政策",visible:t,onOk:this.handleOk,onCancel:this.handleCancel,destroyOnClose:!0,width:1e3,footer:[React.createElement(m.a,{key:"back",onClick:this.handleCancel},"取消"),React.createElement(m.a,{key:"submit",type:"primary",loading:r,onClick:this.sureAdd},"确定添加")]},React.createElement(s.a.Item,{label:"激活金额",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:c,onChange:this.handleChangeParam("depositAmount"),style:{width:300}}),"元"),React.createElement(s.a.Item,{label:"返现金额",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:o,onChange:this.handleChangeParam("cashbackAmount"),style:{width:300}}),"元"),React.createElement(s.a.Item,{label:"选择状态",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(k.a,{style:{width:300},onChange:this.handleChangeParam("state")},React.createElement(w,{value:"1"},"上架"),React.createElement(w,{value:"10"},"下架"))),React.createElement(s.a.Item,{label:"描述",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:d,onChange:this.handleChangeParam("record"),style:{width:300}})),React.createElement(s.a.Item,{label:"免手续费天数",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:g,onChange:this.handleChangeParam("freeDay"),style:{width:300}})),React.createElement(s.a.Item,{label:"返现期限天数",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:v,onChange:this.handleChangeParam("cashbackDay"),style:{width:300}})),React.createElement(s.a.Item,{label:"激活返现条件金额",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:u,onChange:this.handleChangeParam("trade"),style:{width:300}}),"元"))},t}(o.Component),I=k.a.Option,R=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).searchParam={policyName:"",currentPage:1,pageSize:10},t.storageParam={policyId:"",startSn:"",endSn:""},t.state={header:[],items:[],tableLoading:!1,btnLoading:!1,modalLoading:!1,visible:!1,policy:[],pagination:{total:0,current:0,pageSize:t.searchParam.size},currentItem:{},btnDisabled:!0,achieveAmount:"",cashbackAmount:"",validDay:"",takeEffect:""},t.showModal=function(){t.setState({visible:!0})},t.handleCancel=function(e){console.log(e),t.setState({visible:!1})},t.getItem=function(e){var a={};return t.state.items.forEach(function(t){t.agentId===e&&(a=t)}),a},t.searchData=C()(g.a.mark(function e(){var a,n,r,c,o,i,s,l,u;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({tableLoading:!0}),e.next=3,E.a.ITY_001(t.searchParam);case 3:a=e.sent,n=a.HEAD,r=a.BODY,c=n.MSG,"000"===n.CODE?(o=r.header,i=r.rows,s=r.total,l=[],i.forEach(function(e,t){var a={policyActivityId:e.policyActivityId,validDay:e.validDay,achieveAmount:e.achieveAmount/100,state:e.state,cashbackAmount:e.cashbackAmount/100,record:e.record};l.push(a)}),(u=v()({},t.state.pagination)).total=s,t.setState({header:o,items:l,tableLoading:!1,pagination:u})):f.a.error(c);case 8:case"end":return e.stop()}},e)})),t.handleOk=C()(g.a.mark(function e(){var a,n,r,c,o,i;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(/^\d+$|^\d+[.]?\d+$/,""!=t.state.achieveAmount){e.next=4;break}return f.a.info("请输入达标金额"),e.abrupt("return",!1);case 4:if("0"!=t.state.achieveAmount){e.next=7;break}return f.a.info("达标金额不能为0"),e.abrupt("return",!1);case 7:if(""!=t.state.cashbackAmount){e.next=10;break}return f.a.info("请输入返现金额"),e.abrupt("return",!1);case 10:if("0"!=t.state.cashbackAmount){e.next=13;break}return f.a.info("返现金额不能为0"),e.abrupt("return",!1);case 13:if(""!=t.state.validDay){e.next=16;break}return f.a.info("输入有效时间"),e.abrupt("return",!1);case 16:if("0"!=t.state.validDay){e.next=19;break}return f.a.info("有效时间不能为0"),e.abrupt("return",!1);case 19:if(!(t.state.achieveAmount<t.state.cashbackAmount)){e.next=22;break}return f.a.info("达标金额必须大于返现金额"),e.abrupt("return",!1);case 22:return a={achieveAmount:100*t.state.achieveAmount,cashbackAmount:100*t.state.cashbackAmount},n=t.state.currentItem,r={},Object.assign(r,a,n),t.setState({modalLoading:!0}),e.next=29,E.a.ITY_002(r);case 29:c=e.sent,o=c.HEAD,c.BODY,i=o.MSG,"000"===o.CODE?(f.a.success("添加成功"),t.setState({visible:!1}),t.state.currentItem="",t.state.achieveAmount="",t.state.cashbackAmount="",t.searchData(),t.setState({modalLoading:!1})):(f.a.error(i),t.setState({modalLoading:!1}));case 34:case"end":return e.stop()}},e)})),t.handleTableChange=function(e){t.searchParam.currentPage=e.current,t.setState({pagination:e},function(){t.searchData()})},t.handleChange=function(e){return function(a){console.log("change value "+e+":"+a.target.value),t.searchParam[e]=a.target.value}},t.handleChangeParam=function(e){return function(a){var n=Object.assign({},t.state.currentItem);switch(e){case"policyId":console.log("change value "+e+":"+a),n[e]!==a&&t.loadPolicy(a),n[e]=a,t.setState({currentItem:n});break;case"state":console.log("change value "+e+":"+a),n[e]=a,t.setState({currentItem:n}),console.log(n[e]);break;case"achieveAmount":console.log("change value "+e+":"+a.target.value),t.setState({achieveAmount:a.target.value});break;case"cashbackAmount":console.log("change value "+e+":"+a.target.value),t.setState({cashbackAmount:a.target.value});break;default:console.log("change value "+e+":"+a.target.value),n[e]=a.target.value,t.setState({currentItem:n}),t.setState({validDay:a.target.value})}}},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.searchData()},a.render=function(){var e=this.state,t=e.header,a=(e.modalLoading,e.items),n=e.pagination,r=(e.policy,e.tableLoading);return React.createElement(o.Fragment,null,React.createElement(h.a,null,React.createElement(d.a,{span:3},React.createElement(m.a,{type:"primary",style:{marginTop:4,position:"absolute",left:0},onClick:this.searchData},"查询"),React.createElement(m.a,{type:"primary",style:{marginTop:4,position:"absolute",left:80},onClick:this.showModal},"添加"))),React.createElement(u.a,{columns:t,onChange:this.handleTableChange,pagination:n,loading:r,dataSource:a,scroll:{x:1e3},size:"middle",style:{position:"relative",top:40}}),this.renderaddModal())},a.renderaddModal=function(){var e=this.state,t=e.visible,a=(e.header,e.modalLoading),n=(e.items,e.pagination,e.policy,e.policyLoading,e.currentItem),r=void 0===n?{}:n,c=e.achieveAmount,o=e.cashbackAmount,u=r.record,h=void 0===u?"":u,d=r.validDay,p=void 0===d?"":d;r.state;return React.createElement(i.a,{title:"新增活动返现",visible:t,onOk:this.handleOk,onCancel:this.handleCancel,destroyOnClose:!0,width:500,footer:[React.createElement(m.a,{key:"back",onClick:this.handleCancel},"取消"),React.createElement(m.a,{key:"submit",type:"primary",loading:a,onClick:this.handleOk},"确定添加")]},React.createElement(s.a.Item,{label:"达标金额",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:c,onChange:this.handleChangeParam("achieveAmount"),style:{width:150}}),"元"),React.createElement(s.a.Item,{label:"返现金额",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:o,onChange:this.handleChangeParam("cashbackAmount"),style:{width:150}}),"元"),React.createElement(s.a.Item,{label:"有效时间",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:p,onChange:this.handleChangeParam("validDay"),style:{width:100}})),React.createElement(s.a.Item,{label:"选择状态",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(k.a,{style:{width:150},onChange:this.handleChangeParam("state")},React.createElement(I,{value:"1"},"上架"),React.createElement(I,{value:"10"},"下架"))),React.createElement(s.a.Item,{label:"描述",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:h,onChange:this.handleChangeParam("record"),style:{width:150}})))},t}(o.Component),O=(a(103),a(76)),P=k.a.Option,x=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).searchParam={policyName:"",currentPage:1,pageSize:10},t.storageParam={policyId:"",startSn:"",endSn:""},t.state={header:[],items:[],tableLoading:!1,btnLoading:!1,modalLoading:!1,visible:!1,policy:[],pagination:{total:0,current:0,pageSize:t.searchParam.size},currentItem:{},btnDisabled:!0,buyAmount:"",rate:"",cashbackAmount:"",validDay:""},t.showModal=function(){t.setState({visible:!0})},t.handleOk=C()(g.a.mark(function e(){var a,n,r,c,o,i,s;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=/^\d+$|^\d+[.]?\d+$/,""!=t.state.buyAmount){e.next=4;break}return f.a.info("请输入购买金额"),e.abrupt("return",!1);case 4:if("0"!=t.state.buyAmount){e.next=7;break}return f.a.info("购买金额不能为0"),e.abrupt("return",!1);case 7:if(""!=t.state.validDay){e.next=10;break}return f.a.info("输入有效天数"),e.abrupt("return",!1);case 10:if("0"!=t.state.validDay){e.next=13;break}return f.a.info("有效天数不能为0"),e.abrupt("return",!1);case 13:if(""!=t.state.rate){e.next=16;break}return f.a.info("请输入费率"),e.abrupt("return",!1);case 16:if(!(t.state.rate>"1")){e.next=19;break}return f.a.info("费率小于1"),e.abrupt("return",!1);case 19:if(""!=t.state.cashbackAmount){e.next=22;break}return f.a.info("请输入返现金额"),e.abrupt("return",!1);case 22:if("0"!=t.state.cashbackAmount){e.next=25;break}return f.a.info("返现金额不能为0"),e.abrupt("return",!1);case 25:if(a.test(t.state.cashbackAmount)){e.next=28;break}return f.a.info("只能输入数字"),e.abrupt("return",!1);case 28:return n={buyAmount:100*t.state.buyAmount,cashbackAmount:100*t.state.cashbackAmount,rate:(t.state.rate/100).toFixed(5)},r=t.state.currentItem,c={},Object.assign(c,n,r),t.setState({modalLoading:!0}),e.next=35,E.a.VIP_002(c);case 35:o=e.sent,i=o.HEAD,o.BODY,s=i.MSG,"000"===i.CODE?(f.a.success("添加成功"),t.setState({visible:!1}),t.searchData(),t.state.currentItem="",t.state.buyAmount="",t.state.cashbackAmount="",t.state.rate="",t.setState({modalLoading:!1})):(f.a.error(s),t.setState({modalLoading:!1}));case 40:case"end":return e.stop()}},e)})),t.handleCancel=function(e){console.log(e),t.setState({visible:!1})},t.getItem=function(e){var a={};return t.state.items.forEach(function(t){t.agentId===e&&(a=t)}),a},t.searchData=C()(g.a.mark(function e(){var a,n,r,c,o,i,s,l,u;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({tableLoading:!0}),e.next=3,E.a.VIP_001(t.searchParam);case 3:a=e.sent,n=a.HEAD,r=a.BODY,c=n.MSG,"000"===n.CODE?(o=r.header,i=r.rows,s=r.total,l=[],i.forEach(function(e,t){var a={buyAmount:e.buyAmount/100,validDay:e.validDay,rate:100*e.rate,state:e.state,cashbackAmount:e.cashbackAmount/100,record:e.record};l.push(a)}),(u=v()({},t.state.pagination)).total=s,t.setState({header:o,items:l,tableLoading:!1,pagination:u})):f.a.error(c);case 8:case"end":return e.stop()}},e)})),t.handleTableChange=function(e){t.searchParam.currentPage=e.current,t.setState({pagination:e},function(){t.searchData()})},t.handleChange=function(e){return function(a){console.log("change value "+e+":"+a.target.value),t.searchParam[e]=a.target.value}},t.handleChangeParam=function(e){return function(a){var n=Object.assign({},t.state.currentItem);switch(e){case"policyId":console.log("change value "+e+":"+a),n[e]!==a&&t.loadPolicy(a),n[e]=a;break;case"state":console.log("change value "+e+":"+a),n[e]=a,t.setState({currentItem:n}),console.log(n[e]);break;case"buyAmount":console.log("change value "+e+":"+a.target.value),t.setState({buyAmount:a.target.value});break;case"rate":console.log("change value "+e+":"+a.target.value),t.setState({rate:a.target.value});break;case"cashbackAmount":console.log("change value "+e+":"+a.target.value),t.setState({cashbackAmount:a.target.value});break;default:console.log("change value "+e+":"+a.target.value),n[e]=a.target.value,t.setState({currentItem:n}),t.setState({validDay:a.target.value})}}},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.searchData()},a.render=function(){var e=this.state,t=e.header,a=(e.modalLoading,e.items),n=e.tableLoading,r=e.pagination;e.policy;return React.createElement(o.Fragment,null,React.createElement(h.a,null,React.createElement(d.a,{span:3},React.createElement(m.a,{type:"primary",style:{marginTop:4,position:"absolute",left:0},onClick:this.searchData},"查询"),React.createElement(m.a,{type:"primary",style:{marginTop:4,position:"absolute",left:80},onClick:this.showModal},"添加"))),React.createElement(u.a,{columns:t,onChange:this.handleTableChange,pagination:r,loading:n,dataSource:a,scroll:{x:2e3},size:"middle",style:{position:"relative",top:40}}),this.renderaddModal())},a.renderaddModal=function(){var e=this.state,t=e.visible,a=(e.header,e.modalLoading),n=(e.items,e.tableLoading,e.pagination,e.policy,e.policyLoading,e.btnLoading,e.btnDisabled,e.currentItem),r=void 0===n?{}:n,c=e.buyAmount,o=e.rate,u=e.cashbackAmount,h=r.validDay,d=void 0===h?"":h,p=(r.state,r.record),g=void 0===p?"":p;return React.createElement(i.a,{title:"新增vip",visible:t,onOk:this.handleOk,onCancel:this.handleCancel,destroyOnClose:!0,width:1e3,footer:[React.createElement(m.a,{key:"back",onClick:this.handleCancel},"取消"),React.createElement(m.a,{key:"submit",type:"primary",loading:a,onClick:this.handleOk},"确定添加")]},React.createElement(s.a.Item,{label:"购买金额",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:c,onChange:this.handleChangeParam("buyAmount"),style:{width:300}}),"元"),React.createElement(s.a.Item,{label:"有效天数",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:d,onChange:this.handleChangeParam("validDay"),style:{width:300}}),"天"),React.createElement(s.a.Item,{label:"费率",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:o,onChange:this.handleChangeParam("rate"),style:{width:300}}),"%",React.createElement(O.a,{title:"prompt text"},React.createElement("span",null,"范围是0~1(3位小数)"))),React.createElement(s.a.Item,{label:"选择状态",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(k.a,{style:{width:300},onChange:this.handleChangeParam("state")},React.createElement(P,{value:"1"},"上架"),React.createElement(P,{value:"10"},"下架"))),React.createElement(s.a.Item,{label:"返现金额",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:u,onChange:this.handleChangeParam("cashbackAmount"),style:{width:300}}),"元"),React.createElement(s.a.Item,{label:"描述",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:g,onChange:this.handleChangeParam("record"),style:{width:300}})))},t}(o.Component),L=k.a.Option,_=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).searchParam={policyName:"",currentPage:1,pageSize:10},t.storageParam={policyId:"",startSn:"",endSn:""},t.state={header:[],items:[],tableLoading:!1,btnLoading:!1,modalLoading:!1,visible:!1,policy:[],pagination:{total:0,current:0,pageSize:t.searchParam.size},currentItem:{},btnDisabled:!0,achieveAmount:"",validDay:""},t.showModal=function(){t.setState({visible:!0})},t.handleCancel=function(e){console.log(e),t.setState({visible:!1})},t.getItem=function(e){var a={};return t.state.items.forEach(function(t){t.agentId===e&&(a=t)}),a},t.searchData=C()(g.a.mark(function e(){var a,n,r,c,o,i,s,l,u;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({tableLoading:!0}),e.next=3,E.a.COU_001(t.searchParam);case 3:a=e.sent,n=a.HEAD,r=a.BODY,c=n.MSG,"000"===n.CODE?(o=r.header,i=r.rows,s=r.total,l=[],i.forEach(function(e,t){var a={policyCouponId:e.policyCouponId,achieveAmount:e.achieveAmount/100,validDay:e.validDay,state:e.state,record:e.record};console.log(a),l.push(a)}),(u=v()({},t.state.pagination)).total=s,t.setState({header:o,items:l,tableLoading:!1,pagination:u})):f.a.error(c);case 8:case"end":return e.stop()}},e)})),t.handleOk=C()(g.a.mark(function e(){var a,n,r,c,o,i,s;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=/^\d+$|^\d+[.]?\d+$/,""!=t.state.achieveAmount){e.next=4;break}return f.a.info("请输入金额"),e.abrupt("return",!1);case 4:if(a.test(t.state.achieveAmount)){e.next=7;break}return f.a.info("只能输入数字"),e.abrupt("return",!1);case 7:if(""!=t.state.validDay){e.next=10;break}return f.a.info("请输入天数"),e.abrupt("return",!1);case 10:if("0"!=t.state.validDay){e.next=13;break}return f.a.info("天数不能为0"),e.abrupt("return",!1);case 13:if(a.test(t.state.validDay)){e.next=16;break}return f.a.info("只能输入数字"),e.abrupt("return",!1);case 16:return n={achieveAmount:100*t.state.achieveAmount},r=t.state.currentItem,c={},Object.assign(c,n,r),t.setState({modalLoading:!0}),e.next=23,E.a.COU_002(c);case 23:o=e.sent,i=o.HEAD,o.BODY,s=i.MSG,"000"===i.CODE?(f.a.success("添加成功"),t.setState({visible:!1}),t.searchData(),t.state.currentItem="",t.state.achieveAmount="",t.setState({modalLoading:!1})):(f.a.error(s),t.setState({modalLoading:!1}));case 28:case"end":return e.stop()}},e)})),t.handleTableChange=function(e){t.searchParam.currentPage=e.current,t.setState({pagination:e},function(){t.searchData()})},t.handleChange=function(e){return function(a){console.log("change value "+e+":"+a.target.value),t.searchParam[e]=a.target.value}},t.handleChangeParam=function(e){return function(a){var n=Object.assign({},t.state.currentItem);switch(e){case"policyId":console.log("change value "+e+":"+a),n[e]!==a&&t.loadPolicy(a),n[e]=a,t.setState({currentItem:n});break;case"state":console.log("change value "+e+":"+a),n[e]=a,t.setState({currentItem:n}),console.log(n[e]);break;case"achieveAmount":console.log("change value "+e+":"+a.target.value),t.setState({achieveAmount:a.target.value});break;default:console.log("change value "+e+":"+a.target.value),n[e]=a.target.value,t.setState({currentItem:n}),t.setState({validDay:a.target.value})}}},t}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.searchData()},a.render=function(){var e=this.state,t=e.header,a=(e.modalLoading,e.items),n=e.tableLoading,r=e.pagination;e.policy,e.policyLoading,e.btnLoading,e.btnDisabled,e.currentItem;return React.createElement(o.Fragment,null,React.createElement(h.a,null,React.createElement(d.a,{span:3},React.createElement(m.a,{type:"primary",style:{marginTop:4,position:"absolute",left:0},onClick:this.searchData},"查询"),React.createElement(m.a,{type:"primary",style:{marginTop:4,position:"absolute",left:80},onClick:this.showModal},"添加"))),React.createElement(u.a,{columns:t,onChange:this.handleTableChange,pagination:r,loading:n,dataSource:a,scroll:{x:2e3},size:"middle",style:{position:"relative",top:40}}),this.renderaddModal())},a.renderaddModal=function(){var e=this.state,t=e.visible,a=(e.header,e.modalLoading),n=(e.items,e.tableLoading,e.pagination,e.policy,e.policyLoading,e.btnLoading,e.currentItem),r=void 0===n?{}:n,c=e.achieveAmount,o=(r.policyCouponId,r.record),u=void 0===o?"":o,h=r.validDay,d=void 0===h?"":h;r.state;return React.createElement(i.a,{title:"新增优惠券",visible:t,onOk:this.handleOk,destroyOnClose:!0,onCancel:this.handleCancel,width:1e3,footer:[React.createElement(m.a,{key:"back",onClick:this.handleCancel},"取消"),React.createElement(m.a,{key:"submit",type:"primary",loading:a,onClick:this.handleOk},"确定添加")]},React.createElement(s.a.Item,{label:"面额",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:c,onChange:this.handleChangeParam("achieveAmount"),style:{width:300}}),"元"),React.createElement(s.a.Item,{label:"有效天数",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:d,onChange:this.handleChangeParam("validDay"),style:{width:300}}),"天"),React.createElement(s.a.Item,{label:"选择状态",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(k.a,{style:{width:300},onChange:this.handleChangeParam("state")},React.createElement(L,{value:"1"},"上架"),React.createElement(L,{value:"10"},"下架"))),React.createElement(s.a.Item,{label:"描述",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(l.a,{value:u,onChange:this.handleChangeParam("record"),style:{width:300}})))},t}(o.Component);a.d(t,"default",function(){return Y});var Y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.match;return React.createElement("div",null,React.createElement(c.Switch,null,React.createElement(c.Route,{path:e.url+"/policyManagement",component:function(e){return React.createElement(A,e)}}),React.createElement(c.Route,{path:e.url+"/activateCashback",component:function(e){return React.createElement(S,e)}}),React.createElement(c.Route,{path:e.url+"/activityCashBack",component:function(e){return React.createElement(R,e)}}),React.createElement(c.Route,{path:e.url+"/vipcashBack",component:function(e){return React.createElement(x,e)}}),React.createElement(c.Route,{path:e.url+"/couPon",component:function(e){return React.createElement(_,e)}})))},t}(o.Component)}}]);