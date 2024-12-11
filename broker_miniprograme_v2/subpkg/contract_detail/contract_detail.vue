<template>
	<view class="content">
		<view class="moreinfo policy">
			<!-- <view class="num">合同编号：NO.9872018283910</view> -->
			<view class="head">
				<view class="title">自由职业者服务协议</view>
			</view>
			<view class="base">
				<view class="line">甲方：{{info.employer_name}}</view>
				<view class="line">乙方：{{userInfo.name}}</view>
				<view class="line">地址：{{info.work_address}}</view>
				<view class="line">服务费用：¥{{info.salary}}</view>
			</view>
			   <view class="subtit">提示条款:</view>
			   <view class="text">欢迎您(即“乙方”)与甲方<text></text>签署本《自由职业者服务协议》 (下称“本协议”)并为甲方提供服务。</view>
			   <view class="text">服务时间：<text class="time">{{info.work_time}}</text></view>
			   <view class="text">服务费用：<text>&yen;{{info.salary}}</text></view>
			   <view class="text"><text class="heavy">【审慎阅读】为维护您的自身权益，在您点击同意或书面签署本协议之前，请认真阅读本协议，务必审慎阅读、充分理解各条款内容，特别是权利义务条款、法律适用和管辖条款。上述条款以粗体及下划线标识，您应重点阅读。</text></view>
			   <view class="text"><text class="heavy">【签约】当您按照提示填写您的个人信息、阅读并同意本协议且完成全部申请或书面签署后，即表示您已充分阅读、理解并接受本协议的全部内容，并与甲方达成一致意见并成为甲方的合作人员，此后您不得以未阅读/不理解本协议内容或类似言辞任何形式的抗辩。阅读本协议的过程中，如果您不同意本协议或其中任何条款约定，请您立即停止任何的申请/注册/或书面签署程序。</text></view>
			   <view class="text"><text class="heavy">【合作关系】您与甲方通过本协议建立合作关系，适用《中华人民共和国民法典和其他民事法律，不适用《中华人民共和国劳动法》。</text></view>
			   <view class="subtit">协议条款:</view>
			   <view class="text">根据国家法律有关规定，双方按照平等自愿、诚实信用的原则，就由您为甲方提供<text>{{info.content}}</text> 服务事宜订立本服务合作协议。</view>
			   <view class="subtit">一、服务工作内容</view>
			   <view class="text">1.1 因甲方工作需要,特选用您按照甲方相关合同的规定提供<text>{{info.content}}</text> 服务。</view>
			   <view class="text">1.2 您应按照甲方相关合同要求规定的标准完成工作</view>
			   <view class="text">1.3 您承诺和保证，<text class="heavy">您具有提供本协议服务所对应的相应资质和专业能力，您依据本合同约定收取相关费用不违反任何法律法规和政策规定。</text> 若依据相关规定，您提供的相关服务和收费，应通过所在机构或以其他法律规定的方式进行，则您自行负责办理全部事宜，<text class="heavy">若因您的自身原因未办理前述事宜，则您应承担由此引起的全部法律后果，并赔偿由此给甲方造成的全部经济损失。</text> </view>
			   <view class="subtit">二、协议效力</view>
			   <view class="text">2.1 <text class="heavy">您的签约信息(包括您的姓名、身份证号等信息)，以您提供的信息为准(括但不限于线上提供或线下提供)。您承诺并保证您所提供的签约信息真实、准确，以免影响您和甲方之间的《服务合作协议》效力。</text>本协议条款若在甲方授权的网站上发布，自您线上点击确认之日起生效，若为书面签署，自您签署本协议之日起生效。</view>
			   <view class="text">2.2 <text class="heavy">本协议自签订服务时间段内有效。期限届满，双方应另行签署新的协议。</text>若对方未签署新的协议，而以实际行动继续合作的，视为双方同意协议期限顺延直至按照本协议约定终止或解除时为止</view>
			   <view class="text">2.3 <text class="heavy">本协议在发生下列情形时自然终止:</text></view>
			   <view class="text"><text class="heavy">a.经甲方事先同意的情况下，您主动退出服务的；</text></view>
			   <view class="text"><text class="heavy">b.甲方认为您不适合继续提供服务的；</text></view>
			   <view class="text"><text class="heavy">c.其他原因导致本协议不再继续履行的。</text></view>
			   <view class="subtit">三、甲方的权利和义务</view>
			   <view class="text">3.1 您应根据甲方的安排为甲方服务，服务期间您应遵守甲方有关服务内容、服务质量等方面的要求。甲方可根据自身的要求制定具体工作安排，您应予遵守。</view>
			   <view class="text">3.2 <text class="heavy">甲方将按甲方的相关规定对您为甲方提供服务的工作成果进行验收。</text></view>
			   <view class="text">3.3 <text class="heavy">甲方应按本协议约定的服务费用及时向您支付费用。</text></view>
			   <view class="text">3.4 您同意，您不可撤销地授权甲方有权为提供前述费用结算服务的要获取您的相关信息(包括但不限于个人身份信息、实名登记手机号码、银行账户相关并将您的相关信息提交第三方机构进行身份验证。<text class="heavy">若您提供任何错误、虚假.信息等)，失效或不完整的资料，或者甲方有合理的理由怀疑资料为错误、虚假、过期或不完整，甲方有权暂停或终止向您提供部分或全部服务，对此甲方不承担任何责任，您承诺并同意负担因此所产生的所有损失，包括但不限于直接损失、间接损失。若因国家法律法规、部门规章或监管机构的要求，甲方需要您补充提供任何相关资料时，如您不能及时配合提供，甲方有权暂停或终止为您提供部分或全部服务。</text></view>
			   <view class="subtit">四、您的权利和义务</view>
			   <view class="text">4.1 您应按时尽责地完成甲方要求的工作内容，并达到规定的质量标准，<text class="heavy">不得有侵犯他人知识产权、财产权、人身权、肖像权、隐私权、商业秘密或其他合法权益以及其他违反国家法律法规、国家政策、或有悖于公序良俗的内容否则，因此导致甲方遭受损失的(包括但不限于行政处罚、民事责任、刑事责任)均由您承担全部赔偿责任，同时甲方有权选择解除本协议。</text></view>
			   <view class="text">4.2 协议期内，您应在甲方许可范内使用本合同有关的商业信息，协议期内以及协议终止后，您均有义务对双方合作的有关协议及合作过程中知悉的甲方的相关信息予以保密，未经书面许可，您不得以任何方式向其它方披露给予或转让该等保密信息。否则，因此导致甲方的损失由您负责赔偿</view>
			   <view class="text">4.3 <text class="heavy">除本协议事项外，您不能以甲方的名义开展任何与完成约定的工作任务无关的业务或活动</text></view>
			   <view class="text">4.4 若相关服务通过甲方指定的网络平台提供，或者甲方指定的相关网平台备案，甲方指定的网络平台可能将要求您签署、点击电子协议，您同意点击签署。您点击确认后该协议将对您产生法律效力。</view>
			   <view class="subtit">五、服务费用的支付</view>
			   <view class="text">5.1 乙方基于其自由职业者活动而取得的费用金额，甲方将完税后金额支付予乙方。</view>
			   <view class="text">5.2 关于服务费具体结算及支付方式，参见附件一。</view>
			   <view class="text">5.3 <text class="heavy">乙方应自行负担就其取得的服务费需缴纳的行政收费（如有）。</text></view>
			   <view class="text">5.4 <text class="heavy">您应向甲方提供以您本人实名注册的对应账户信息，以及相关必要的证件。若具体账户信息在指定的网络平台在线提供的，以您在线提供的信息为准。</text> </view> 
			   <view class="text">5.5 甲方服务费用支付以您提供的收款帐户为准，<text class="heavy">因您提供的收款账户不实造成的一切损失由您自行承担。</text>如您帐号变更或发生不可用等情况时，应及时书面通知甲方可在指定的网络平台进行变更操作，否则，由此造成的一切损失由您自行负责。</view>
			   <view class="text">5.6 <text class="heavy">甲方不承担您任何社保福利待遇，也不负责的任何医疗保险费用。</text></view>
			   <view class="subtit">六、违约责任</view>
			   <view class="text">6.1 双方应按本协议约定履行，如有违反，守约方有权要求对方及时改正;造成对方损失的，守约方有权要求违约方赔偿。</view>
			   <view class="text">6.2 因不可抗力造成损失的，彼此不负赔偿责任，但发生不可抗力一方应及时将有关情况通知另一方，并尽最大努力进行补救。本协议所称不可抗力是指不能预见、不能克服并不能避免且对一方当事人造成重大影响的客观事件，包括但不限于自然灾害如洪水、地震、火灾和风暴等以及社会事件如战争、动乱、政府行为、黑客事件、大范围电信事故等。</view>
			   <view class="subtit">七、协议的终止</view>
			   <view class="text">7.1 发生以下情形时，本协议终止:</view>
			   <view class="text">a. 协议期限届满或任何一方提前30日书面通知对方要求终止协议的，<text class="heavy">但您要求终止协议应事先获得甲方的同意并不得影响合作甲方的运营;</text></view>
			   <view class="text"><text class="heavy">b.一方违反协议约定，且违约方在非违约方书面通知后15日内仍未予改正的，非违约方可以书面通知的形式终止本协议;</text></view>
			   <view class="text"><text class="heavy">c.您如未能达到甲方的要求，甲方在工作验收时将给予警告:此后如仍发生类似情况的，甲方可提前终止本协议。</text></view>
			   <view class="text">7.2 本协议的提前终止不影响已经产生的权利义务关系。</view>
			   <view class="subtit">八、涉税事务委托授权</view>
			   <view class="text">8.1您/本人委托甲方代理本合同交易项下的税事务括代理报税、代开发票代开个人完税证明。甲方在向您支付服务费时，有权按照有关税收政策规定及甲方主管税务机关的要求，向其代征个人所得税等税款及行政收费(如有)，该等款项将人甲方企业客户所支付的服务费中予以扣减。应甲方要求，您应提供与税款申报缴纳相关的协助及信息</view>
			   <view class="text">8.2您/本人确认甲方根据本合同授权提交的相关申报资料和信息是真实、完整、准确，和符合有关法律法规的。</view>
			   <view class="text">8.3 您/本人确认与甲方的合作甲方不存在法律上和事实上的人事劳动关系，不属于合作甲方人事管理权限范围内的个人，也并非其股东。</view>
			   <view class="subtit">九、其他</view>
			   <view class="text">9.1 因履行本协议发生的纠纷，双方应友好协商解决，协商不成的，提请至当地仲裁委员会按照其仲裁规则仲裁解决。</view>
			   <view class="text">9.2 甲方有权根据业务需要修改本协议条款。</view>
			   <view class="title">附件一 服务费的结算与支付规则</view>
			   <view class="text">就本协议第五条规定的服务费的具体支付及结算方式,双方应按照下列规则进行执行:</view>
			   <view class="text">1. 甲方将按照合同约定的服务费支付给乙方。</view>
			   <view class="text">2. 甲方向乙方支付服务费，具体应支付至乙方提供的收款账户。<text class="heavy">若因乙方原因提供的收款账户信息有误的，应由乙方自行承担相关责任后果。</text> </view>
			   <view class="text">3. 本协议对服务费的结算周期不作明确约定，视具体活动内容及需求，双方可自行协商。</view>
			   <view class="footer">
			    <view class="left">
			        <view><text class="heavy">甲方: {{info.employer_name}}</text><text></text></view>
			    </view>
			    <view class="right">
			        <view><text class="heavy">已方:</text> <text>{{userInfo.name}}</text></view>
			        <view><text class="heavy">身份证号码:</text> <text>{{userInfo.id_card_number}}</text></view>
			    </view>
			   </view>
		</view>
		<view class="agree flex flex-start" v-if="!ifSign">
			<image :src="ifAgree?'../../static/list_selected@2x.png':'../../static/list_normal@2x.png'" mode="widthFix" @click="checkPolicy"></image>
			<text>我已阅读该协议，并同意该协议的内容。</text>
		</view>
		<view class="btns flex flex_around"  v-if="!ifSign">
			<view class="btn refuse">拒绝</view>
			<view class="btn sign">签约</view>
		</view>
		<view class="download" v-if="ifSign">下载pdf</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ifSign:true
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.agree{
		margin-top:30rpx;
		font-size: 30rpx;
		color:$base-color;
		image{
			width: 40rpx;
			margin-right: 20rpx;
		}
	}
	.download{
		width:calc(100% - 60rpx);
		height:76rpx;
		line-height: 76rpx;
		text-align: center;
		background: $base-color;
		color:#fff;
		border-radius: 70rpx;
		position: fixed;
		bottom:20rpx;
		left:50%;
		transform: translateX(-50%);
		z-index:9;
	}
	.btns{
		height:70rpx;
		position: fixed;
		width:calc(100% - 40rpx);
		bottom:20rpx;
		left:50%;
		transform: translateX(-50%);
		z-index:9;
		.btn{
			height:70rpx;
			line-height: 70rpx;
			width:260rpx;
			text-align: center;
			border:1px solid $base-color;
			color:$base-color;
			border-radius:70rpx;
			&.sign{
				background: $base-color;
				color:#fff;
			}
		}
	}
	.moreinfo{
		background: #F6F6F6;
		border-radius: 10rpx;
		padding:30rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		line-height: 56rpx;
	}
.policy{
			font-size: 30rpx;
			height:calc(100vh - 220rpx);
			overflow-y: scroll;
			background: #fff;
			.base{
				margin: 30rpx 0 50rpx 0;
				.line{
					padding:0;
					font-weight: 600;
					border:none;
				}
			}
			.head{
				height:100rpx;
				line-height: 100rpx;
				position: relative;
				.title{
					height:100rpx;
					width:100%;
					font-size: 34rpx;
					font-weight: 600;
					text-align: center;
				}
			}
			        .subtit{
			            font-size: 30rpx;
			            font-weight: 600;
			        }
			        .text{
			            line-height: 25px;
			            font-size: 30rpx;
			            color:#333;
			        }
			        text{
			            text-decoration: underline;
			        }
			        .heavy{
			            font-weight: 600;
			        }
			        .footer{
			            margin-top:30px;
			            display: flex;
			            justify-content: space-between;
			            line-height: 30px;
			            font-size: 30rpx;
			            color:#333;
			        }
			        .footer text{
			            text-decoration: none;
			        }
		}
</style>
