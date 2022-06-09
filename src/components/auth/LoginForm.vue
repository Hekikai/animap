<template>
	<teleport to="#app">
		<a-modal v-model:visible="visible"
						 title="Oops.."
						 @ok="handleCloseModal($refs.form)"
						 @cancel="handleCloseModal($refs.form)">
			<p>
				{{ errorInfo }}
			</p>
		</a-modal>
		<div class="modal">
			<a-form
					ref="form"
					:model="formState"
					name="normal_login"
					class="modal__form"
					@submit="handleSubmit"
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
					<router-link to="/registration">Or register now!</router-link>
				</div>
			</a-form>
		</div>
	</teleport>
</template>

<script lang="ts">
import {computed, defineComponent, reactive} from "vue";
import type {Login} from "@/types/form";
import AuthService from "@/services/auth.service";
import {useSubmit} from "@/utils/useSubmit";

export default defineComponent({
	name: 'LoginForm',

	setup() {

		const formState = reactive<Login>({
			username: '',
			password: ''
		});

		const {
			visible,
			errorInfo,
			handleSubmit,
			handleCloseModal
		} = useSubmit(formState, AuthService.login, '/profile');

		const disabled = computed(() => {
			return !(formState.username && formState.password);
		})

		const handleRestorePassword = () => ({path: '/restore'})

		return {
			formState,
			visible,
			errorInfo,
			disabled,
			handleRestorePassword,
			handleSubmit,
			handleCloseModal
		};
	}
});


</script>

<style scoped lang="scss">
@import '../../style/variables';
@import '../../style/mixins';

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