<script setup>
import { ref } from 'vue';

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['update:modelValue', 'login-success']);

const loading = ref(false);
const phoneNumber = ref('13344556677');
const password = ref('123456789');

const close = () => {
    emit('update:modelValue', false);
};

const handleLogin = async () => {
    loading.value = true;
    try {
        const res = await window.$zhihu.get('https://api.zhihu.com/me');
        const data = res.data || res;

        emit('login-success', data);
        close();
    } catch (e) {
        console.error('Login/Fetch failed', e);
        // alert('登录失败: ' + e.message);
    } finally {
        loading.value = false;
    }
};

</script>

<template>
    <s-dialog :showed="modelValue" @close="close">
        <s-button slot="trigger" style="display: none;">登录</s-button>
        <div slot="headline">登录</div>
        <div class="dialog-content">
            <s-text-field class="text-field" label="请输入手机号" :value="phoneNumber"
                @input="e => phoneNumber = e.target.value">
            </s-text-field>
            <s-text-field class="text-field" style="margin-top: 8px;" label="请输入密码" :value="password"
                @input="e => password = e.target.value">
            </s-text-field>
            <s-button id="submit" style="border-radius: 4px;box-shadow: none;" @click="handleLogin" :disabled="loading">
                <s-circular-progress v-if="loading" indeterminate="true" slot="start"
                    style="width: 20px; height: 20px; margin-right: 8px;"></s-circular-progress>
                登 录
            </s-button>
        </div>
    </s-dialog>
</template>

<style scoped>
.dialog {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
}

.dialog-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
}

.text-field {
    flex-grow: 1;
    width: auto;
}

.link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .875rem;
}

.link>a {
    color: var(--s-color-primary, #0052d9);
    text-decoration: none;
}
</style>