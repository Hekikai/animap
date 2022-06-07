<template>
	<teleport to="#app">
		<div class="modal">
			<a-form
					:model="formState"
					name="normal_login"
					class="modal__form"
					@finish="onFinish"
					@finishFailed="onFinishFailed"
					@submit="handleSubmitForm"
			>
				<a-form-item
						label="Username"
						name="username"
						:rules="[{ required: true, message: 'Please, we need your username!' }]"
				>
					<a-input v-model:value="formState.username"></a-input>
				</a-form-item>

				<a-form-item
						label="Password"
						name="password"
						:rules="[{ required: true, message: 'Please, we need your password!' }]"
				>
					<a-input-password v-model:value="formState.password"></a-input-password>
				</a-form-item>

				<div class="wrapper">
					<a-form-item name="remember" no-style>
						<a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
					</a-form-item>
					<router-link :to="handleRestorePassword()">Forgot password?</router-link>
				</div>

				<div class="wrapper">
					<a-form-item>
						<a-button :disabled="disabled" type="primary" html-type="submit">
							Log in
						</a-button>
					</a-form-item>
					<a-form-item>
						<a-button @click="handleLogout" :disabled="disabled" type="primary">
							Logout
						</a-button>
					</a-form-item>
					<router-link to="/registration">Or register now!</router-link>
				</div>
			</a-form>
		</div>
	</teleport>
</template>

<script lang="ts">
import {defineComponent, reactive, computed, toRaw} from "vue";
import type {Form} from "@/types/form";
import {useAuth} from "@/stores/useAuth";


export default defineComponent({
	name: 'LoginForm',
	setup() {
		const store = useAuth();

		const formState = reactive<Form>({
			username: 'user_dev',
			password: 'dev'
		});

		const onFinish = (values: any) => {
		};

		const onFinishFailed = (errorInfo: any) => {
			console.log('Failed:', errorInfo);
		};

		const handleSubmitForm = (event: Event) => {
			store.login(toRaw(formState));
		};

		const handleLogout = () => store.logout();

		const disabled = computed(() => {
			return !(formState.username && formState.password);
		});

		const handleRestorePassword = () => ({path: '/restore'})

		return {
			formState,
			onFinish,
			onFinishFailed,
			disabled,
			handleRestorePassword,
			handleSubmitForm,
			handleLogout
		};
	}
});


</script>

<style scoped lang="scss">
@import '../style/variables';
@import '../style/mixins';

.modal {

	@include modalWindow;

	&__form {

		.wrapper {
			display: flex;
			justify-content: space-between;
			align-items: start;
			gap: 10px;
			margin-bottom: 40px;
			user-select: none;

			&:last-child {
				flex-direction: column;
				align-items: center;
				margin: 0;

				:first-child {
					width: 100%;
				}

			}
		}
	}

}

</style>