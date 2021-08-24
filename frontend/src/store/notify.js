import { useToast } from 'vue-toastification'
const toast = useToast()

export default {
	actions: {
		notify({commit}, payload) {
			toast(payload);
		},
	},
}
