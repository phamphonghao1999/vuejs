<template>
<div class="nav_color">
  <a-layout  style="min-height: 100vh;background:while;">
    <a-layout-sider v-model="collapsed" >
      <div class="nobiet"></div>
      <!-- <div class="logo">
        <p>ADMIN</p>

      </div> -->
      <a-menu :default-selected-keys="['1']" mode="inline" :style="{  background: '#fff',
          }">
       
        <a-sub-menu key="sub2" >
          <span slot="title" @click="currentButton = 'Quản lý thiết bị'"><a-icon type="mobile" /><span>Quản lý thiết bị</span></span>
          <!-- <a-menu-item @click="currentButton = 'Quản lý thiết bị'" key="7">
            Thiết bị và thông tin
          </a-menu-item>  
          <a-menu-item @click="currentButton = 'Thông tin mẫu gửi sms'" key="8">
            Thông tin mẫu gửi sms
          </a-menu-item> -->
        </a-sub-menu>
        <a-menu-item key="9">
          <a-icon type="profile" />
          <span @click="currentButton = 'Cá nhân'">Cá nhân</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout class="body">
      <!-- <a-layout-header style="background: #fff; padding: 0" /> -->
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          
          <a-breadcrumb-item >
            <span class="span_center" style="font-size:30px;color:#828282; text-align: center;" >  {{ currentButton }}</span>
          </a-breadcrumb-item>
        </a-breadcrumb>
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
              >

            <router-view></router-view>
          
      
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
  </div>
</template>
<script>

export default {
  props: {},
  name: "App",
  components: {
    
  },
  data() {
    return {
      collapsed: false,
      data,
      data_1,
      columns,
      columns_1,
      currentButton: "",
    };
  },
};
const columns = [
  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Số sms đã gửi trong ngày",
    dataIndex: "age",
    key: "age",
    width: 200,
  },
  {
    title: "Trạng thái",
    dataIndex: "address",
    key: "address 1",
    ellipsis: true,
  },
  {
    title: "Active/Deactive",
    dataIndex: "address1",
    key: "address 2",
    ellipsis: true,
  }
];
const columns_1 = [
  {
    title: "thu1",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "thu",
    dataIndex: "age",
    key: "age",
    width: 200,
  },
  {
    title: "thu2",
    dataIndex: "address",
    key: "address 1",
    ellipsis: true,
  },
  {
    title: "thu4",
    dataIndex: "address",
    key: "address 2",
    ellipsis: true,
  }
];
const data = [
  {
    key: "1",
    name: "Tin 1",
    age: 32,
    address: "Đã gửi",
    address1: ["Active"],
  },
  {
    key: "2",
    name: "Tin 2",
    age: 42,
    address: "Đã gửi",
    address1: ["Active"],
  },
  {
    key: "3",
    name: "Tin 3",
    age: 32,
    address: "Đã gửi",
    address1: ["Active"],
  },
];
const data_1 = [
  {
    key: "1",
    name: "John Br",
    age: 32,
    address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  }
];
</script>

<style>

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.nobiet{
  border: 1px solid;
  background: #f0f2f5;
  border: #f0f2f5;
}
.sub1{
  padding-left: 1000000px;

}
.nav_color{
   /* padding-top: 50px; */
  padding-right: 30px;
  /* padding-bottom: 50px; */
  padding-left: 15px;
  background: #F5F5F5


}
.ant-layout-sider-children{
  flex: 0 0 200px; 
  /* max-width: 500px; 
  min-width: 500px;  */
  width: 250px;
}
.logo p {
  color: #f9b666;
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
}

.ant-layout-sider-children{
  background:white;
   /* background:#6e0c0c; */
}
/* .ant-layout-sider-trigger{
  width: 1000px;
} */
.body{
  /* text-align: center; */
  padding: 70px;
  padding-top: 10px;
  /* margin-left: 50%; */
}
.ancom{
  width: 100%;
}
</style>
