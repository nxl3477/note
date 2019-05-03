<template>
  <div>
    meta标签生成
  </div>
</template>
<script>
export default {
  // meta标签
 head () {
    return {
      title: this.title,
      meta: [
        { hid: '你哈,我时hid', name: '你好我时name', content: '你好,我时content' }
      ]
    }
  }
}
</script>
