<template lang="html">
    <div class="chat-log">
        <message v-for="message in messages" :message="message"></message>
        <div class="empty" v-show="messages.length === 0">Сообщений пока нет!</div>
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
    .empty {
        padding: 1rem;
        text-align: center;
    }
</style>