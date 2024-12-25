<template>
	<view class="board">
		<view class="box">
			<view class="title">报名记录</view>
			<searchBox :showRange="true" :showBroker="true" :showProject="true" :showEmployee="true" :timeStr="timeStr"
				:showOut="true" @handleSearch="handleSearch" @putout="handlePutout">
			</searchBox>
			<view class="table_wrap">
				<view class="tabs flex flex_start">
					<view class="tab" v-for="(item,index) in tabs" :class="currentTab.value==item.value?'active':''"
						@click="changeTab(item)">{{item.text + "（"+item.count+"）"}}</view>
					<view class="sele_area" :class="ifSele?'tab active':''">
						<uni-data-select v-model="statusValue" :localdata="seleTabs" @change="statusChange"
							:clear="false"></uni-data-select>
					</view>
				</view>
				<!-- <view class="btns flex flex_end" v-if="currentTab.value=='enrolled'">
					<view class="btn" @click="batchPass('',true)">批量通过初筛</view>
					<view class="btn" @click="batchPass('',false)">批量拒绝</view>
				</view>
				<view class="btns flex flex_end" v-if="currentTab.value=='wait_check_in'">
					<view class="btn" @click="batchCheckin('',true)">批量通过候选</view>
					<view class="btn" @click="batchCheckin('',false)">批量拒绝</view>
				</view>
				<view class="btns flex flex_end" v-if="currentTab.value=='check_in'">
					<view class="btn" @click="batchSign('',true)">批量通过面试</view>
					<view class="btn" @click="batchSign('',false)">批量拒绝</view>
				</view>
				<view class="btns flex flex_end" v-if="currentTab.value=='wait_entry'">
					<view class="btn" @click="batchEntry('',true)">批量办理入职</view>
					<view class="btn" @click="batchEntry('',false)">批量拒绝</view>
				</view>
				<view class="btns flex flex_end" v-if="currentTab.value=='entry'">
					<view class="btn" @click="batchDepart">批量离职</view>
					<view class="btn" @click="batchPass(false)">导出</view>
				</view> -->
				<uni-table border stripe emptyText="暂无更多数据">
					<uni-tr style="background: #f6f6f6;">
						<!-- <uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;"
							v-if="currentTab.value=='enrolled'||currentTab.value=='wait_check_in' || currentTab.value=='check_in'||currentTab.value=='wait_entry'||currentTab.value=='entry'">
							<view class="flex flex_around">
								<image :src="seleAll?'/static/selected.png':'/static/unselect.png'" mode="widthFix"
									style="width:18px;height:18px;margin-right: 5px;" @click="checkAll"></image>
								<text>全选</text>
							</view>
						</uni-th> -->
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">序号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">工人姓名</uni-th>
						<!-- <uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">身份证号</uni-th> -->
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">手机号</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">基本信息</uni-th>
						<!-- <uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">年龄</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">民族</uni-th> -->
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">报名职位</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">劳务公司</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">来源</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">状态</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;"
							v-if="currentTab.value != 'entry' && currentTab.value != 'depart'">报名时间</uni-th>
						<!-- <uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;"
							v-if="currentTab.value == 'entry-signing-requests'">签约时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;"
							v-if="currentTab.value == 'check-in-signing-requests'">报到时间</uni-th> -->
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;"
							v-if="currentTab.value == 'depart' || currentTab.value == 'entry'">入职时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;"
							v-if="currentTab.value == 'depart'">离职时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;"
							v-if="currentTab.value != 'enrolled'">操作时间</uni-th>
						<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
					</uni-tr>
					<uni-tr v-for="(item,index) in list" :key="index">
						<uni-td align="center">{{index+1+currentCount*(currentPage - 1)}}</uni-td>
						<!-- <uni-td align="center"
							v-if="currentTab.value=='enrolled'||currentTab.value=='wait_check_in' || currentTab.value=='check_in'||currentTab.value=='wait_entry'||currentTab.value=='entry'">
							<image
								:src="selectedIds.indexOf(item.id) == -1?'/static/unselect.png':'/static/selected.png'"
								mode="widthFix" style="width:18px;height:18px;margin-right: 5px;"
								v-if="item.status =='enrolled' ||item.status =='wait_entry' || item.status =='wait_check_in' || item.status =='check_in' || item.status =='entry'"
								@click="addToList(item)"></image>
						</uni-td> -->
						<uni-td align="center">
							<view style="cursor: pointer;color:#1E8EEE;" @click="showWorkerDetail(item)">
								{{item.worker_name}}
							</view>
						</uni-td>
						<!-- <uni-td align="center">{{item.worker_id_card_number}}</uni-td> -->
						<uni-td align="center">{{item.worker_mobile}}</uni-td>
						<uni-td
							align="center">{{item.worker_gender == "male"?"男":(item.worker_gender == "female"?"女":"")}}
							{{(item.worker_age?(" / "+item.worker_age):"")+(item.worker_nation?(" / "+item.worker_nation):"")}}</uni-td>
						<!-- <uni-td align="center">{{item.worker_age}}</uni-td>
						<uni-td align="center">{{item.worker_nation}}</uni-td> -->
						<uni-td align="center">
							<view style="cursor: pointer;color:#1E8EEE;" @click="showProjectDetail(item)">
								{{item.project_name?item.project_name:item.project_id}}
							</view>
						</uni-td>
						<uni-td align="center">{{item.broker_company_name}}</uni-td>
						<uni-td
							align="center">{{sourceRange.filter(el=>{return el.value == item.platform})[0].text}}</uni-td>
						<uni-td align="center">
							<view class="status">{{status.filter(el=>{return el.value == item.status})[0].text}}
							</view>
						</uni-td>
						<uni-td align="center"
							v-if="currentTab.value != 'entry' && currentTab.value != 'depart'">{{item.create_time}}</uni-td>
						<!-- <uni-td align="center"
							v-if="currentTab.value == 'entry-signing-requests'">{{item.create_time}}</uni-td>
						<uni-td align="center"
							v-if="currentTab.value == 'check-in-signing-requests'">{{item.check_in_time}}</uni-td> -->
						<uni-td align="center"
							v-if="currentTab.value == 'depart' || currentTab.value == 'entry'">{{item.entry_time}}</uni-td>
						<uni-td align="center" v-if="currentTab.value == 'depart'">{{item.depart_time}}</uni-td>
						<uni-td align="center" v-if="currentTab.value != 'enrolled'">{{item.update_time}}</uni-td>
						<uni-td align="center" style="padding:8px 0px;">
							<view class="ope flex flex_around">
								<view class="ope_item pass" @click="batchPass(item,true)"
									v-if="item.status == 'enrolled'">
									<image src="/static/ic_btn_pass.png" mode="heightFix"></image>
									初筛通过
								</view>
								<view class="ope_item refuse" @click="batchPass(item,false)"
									v-if="item.status == 'enrolled'">
									<image src="/static/ic_btn_refuse.png" mode="heightFix"></image>初筛拒绝
								</view>
								<view class="ope_item checkin" @click="batchCheckin(item,true)"
									v-if="item.status == 'wait_check_in'">
									<image src="/static/ic_btn_checkin.png" mode="heightFix"></image>候选通过
								</view>
								<view class="ope_item nocheckin" @click="batchCheckin(item,false)"
									v-if="item.status == 'wait_check_in'">
									<image src="/static/ic_btn_nocheckin.png" mode="heightFix"></image>候选拒绝
								</view>
								<view class="ope_item sign" @click="batchSign(item,true)"
									v-if="item.status == 'check_in'">
									<image src="/static/ic_btn_sign.png" mode="heightFix"></image>通过面试
								</view>
								<view class="ope_item nosign" @click="batchSign(item,false)"
									v-if="item.status == 'check_in'">
									<image src="/static/ic_btn_nosign.png" mode="heightFix"></image>面试拒绝
								</view>
								<view class="ope_item sign" @click="batchEntry(item,true)"
									v-if="item.status == 'wait_entry'">
									<image src="/static/ic_btn_sign.png" mode="heightFix"></image>确认入职
								</view>
								<view class="ope_item nosign" @click="batchEntry(item,false)"
									v-if="item.status == 'wait_entry'">
									<image src="/static/ic_btn_nosign.png" mode="heightFix"></image>未入职
								</view>
								<view class="ope_item write" @click="openFollow(item)">
									<image src="/static/ic_btn_write.png" mode="heightFix"></image>写跟进
								</view>
								<!-- <view v-if="item.status == 'signing_expired'">{{item.signing_expired_time}}</view> -->
							</view>
						</uni-td>
					</uni-tr>

				</uni-table>
				<pageBox :page="pagination" @toNext="toNext"></pageBox>
			</view>
		</view>
		<view class="mask" v-if="showMask">
			<view class="inner" v-if="showFirst">
				<view class="inner_top">
					<view class="title" style="margin-bottom: 10px;">办理离职</view>
					<view class="close" @click="close">
						<image src="/static/close_white.png" mode="widthFix"></image>
					</view>
				</view>
				<view class="box" style="padding:0 30px;">
					<view class="table_wrap">
						<uni-table border stripe emptyText="暂无更多数据">
							<uni-tr style="background: #f6f6f6;">
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">工人姓名</uni-th>
								<!-- <uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">身份证号码</uni-th> -->
								<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">手机号</uni-th>
								<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">性别</uni-th>
								<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">年龄</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">入职时间</uni-th>
								<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">操作</uni-th>
							</uni-tr>
							<uni-tr v-for="(item,index) in waitDepartList" :key="index">
								<uni-td align="center">{{item.worker_name}}</uni-td>
								<!-- <uni-td align="center">{{item.worker_id_card_number}}</uni-td> -->
								<uni-td align="center">{{item.worker_mobile}}</uni-td>
								<uni-td
									align="center">{{item.worker_gender == "male"?"男":(item.worker_gender == "female"?"女":"未知")}}</uni-td>
								<uni-td align="center">{{!item.worker_age?"无":item.worker_age}}</uni-td>
								<uni-td align="center">{{item.entry_time}}</uni-td>
								<uni-td align="center" style="padding:8px 0px;">
									<view class="ope flex flex_start">
										<view class="ope_item" @click="deleteData(item.id)">移除</view>
									</view>
								</uni-td>
							</uni-tr>
						</uni-table>
						<view class="btn" style="width:200px;float: right;margin-top:15px;" @click="sureDepart">提交离职办理申请
						</view>
						<!-- <pageBox :page="pagination"  @toNext="toNext"></pageBox> -->
					</view>
				</view>
			</view>
			<view class="inner" v-if="showSecond" style="overflow: hidden;height: 600px;">
				<view class="inner_top">
					<view class="title" style="margin-bottom: 0;">职位详情{{"（"+currentInfo.name+"—"+currentInfo.id+")"}}
					</view>
					<view class="close" @click="close">
						<image src="/static/close_white.png" mode="widthFix"></image>
					</view>
				</view>

				<view class="box">
					<scroll-view scroll-y="true" style="height:100%;
					box-sizing: border-box;">
						<view class="base_box" style="width:50%;">
							<view class="line flex flex_start">
								<view class="tit">职位名称：</view>
								<view class="text">{{currentInfo.name}}</view>
							</view>
							<view class="line flex flex_start">
								<view class="tit">工人薪资：</view>
								<view class="text">
									<!-- {{currentInfo.worker_salary_min}}~{{currentInfo.worker_salary_max}} -->
									{{currentInfo.worker_salary_min==currentInfo.worker_salary_max?"":(currentInfo.worker_salary_min+"~")}}{{currentInfo.worker_salary_max+typeRange.filter(el=>{return el.value == currentInfo.worker_salary_type})[0].text}}
								</view>
							</view>
							<view class="line flex flex_start" style="align-items: start;">
								<view class="tit">职位亮点：</view>
								<view class="text flex flex-start"
									v-if="currentInfo.cleaning_result.highlights.length != 0">
									<view class="tags" v-for="(item,index) in currentInfo.cleaning_result.highlights">
										{{item}}
									</view>
								</view>
								<view class="text flex flex-start"
									v-if="currentInfo.cleaning_result.highlights.length == 0">未添加</view>
							</view>
							<view class="line flex flex_start" style="align-items: start;">
								<view class="tit">负面信息：</view>
								<view class="text flex flex-start"
									v-if="currentInfo.cleaning_result.negative_rules.length != 0">
									<view class="tags"
										v-for="(item,index) in currentInfo.cleaning_result.negative_rules">
										{{item}}
									</view>
								</view>
								<view class="text flex flex-start"
									v-if="currentInfo.cleaning_result.negative_rules.length == 0">未添加</view>
							</view>
							<view class="line flex flex_start">
								<view class="tit">工作地址：</view>
								<view class="text">{{currentInfo.work_address.address}}</view>
							</view>
						</view>
						<view class="base_box" style="width:50%;">
							<view class="line flex flex_start">
								<view class="tit">职位经理：</view>
								<view class="text">{{currentInfo.broker_name+"（"+currentInfo.broker_mobile+"）"}}</view>
							</view>
							<view class="line flex flex_start">
								<view class="tit" style="width: auto;">面试联系人：</view>
								<view class="text">
									{{currentInfo.interview_contact_name?currentInfo.interview_contact_name:"无"}}
								</view>
							</view>
							<view class="line flex flex_start">
								<view class="tit" style="width: auto;">联系人电话：</view>
								<view class="text">
									{{currentInfo.interview_contact_mobile?currentInfo.interview_contact_mobile:"无"}}
								</view>
							</view>
							<view class="line flex flex_start">
								<view class="tit" style="width: auto;">年龄要求：</view>
								<view class="text">{{currentInfo.worker_age_min + "~" + currentInfo.worker_age_max+"岁"}}
								</view>
							</view>
							<view class="line flex flex_start">
								<view class="tit" style="width: auto;">性别要求：</view>
								<view class="text">
									{{currentInfo.worker_gender == "male"?"男":(currentInfo.worker_gender == "both"?"不限":"女")}}
								</view>
							</view>
						</view>
						<view class="line" style="width:100%;margin-top:20px;">
							<view class="tit" style="margin-bottom: 15px;">原始描述：</view>
							<view class="text"
								style="line-height: 28px;white-space: pre-wrap;border:1px solid #ccc;border-radius: 5px;font-size: 14px;padding:10px;box-sizing: border-box;color:#666;">
								{{currentInfo.content}}
							</view>
						</view>
						<view class="line" style="width:100%;">
							<view class="tit" style="margin-bottom: 15px;">职位视频：</view>
							<view class="text">
								<video v-if="currentInfo.videos[0]" :src="currentInfo.videos[0].url" controls
									style="width: 60%;height:260px;"></video>
								<text v-if="!currentInfo.videos[0]">未上传视频</text>
							</view>
						</view>
						<view class="line" style="width:100%;">
							<view class="tit" style="margin-bottom: 15px;">职位图片：</view>
							<view class="text flex flex-start" v-if="currentInfo.images.length != 0">
								<image v-for="(img,index) in currentInfo.images" :src="img.url" mode="widthFix"
									style="width:200px;margin-right:15px;"></image>
							</view>
							<view class="text flex flex-start" v-if="currentInfo.images.length == 0">未上传图片</view>
						</view>
					</scroll-view>

				</view>
			</view>

			<view class="inner" v-if="showThird">
				<view class="inner_top">
					<view class="title" style="margin-bottom: 0;">工人详情{{"（"+currentWorkerInfo.worker_id+")"}}</view>
					<view class="close" @click="close">
						<image src="/static/close_white.png" mode="widthFix"></image>
					</view>
				</view>

				<view class="box" style="padding:0 30px;">
					<view class="base">
						<view class="out_line flex flex_btween">
							<view class="line flex flex_start" style="width:auto;white-space: nowrap;">
								<view class="tit" style="width:auto;">姓名：</view>
								<view class="text">{{currentWorkerInfo.worker_name}}</view>
							</view>
							<view class="line flex flex-start" style="width:auto;white-space: nowrap;">
								<view class="tit" style="width:auto;">基本信息：</view>
								<view class="text">
									{{currentWorkerInfo.worker_gender == "male"?"男":(currentWorkerInfo.worker_gender == "female"?"女":"")}}
									{{(currentWorkerInfo.worker_age?(" / "+currentWorkerInfo.worker_age):"")+(currentWorkerInfo.worker_nation?(" / "+currentWorkerInfo.worker_nation):"")}}
								</view>
							</view>
							<view class="line flex flex-start" style="width:auto;white-space: nowrap;">
								<view class="tit" style="width:auto;">手机号码：</view>
								<view class="text">{{currentWorkerInfo.worker_mobile}}</view>
							</view>

						</view>
					</view>
					<view class="tabs flex flex_start">
						<view class="tab" :class="currentSubTab==0?'active':''" @click="changeSubTab(0)">评估报告</view>
						<view class="tab" :class="currentSubTab==1?'active':''" @click="changeSubTab(1)">履职记录</view>
						<view class="tab" :class="currentSubTab==2?'active':''" @click="changeSubTab(2)">跟进记录</view>
					</view>
					<view class="report" v-if="currentSubTab==0">
						<view class="report_item">
							<view class="tit">候选匹配度</view>
							<view class="list" v-if="currentMatch.candidateMatchScore">
								<view class="item flex flex-start"
									v-for="(value,key,index) in JSON.parse(currentMatch.candidateMatchScore)"
									:key="index" style="line-height: 28px;font-size: 14px;">
									<view class="text">{{key}}：</view>
									<view class="text">{{value}}</view>
								</view>
							</view>
							<view v-if="!currentMatch.candidateMatchScore" style="color:#0092ff;font-size: 14px;">
								暂无数据</view>
							<!-- <rich-text :nodes="currentMatch.candidateMatchScore"></rich-text> -->
						</view>
						<!-- <view class="report_item">
							<view class="tit">工作经验</view>
							<rich-text :nodes="currentMatch.candidateMatchScore"></rich-text>
						</view> -->

						<view class="report_item">
							<view class="tit">聊天记录摘要</view>
							<scroll-view scroll-y="true" :style="{height:currentMatch.chatSummary? '480px':'auto'}">
								<view class="list" v-if="currentMatch.chatSummary">
									<view class="item flex" v-if="item.origin!='system_event'"
										v-for="(item,index) in currentMatch.chatSummary" :key="index"
										:class="item.origin == 'customer'?'from_customer flex-start':'from_system flex_end'"
										:id="'item'+index">
										<image src="/static/user_avatar.png" mode="widthFix"
											v-if="item.origin =='customer'">
										</image>
										<view class="line">
											<view class="item_top flex"
												:class="item.origin == 'customer'?'flex-start':'flex_end'">
												<view class="name">
													{{item.origin=="ai"?item.open_kf_name:(item.origin=="customer"?item.customer_nickname:(item.origin=="receptionist"?item.receptionist_name:"系统事件"))}}
												</view>
												<view class="time">{{item.send_time}}</view>
											</view>
											<view class="item_bot">
												<text>{{item.msg_type=="voice"?"（语音）":""}}</text>{{item.content}}
											</view>
										</view>
										<image src="/static/yoyo_avatar.png" mode="widthFix"
											v-if="item.origin=='ai' || item.origin == 'system_event'"></image>
									</view>
								</view>
								<view v-if="!currentMatch.chatSummary" style="color:#0092ff;font-size: 14px;">
									暂无数据</view>
							</scroll-view>
						</view>


					</view>
					<view class="table_wrap" v-if="currentSubTab==1">
						<uni-table border stripe emptyText="暂无更多数据">
							<uni-tr style="background: #f6f6f6;">
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">职位名称</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">报名时间</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">入职时间</uni-th>
								<uni-th align="center"
									style="font-size: 14px;font-weight: 600;color:#333;">服务地址</uni-th>
								<uni-th align="center" style="font-size: 14px;font-weight: 600;color:#333;">状态</uni-th>
							</uni-tr>
							<uni-tr v-for="(item,index) in workerProjectRecordList" :key="index">
								<uni-td align="center">{{item.name}}</uni-td>

								<uni-td align="center">{{item.create_time}}</uni-td>
								<uni-td align="center">{{item.entry_time}}</uni-td>
								<uni-td align="center">{{item.work_address}}</uni-td>
								<uni-td align="center">
									<view class="status">
										{{status.filter(el => {return el.value == item.status})[0].text}}
									</view>
								</uni-td>
							</uni-tr>
						</uni-table>
					</view>
					<view class="follow" v-if="currentSubTab==2">
						<view class="add_follow flex flex-start">
							<input type="text" v-model="followText2" placeholder="填写当前状态跟进记录" />
							<view class="btn" @click="addFollow">添加</view>
						</view>
						<view class="follow_record" v-if="followList.length">
							<view class="follow_item" v-for="(item,index) in followList" :key="index">
								<view class="follow_cont">{{item.remark}}</view>
								<view class="follow_time flex flex-start">
									<view class="time">{{item.create_time}}</view>
									<view class="status">
										{{status.filter(el=>{return el.value == item.status})[0].text}}
									</view>
									<view class="" v-if="item.for_admin" style="color:#0092ff;">（来自平台）</view>
								</view>
							</view>
						</view>
						<view class="empty" v-if="!followList.length" style="margin-top:15px;color:#0092ff;">暂无跟进记录
						</view>
					</view>
				</view>
			</view>
			<view class="inner" v-if="showFour" style="width:50%;">
				<view class="inner_top">
					<view class="title" style="margin-bottom: 0;">添加跟进记录（{{currentWorkerInfo.worker_name}}）</view>
					<view class="close" @click="close">
						<image src="/static/close_white.png" mode="widthFix"></image>
					</view>
				</view>

				<view class="box" style="padding:30px 30px 0 30px;">
					<view class="line flex flex-start" style="padding-left: 0;">
						<view class="tit" style="margin-right: 15px;width:70px;">选择状态</view>
						<view class="labels flex flex-start">
							<view class="label" v-for="(item,index) in followStatus" :key="index"
								:class="curFollowStatus.id == item.id?'active':''" @click="checkFollowStatus(item)">
								{{status.filter(el=>{return el.value == item.status})[0].text}}
							</view>
						</view>
					</view>
					<view class="text_area">
						<textarea v-model="followText" placeholder="请输入跟进记录" />
					</view>
					<view class="btns flex flex_end">
						<view class="btn cancel" @click="close">取消</view>
						<view class="btn save" @click="saveFollow">保存</view>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import searchBox from "@/components/search_box.vue"
	import pageBox from "@/components/paging_box.vue"
	import commonData from "@/common/commonData.js"
	import {
		saveAs
	} from 'file-saver'
	let app = getApp()
	export default {
		name: "contract_list",
		data() {
			return {
				currentMainTab: 0,
				showResult: false,
				timeStr: "报名",
				followText: "",
				followText2: "",
				list: [],
				typeRange: [{
						value: "month",
						text: "元/月"
					},
					{
						value: "day",
						text: "元/天"
					},
					{
						value: "hour",
						text: "元/时"
					}
				],
				sourceRange: commonData.workerFrom,
				tabs: [...commonData.workerStatus.slice(0, 5)],
				statusValue: "",
				seleTabs: [...commonData.workerStatus.slice(5)],
				ifSele: false,
				status: commonData.workerStatus,
				workerStatus: "all",
				pagination: {},
				showMask: false,
				showFirst: false,
				showSecond: false,
				showThird: false,
				showFour: false,
				seleAll: false,
				selectedIds: [],
				selectedIndex: [],
				currentTab: {
					value: "enrolled",
					text: "待初筛"
				},
				currentPage: 1,
				id: "",
				currentInfo: {
					"broker_mobile": "",
					"broker_name": "",
					"code": "",
					"content": "",
					"id": "",
					"name": "",
					"work_address": "",
					"worker_salary": "",
					"worker_welfare": ""
				},
				waitDepartList: [], //待离职名单
				searEmployee: "",
				searPro: "",
				searStart: "",
				searEnd: "",
				currentWorker: {},
				currentWorkerInfo: {},
				workerCheckinList: [],
				workerProjectRecordList: [],
				workerSalaryList: [],
				currentSubTab: 0,
				followStatus: [{
						value: "enroll_rejected",
						text: "报名拒绝"
					},
					{
						value: "not_check_in",
						text: "失约"
					},
					{
						value: "contract_rejected",
						text: "未签约"
					},
					{
						value: "depart",
						text: "已离职"
					}
				],
				salaryHandlePeriod: commonData.paySalaryPeriod,
				period: commonData.periodList,
				showMoreInfo: false,
				moreText: "展开全部",
				preStatus: "",
				followList: [],
				curFollowStatus: {},
				preCompany: "",
				prePro: "",
				preStart: "",
				preEnd: "",
				currentCount: 15,
				searBroker: "",
				currentMatch: {
					candidateMatchScore: '{"工作内容":"接受工作内容","地点匹配":"可以到岗","时间要求":"适应长白班"}',
					workExperience: "",
					chatSummary: [],
				}
				// selectProId: []
			};
		},
		components: {
			searchBox,
			pageBox
		},
		created() {
			let paramArr = []
			if (location.href.indexOf("?") != -1) {
				paramArr = location.href.split("?")[1].split("&")
			}
			let status = ""
			for (var j = 0; j < paramArr.length; j++) {
				if (paramArr[j].indexOf("status") != -1) {
					status = paramArr[j].split("=")[1]
				}
			}
			let filterArr1 = this.tabs.filter(el => {
				return el.value == status
			})
			if (filterArr1.length == 0) {
				this.ifSele = true
				this.statusValue = status
			}
			let filterArr2 = this.seleTabs.filter(el => {
				return el.value == status
			})
			let filterArr = filterArr1.concat(filterArr2)
			if (filterArr.length > 0) {
				this.currentTab.value = filterArr[0].value
				this.currentTab.text = filterArr[0].text
				// this.statusValue = filterArr[0].value
			}
			this.getStatics()
			this.getList()
			// this.getInfo()
		},
		methods: {
			getStatics() {
				let url = "/admin/project/signing-requests-status/stats?worker_search=" + this.searEmployee +
					"&start_time=" + this.searStart + "&end_time=" + this.searEnd + "&project_search=" + this
					.searPro +
					"&company_name=" + this.searBroker
				this.$request(url).then(res => {
					if (res.code == 0) {
						let len = this.tabs.length
						for (let i = 0; i < len; i++) {
							let key = this.tabs[i].value
							this.tabs[i].count = res.data[key]
						}
						// let len2 = this.seleTabs.length
						// for (let j = 0; j < len2; j++) {
						// 	let key = this.seleTabs[j].value
						// 	this.seleTabs[j].text = this.seleTabs[j].text + "（" + res.data[key] + "）"
						// }
					}
				})
			},
			statusChange(e) {
				console.log(e, "statusChange")
				this.ifSele = true
				this.currentTab.value = this.seleTabs.filter(el => {
					return el.value == e
				})[0].value
				this.currentTab.text = this.seleTabs.filter(el => {
					return el.value == e
				})[0].text
				this.setPageName({
					pageName: "sign_record"
				}, this.id, e, this.preStatus)
				this.getList()
			},
			workerStatusChange(e) {
				console.log(e)
			},
			showProjectDetail(item) {
				let url = "/admin/project/" + item.project_id
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.currentInfo = res.data
						this.showMask = true
						this.showSecond = true
					}
				})
			},
			getReport() {
				let url = "/admin/interview_record/" + this.currentWorkerInfo.id
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.currentMatch = res.data
					}
				})
			},
			openFollow(item) {
				this.currentWorkerInfo = item
				let url = "/admin/log/" + item.worker_id + "/" + item.project_id
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.followStatus = res.data
						this.curFollowStatus = res.data[res.data.length - 1]
						this.showMask = true
						this.showFour = true
					}
				})

			},
			checkFollowStatus(item) {
				this.curFollowStatus = item
			},
			saveFollow() {
				let data = {
					"worker_id": this.currentWorkerInfo.worker_id,
					"project_id": this.currentWorkerInfo.project_id,
					"change_log_id": this.curFollowStatus.id,
					"remark": this.followText
				}
				this.$request("/admin/add/remarks", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "跟进添加成功",
							duration: 2000
						})
						this.close()
					}
				})
			},
			addFollow() {
				let data = {
					"worker_id": this.currentWorkerInfo.worker_id,
					"project_id": this.currentWorkerInfo.project_id,
					"change_log_id": "",
					"remark": this.followText2
				}
				this.$request("/admin/add/remarks", data, "POST").then(res => {
					if (res.code == 0) {
						uni.showToast({
							title: "跟进添加成功",
							duration: 2000
						})
						this.followText2 = ""
						this.getFollowList()
					}
				})
			},
			handlePutout(e) {
				this.searStart = e.startTime
				this.searEnd = e.endTime
				this.searEmployee = e.employeeName
				this.searPro = e.projectName
				this.searBroker = e.brokerName
				let fileName = e.projectName + this.currentTab.text + "工人列表.xlsx"
				let _this = this
				let header = {
					"Authorization": "bearer " + uni.getStorageSync("token"),
					"accept": "application/json"
				}
				let url = app.globalData.baseUrl + "/admin/project/export/signing-requests?page=" + this
					.currentPage +
					"&worker_search=" + this.searEmployee + "&start_time=" + this.searStart + "&end_time=" + this
					.searEnd +
					"&page_size=15" + "&project_search=" + this.searPro + "&status=" + this.currentTab.value +
					"&company_name=" + this.searBroker
				uni.downloadFile({
					url: url,
					header: header,
					success: (res) => {
						console.log(res)
						if (res.statusCode === 200) {
							saveAs(res.tempFilePath, fileName);
						}
					}
				})
			},
			toNext(e1, e2) {
				this.currentPage = e1
				this.currentCount = e2
				this.resetSeleData()
				this.getList()
			},
			showWorkerDetail(item) {
				this.currentWorkerInfo = item
				this.getReport()
				let url = "/admin/worker/" + item.id + "/infov"
				this.$request(url).then(res => {
					if (res.code == 0) {
						// this.currentWorkerInfo = res.data
						this.showMask = true
						this.showThird = true
						this.getWorkerProjectRecord(item.worker_id)
						this.getFollowList()
					}
				})
			},
			getWorkerProjectRecord(id) {
				let url = "/admin/worker/" + id + "/request/list"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.workerProjectRecordList = res.data.list
					}
				})
			},
			getWorkerSalaryList(id) {
				let url = "/admin/project/salary/" + id + "/list"
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.workerSalaryList = res.data.list
					}
				})
			},
			changeTab(item) {
				this.ifSele = false
				this.currentPage = 1
				this.currentTab.value = item.value
				this.currentTab.text = item.text
				this.setPageName({
					pageName: "sign_record"
				}, "", item.value, this.preStatus)
				this.getList()
				this.resetSeleData()
			},
			resetSeleData() {
				this.selectedIds = [];
				this.selectedIndex = [];
				this.seleAll = false
			},
			changeSubTab(index) {
				this.currentSubTab = index
			},
			getFollowList() {

				let url = "/admin/remarks/" + this.currentWorkerInfo.worker_id + "/" + this.currentWorkerInfo
					.project_id
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.followList = res.data
					}
				})
			},
			addToList(item) {
				let id = item.id
				console.log(id)
				// 如果存在就移除，不存在就push
				if (this.selectedIds.indexOf(id) == -1) {
					this.selectedIds.push(id)
					// this.selectProId.push(item.project_id)
				} else {
					// this.selectProId.splice(this.selectedIds.indexOf(id), 1)
					this.selectedIds.splice(this.selectedIds.indexOf(id), 1)
				}
				if (this.selectedIds.length == this.list.length) {
					this.seleAll = true
				} else {
					this.seleAll = false
				}
				console.log(this.selectedIds)
			},
			checkAll() {
				this.seleAll = !this.seleAll
				if (this.seleAll) {
					let len = this.list.length;
					let arr = []
					let indexArr = []
					for (var i = 0; i < len; i++) {
						arr.push(this.list[i].id)
						indexArr.push(i)
						// if (this.selectProId.indexOf(this.list[i].project_id) == -1) {
						// 	this.selectProId.push(this.list[i].project_id)
						// }
					}
					this.selectedIds = arr
					this.selectedIndex = indexArr
				} else {
					this.selectedIds = []
					this.selectedIndex = []
				}
				console.log(this.selectedIds)
			},
			navigate(obj, id) {
				this.setPageName(obj, id)
			},
			getList() {
				let url = "/admin/project/signing-requests?page=" + this.currentPage +
					"&worker_search=" + this.searEmployee + "&start_time=" + this.searStart + "&end_time=" + this
					.searEnd +
					"&page_size=15" + "&project_search=" + this.searPro + "&page_size=" + this.currentCount +
					"&status=" +
					this.currentTab.value + "&company_name=" + this.searBroker
				this.$request(url).then(res => {
					if (res.code == 0) {
						this.list = res.data.list
						this.pagination = res.data.pagination
					}
				})
			},
			deleteData(id) {
				this.selectedIds.splice(this.selectedIds.indexOf(id), 1)
				this.batchDepart()
				if (this.selectedIds == 0) {
					this.close()
					this.seleAll = false
				}
			},
			handleSearch(e) {
				this.currentPage = 1
				this.searBroker = e.brokerName
				this.searEmployee = e.employeeName
				this.searPro = e.projectName
				this.searStart = e.startTime
				this.searEnd = e.endTime
				this.getList()
				this.getStatics()
			},
			batchPass(item, confrimType) {
				let _this = this
				let arr = []
				let data = {
					"relation_id": [], // 选择数据ID
					"project_id": item.project_id, // 职位ID
					"confirm": confrimType, // true 审核 false 拒绝
					"remark": "" // 备注 （非必填）
				}
				if (item.id) {
					arr.push(item.id)
					data.relation_id = arr
				} else {
					data.relation_id = _this.selectedIds
				}
				if (data.relation_id.length == 0) {
					uni.showToast({
						title: "未选择任何数据",
						icon: "error",
						duration: 2000
					})
					return
				}
				let tips = confrimType ? "已通过" : "已拒绝";
				let tit = confrimType ? "通过" : "拒绝";
				let content = item.id ? ("正在" + tit + "工人：" + item.worker_name) : ("正在批量初筛" + tit)
				uni.showModal({
					title: content + "，是否确认该操作？",
					confirmText: "确认" + tit,
					confirmColor: confrimType ? "#0092ff" : "#f00",
					success(resp) {
						if (resp.confirm) {
							_this.$request("/admin/project/enroll-confirm", data, "POST").then(res => {
								if (res.code == 0) {
									_this.handleBatchResult(confrimType, tips, item)
								}
							})
						}
					}
				})

			},
			batchCheckin(item, confrimType) {
				let _this = this
				let arr = []
				let data = {
					"relation_id": [], // 选择数据ID
					"project_id": item.project_id, // 职位ID
					"confirm": confrimType, // true 审核 false 拒绝
					"remark": "" // 备注 （非必填）
				}
				if (item.id) {
					arr.push(item.id)
					data.relation_id = arr
				} else {
					data.relation_id = _this.selectedIds
				}
				if (data.relation_id.length == 0) {
					uni.showToast({
						title: "未选择任何数据",
						icon: "error",
						duration: 2000
					})
					return
				}
				let tips = confrimType ? "已接收" : "已拒绝接收";
				let tit = confrimType ? "接收" : "拒绝";
				let content = item.id ? ("正在" + tit + "工人：" + item.worker_name) : ("正在批量" + tit)
				uni.showModal({
					title: content + "，是否确认该操作？",
					confirmText: "确认" + tit,
					confirmColor: confrimType ? "#0092ff" : "#f00",
					success(resp) {
						if (resp.confirm) {
							_this.$request("/admin/project/check-in", data, "POST").then(res => {
								if (res.code == 0) {
									_this.handleBatchResult(confrimType, tips, item)
								}
							})
						}
					}
				})

			},
			handleBatchResult(confrimType, tips, item) {
				let _this = this
				if (!confrimType) {
					uni.showModal({
						title: tips + "是否现在填写跟进信息？",
						confirmText: "写跟进",
						success(resp) {
							if (resp.confirm) {
								_this.openFollow(item)
							}
						}
					})
				} else {
					uni.showToast({
						title: tips,
						duration: 2000,
						icon: "none"
					})
				}
				_this.getStatics()
				_this.resetSeleData()
				_this.getList()
			},
			batchSign(item, confrimType) {
				let _this = this
				let arr = []
				let data = {
					"relation_id": [], // 选择数据ID
					"project_id": item.project_id, // 职位ID
					"confirm": confrimType, // true 审核 false 拒绝
					"remark": "" // 备注 （非必填）
				}
				if (item.id) {
					arr.push(item.id)
					data.relation_id = arr
				} else {
					data.relation_id = _this.selectedIds
				}
				if (data.relation_id.length == 0) {
					uni.showToast({
						title: "未选择任何数据",
						icon: "error",
						duration: 2000
					})
					return
				}
				let tips = confrimType ? "已面试" : "面试未通过";
				let tit = confrimType ? "通过" : "拒绝";
				let content = item.id ? ("正在" + tit + "工人：" + item.worker_name) : ("正在批量" + tit)
				uni.showModal({
					title: content + "面试，是否确认该操作？",
					confirmText: "面试" + tit,
					confirmColor: confrimType ? "#0092ff" : "#f00",
					success(resp) {
						if (resp.confirm) {
							_this.$request("/admin/project/contract-confirm", data, "POST").then(res => {
								if (res.code == 0) {
									_this.handleBatchResult(confrimType, tips, item)
								}
							})
						}
					}
				})

			},
			batchEntry(item, confrimType) {
				let _this = this
				let arr = []
				let data = {
					"relation_id": [], // 选择数据ID
					"project_id": item.project_id, // 职位ID
					"confirm": confrimType, // true 审核 false 拒绝
					"remark": "" // 备注 （非必填）
				}
				if (item.id) {
					arr.push(item.id)
					data.relation_id = arr
				} else {
					data.relation_id = _this.selectedIds
				}
				if (data.relation_id.length == 0) {
					uni.showToast({
						title: "未选择任何数据",
						icon: "error",
						duration: 2000
					})
					return
				}
				let tips = confrimType ? "入职成功" : "已标记未入职";
				let tit = confrimType ? "入职" : "未入职";
				let content = item.id ? ("正在" + tit + "工人：" + item.worker_name) : ("正在批量标记" + tit)
				uni.showModal({
					title: content + "，是否确认该操作？",
					confirmText: "确认" + tit,
					confirmColor: confrimType ? "#0092ff" : "#f00",
					success(resp) {
						if (resp.confirm) {
							_this.$request("/admin/project/entry-confirm", data, "POST").then(res => {
								if (res.code == 0) {
									_this.handleBatchResult(confrimType, tips, item)
								}
							})
						}
					}
				})

			},
			close() {
				this.showMask = false
				this.showFirst = false
				this.showSecond = false
				this.showThird = false
				this.showFour = false
				this.followText = ""
				this.followText2 = ""
			},
			sureDepart() {
				let _this = this
				uni.showModal({
					title: "请确认离职名单是否正确，提交后无法修改，是否确认批量离职？",
					success(res) {
						if (res.confirm) {
							let data = {
								"relation_id": _this.selectedIds, // 已经选择数据ID
								"project_id": item.project_id, // 职位ID
							}
							_this.$request("/admin/project/confirm-depart-user", data, "POST").then(
								resp => {
									if (resp.code == 0) {
										_this.getStatics()
										_this.resetSeleData()
										_this.getList()
										_this.close()
										uni.showModal({
											title: "离职办理成功",
											showCancel: false
										})
									}
								})
						}
					}
				})
			},
			batchDepart() {
				if (this.selectedIds.length == 0) {
					uni.showToast({
						title: "您还未选择数据",
						icon: "error",
						duration: 2000
					})
					return
				}
				let arr = []
				let len = this.list.length
				let seleLen = this.selectedIds.length
				console.log(this.list, this.selectedIds)
				for (var i = 0; i < len; i++) {
					for (var j = 0; j < seleLen; j++) {
						if (this.list[i].id == this.selectedIds[j]) {
							arr.push(this.list[i])
						}
					}
				}
				this.waitDepartList = arr
				this.showMask = true
				this.showFirst = true
			},
		}
	}
</script>

<style lang="scss">
	::v-deep {
		.search_box {
			margin: 0;
		}



		.uni-table .uni-table-tr:nth-child(n + 2):hover {
			background-color: #dce4fa;
			cursor: pointer;
		}

		.uni-stat__select {
			width: 130px;
			display: block;
			flex: 0.2;
		}

		.uni-select {
			font-size: 15px;
			height: 50px;
		}
	}

	.sele_area {
		width: 100px;
	}

	.report {
		::v-deep {
			.uni-scroll-view-content {
				display: block;
			}
		}

		.report_item {
			margin-bottom: 40px;

			&:last-child {
				margin-bottom: 0;
			}

			.tit {
				font-weight: 600;
				font-size: 15px;
				margin-bottom: 15px;
			}

			.list {
				.item {
					align-items: start;

					image {
						width: 35px;
						height: 35px;
						border-radius: 50%;
					}

					.item_bot {
						padding: 10px;
						box-sizing: border-box;
						border-radius: 10px;
					}

					.line {
						max-width: 70%;
						padding: 0 10px;
						box-sizing: border-box;
						margin-bottom: 20px
					}

					&.from_customer {
						.line {
							.item_bot {
								background: #f6f6f6;

							}
						}

						// float: left;


					}

					&.from_system {
						.line {
							.item_top {
								text-align: right;
							}

							.item_bot {
								// text-align: left;
								background: #EBF5FF;

							}
						}

						// float: right;
					}
				}
			}
		}
	}

	.labels {
		.label {
			padding: 5px 15px;
			background: #e7ebef;
			border-radius: 6px;
			margin-right: 15px;
			font-size: 14px;
			cursor: pointer;

			&.active {
				background: #0092ff;
				color: #fff;
			}
		}
	}

	.text_area {
		margin-top: 15px;

		textarea {
			min-height: 60px;
			border: 1px solid #ddd;
			width: 100%;
			padding: 10px;
			box-sizing: border-box;
			border-radius: 6px;
		}
	}

	.btns {
		margin-top: 15px;

		.btn {
			margin-left: 15px;

			&.cancel {
				background: #e7ebef;
				color: #333;
			}
		}
	}

	.add_follow {
		input {
			height: 40px;
			width: 340px;
			border: 1px solid #ccc;
			border-radius: 6px;
			outline: none;
			padding: 0 10px;
			margin-right: 15px;
		}
	}

	.follow_record {
		margin-top: 30px;
		position: relative;

		&::before {
			content: "";
			width: 2px;
			height: 100%;
			background: #ddd;
			position: absolute;
			top: 0;
			left: 4px;
		}

		.follow_item {
			margin-bottom: 20px;
			padding-left: 20px;
			box-sizing: border-box;
			position: relative;

			&::before {
				content: "";
				width: 10px;
				height: 10px;
				background: #0092ff;
				border-radius: 50%;
				position: absolute;
				top: 5px;
				left: 0;
			}

			.follow_cont {
				color: #333;
				margin-bottom: 8px;
			}

			.follow_time {
				font-size: 14px;
				color: #5a5a5a;

				.status {
					margin-left: 10px;
					color: #ff8b07;
				}
			}
		}
	}

	.active {
		color: #0da81f;
	}

	.disable {
		color: #f00;
	}

	.disable {
		color: #f00;
	}

	.ope {
		position: relative;
		padding: 0 10px;
		width: 100%;
		box-sizing: border-box;

		.more {
			position: absolute;
			top: calc(100% + 8px);
			left: 0;
			width: 100%;
			z-index: 9;
			background: #fff;
			border-radius: 5px;
			box-shadow: 2px 2px 5px 3px #ddd;
			padding: 5px 0;

			.opera {
				text-align: center;
				height: 30px;
				line-height: 30px;
				cursor: pointer;
			}
		}
	}

	.showmore {
		width: 100%;
		text-align: center;
		margin: 15px 0;
		cursor: pointer;

		view {
			display: inline-block;
			color: #0F90FF;
		}

		image {
			width: 20px;
			vertical-align: middle;
		}
	}

	.base {
		padding: 0 0 10px 0;
		// height: 100px;
		// overflow: hidden;

		&.showall {
			height: auto;
			overflow: visible;
		}

		.out_line {
			.line {
				width: 40%;

				.tit {
					width: 90px;
				}
			}
		}

		.line {
			margin: 15px 0;

			.text {
				color: #666;
				font-size: 14px;

				.tags {
					padding: 5px 10px;
					box-sizing: border-box;
					background: #f1f1f1;
					border-radius: 4px;
					margin-left: 5px;
					margin-bottom: 5px;
				}
			}
		}
	}

	.table_wrap {

		// height:500px;
		// .tabs{
		// 	margin: 15px 0;
		// 	border-bottom: 2px solid $base-color;
		// 	.tab{
		// 		padding:10px 15px;
		// 		cursor: pointer;	
		// 		&:hover{
		// 			color:$base-color;
		// 		}
		// 		&.active{
		// 			background: $base-color;
		// 			color:#fff;
		// 			border-top-left-radius: 4px;
		// 			border-top-right-radius: 4px;
		// 		}
		// 	}
		// }
		.btns {
			margin-bottom: 15px;

			.btn {
				margin-left: 15px;
			}
		}

		.table_top {
			margin-bottom: 15px;

			.btn {
				width: 100px;
				margin-left: 15px;
			}
		}

		.tips {
			margin-bottom: 20px;

			view {
				margin-right: 15px;
				font-size: 14px;

				text {
					color: #0092ff;
				}
			}

			.tip {
				color: #f00;
			}
		}
	}

	.box {
		.line {
			.tit {
				width: auto;
				white-space: nowrap;
				font-weight: 600;
				margin-right: 10px;
			}
		}

		.box_item {
			.tit {
				width: auto;
				white-space: nowrap;
			}

			&:nth-child(2) {
				padding-left: 20px;

				.title {
					height: 40px;
					line-height: 40px;
					margin: 0;
					padding-left: 0;

					&:before {
						display: none;
					}
				}
			}

			.l_tabs {
				.l_tab {
					padding-left: 15px;
					width: 80px;
					height: 40px;
					line-height: 40px;

					&:hover {
						color: #1890FF;
						cursor: pointer;
					}

					&.active {
						background: #E7F7FF;
						color: #1890FF;
						border-right: 3px solid #1890FF;
					}

					.mark {
						display: inline-block;
						margin-left: 10px;
						color: #f00;
					}
				}
			}
		}

		.box_right {
			width: calc(100% - 80px);
		}
	}

	.mask {
		.inner {
			.title {
				position: relative;
				margin-bottom: 30px;
				font-weight: 600;

				text {
					position: absolute;
					font-size: 14px;
					top: 50%;
					right: 0;
					transform: translateY(-50%);
					color: $base-color;
				}
			}

			.tabs {
				margin-bottom: 15px;

				.tab {
					padding: 5px 10px;
					border: 1px solid #ccc;
					margin-right: 15px;
					border-radius: 4px;
					cursor: pointer;

					&.active {
						background: $base-color;
						color: #fff;
						border: 1px solid $base-color;
					}
				}
			}

			.setting_box {
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.5);
				position: absolute;
				top: 0;
				left: 0;
				z-index: 100;

				.set_inner {
					width: 230px;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					z-index: 100;
					background: #fff;
					padding: 20px;
					border-radius: 6px;

					.subtit {
						font-size: 18px;
					}

					.line {
						padding-left: 10px;
						margin: 20px 0;

						.tit {
							width: 90px;
						}

						.input_wrap {
							width: calc(100% - 70px);
							height: 40px;
							line-height: 40px;
							border: 1px solid #eee;

							input {
								height: 40px;
								padding-left: 10px;
							}
						}
					}
				}

			}
		}
	}

	.mask {
		.inner {
			padding-top: 50px;

			.inner_top {
				width: 100%;
				height: 50px;
				position: absolute;
				top: 0;
				left: 0;
			}

			.box {
				height: calc(100% - 50px);
				max-height: calc(100% - 50px);
				box-sizing: border-box;

				.report {
					::v-deep {
						.uni-scroll-view-content {
							display: block;
						}
					}
				}

				::v-deep {
					.uni-scroll-view-content {
						display: flex;
						justify-content: flex-start;
						align-items: start;
						flex-wrap: wrap;
					}
				}
			}

		}
	}
</style>