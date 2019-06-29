<template>
    <dx-form
        v-if="userSelected"
        :form-data="userSelected"
    >
        <div slot="avatar">
            <img
                class="form-avatar"
                :src="userSelected.picture"
                width="32"
                height="32"
            >
        </div>
        <dx-group-item
            :col-count="2"
            css-class="second-group"
        >
            <dx-group-item>
                <dx-simple-item data-field="name" />
                <dx-simple-item data-field="gender" />
                <dx-simple-item template="avatar" />
            </dx-group-item>
            <dx-group-item>
                <dx-simple-item data-field="company" />
                <dx-simple-item data-field="balance" />
                <dx-simple-item
                    :editor-options="eyeColorOptions"
                    data-field="eyeColor"
                    editor-type="dxSelectBox"
                />
            </dx-group-item>
            <dx-simple-item
                :col-span="2"
                :editor-options="{ height: 100 }"
                data-field="about"
                editor-type="dxTextArea"
            />
        </dx-group-item>
    </dx-form>
</template>

<script>
import { DxForm, DxGroupItem, DxSimpleItem } from 'devextreme-vue/form';
import { DxTextArea } from 'devextreme-vue/text-area';

export default {
    name: 'UserInfo',
    components: {
        /* eslint-disable */
        DxForm,
        DxGroupItem,
        DxSimpleItem,
        DxTextArea,
    },
    props: {
        userSelected: {
            type: Object,
            default: null,
        },
    },
    data: () => ({
        eyeColorOptions: {
            items: ['blue', 'green', 'brown'],
        },
    }),
    created() {
        if (!this.userSelected) {
            this.$router.push('user-list');
        }
    },
};
</script>

<style scoped>
.first-group,
.second-group {
    padding: 20px;
}
.second-group {
    background-color: rgba(191, 191, 191, 0.15);
}
.form-avatar {
    border-radius: 50%;
}
</style>
