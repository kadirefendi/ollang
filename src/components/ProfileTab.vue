<template>
  <div>
    <div id="graphic-designer" class="flex flex-row items-start">
      <div>
        <IconDribble />
      </div>
      <div class="w-full ml-4">
        <div class="flex flex-row w-full items-center justify-between">
          <div class="flex flex-col">
            <strong>Graphic Designer</strong>
            <span class="">Dribble Inc.</span>
          </div>
          <div>
            <IconClockSm />
            <span class="text-slate-500">Feb 2016 - Dec 2017</span>
          </div>
          <div>
            <IconMap />
            <span class="text-slate-500">New York, USA</span>
          </div>
        </div>
        <div id="content-graphic-designer" class="mt-4">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have stuffed alteration in some, by injected humour, or
            randomized words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure.
          </p>
        </div>
        <div class="my-2">
          <span class="font-medium">Media Files (2)</span>
        </div>
        <div class="flex flex-row">
          <img
            src="../assets/images/pic-one.jpg"
            alt=""
            width="250"
            class="mr-2"
          />
          <img src="../assets/images/pic-two.png" alt="" width="250" />
        </div>
        <hr class="my-4" />
      </div>
    </div>
    <div id="graphic-designer" class="flex flex-row items-start">
      <div>
        <IconSketch />
      </div>
      <div class="w-full ml-4">
        <div class="flex flex-row w-full items-center justify-between">
          <div class="flex flex-col">
            <strong>Lead Designer</strong>
            <span class="">Sketch App</span>
          </div>
          <div>
            <IconClockSm />
            <span class="text-slate-500">Apr 2010 - Sept 2011</span>
          </div>
          <div>
            <IconMap />
            <span class="text-slate-500">Katmandu, Nepal</span>
          </div>
        </div>
        <div id="content-graphic-designer" class="mt-4">
          <p>
            Contrary to popular belief, Lorem ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintok, a Latin professor.
          </p>
        </div>
        <hr class="my-4" />
      </div>
    </div>
  </div>
</template>

<script setup>
import IconDribble from './icons/IconDribble.vue'
import IconClockSm from './icons/IconClockSm.vue'
import IconMap from './icons/IconMap.vue'
import IconSketch from './icons/IconSketch.vue'
</script>
