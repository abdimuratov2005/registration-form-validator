<template>
    <v-app :class="$style.body">
        <div class="text-h4 font-weight-bold title my-5">
            <p v-if="signup">Sign up</p>
            <p v-else-if="login">Login</p>
            <p v-else-if="send">Forgot password</p>
        </div>
        <p 
            :class="$style.sendText" 
            v-if="send"
        >
        Please, enter your email address. You will receive a link to create a new
            password via email.
        </p>
        <v-form v-model="valid">
            <v-container>
                <v-row 
                    v-if="signup" 
                    :class="$style.column" 
                    cols="12" 
                    md="4"
                >
                    <v-text-field 
                        bg-color="white" 
                        v-model="name" 
                        :rules="nameRules" 
                        :counter="128" 
                        label="Name" 
                        required
                    ></v-text-field>
                    <v-img 
                        v-if="vectoryName" 
                        :class="$style.vectory" 
                        width="19" 
                        height="16" 
                        :src="vectoryIcon"
                    ></v-img>
                </v-row>
                <v-row 
                    :class="$style.column" 
                    cols="12" 
                    md="4"
                >
                    <v-text-field 
                        bg-color="white" 
                        v-model="email" 
                        :rules="emailRules" 
                        label="E-mail"
                        :counter="128"
                        required></v-text-field
                    >
                    <v-img 
                        v-if="vectoryEmail" 
                        :class="$style.vectory" 
                        width="19" height="16" 
                        :src="vectoryIcon"
                    >
                    </v-img>
                </v-row>
                <v-row 
                    v-if="signup == true || login == true" 
                    :class="$style.column" 
                    cols="12" 
                    md="4"
                >
                    <v-text-field 
                        bg-color="white" 
                        v-model="password" 
                        type="password" 
                        :rules="passwordRules" 
                        :counter="128"
                        label="Password" required
                    ></v-text-field>
                    <v-img 
                        v-if="vectoryPass" 
                        :class="$style.vectory" 
                        width="19" 
                        height="16" 
                        :src="vectoryIcon"
                    ></v-img>
                </v-row>
            </v-container>
        </v-form>
        <a :class="$style.login">
            <div 
                v-if="signup" 
                @click="toLogin" 
                :class="$style.loginText"
            >
                Already have an account?
                <img :src="arrowIcon">
            </div>
            <div 
                v-else-if="login" 
                @click="resetPass" 
                :class="$style.loginText"
            >
                Forgot your password?
                <img :src="arrowIcon">
            </div>
        </a>
        <UIBtn>
            <span v-if="signup">SIGN UP</span>
            <span v-else-if="login">LOGIN</span>
            <span v-else-if="send">Send</span>
        </UIBtn>
        <div 
            v-if="send == false" 
            :class="$style.socialAcc"
            :style="signup == false ? styleChange : 'no'"
            >
            <div
                
            >
            <p>Or sign up with social account</p>
            <div :class="$style.logoList">
                <div :class="$style.logoBlock">
                    <img :src="logoGoogle">
                </div>
                <div :class="$style.logoBlock">
                    <img :src="logoFacebook">
                </div>
            </div>
        </div>
        </div>
    </v-app>
</template>

<script setup>
import { ref } from 'vue';
import UIBtn from './UI/UIBtn.vue';

const arrowIcon = ref('./public/arrow.svg');
const logoFacebook = ref('./public/facebookIcon.svg');
const logoGoogle = ref('./public/googleIcon.svg');
const signup = ref(true);
const login = ref(false);
const send = ref(false);
const vectoryIcon = ref('./public/Vector.svg');
const vectoryName = ref(false);
const vectoryEmail = ref(false);
const vectoryPass = ref(false);
const name = ref('');
const password = ref('');
const email = ref('');
const valid = ref('');
const styleChange = ref({
    marginTop: '204px'
})
const toLogin = () => {
    signup.value = false
    login.value = true
}
const resetPass = () => {
    login.value = false
    send.value = true
}

const nameRules = ref([
    value => {
        if (value) return true
        return 'Name is requred.'
    },
    value => {
        if (value?.length >= 3) return vectoryName.value = true
        return vectoryName.value = false, 'Name must be at least 3 characters.'
    },
]);
const passwordRules = ref([
    value => {
        if (value) return true
        return 'Password is requred.'
    },
    value => {
        if (value?.length >= 8) return vectoryPass.value = true
        return vectoryPass.value = false, 'Password must be at least 8 characters.'
    },
])
const emailRules = ref([
    value => {
        if (value) return true

        return 'E-mail is requred.'
    },
    value => {
        if (/.+@.+\..+/.test(value)) return true, vectoryEmail.value = true
        return vectoryEmail.value = false, 'E-mail must be valid.'

    },
])
</script>

<style module lang="scss">
.body {
    background: #F9F9F9;
    padding: 0 16px;
}
.sendText {
    margin: 87px 0px 16px 0px;
}

.loginText {
    cursor: pointer;
    text-align: right;
}
.column{
    position: relative;
}
.logoList {
    display: flex;
    align-items: center;
    justify-content: center;
}

.logoBlock {
    cursor: pointer;

    &:first-child {
        margin: 0px 16px 0px 0px;
    }
}
.socialAcc {
    text-align: center;
    margin: 126px 0 0 0;

    p {
        color: #222222;
        font-weight: 700;
    }
}

.btn {
    white-space: nowrap;
    padding: 14px 143px;
    margin: 28px 16px;
    background: #DB3022;
    box-shadow: 0px 4px 8px rgba(211, 38, 38, 0.25);
    border-radius: 25px;
    color: #fff;
}
.vectory{
    position: absolute;
    right: 20px;
    top: 20px;
}
</style>