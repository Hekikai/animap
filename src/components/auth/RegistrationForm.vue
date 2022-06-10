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
					:rules="rules"
					name="basic"
					@validate="handleValidate"
					@submit="handleSubmit"
			>
				<a-form-item
						has-feedback
						label="Username"
						name="username"
				>
					<a-input v-model:value="formState.username"/>
				</a-form-item>

				<a-form-item
						has-feedback
						label="Email"
						name="email"
				>
					<a-input v-model:value="formState.email"/>
				</a-form-item>

				<a-form-item
						has-feedback
						label="Password"
						name="password"
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
import {defineComponent, reactive} from "vue";
import type {Registration, ValidatedFields} from "@/types/form";
import type {Rule} from "ant-design-vue/es/form";
import AuthService from "@/services/auth.service";
import {useSubmit} from "@/utils/hooks/useSubmit";
import {useValidatedFieldsWithButton} from "@/utils/hooks/useValidatedFieldsWithButton";

export default defineComponent({
	name: 'RegistrationForm',
	setup() {

		const formState = reactive<Registration>({
			username: '',
			password: '',
			email: '',
		});

		const areFieldsValidated = reactive<ValidatedFields>({
			username: false,
			email: false,
			password: false
		});

		const {
			visible,
			errorInfo,
			handleSubmit,
			handleCloseModal
		} = useSubmit(formState, AuthService.register,
				'/login', 'Something went wrong...');

		const {handleValidate, disabled} = useValidatedFieldsWithButton(areFieldsValidated);

		const rules: Record<string, Rule[]> = {
			username: [{
				required: true,
				min: 5,
				message: 'Must be more than 5 symbols',
				trigger: 'change'
			},],
			email: [{
				required: true,
				pattern:
						/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				message: 'Incorrect email',
				trigger: 'change'
			}],
			password: [{
				required: true,
				min: 5,
				message: 'Must be more than 5 symbols',
				trigger: 'change'
			}],
		}

		return {
			formState,
			disabled,
			visible,
			errorInfo,
			rules,
			handleSubmit,
			handleValidate,
			handleCloseModal
		};
	}
})
</script>

<style scoped lang="scss">
@import "../../style/mixins";

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