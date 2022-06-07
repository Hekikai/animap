<template>
	<teleport to="#app">
		<div class="modal">
			<a-form
					:model="formState"
					name="basic"
					autocomplete="on"
					@finish="onFinish"
					@finishFailed="onFinishFailed"
			>
				<a-form-item
						label="Username"
						name="username"
						:rules="[{ required: true, message: 'Please input your username!' }]"
				>
					<a-input v-model:value="formState.username"/>
				</a-form-item>

				<a-form-item
						label="Email"
						name="email"
						:rules="[{ required: true, message: 'Please input your username!' }]"
				>
					<a-input v-model:value="formState.email"/>
				</a-form-item>

				<a-form-item
						label="Password"
						name="password"
						:rules="[{ required: true, message: 'Please input your password!' }]"
				>
					<a-input-password v-model:value="formState.password"/>
				</a-form-item>

				<div class="wrapper">
					<a-form-item>
						<a-button :disabled="disabled" type="primary" html-type="submit">
							Register!
						</a-button>
					</a-form-item>
					<a @click="$router.go(-1)">Remembered password? Get back!</a>
				</div>
			</a-form>
		</div>
	</teleport>
</template>

<script lang="ts">
import {computed, defineComponent, reactive} from "vue";
import type {Form} from "@/types/form";

export default defineComponent({
	name: 'RegistrationForm',
	setup() {
		const formState = reactive<Form>({
			username: '',
			email: '',
			password: '',
		});

		const onFinish = (values: any) => {
			console.log('Success:', values);
		};

		const onFinishFailed = (errorInfo: any) => {
			console.log('Failed:', errorInfo);
		};

		const disabled = computed(() => {
			return !(formState.username && formState.password && formState.email);
		});

		return {
			formState,
			onFinish,
			onFinishFailed,
			disabled
		};
	}
})
</script>

<style scoped lang="scss">
@import "src/style/mixins";

.modal {
	@include modalWindow;

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;

		:first-child {
			width: 100%;
		}

	}
}

</style>