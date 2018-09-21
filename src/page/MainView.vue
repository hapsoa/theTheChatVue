<template lang="pug">
  .chat-wrapper
    .empty-bar
    .left-side-bar
      .left-header
        .header-image SL
        .header-name soojung.lee
        .header-status
          .i.fas.fa-angle-down#logout-button
      .left-input
        .input-bar
          .i.fas.fa-search
          input(placeholder="검색 (CMD+K)")
        .adder +
      .left-body-part
        .empty-part
        .header-part 즐겨찾기 (1)
        .item-part
          .item-private.i.fas.fa-lock
          .item-text class_level1
          .item-view.i.far.fa-eye-slash.show
          .item-status.i.fas.fa-sign-out-alt.show
        .empty-part
        .header-part 채널(1)
        .item-part
          .item-private.i.fas.fa-lock
          .item-text general
          .item-view.i.far.fa-eye-slash.show
          .item-status.i.fas.fa-sign-out-alt.show
      .left-footer TheTheChat
    .main-part
      .main-header
        .i.far.fa-star
        .i.fas.fa-lock
        .header-text class_level1

      .main-chatting
        .chat-date
          .date-line
          .date-text 2018년 5월 25일
          .date-line


        .chat-content
          .chat-image-zone
            .chat-image.orange SL
            .i.fas.fa-cog.display-none
          .chat
            .chat-profile-content
              .profile-name sooojung.lee
              .profile-owner-content
                .owner-text.admin Admin
                .owner-text.owner Owner
              .profile-date 오후 1시 42분
              .i.fas.fa-cog
            .chat-text-content sdfsdfsdf sdfsd<br>fsdf sdf sdas<br>da
              | fsd asdfsdfsd<br>f sdf sdasda fsd a


        .chat-content
          .chat-image-zone
            .chat-image
            .i.fas.fa-cog
          .chat
            .chat-profile-content
              .profile-name
              .profile-owner-content
                .owner-text.admin
                .owner-text.owner
              .profile-date
              .i.fas.fa-cog.display-none
            .chat-text-content sdfsdfsdf
        <!--chatting-log(:initial="'JH'" :name="'허재종'" :admin="'admin'"-->
          <!--:date="'오후 3시 3분'" :textContent="'안녕하세요^^'")-->
        chatting-log(v-for="chatting in chattingArray" v-bind="chatting")
      .main-input
        .main-input-content
          .input-bar
            .i.far.fa-grin
            textarea(placeholder='메세지' v-model="inputText" v-on:keyup.enter="appendChat")
          .content-bar
            .contents
              .i.fas.fa-paperclip#upload-file-button
                input.display-none#hidden-upload-button(type="file" multiple)
              .i.fas.fa-microphone
              .i.fas.fa-video
            .empty-content
    .right-side-bar
      .icon.i.fas.fa-info-circle
      .icon.i.fas.fa-search
      .icon.i.fas.fa-users
      .icon.i.fas.fa-bell
      .icon.i.fas.fa-paperclip
      .icon.i.fas.fa-at
      .icon.i.fas.fa-star
      .icon.i.fas.fa-thumbtack

  <!--.progress-window-->
    <!--h1 Loading-->
    <!--svg#load(x='0px', y='0px', viewBox='0 0 150 150')-->
      <!--circle#loading-inner(cx='75', cy='75', r='60')-->
</template>

<script>
import Vue from 'vue';
import chattingLog from '../components/chatting-log';

Vue.component(chattingLog.name, chattingLog);

export default {
  name: 'MainView',
  data() {
    return {
      inputText: '',
      chattingArray: []
    };
  },
  methods: {
    appendChat() {
      if (this.inputText.trim() !== '') {
        this.chattingArray.push({
          initial: 'JH',
          name: 'jaejong.heo',
          admin: 'admin',
          date: this.getChatLogTime(new Date()),
          textContent: this.inputText
        });
      }

      this.inputText = '';
      console.log(this.chattingArray);
    },
    getChatLogTime(date) {
      let displayTime;
      // const date = new Date(millisecondsTime);
      let hours = date.getHours();
      if (hours <= 12) { // 0 ~ 12시
        displayTime = `오전 ${hours}시 ${date.getMinutes()}분`;
      } else { // 13 ~ 24시
        hours -= 12;
        displayTime = `오후 ${hours}시 ${date.getMinutes()}분`;
      }
      return displayTime;
    }
  }
};

</script>

<style scoped lang="sass">
  @import url(https://fonts.googleapis.com/css?family=Roboto:400,300)
  @import "global"

  *
    box-sizing: border-box
  .display-none
    display: none !important
  .chat-wrapper
    width: 100%
    height: 100vh
    display: flex
    font-family: 'Roboto', sans-serif
    .empty-bar
      width: 80px
      height: 100%
      background: #222
    .left-side-bar
      width: 220px
      height: 100%
      .left-header
        width: 100%
        height: 50px
        display: flex
        padding: 8px
        $header-height: 34px
        background: $background-blue-first
        .header-image
          width: $header-height
          height: $header-height
          background: $state-occupied
          border-radius: 4px
          color: $font-grey-first
          font-size: 21px
          font-weight: 600
          line-height: $header-height
          text-align: center
        .header-name
          flex: 1
          height: $header-height
          padding: 0 8px
          line-height: $header-height
          color: $font-blue-first
          font-weight: 300
        .header-status
          width: 16px
          height: $header-height
          .i
            width: 100%
            height: 100%
            color: $font-blue-first
            line-height: $header-height
      .left-input
        background: $background-blue-first
        width: 100%
        height: 45px
        display: flex
        padding: 8px
        .input-bar
          flex: 1
          height: 100%
          border: 1px solid $border-blue-first
          border-radius: 4px
          position: relative
          margin-right: 16px
          opacity: 0.8
          .i
            width: 16px
            height: 29px
            color: $font-blue-second
            position: absolute
            left: 8px
            line-height: 29px
            font-size: 12px
          input
            width: 100%
            height: 100%
            background: $background-blue-ninth
            border: none
            outline: none
            padding-left: 32px
            color: $font-grey-first
            &::placeholder
              color: $font-blue-second
              font-weight: 300
        .adder
          width: 15px
          height: 100%
          line-height: 29px
          color: $font-blue-second
          font-size: 22px
          font-weight: 500
      .left-body-part
        width: 100%
        height: calc(100% - 155px)
        overflow-y: auto
        //opacity: 0.97
        background: $background-blue-third
        padding: 8px
        color: $font-blue-third
        .empty-part
          width: 100%
          height: 10px
        .header-part
          width: 100%
          height: 24px
          font-size: 11px
          line-height: 24px
          color: inherit
          padding-left: 8px
        .item-part
          width: 100%
          height: 24px
          display: flex
          cursor: pointer
          padding-left: 4px
          .i
            width: 18px
            height: 100%
            color: inherit
            font-size: 11px
            opacity: 0.8
            line-height: 24px
            text-align: center
          .item-text
            flex: 1
            font-size: 12px
            line-height: 24px
          .show
            display: none
          &:hover
            background: $background-blue-fourth
            .show
              display: block
      .left-footer
        width: 100%
        height: 60px
        background: $background-blue-first
        padding: 8px
        line-height: 44px
        color: white
        font-size: 38px
        font-weight: 800
    .main-part
      flex: 1
      height: 100%
      display: flex
      flex-direction: column
      .main-header
        width: 100%
        height: 50px
        border-bottom: 1px solid $border-grey-first
        padding: 8px 16px
        display: flex
        .i
          width: 32px
          height: 100%
          line-height: 34px
          color: $font-grey-second
        .header-text
          flex: 1
          height: 100%
          line-height: 34px
          color: #333
          font-size: 21px
      .main-chatting
        width: 100%
        flex: 1
        overflow-y: auto
        .chat-date
          width: 100%
          height: 40px
          display: flex
          .date-line
            flex: 1
            height: 20px
            border-bottom: 1px solid $font-grey-third
          .date-text
            width: 110px
            line-height: 40px
            text-align: center
            height: 40px
            font-size: 10px
            color: #444
            font-weight: 600
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
      .main-input
        width: 100%
        max-height: 160px
        border-top: 1px solid #ddd
        padding: 8px 16px 16px 16px
        .main-input-content
          width: 100%
          border: 1px solid #ddd
          border-radius: 4px
          display: flex
          .input-bar
            flex: 1
            border-right: 1px solid #ddd
            position: relative
            .i
              position: absolute
              left: 8px
              top: 8px
              color: #ccc
            textarea
              resize: none
              width: 100%
              height: 36px
              max-height: 130px
              padding-left: 32px
              padding-top: 8px
              border: none
              outline: none
              overflow: auto
              &::placeholder
                color: #999
          .content-bar
            width: 80px
            height: 32px
            .contents
              display: flex
              height: 30px
              border-bottom: 1px solid #efefef
              background: #eee
              .i
                flex: 1
                text-align: center
                height: 30px
                color: #777
                line-height: 30px

    .right-side-bar
      width: 36px
      height: 100%
      border-left: 1px solid #ccc
      padding: 8px
      .icon
        width: 20px
        height: 36px
        line-height: 36px
        color: #444
        font-size: 12px
        text-align: center
</style>
