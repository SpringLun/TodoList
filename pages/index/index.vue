<template>
	<view class="content">
		<!-- 头部时间区域 -->
		<view class="header">
			<view class="title">Today</view>
			<p>{{ dayjs(new Date()).format('YYYY MM DD ') }}</p>
		</view>

		<!-- 输入框区域 -->
		<view class="inputItem">
			<input type="text" v-model="todoItem" placeholder="Please record your todo" />
			<uni-icons type="forward" size="40" color="#fff" class="icons" @click="handleAdd"></uni-icons>
		</view>

		<scroll-view scroll-y="true" class="todo-list">
			<TodoItem v-for="todo in useStore.todoList" :key="todo.id" :todo="todo" page="index" />
		</scroll-view>
	</view>
</template>

<script setup>
import dayjs from 'dayjs'
import { ref } from 'vue'
import TodoItem from '@/pages/todoItem/todoItem.vue'
import { useMainStore } from '@/stores/todolist.js'

const todoItem = ref('')
const useStore = useMainStore()

// 新增清单
const handleAdd = () => {
	if (todoItem.value.trim()) {
		//添加新项目到清单数组
		useStore.addItem(todoItem.value)
		uni.showToast({
			title: 'Added successfully'
		})
	} else {
		uni.showToast({
			title: 'Cannot be empty',
			icon: 'error'
		})
	}

	//添加完后将输入框清空
	todoItem.value = ''
}
</script>

<style lang="scss" scoped>
.content {
	height: 100vh;
	width: 100vw;
	margin: 0;
	padding: 20rpx 20rpx 0 20rpx;
	font-size: 50rpx;
	background: url('/static/background.jpg') repeat center/cover;
	.header {
		color: #fff;
		.title {
			font-size: 50rpx;
			margin-bottom: 5rpx;
		}
		p {
			font-size: 35rpx;
		}
	}

	.inputItem {
		background-color: #fff;
		border-radius: 20rpx;
		padding: 5rpx 5rpx 5rpx 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 30rpx 0;
		input {
			width: 100%;
			height: 100%;
			background-color: #fff;
			margin-right: 10rpx;
		}
		.icons {
			width: 80rpx;
			height: 80rpx;
			background-color: #ab4462;
			border-radius: 20rpx;
		}
	}
	.todo-list {
		height: calc(100vh - 150px);
	}
}
</style>
