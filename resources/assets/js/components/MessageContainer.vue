<template lang="html">
    <div class="chat-log">
        <message v-for="message in messages" :message="message"></message>
    </div>
</template>

<script>
    export default {
        props: ['messages']
    }
</script>

<style lang="css">
    .chat-log .chat-message:nth-child(even) {
        background-color: #ccc;
    }
</style>