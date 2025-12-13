<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MaterialSymbol from './MaterialSymbol.vue'
import LoginDialog from './LoginDialog.vue'

const router = useRouter()
const showLogin = ref(false)
const currentUser = ref(null)

const toggleDrawer = () => {
    const drawer = document.querySelector('s-drawer')
    if (drawer && typeof drawer.toggle === 'function') {
        drawer.toggle()
    }
}

const navigateToSearch = () => {
    router.push('/search')
}

const handleAvatarClick = () => {
    showLogin.value = true
}

const onLoginSuccess = (userData) => {
    currentUser.value = userData
}
</script>

<template>
    <s-appbar style="width: 100%; z-index: 0;">
        <s-icon-button slot="navigation" @click="toggleDrawer">
            <MaterialSymbol icon="menu" />
        </s-icon-button>

        <div slot="headline" class="headline">
            Zyphron
        </div>

        <s-search slot="search" placeholder="搜索关键字..." readonly @click="navigateToSearch"
            style="cursor: pointer;"></s-search>

        <div slot="action" class="action-container">
            <s-icon-button class="desktop-only">
                <MaterialSymbol icon="notifications" />
            </s-icon-button>

            <s-icon-button class="tablet-only">
                <MaterialSymbol icon="chat_bubble" />
            </s-icon-button>
            <s-avatar :src="currentUser?.avatar_url || 'https://picsum.photos/id/64/200/200'" class="avatar"
                @click="handleAvatarClick"></s-avatar>
        </div>
    </s-appbar>
    <LoginDialog v-model="showLogin" @login-success="onLoginSuccess" />
</template>

<style scoped>
.action-container {
    display: flex;
    align-items: center;
    gap: 4px;
}

.avatar {
    margin-left: 8px;
    cursor: pointer;
}

@media (max-width: 768px) {
    .desktop-only {
        display: none;
    }
}

@media (max-width: 640px) {
    .tablet-only {
        display: none;
    }
}
</style>
