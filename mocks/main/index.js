const Mock = require('mockjs');
module.exports = {
    '/AGT_001'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                pageTotal: 100,
                total: 1000,
                page: 3,
                "rows|10": [
                    {
                        agentId: 1,
                        agentName: '代理商名称',
                        mobile: '123412341234',
                        idCard: '123412341234',
                        createTime: 123412341234,
                        invitationCode: '1234',
                        parentName: '上级代理',
                        sumAgent: 1234,
                        sumSn: 1234,
                        sumActivation: 1234,
                        sumAmount: 123123,
                        state: 10,
                    }
                ]
            }
        }))
    },
    '/AGT_003'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {}
        }))
    },
    '/AGT_005'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {}
        }))
    },
    '/AGT_006'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {}
        }))
    },
    '/AGT_007'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                "rows": [
                    {policyId: '1', name: '123',},
                    {policyId: '2', name: '1234',}
                ]
            }
        }))
    },
    '/AGT_012'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                "subBranchList": [
                    {paybankNo: '1', cityCode: '123', accbankNo: ''},
                    {paybankNo: '2', cityCode: '1234', accbankNo: ''},
                ]
            }
        }))
    },
    '/AGT_013'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                "res": [
                    {bankLogId: '1', bankName: '123', bankLogUrl: ''},
                    {bankLogId: '2', bankName: '123', bankLogUrl: ''},
                ]
            }
        }))
    },
    '/ACT_001'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                "rows": [
                    {policyActivationId: '1', record: '123',},
                    {policyActivationId: '2', record: '1234',}
                ]
            }
        }))
    },
    '/ACT_012'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                "subBranchList": [
                    {paybankNo: '中国银行', cityCode: '123', accbankNo: '龙华支行'},
                    {paybankNo: '中国银行', cityCode: '123', accbankNo: '龙华支行'},
                ]
            }
        }))
    },
    '/COU_001'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                "rows": [
                    {policyCouponId: '1', record: '123',},
                    {policyCouponId: '2', record: '1234',}
                ]
            }
        }))
    },
    '/ITY_001'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                "rows": [
                    {policyActivityId: '1', record: '123',},
                    {policyActivityId: '2', record: '1234',}
                ]
            }
        }))
    },
    '/POS_006'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                "rows": [
                    {price: '1', term: '123',},
                    {price: '1', term: '123',},
                ]
            }
        }))
    },
    '/AGT_008'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                rows: {
                    policyId: '1',
                    agentId: '1',
                    txnRate: '231',
                    txnFee: '123',
                    agentRate: '123',
                    agentFee: '123',
                    activationPrice: '123',
                    activityPrice: "123",
                    vipPrice: "123",
                }
            }
        }))
    },
    '/AGT_014'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                rows: {
                    agentId: '1',
                    txnRate: '1',
                    activationRate: '231',
                    vipRate: '123',
                    activityRate: '123',
                }
            }
        }))
    },

    '/POS_011'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                pageTotal: 100,
                total: 1000,
                page: 3,
                "rows|10": [
                    {
                        startSn: '终端号始  ',
                        endSn: '终端号末    ',
                        total: 123,
                        name: '123',
                        state: 1,
                        anentName: '上级代理',
                        createTime: '1234',
                    }
                ]
            }
        }))
    },
    '/POS_012'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                BODY: {}
            }
        }))
    },
    '/POS_014'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                rows: {
                    orderNo: '订单号',
                    price: '单价',
                    num: '总数量',
                    term: '总期数',
                    amount: '保理总额',
                    termAmount: '每期金额',
                    agentName: '发送人',
                    toAgentName: '接收人',
                    policyName: '政策名称',
                }
                
            }
        }))
    },
    '/POS_001'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                pageTotal: 100,
                total: 1000,
                page: 3,
                "rows|10": [
                    {
                        prefix: '前缀',
                        sn15: '序列号',
                        random: '随机位',
                        secretKey: '密钥',
                        salt: '盐钥',
                        factoryName: '厂商名称',
                    }
                ]
            }
        }))
    },
    '/POS_002'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {}
        }))
    },
    '/POS_003'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                rows: 
                {
                    startSn: 'SN始',
                    endSn: 'SN末',
                }
            }
        }))
    },
    '/POS_009'(req, res) {
        console.log(req,body,param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                pageTotal: 100,
                total: 1000,
                page: 3,
                "rows|10": [
                    {
                        factoryId: 1,
                        factoryNo: '厂商编号',
                        factoryName: '厂商名称',
                        posModel: '支持终端型号',
                        posName: '终端名称',
                    }
                ]
            }
        }))
    },
    '/POS_010'(req, res) {
        console.log(req,body,param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                rows:  {
                    factoryId: 1,                       
                    factoryName: '厂商名称',
                }
            }
        }))
    },
    '/POS_007'(req, res) {
        console.log(req,body,param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                rows:  {
                    idPicture: 'txt文件',
                    factoryId: '厂商ID',
                }
            }
        }))
    },
    '/POS_013'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                pageTotal: 100,
                total: 1000,
                page: 3,
                "rows|10": [
                    {
                        startSn: '终端号始',
                        endSn: '终端号末',
                        total: '几局数量',
                        state: 1,
                        agentName: '划拨人',
                        toAgentName: '接收人',
                        mobile: '划拨人手机号',
                        toMobile: '接收人手机号',
                    }
                ]
            }
        }))
    },


    '/ORD_003'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                "rows|10": [
                    {
                        orderOn: 1,
                        createTime: 123,
                        realName: 123123,
                        payeeMobile: 123,
                        bindSn: '123',
                        txnAmount: 123,
                        txnType: 123,
                        agentName: 123,
                        txnState: 1,
                    }
                ],
                pageTotal: 1,
                page: 1,
                total: 123,
            }
        }))
    },
    '/ORD_002'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                "rows|10": [
                    {
                        orderOn: 1,
                        createTime: 123,
                        realName: 123123,
                        payeeMobile: 123,
                        txnAmount: 123,
                        buyAmount: 123,
                        agentName: 123,
                        txnState: 1,
                    }
                ],
                pageTotal: 1,
                page: 1,
                total: 123,
            }
        }))
    },
    '/ORD_001'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                "rows|10": [
                    {
                        orderOn: 1,
                        createTime: 123,
                        realName: 123123,
                        payeeMobile: 123,
                        bindSn: '123',
                        txnAmount: 123,
                        agentName: 123,
                        txnState: 123,
                    }
                ],
                pageTotal: 1,
                page: 1,
                total: 123,
            }
        }))
    },
    '/ORD_004'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                "rows|10": [
                    {
                        orderOn: 1,
                        createTime: 123,
                        sn: 12,
                        txnType: 13,
                        realName: 123123,
                        mobile: 123,
                        agentName: '123',
                        agentMobile: 123,
                        txnAmount: 123,
                        shareAmount: 123,
                        profitState: 1,
                    }
                ],
                pageTotal: 1,
                page: 1,
                total: 100,
            }
        }))
    },
    '/SYS_006'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                "rows|10": [
                    {
                        versionId: 1,
                        versionNum: 123,
                        url: 12,
                        isForced: 13,
                        record: 123123,
                        createTime: 123,
                        intVersionNum: '123',
                        versionType: 123,
                    }
                ],
                pageTotal: 1,
                page: 1,
                total: 100,
            }
        }))
    },
    '/ORD_005'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                "rows|10": [
                    {
                        orderOn: 1,
                        createTime: 123,
                        bindSn: 123,
                        profitType: 13,
                        realName: 123123,
                        mobile: 123,
                        shareAmount: '123',
                        toPrice: 123,
                        agentName: '123',
                    }
                ],
                pageTotal: 1,
                page: 1,
                total: 100,
            }
        }))
    },
    '/ORD_006'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {
                MSG: '',
                CODE: '000'
            },
            BODY: {
                "rows|10": [
                    {
                        withdrawId: 1,
                        orderOn: 123,
                        createTime: 123,
                        agentName: 13,
                        mobile: 123123,
                        amount: 123,
                        fee: '123',
                        actualAmount: 123,
                        payBankNo: '123',
                        payTime: '123',
                        state: 1,
                    }
                ],
                pageTotal: 1,
                page: 1,
                total: 100,
            }
        }))
    },
    '/ORD_007'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {MSG: '', CODE: '000'},
            BODY: {}
        }))
    },


    '/CST_001'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {MSG: '', CODE: '000'},
            BODY: {
                "rows|10": [
                    {
                        realName: 1,
                        mobile: 123,
                        bindsn: '123',
                        idCard: '123',
                        policyName: '123',
                        actnState: 10,
                        createTime: '123',
                        vipState: 1,
                        agentName: '123',
                        txnRate: '100'
                    }
                ],
                pageTotal: 1,
                page: 1,
                total: 100,
            }
        }))
    },
    '/CST_005'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {MSG: '', CODE: '000'},
            BODY: {}
        }))
    },
    '/CST_006'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {MSG: '', CODE: '000'},
            BODY: {}
        }))
    },
    '/CST_003'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {MSG: '', CODE: '000'},
            BODY: {
                "rows|10": [
                    {
                        realName: 1,
                        mobile: 123,
                        idCard: '123',
                        account: '123',
                        bankName: 10,
                        bankbranchName: '123',
                        agentName: '1234',
                        createTime: '123',
                        state: '100'
                    }
                ],
                pageTotal: 1,
                page: 1,
                total: 100,
            }
        }))
    },


    '/FNC_001'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {MSG: '', CODE: '000'},
            BODY: {
                "rows|10": [
                    {
                        code: '123',
                        createTime: '123',
                        acceptTime: 123,
                        agentName: 123,
                        mobile: 123,
                        toAgentName: 123,
                        toMobile: 123,
                        num: 123,
                        price: 123,
                        amount: 123,
                        term: '123',
                        termAmount: 123,
                        state: '',
                    }
                ],
                pageTotal: 1,
                page: 1,
                total: 100,
            }
        }))
    },
    '/FNC_002'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {MSG: '', CODE: '000'},
            BODY: {
                "rows|10": [
                    {
                        orderNo: 123,
                        code: '123',
                        term: '123',
                        lastDay: 123,
                        dealAmount: 123,
                        remainAmount: 123,
                        frdkAmount: 123,
                        fxdkAmount: 123,
                        vipAmount: 123,
                        hddkAmount: 123,
                        amount: 13,
                        hkTime: 123,
                        dealType: 123,
                        state: 12,
                    }
                ],
                pageTotal: 1,
                page: 1,
                total: 100,
            }
        }))
    },
    '/FNC_003'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {MSG: '', CODE: '000'},
            BODY: {
                "rows|10": [
                    {
                        "orderNo": "ullamco",
                        "code": "quis fugiat",
                        "createTime": "irure aliquip",
                        "deductType": "in quis an",
                        "bindSn": "pariatur labore voluptate",
                        "agentName": "esse veniam fugiat",
                        "mobile": "elit in",
                        "txnRate": "dolor in",
                        "activatioRate": "sit magna",
                        "vipRate": "mollit est",
                        "activityRate": "elit in",
                        "amount": "adipisicing ",
                        "toagentName": "voluptate ut labo"
                    }
                ],
                pageTotal: 1,
                page: 1,
                total: 100,
            }
        }))
    },
    '/FNC_004'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {MSG: '', CODE: '000'},
            BODY: {
                "rows|10": [
                    {
                        "orderNo": "velit consectetur labore quis",
                        "createTime": "Ut aliquip ullamco culpa",
                        "realName": "ea",
                        "mobile": "irure dolore sit veniam",
                        "txnAmount": "in pariatur",
                        "txnFee": "aliquip ut est Excepteur",
                        "txnSelAmt": "veniam in",
                        "agentName": "quis qu",
                        "code": "nulla cupidatat consectetur",
                        "term": "consequat do",
                        "txnState": "Excepteur Lorem"
                    }
                ],
                pageTotal: 1,
                page: 1,
                total: 100,
            }
        }))
    },
    '/ACT_OO2'(req, res) {
        console.log(req.body.param);
        res.json(Mock.mock({
            HEAD: {MSG: '', CODE: '000'},
            BODY: {
                "rows|10": [
                    {
                        policyActivationId: '激活政策ID',
                        depositAmount: '押金金额',
                        cashbackAmount: '返现金额',
                        state: 1,
                        record: '描述',
                    }
                ],
                pageTotal: 1,
                page: 1,
                total: 100,
            }
        }))
    },
}