<template>
	<view class="content">
		<!-- 头部时间区域 -->
		<view class="header">
			<view class="title">Vital Task</view>
			<p>{{ dayjs(new Date()).format('YYYY MM DD ') }}</p>
		</view>

		<scroll-view scroll-y="true" class="todo-list">
			<TodoItem v-for="todo in useStore.todoList" :key="todo.id" :todo="todo" page="important" />
		</scroll-view>
	</view>
</template>

<script setup>
import dayjs from 'dayjs'
import { ref } from 'vue'
import TodoItem from '@/pages/todoItem/todoItem.vue'
import { useMainStore } from '@/stores/todolist.js'

const useStore = useMainStore()
</script>

<style lang="scss" scoped>
.content {
	height: 100vh;
	width: 100vw;
	margin: 0;
	padding: 20rpx;
	font-size: 50rpx;
	background: url('/static/background.jpg') repeat center/cover;
	.header {
		color: #fff;
		margin-bottom: 20rpx;
		.title {
			font-size: 50rpx;
			margin-bottom: 5rpx;
		}
		p {
			font-size: 35rpx;
		}
	}
	.todo-list {
		height: calc(100vh - 150px);
	}
}
</style>
