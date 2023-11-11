<template>
	<view class="userPage">
		<NavigationBar></NavigationBar>
		<view class="loginContainer" v-if="showType===0">
			<view class="loginBtn" @click="showType=1">登录</view>
		</view>
		<view class="loginBox" v-if="showType===1">
			<view class="loginBoxTitle">登录</view>
			<view class="loginBoxText">
				<view>账号：</view>
				<u-input placeholder="请输入账号" border="none" clearable></u-input>
			</view>
			<view class="loginBoxText">
				<view>密码：</view>
				<u-input placeholder="请输入密码" border="none" clearable></u-input>
			</view>
			<view>

			</view>
			<view class="loginBoxBtns">
				<view class="loginBtn">登录</view>
				<view class="loginRegBtn" @click="showType=2">注册</view>
			</view>
		</view>
		<view class="loginBox" v-if="showType===2">
			<view class="loginBoxTitle">注册</view>
			<view class="loginBoxText">
				<view>账号：</view>
				<u-input placeholder="请输入账号" border="none" clearable></u-input>
			</view>
			<view class="loginBoxText">
				<view>密码：</view>
				<u-input placeholder="请输入密码" border="none" clearable></u-input>
			</view>
			<view>
		
			</view>
			<view class="loginBoxBtns">
				<view class="loginRegBtn">注册</view>
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
	//showType:o->登录按钮 1->登录界面 2->注册
	let showType = ref(0)
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