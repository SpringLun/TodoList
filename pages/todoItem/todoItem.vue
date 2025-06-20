<template>
	<view class="item" v-if="props.page === 'index' || (props.page === 'important' && props.todo.isImportant === true)" @longpress="handleLongpress(props.todo.id)">
		<checkbox :checked="props.todo.isFinish" color="#ab4462" @click="handleChange(props.todo.id)" />
		<view class="text">{{ props.todo.todoItem }}</view>
		<uni-icons
			:type="props.todo.isImportant ? 'star-filled' : 'star'"
			size="30"
			:color="props.todo.isImportant ? '#ab4462' : '#626a73'"
			@click="handleImportant(props.todo.id)"
		></uni-icons>
	</view>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { useMainStore } from '@/stores/todolist.js'

const useStore = useMainStore()
const todoList = ref([])
todoList.value = useStore.todoList
// 声明接收props
const props = defineProps(['todo', 'page'])

const handleLongpress = (id) => {
	uni.showModal({
		content: 'Confirm deletion?',
		confirmText: 'Yes',
		cancelText: 'No',
		success: (res) => {
			if (res.confirm) {
				useStore.removeItem(id)
				uni.showToast({
					title: 'Succeeded'
				})
			}
		}
	})
}
const handleChange = (id) => {
	useStore.changeChecked(id)
}
const handleImportant = (id) => {
	useStore.changeImportant(id)
}
</script>

<style lang="scss" scoped>
.item {
	width: 100%;
	background-color: #fff;
	padding: 30rpx;
	border-radius: 20rpx;
	margin-bottom: 10rpx;
	font-size: 40rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	.text {
		flex: 1;
		margin-left: 10rpx;
	}
}
</style>
