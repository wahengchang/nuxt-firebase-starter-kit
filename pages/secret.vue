<template>
  <div class="container">
    <h1 class="subtitle">Hi {{ _user.displayName }}</h1>

    <div class="row">
      <span>This is data list: </span>
      <button @click="onClickAddTemplate" class="addButton">add</button>
    </div>

    <ul v-if="roomList" class="roomListWrapper">
      <li v-for="(item, index) in roomList" :key="index">
        <span>{{ item.name }}</span>
        <button @click="onClickRemoveRoom(item.id)">X</button>
      </li>
    </ul>
    <div v-else>
      Loading ...
    </div>
  </div>
</template>

<script>
import requiredLogin from '~/mixins/requiredLogin'

import RoomDao from '~/utils/dao/Room'
const { DEFAULT_ROOM } = RoomDao
const roomDao = new RoomDao()

export default {
  components: {},
  mixins: [requiredLogin],
  data: function() {
    return {
      roomList: null
    }
  },
  computed: {
    _user() {
      return this.user
    }
  },
  mounted: async function() {
    await this.initData()
  },
  methods: {
    onClickAddTemplate: async function() {
      const name = `peter-room-${new Date().getTime()}`
      const creator = this.user.email
      const payload = { ...DEFAULT_ROOM, name, creator }
      await roomDao.create(payload)
      await this.initData()
    },
    onClickRemoveRoom: async function(id) {
      if (!id) console.log('[ERROR] room id is null')
      await roomDao.remove(id)
      await this.initData()
    },
    initData: async function() {
      await Promise.all([this.fetchRoomList()])
    },
    fetchRoomList: async function() {
      const roomList = await roomDao.list()
      this.roomList = roomList
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 500px;
  border: lightgray 1px solid;
  padding: 20px 30px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.addButton {
  margin-left: 20px;
}

.links {
  padding-top: 15px;
}
</style>
