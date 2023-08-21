<template>
  <div class="container">
    <div class="tabs">
      <ul>
        <li :class="{ active: currentTab === 'section1' }"><a @click="scrollTo('section1')">Section 1</a></li>
        <li :class="{ active: currentTab === 'section2' }"><a @click="scrollTo('section2')">Section 2</a></li>
        <li :class="{ active: currentTab === 'section3' }"><a @click="scrollTo('section3')">Section 3</a></li>
        <li :class="{ active: currentTab === 'section4' }"><a @click="scrollTo('section4')">Section 4</a></li>
        <li :class="{ active: currentTab === 'section5' }"><a @click="scrollTo('section5')">Section 5</a></li>
        <li :class="{ active: currentTab === 'section6' }"><a @click="scrollTo('section6')">Section 6</a></li>
        <li :class="{ active: currentTab === 'section7' }"><a @click="scrollTo('section7')">Section 7</a></li>
        <li :class="{ active: currentTab === 'section8' }"><a @click="scrollTo('section8')">Section 8</a></li>
        <li :class="{ active: currentTab === 'section9' }"><a @click="scrollTo('section9')">Section 9</a></li>
        <li :class="{ active: currentTab === 'section10' }"><a @click="scrollTo('section10')">Section 10</a></li>
      </ul>
    </div>
    <div class="content" @scroll="handleScroll">
      <div id="section1" style="height: 500px;width: 750px; background-color: lightblue;">Section 1</div>
      <div id="section2" style="height: 500px;width: 750px; background-color: lightgreen;">Section 2</div>
      <div id="section3" style="height: 500px;width: 750px; background-color: lightpink;">Section 3</div>
      <div id="section4" style="height: 500px;width: 750px; background-color: rgb(225, 255, 182);">Section 4</div>
      <div id="section5" style="height: 500px;width: 750px; background-color: rgb(165, 75, 138);">Section 5</div>
      <div id="section6" style="height: 500px;width: 750px; background-color: rgb(135, 118, 172);">Section 6</div>
      <div id="section7" style="height: 500px;width: 750px; background-color: rgb(75, 176, 222);">Section 7</div>
      <div id="section8" style="height: 500px;width: 750px; background-color: rgb(45, 199, 168);">Section 8</div>
      <div id="section9" style="height: 500px;width: 750px; background-color: rgb(175, 216, 54);">Section 9</div>
      <div id="section10" style="height: 500px;width: 750px; background-color: rgb(208, 57, 49);">Section 10</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const currentTab = ref('section1');
    const windowWidth=ref('375')

    const scrollTo = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        currentTab.value = id;
        element.scrollIntoView({});
      }
    };

    const handleScroll = (event: Event) => {
      const target = event.target as HTMLElement;
      const section1 = document.getElementById('section1');
      const section2 = document.getElementById('section2');
      const section3 = document.getElementById('section3');
      const section4 = document.getElementById('section4');
      const section5 = document.getElementById('section5');
      const section6 = document.getElementById('section6');
      const section7 = document.getElementById('section7');
      const section8 = document.getElementById('section8');
      const section9 = document.getElementById('section9');
      const section10 = document.getElementById('section10');
      if (section1 && section2 && section3&&section4&&section5&&section6&&section7) {
        if (target.scrollTop >= section10.offsetTop - target.offsetTop) {
          currentTab.value = 'section10';
        }else
        if (target.scrollTop >= section9.offsetTop - target.offsetTop) {
          currentTab.value = 'section9';
        }else
        if (target.scrollTop >= section8.offsetTop - target.offsetTop) {
          currentTab.value = 'section8';
        }else
        if (target.scrollTop >= section7.offsetTop - target.offsetTop) {
          currentTab.value = 'section7';
        }else
        if (target.scrollTop >= section6.offsetTop - target.offsetTop) {
          currentTab.value = 'section6';
        }else
        if (target.scrollTop >= section5.offsetTop - target.offsetTop) {
          currentTab.value = 'section5';
        }else
        if (target.scrollTop >= section4.offsetTop - target.offsetTop) {
          currentTab.value = 'section4';
        }else if (target.scrollTop >= section3.offsetTop - target.offsetTop) {
          currentTab.value = 'section3';
        } else if (target.scrollTop >= section2.offsetTop - target.offsetTop) {
          currentTab.value = 'section2';
        } else {
          currentTab.value = 'section1';
        }
      }
    };
    // const handleScroll=(e)=>{
    //   const target = event.target as HTMLElement;
    //   const topy=target.scrollTop
    //   console.log(topy)
    //   const h = 500
    //   if(topy >=0 && topy < (1312 - h)/750*windowWidth.value){
    //     currentTab.value = 'section1'
    //   }else if(topy >= (1312- h)/750*windowWidth.value && topy < (1957- h)/750*windowWidth.value){
    //     currentTab.value = 'section2'
    //   }else if(topy >= (1957- h)/750*windowWidth.value && topy < (2581- h)/750*windowWidth.value){
    //     currentTab.value = 'section3'
    //   }else if(topy >= (2581- h)/750*windowWidth.value && topy < (3240- h)/750*windowWidth.value){
    //     currentTab.value = 'section4'
    //   }else if(topy >= (3240 - h)/750*windowWidth.value && topy < (4097- h)/750*windowWidth.value){
    //     currentTab.value = 'section5'
    //   }else if(topy >= (4097- h)/750*windowWidth.value && topy < (5054- h)/750*windowWidth.value){
    //     currentTab.value = 'section6'
    //   }else if(topy >=(5054- h)/750*windowWidth.value && topy < (6069- h)/750*windowWidth.value){
    //     currentTab.value = 'section7'
    //   }else if(topy >= (6069- h)/750*windowWidth.value && topy < (6778- h)/750*windowWidth.value){
    //     currentTab.value = 'section8'
    //   }else if(topy >= (6778- h)/750*windowWidth.value && topy < (7539- h)/750*windowWidth.value){
    //     currentTab.value = 'section9'
    //   }else if(topy >= (7539- h)/750*windowWidth.value){
    //     currentTab.value = 'section10'
    //   }
    // }

    return { currentTab, scrollTo, handleScroll };
  },
});
</script>

<style scoped>
.container {
  display: flex;
}
.tabs {
  width: 200px;
}
.content {
  height: 500px;
  flex-grow: 1;
  overflow-y: scroll;
}
.active {
  font-weight: bold;
  background-color: rgb(131, 201, 231);
  color: #fff;
}
ul{
  list-style: none;
}
li{
  color: rgb(227, 183, 80);
}
</style>
