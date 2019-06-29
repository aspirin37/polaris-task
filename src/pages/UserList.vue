<template>
    <dx-data-grid
        :data-source="users"
        :columns="columns"
        @row-click="showUserInfo"
    >
        <dx-search-panel
            :visible="true"
            :width="240"
            placeholder="Поиск..."
        />
        <dx-sorting mode="multiple" />
    </dx-data-grid>
</template>

<script>
import axios from 'axios';
import { DxDataGrid, DxSearchPanel, DxSorting } from 'devextreme-vue/data-grid';

export default {
    name: 'UserList',
    components: {
        DxDataGrid,
        DxSearchPanel,
        DxSorting,
    },
    data: () => ({
        columns: [
            {
                caption: 'Имя',
                dataField: 'name',
                sortOrder: 'asc',
            },
            {
                caption: 'Пол',
                dataField: 'gender',
            },
            {
                caption: 'Компания',
                dataField: 'company',
            },
            {
                caption: 'Баланс',
                dataField: 'balance',
            },
        ],
        users: [],
    }),
    created() {
        this.getUsers();
    },
    methods: {
        async getUsers() {
            const response = await axios.get('http://www.json-generator.com/api/json/get/cfALvjFLUy?indent=2');
            this.users = response.data;
        },
        showUserInfo({ data }) {
            this.$router.push({
                name: 'UserInfo',
                params: { userSelected: data },
            });
            localStorage.setItem('userSelected', JSON.stringify(data));
        },
    },
};
</script>
