// 引入defineStore用于创建store
import {
	defineStore
} from 'pinia'
import {
	ref
} from 'vue'
import {
	nanoid
} from 'nanoid'

// 定义并暴露一个store
export const useMainStore = defineStore('main', () => {

	const storageData = uni.getStorageSync('todos');
	const todoList = ref(storageData ? JSON.parse(storageData) : [])

	// 添加任务
	function addItem(todoItem) {
		todoList.value.push({
			id: nanoid(10),
			todoItem: todoItem,
			isFinish: false,
			isImportant: false,
			createTime: new Date()
		})
		saveToStorage()
	}
	// 修改完成状态
	function changeChecked(id) {
		todoList.value.forEach(item => {
			if (item.id === id) {
				item.isFinish = !item.isFinish
			}
		})
		saveToStorage()
	}

	// 修改重要状态
	function changeImportant(id) {
		todoList.value.forEach(item => {
			if (item.id === id) {
				item.isImportant = !item.isImportant
			}
		})
		saveToStorage()
	}

	// 删除任务
	function removeItem(id) {
		todoList.value = todoList.value.filter(item => {
			return item.id !== id
		})
		console.log(todoList.value)
		saveToStorage()
	}

	// 清空任务
	function clearItems() {
		todoList.value = []
		saveToStorage()
	}

	// 保存到本地存储
	function saveToStorage() {
		uni.setStorageSync('todos', JSON.stringify(todoList.value))
	}

	// // 计算属性：是否为空
	// const isEmpty = computed(() => todoList.value.length === 0)
	return {
		todoList,
		addItem,
		changeChecked,
		changeImportant,
		removeItem,
		clearItems
	}
})