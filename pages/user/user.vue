<template>
	<view class="userPage">
		<NavigationBar></NavigationBar>
		<view class="loginContainer" v-if="showType===0">
			 <view class="loginUser" @click="logoutUser" v-if="userInfo.userInfo.userName">{{userInfo.userInfo.userName}}</view>
			<view class="loginBtn" @click="showType=1" v-else >登录</view>
		</view>

		<view class="loginBox" v-if="showType===1">
			<view class="loginBoxTitle">登录</view>
			<view class="loginBoxText">
				<view>账号：</view>
				<u-input placeholder="请输入账号" border="none" v-model="loginData.loginName" clearable></u-input>
			</view>
			<view class="loginBoxText">
				<view>密码：</view>
				<u-input placeholder="请输入密码" border="none" v-model="loginData.loginPw"  clearable></u-input>
			</view>
			<view>

			</view>
			<view class="loginBoxBtns">
				<view class="loginBtn" @click="loginUser">登录</view>
				<view class="loginRegBtn" @click="showType=2">注册</view>
			</view>
		</view>
		<view class="loginBox" v-if="showType===2">
			<view class="loginBoxTitle">注册</view>
			<view class="loginBoxText">
				<view>账号：</view>
				<u-input placeholder="请输入账号" border="none" v-model="regData.regName" clearable></u-input>
			</view>
			<view class="loginBoxText">
				<view>密码：</view>
				<u-input type="password" placeholder="请输入密码" border="none" v-model="regData.regPw" clearable></u-input>
			</view>
			<view>
			</view>
			<view class="loginBoxBtns">
				<view class="loginBtn" @click="regUser">注册</view>
				<view class="loginRegBtn" @click="cancelBack">返回</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	//顶部导航
	import NavigationBar from '../../components/NavigationBar.vue'
	//pinia
	import { userInfoStore } from '../../store/userInfoStore.js'
	let userInfo = userInfoStore()
	//showType:o->登录按钮 1->登录界面 2->注册 3 ->userInfo
	let showType = ref(0)
	//返回功能
	let cancelBack=()=>{
		showType.value=1
		loginData.value={
			loginName:'',
			loginPw:''
		}
		regData.value={
			regData:'',
			regPw:''
		}
	}
	//注册功能
	let regData = ref({
		regName:'',
		regPw:''
	})
	let regUser=()=>{
		if(!regData.value.regName){
			uni.showToast({
				title:'请输入账号'
			})
		}
		if(!regData.value.regPw){
			uni.showToast({
				title:'请输入密码'
			})
			return
		}
		uni.showToast({
			title:'注册中'
		})
		//返回显示当前登录用户信息
		showType.value=0
		userInfo.userInfo.userName=regData.value.regName
		return
	}
	//登录功能
	let loginData = ref({
		loginName:'',
		loginPw:''
	})
	let loginUser = ()=>{
		if(!loginData.value.loginName){
			uni.showToast({
				title:'请输入账号'
			})
		}
		if(!loginData.value.loginPw){
			uni.showToast({
				title:'请输入密码'
			})
			return
		}
		uni.showToast({
			title:'登录中'
		})
		//返回显示当前登录用户信息
		showType.value=0
		userInfo.userInfo.userName=loginData.value.loginName
		return
	}
   //退出
   let logoutUser=()=>{
	   uni.showModal({
	   	title:"提示",
		content:"是否要退出？",
		success:({confirm})=>{
			if(confirm){
				userInfo.$reset()
				loginData.value={
					userName:'',
					userPw:''
				}
			}
		}
	   })
   }
</script>

<style scoped lang="scss">
	.userPage {
		font-size: 14px;
		color: #646566;
		box-shadow: inset 0 0 6px #ff6700;

		.loginContainer {
			border: 1px solid salmon;
			height: 100px;

			display: flex;
			justify-content: center;
			align-items: center;
            .loginUser{
				color: #ff6700;
			}
			.loginBtn {
				background-color: #646566;
				color: white;
				border: 1px solid #ff6700;
				border-radius: 4px;
				text-align: center;
				width: 80px;
				height: 30px;

			}
		}

		.loginBox {
			width: 100%;
			height: 200px;
			margin-left: 10px;
			.loginBoxTitle {
				color: black;
				text-align: center;
				font-size: 18px;
				font-weight: bold;
				padding: 10px 0;
			}

			.loginBoxText {
				display: flex;
				align-items: center;
				padding: 0 10px;
				border-bottom: 1px solid #eee;
				padding-bottom: 2px;
			}

			.loginBoxBtns {
				display: flex;
				justify-content: flex-end;
				padding-right: 10px;
				padding: 10px 0;

				.loginBtn {
					width: 70px;
					height: 30px;
					text-align: center;
					line-height: 30px;
					background-color: #07c160;
					border: 2px solid #eee;
					border-radius: 2px;
					box-sizing: border-box;
				}

				.loginRegBtn {
					width: 70px;
					height: 30px;
					text-align: center;
					line-height: 30px;
					margin-left: 10px;
					margin-right: 20px;
					border: 2px solid #eee;
					border-radius: 2px;
					box-sizing: border-box;
				}
			}
		}
	}
</style>