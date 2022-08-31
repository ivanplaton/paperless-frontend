<template>
  <b-container fluid>
    <b-row>
      <div>
        <b-form-group
          id="emailTxt"
          label="Email"
          label-for="emailTxt"
          :invalid-feedback="invalidEmailFeedback"
          :state="emailState">
            <b-form-input id="emailTxt" v-model="email" :state="emailState" trim></b-form-input>
        </b-form-group>

        <b-form-group
          id="passwordTxt"
          label="Password"
          label-for="passwordTxt"
          :invalid-feedback="invalidPasswordFeedback"
          :state="passwordState">
            <b-form-input id="passwordTxt" type="password" v-model="password" :state="passwordState" trim></b-form-input>
        </b-form-group>

        <b-button @click="login">Login</b-button>
      </div>
    </b-row>
  </b-container>
</template>

<script type="application/javascript" src="./LoginScript.js" />

<style></style>