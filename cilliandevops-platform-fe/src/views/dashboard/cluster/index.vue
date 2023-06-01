<template>
  <a-table :columns="columns" :data-source="data" bordered>
    <template #bodyCell="{ column, text }">
      <template v-if="column.dataIndex === 'name'">
        <a>{{ text }}</a>
      </template>
    </template>
    <template #title>集群节点详情</template>
    
  </a-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

const columns = [
  {
    title: '节点名称',
    dataIndex: 'name',
  },
  {
    title: '节点IP',
    dataIndex: 'addresses',
  },
  {
    title: '节点配置',
    dataIndex: 'config',
  },
  {
    title: '节点版本',
    dataIndex: 'kubeletVersion',
  },
  {
    title: '创建时间',
    dataIndex: 'creationTimestamp',
  },

];

const data = [
  {
    key: '1',
    name: 'test',
    addresses: '192.168.0.2',
    config: '8C16G',
    kubeletVersion: '1.22.10',
    creationTimestamp: '2022-07-16 16:21:25'
  },
  
];

export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },
});
</script>
<style>
th.column-money,
td.column-money {
  text-align: left !important;
}
</style>
