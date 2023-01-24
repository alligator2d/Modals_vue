<template>
	<div class="wrapper">
		<div class="wrapper-content">
			<section>
				<div class="container">
					
					<!--				 First modal-->
					<button class="btn btnPrimary" @click="modalFirst = !modalFirst">Show First modal</button>
					
					<modal title="First modal"
						   v-show="modalFirst"
						   @close="modalFirst = false">
						
						<div slot="body">
							<p>Hello this is first modal!!</p>
							<button class="btn btnPrimary" @click="modalFirst = !modalFirst">Click</button>
						
						</div>
					</modal>
					
					<!--				 Second modal with form-->
					<button class="btn btnPrimary" @click="modalSecond.show = !modalSecond.show">Second modal with Form</button>
					
					<modal title="Second Modal with Form"
						   v-show="modalSecond.show"
						   @close="modalSecond.show = false">
						
						<div slot="body">
							<form @submit.prevent="submitSecondForm">
								<label>Name:</label>
								<input type="text" required v-model="modalSecond.name">
								
								<label>Email:</label>
								<input type="email" required v-model="modalSecond.email">
								
								<button class="btn btnPrimary">Submit</button>
							</form>
						
						
						</div>
					</modal>
					
					<!--				 Modal validate-->
					<button class="btn btnPrimary"
							@click="modalValidate = !modalValidate">
						Modal with Validate
					</button>
					<modal-validate v-show="modalValidate" @close="modalValidate = false">
					</modal-validate>
					
<!--					Modal Login-->
					<button class="btn btnPrimary" @click="modalLogin.show = !modalLogin.show">Войти</button>
					
					<modal title="Войти в аккаунт"
						   v-show="modalLogin.show"
						   @close="modalLogin.show = false">
						
						<div slot="body">
							<form @submit.prevent="submitLogin">
								<input type="text" placeholder="Логин" required v-model="modalLogin.login">
								
								<input type="text" placeholder="Пароль"  required v-model="modalLogin.password">
								
								<button class="btn btnPrimary">Войти</button>
								<p class="titleFooter">У вас еще нету аккаунта?</p>
								<p class="descr" @click="openCheckIn"><strong>Зарегистрироваться</strong></p>
							</form>
							
						</div>
					</modal>
<!--					Modal with Check In-->
					<button class="btn btnPrimary" 
							@click="ModalCheckIn = !ModalCheckIn">Регистрация</button>
					<modalCheckIn v-show="ModalCheckIn" @close="ModalCheckIn = false"></modalCheckIn>
					
					
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import modal from "@/components/UI/Modal.vue";
import Modal from "@/components/UI/Modal.vue";
import ModalValidate from "@/components/ModalValidate.vue";
import ModalCheckIn from "@/components/ModalCheckIn.vue";

export default {
	computed: {
		modal() {
			// return modal
		}
	},
	data() {
		return {
			modalFirst: false,
			modalValidate: false,
			ModalCheckIn: false,
			modalLogin: {
				show: false,
				login: '',
				password:'',
			},
			modalSecond: {
				show: false,
				name: "",
				email: ""
			}
		};
	},
	methods: {
		submitSecondForm() {
			console.log({
				name: this.modalSecond.name,
				email: this.modalSecond.email
			});
			this.modalSecond.name = "";
			this.modalSecond.email = "";
			this.modalSecond.show = false;
			
		},
		submitLogin () {
			const user= {
				login: this.modalLogin.login,
				password: this.modalLogin.password,
			};
			console.log(user);
			this.modalLogin.login='';
			this.modalLogin.password='';
			this.modalLogin.show = false;
		},
		openCheckIn () {
			this.modalLogin.show = false;
			this.ModalCheckIn = true;
		}
	},
	components: {
		Modal, ModalValidate, ModalCheckIn,
	}
};
</script>
<style lang="scss">
.btnPrimary {
  margin: 10px;
}
.titleFooter {
  font-size: 12px;
  
}
.descr {
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
}

</style>
