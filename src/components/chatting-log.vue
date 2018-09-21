<template lang="pug">
  .chat-content
    .chat-image-zone
      .chat-image.orange {{ initial }}
      .i.fas.fa-cog.display-none
    .chat
      .chat-profile-content
        .profile-name {{ name }}
        .profile-owner-content
          .owner-text.admin {{ admin }}
          .owner-text.owner {{ owner }}
        .profile-date {{ date }}
        .i.fas.fa-cog
      .chat-text-content {{ textContent }}
</template>

<script>
export default {
  name: 'chatting-log',
  data() {
    return {
    };
  },
  props: {
    initial: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: '이름을 입력하세요'
    },
    admin: {
      type: String,
      default: ''
    },
    owner: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      required: true
    },
    textContent: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang="sass">
  @import ../page/global

  .chat-content
    width: 100%
    display: flex
    padding: 8px 16px 0 16px
    position: relative
    &:hover
      background-color: #f2f2f2
      .fa-cog
        visibility: visible
    .chat-image-zone
      width: 40px
      .chat-image
        text-align: center
        font-size: 30px
        border-radius: 5px
        line-height: 40px
        max-height: 40px
        color: white
        //border: solid 1px
        &.orange
          background: $state-occupied
      .i.fas.fa-cog
        visibility: hidden
        width: 100%
        color: $font-grey-third
        font-size: 12px
        text-align: end
        line-height: 21px
    .chat
      width: calc(100% - 40px)
      .chat-profile-content
        width: 100%
        display: flex
        .profile-name
          padding-left: 8px
          color: #333
          font-size: 13px
          font-weight: 500
        .profile-owner-content
          padding: 0 4px
          display: flex
          .owner-text
            font-weight: 300
            text-align: center
            margin: 0 2px
            font-size: 12px
            //width: 40px
            background: $background-grey-third
            color: #fdfdfd
            border-radius: 2px
        .profile-date
          line-height: 16px
          color: #666666
          font-size: 8px
          margin: 0 4px 0 0
        .i.fas.fa-cog
          font-size: 12px
          line-height: 16px
          color: $font-grey-third
      .chat-text-content
        padding: 4px 8px 0 8px
        color: #555
        font-size: 12px
        line-height: 18px
</style>
