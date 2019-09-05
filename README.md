# 九五云客服监控SDK

# 使用方法
## 引用文件
需要引用的js和css可以通过releases下载，也可以通过npm run build:prod命令重新打包获得。
```
<!--引入css-->
<link rel="stylesheet" type="text/css" href="./css/AgentMonitor.css">
<!--引入js-->
<script src='./AgentMonitor.js'></script>
```

## 集成
### 使用九五云客服话条SDK PhoneBar集成

已经使用话条SDK集成了话条的，集成监控也非常的简单。
```
new AgentMonitor({
    renderTo: 'agentMonitor',
    phoneBar: phoneBar
});
```
PS: 初始化监控前必须保证话条已经初始化成功

### 使用自定义话条集成
使用自定义话条集成需要额外覆写多个方法，以获取自定义的数据

初始化坐席监控
```
 agentMonitor = new AgentMonitor({
    renderTo: 'agentMonitor',
    thisDN: 'xxxxxx',
    agentID: 'xxxxxx'
});
```
- `thisDN`坐席分机号，当不使用话条组件时此属性必填
- `agentID`坐席工号，当不使用话条组件时此属性必填

初始化以后需要设置的其他数据
- `agentMonitor.setTimeOffset(offset)`设置服务器与本地时间偏差，单位毫秒
- `setMonitorMembers(monitorGroupList)`设置监控成员，入参需要监控的监控组数组如
```
[{
	"monitorId": "102960002",
	"monitorName": "XA监控2组",
	"groupMemberList": [{
		"nameCn": "XA1007",
		"agentId": "102961007"
	}]
}, {
	"monitorId": "102960003",
	"monitorName": "XA监控3组",
	"groupMemberList": [{
		"nameCn": "XA1004",
		"agentId": "102961018"
	}, {
		"nameCn": "XA1005",
		"agentId": "102961019"
	}]
}]
```
- `updateAgentInfo(agentInfo)`变更监控的坐席信息，入参类型`AgentInfo`



覆写以下方法
```
//---------------对第三方开放接口------------------------
/**
 * 开始监控坐席
 * @param agentDNs
 */
startAgentsMonitoring(agentDNs) {
}

/**
 * 设置坐席状态为就绪状态
 * @param agentDN
 */
agentReadyM(agentDN) {
}

/**
 * 设置坐席状态为非就绪状态
 * @param agentDN
 * @param reason  非就绪状态原因
 */
agentNotReadyM(agentDN, reason) {
}

/**
 * 监听
 * @param callID
 * @param agentDN
 */
monitorCall(callID, agentDN) {
}

/**
 * 强插
 * @param callID
 * @param agentDN
 * @param otherDN
 */
interruptCall(callID, agentDN, otherDN) {
}

/**
 * 拦截
 * @param callID
 * @param agentDN
 * @param otherDN
 */
substitute(callID, agentDN, otherDN) {
}

/**
 * 挂断电话
 * @param callID
 * @param agentDN
 */
releaseAgentCall(callID, agentDN) {
}
```

