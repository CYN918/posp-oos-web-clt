(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{193:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var n=t(202),r=t.n(n),c=(window.GLOBAL,function(){function e(){this.$request=void 0,this.dataMethodDefaults=void 0,this.$request=r.a.create({baseURL:"http://127.0.0.1:8090",headers:{token:"1234","Content-Type":"application/json"}}),this.$request.interceptors.response.use(function(e){return e.data},function(e){return Promise.reject(e)})}return e.prototype.request=function(e,a,t){return this.$request.post("/"+e,{HEAD:{token:"1234"},BODY:a}).then(t)},e}())},458:function(e,a,t){"use strict";t.r(a);var n=t(15),r=t.n(n),c=t(32),o=t(1),i=(t(191),t(189)),l=(t(181),t(187)),s=(t(101),t(178)),u=(t(182),t(188)),m=(t(183),t(190)),h=(t(179),t(180)),p=t(184),d=t.n(p),g=(t(185),t(192)),b=t(177),f=t.n(b),C=t(186),E=t.n(C),R=t(193),k=function(e){var a=e.HEAD,t=e.BODY;if("000"===a.CODE){var n=t.rows;n.forEach(function(e,a){e.key=a});var r=["code","createTime","acceptTime","agentName","mobile","toAgentName","toMobile","num","price","amount","term","termAmount","state"].map(function(e){var a={title:"",dataIndex:e,key:e};switch(e){case"code":a.title="保理编号";break;case"createTime":a.title="划拨时间";break;case"acceptTime":a.title="订单生效时间";break;case"agentName":a.title="划拨人姓名";break;case"mobile":a.title="划拨人手机号";break;case"toAgentName":a.title="受理人姓名";break;case"toMobile":a.title="受理人手机号";break;case"num":a.title="机具数量";break;case"price":a.title="单价";break;case"amount":a.title="保理总额";break;case"term":a.title="期数";break;case"termAmount":a.title="每期金额";break;case"state":a.title="订单状态"}return a});e.BODY.header=r,e.BODY.rows=n}return e},v=function(e){var a=e.HEAD,t=e.BODY;if("000"===a.CODE){var n=t.rows;n.forEach(function(e,a){e.key=a});var r=["orderNo","code","term","lastDay","dealAmount","remainAmount","frdkAmount","fxdkAmount","vipAmount","hddkAmount","amount","hkTime","dealType","state"].map(function(e){var a={title:"",dataIndex:e,key:e};switch(e){case"orderNo":a.title="订单号";break;case"code":a.title="保理编号";break;case"term":a.title="本期期数";break;case"lastDay":a.title="约定还款时间";break;case"dealAmount":a.title="当期已还金额";break;case"remainAmount":a.title="当期剩余应还";break;case"frdkAmount":a.title="分润抵扣金额";break;case"fxdkAmount":a.title="返现抵扣金额";break;case"vipAmount":a.title="VIP返现抵扣金额";break;case"hddkAmount":a.title="活动返现抵扣金额";break;case"amount":a.title="抵扣后应还款金额";break;case"hkTime":a.title="还款时间";break;case"dealType":a.title="还款方式";break;case"state":a.title="本期还款状态"}return a});e.BODY.header=r,e.BODY.rows=n}return e},D=function(e){var a=e.HEAD,t=e.BODY;if("000"===a.CODE){var n=t.rows;n.forEach(function(e,a){e.key=a});var r=["orderNo","code","createTime","deductType","bindSn","agentName","mobile","txnRate","activatioRate","vipRate","activityRate","amount","toagentName"].map(function(e){var a={title:"",dataIndex:e,key:e};switch(e){case"orderNo":a.title="订单号";break;case"code":a.title="保理编号";break;case"createTime":a.title="交易时间";break;case"deductType":a.title="交易类型";break;case"bindSn":a.title="序列号";break;case"agentName":a.title="交易用户";break;case"mobile":a.title="交易用户手机号";break;case"txnRate":a.title="交易分润抵扣比例";break;case"activatioRate":a.title="激活返现抵扣比例";break;case"vipRate":a.title="VIP返现抵扣比例";break;case"activityRate":a.title="活动返现抵扣比例";break;case"amount":a.title="抵扣金额";break;case"toagentName":a.title="抵扣给"}return a});e.BODY.header=r,e.BODY.rows=n}return e},w=function(e){var a=e.HEAD,t=e.BODY;if("000"===a.CODE){var n=t.rows;n.forEach(function(e,a){e.key=a});var r=["orderNo","createTime","realName","mobile","txnAmount","txnFee","txnSelAmt","agentName","code","term","txnState"].map(function(e){var a={title:"",dataIndex:e,key:e};switch(e){case"orderNo":a.title="订单号";break;case"createTime":a.title="充值时间";break;case"realName":a.title="充值用户";break;case"mobile":a.title="手机号";break;case"txnAmount":a.title="充值金额";break;case"txnFee":a.title="手续费";break;case"txnSelAmt":a.title="到账金额";break;case"agentName":a.title="所属代理商";break;case"code":a.title="所属保理编号";break;case"term":a.title="充值期数";break;case"txnState":a.title="状态"}return a});e.BODY.header=r,e.BODY.rows=n}return e},y=new(function(e){function a(){return e.apply(this,arguments)||this}r()(a,e);var t=a.prototype;return t.FNC_001=function(e){return this.request("FNC_001",e,k)},t.FNC_002=function(e){return this.request("FNC_002",e,v)},t.FNC_003=function(e){return this.request("FNC_003",e,D)},t.FNC_004=function(e){return this.request("FNC_004",e,w)},a}(R.a)),N=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).searchParam={agentName:"",mobile:"",currentPage:1,pageSize:10},a.state={header:[],items:[],tableLoading:!1,pagination:{total:0,current:0,pageSize:a.searchParam.size}},a.getItem=function(e){var t={};return a.state.items.forEach(function(a){a.agentId===e&&(t=a)}),t},a.searchData=E()(d.a.mark(function e(){var t,n,r,c,o,i,l,s;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({tableLoading:!0}),e.next=3,y.FNC_003(a.searchParam);case 3:t=e.sent,n=t.HEAD,r=t.BODY,c=n.MSG,"000"===n.CODE?(o=r.header,i=r.rows,l=r.total,(s=f()({},a.state.pagination)).total=l,a.setState({header:o,items:i,tableLoading:!1,pagination:s})):g.a.error(c);case 8:case"end":return e.stop()}},e)})),a.handleTableChange=function(e){a.searchParam.currentPage=e.current,a.setState({pagination:e},function(){a.searchData()})},a.handleChange=function(e){return function(t){console.log("change value "+e+":"+t.target.value),a.searchParam[e]=t.target.value}},a}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){this.searchData()},t.render=function(){var e=this.state,a=e.header,t=e.items,n=e.tableLoading,r=e.pagination;return React.createElement(o.Fragment,null,React.createElement(l.a,null,React.createElement(u.a,{span:8},React.createElement(m.a.Item,{label:"用户手机号",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(h.a,{placeholder:"请输入手机号",onChange:this.handleChange("mobile")}))),React.createElement(u.a,{span:8},React.createElement(m.a.Item,{label:"用户名称",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(h.a,{placeholder:"请输入名称",onChange:this.handleChange("agentName")}))),React.createElement(u.a,{span:8},React.createElement(s.a,{type:"primary",style:{marginTop:4,position:"absolute",right:0},onClick:this.searchData},"查询"))),React.createElement(i.a,{columns:a,onChange:this.handleTableChange,pagination:r,loading:n,dataSource:t,scroll:{x:2e3},size:"middle"}))},a}(o.Component),A=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).searchParam={agentName:"",mobile:"",toMobile:"",toAgentName:"",currentPage:1,pageSize:10},a.state={header:[],items:[],tableLoading:!1,pagination:{total:0,current:0,pageSize:a.searchParam.size}},a.getItem=function(e){var t={};return a.state.items.forEach(function(a){a.agentId===e&&(t=a)}),t},a.searchData=E()(d.a.mark(function e(){var t,n,r,c,o,i,l,s;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({tableLoading:!0}),e.next=3,y.FNC_001(a.searchParam);case 3:t=e.sent,n=t.HEAD,r=t.BODY,c=n.MSG,"000"===n.CODE?(o=r.header,i=r.rows,l=r.total,(s=f()({},a.state.pagination)).total=l,a.setState({header:o,items:i,tableLoading:!1,pagination:s})):g.a.error(c);case 8:case"end":return e.stop()}},e)})),a.handleTableChange=function(e){a.searchParam.currentPage=e.current,a.setState({pagination:e},function(){a.searchData()})},a.handleChange=function(e){return function(t){console.log("change value "+e+":"+t.target.value),a.searchParam[e]=t.target.value}},a}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){this.searchData()},t.render=function(){var e=this.state,a=e.header,t=e.items,n=e.tableLoading,r=e.pagination;return React.createElement(o.Fragment,null,React.createElement(l.a,null,React.createElement(u.a,{span:8},React.createElement(m.a.Item,{label:"划拨人手机号",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(h.a,{placeholder:"请输入手机号",onChange:this.handleChange("mobile")}))),React.createElement(u.a,{span:8},React.createElement(m.a.Item,{label:"划拨人名称",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(h.a,{placeholder:"请输入用户名称",onChange:this.handleChange("agentName")})))),React.createElement(l.a,null,React.createElement(u.a,{span:8},React.createElement(m.a.Item,{label:"受理人手机号",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(h.a,{placeholder:"请输入手机号",onChange:this.handleChange("toMobile")}))),React.createElement(u.a,{span:8},React.createElement(m.a.Item,{label:"受理人姓名",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(h.a,{placeholder:"请输入用户名称",onChange:this.handleChange("toAgentName")}))),React.createElement(u.a,{span:8},React.createElement(s.a,{type:"primary",style:{marginTop:4,position:"absolute",right:0},onClick:this.searchData},"查询"))),React.createElement(i.a,{columns:a,onChange:this.handleTableChange,pagination:r,loading:n,dataSource:t,scroll:{x:2e3},size:"middle"}))},a}(o.Component),S=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).searchParam={agentName:"",mobile:"",currentPage:1,pageSize:10},a.state={header:[],items:[],tableLoading:!1,pagination:{total:0,current:0,pageSize:a.searchParam.size}},a.getItem=function(e){var t={};return a.state.items.forEach(function(a){a.agentId===e&&(t=a)}),t},a.searchData=E()(d.a.mark(function e(){var t,n,r,c,o,i,l,s;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({tableLoading:!0}),e.next=3,y.FNC_004(a.searchParam);case 3:t=e.sent,n=t.HEAD,r=t.BODY,c=n.MSG,"000"===n.CODE?(o=r.header,i=r.rows,l=r.total,(s=f()({},a.state.pagination)).total=l,a.setState({header:o,items:i,tableLoading:!1,pagination:s})):g.a.error(c);case 8:case"end":return e.stop()}},e)})),a.handleTableChange=function(e){a.searchParam.currentPage=e.current,a.setState({pagination:e},function(){a.searchData()})},a.handleChange=function(e){return function(t){console.log("change value "+e+":"+t.target.value),a.searchParam[e]=t.target.value}},a}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){this.searchData()},t.render=function(){var e=this.state,a=e.header,t=e.items,n=e.tableLoading,r=e.pagination;return React.createElement(o.Fragment,null,React.createElement(l.a,null,React.createElement(u.a,{span:8},React.createElement(m.a.Item,{label:"用户手机号",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(h.a,{placeholder:"请输入手机号",onChange:this.handleChange("mobile")}))),React.createElement(u.a,{span:8},React.createElement(m.a.Item,{label:"用户名称",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(h.a,{placeholder:"请输入名称",onChange:this.handleChange("agentName")}))),React.createElement(u.a,{span:8},React.createElement(s.a,{type:"primary",style:{marginTop:4,position:"absolute",right:0},onClick:this.searchData},"查询"))),React.createElement(i.a,{columns:a,onChange:this.handleTableChange,pagination:r,loading:n,dataSource:t,scroll:{x:2e3},size:"middle"}))},a}(o.Component),P=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(a=e.call.apply(e,[this].concat(n))||this).searchParam={agentName:"",mobile:"",currentPage:1,pageSize:10},a.state={header:[],items:[],tableLoading:!1,pagination:{total:0,current:0,pageSize:a.searchParam.size}},a.getItem=function(e){var t={};return a.state.items.forEach(function(a){a.agentId===e&&(t=a)}),t},a.searchData=E()(d.a.mark(function e(){var t,n,r,c,o,i,l,s;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({tableLoading:!0}),e.next=3,y.FNC_002(a.searchParam);case 3:t=e.sent,n=t.HEAD,r=t.BODY,c=n.MSG,"000"===n.CODE?(o=r.header,i=r.rows,l=r.total,(s=f()({},a.state.pagination)).total=l,a.setState({header:o,items:i,tableLoading:!1,pagination:s})):g.a.error(c);case 8:case"end":return e.stop()}},e)})),a.handleTableChange=function(e){a.searchParam.currentPage=e.current,a.setState({pagination:e},function(){a.searchData()})},a.handleChange=function(e){return function(t){console.log("change value "+e+":"+t.target.value),a.searchParam[e]=t.target.value}},a}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){this.searchData()},t.render=function(){var e=this.state,a=e.header,t=e.items,n=e.tableLoading,r=e.pagination;return React.createElement(o.Fragment,null,React.createElement(l.a,null,React.createElement(u.a,{span:8},React.createElement(m.a.Item,{label:"用户手机号",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(h.a,{placeholder:"请输入手机号",onChange:this.handleChange("mobile")}))),React.createElement(u.a,{span:8},React.createElement(m.a.Item,{label:"用户名称",labelCol:{span:6},wrapperCol:{span:16}},React.createElement(h.a,{placeholder:"请输入名称",onChange:this.handleChange("agentName")}))),React.createElement(u.a,{span:8},React.createElement(s.a,{type:"primary",style:{marginTop:4,position:"absolute",right:0},onClick:this.searchData},"查询"))),React.createElement(i.a,{columns:a,onChange:this.handleTableChange,pagination:r,loading:n,dataSource:t,scroll:{x:2e3},size:"middle"}))},a}(o.Component);t.d(a,"default",function(){return x});var x=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props.match;return React.createElement("div",null,React.createElement(c.Switch,null,React.createElement(c.Route,{path:e.url+"/deductibleRecord",component:function(e){return React.createElement(N,e)}}),React.createElement(c.Route,{path:e.url+"/factoringManagement",component:function(e){return React.createElement(A,e)}}),React.createElement(c.Route,{path:e.url+"/rechargeRecord",component:function(e){return React.createElement(S,e)}}),React.createElement(c.Route,{path:e.url+"/repaymentRecord",component:function(e){return React.createElement(P,e)}})))},a}(o.Component)}}]);