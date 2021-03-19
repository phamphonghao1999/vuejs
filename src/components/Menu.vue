<template>
    <div>
      <div v-for="item in menu" :key="item.name">{{item.name}}</div>
    </div>
</template>

<script>
export default {
    data(){
      return {
        menu: [
          {
            name: 'So luong thiet bi va thong tin'
          },
          {
            name: 'Thong tin mau gui SMS'
          },
          {
            name: 'name3',
          },
          {
            name: 'name4'
          }
        ]
      }
    }
}
</script>