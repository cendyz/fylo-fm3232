<template>
	<picture>
		<source :srcset="desktopBg" media="(min-width:992px)" />
		<img :src="mobileBg" alt="" class="absolute w-full h-full top-0 left-0" />
	</picture>
	<main class="relative w-[87vw]">
		<section class="bg-blue-0 p-[4rem] grid gap-y-[3.5rem] rounded-2xl rounded-tr-[10rem]">
			<img :src="logo" alt="three squares on top of each other and text fylo" />
			<div class="flex gap-x-[1.5rem] items-center">
				<div
					v-for="item in data"
					:key="nanoid()"
					class="w-[4.5rem] h-[4.5rem] flex items-center justify-center bg-[#0c132a] rounded-[1rem]">
					<img :src="item.img" :alt="item.alt" />
				</div>
			</div>
		</section>
		<section class="bg-blue-0 p-[4rem] w-full grid gap-y-[1.5rem] rounded-2xl mt-[2rem] pb-[4.5rem] relative">
			<p class="text-blue-50 opacity-70 text-[1.45rem] text-center">
				You've used <span class="font-bold uppercase">{{ actualValue }} gb</span> of your storage
			</p>

			<input
				type="range"
				v-model="actualValue"
				min="0"
				max="1000"
				class="relative w-full bg-blue-400 rounded-3xl border-x-[4px] border-blue-400"
				@input="handleRange" />
			<div class="flex justify-between text-white font-semibold opacity-90">
				<p>0 GB</p>
				<p>1000 GB</p>
			</div>
			<div
				class="flex items-center text-[4rem] font-bold bg-white w-max py-[.5rem] px-[2rem] absolute left-1/2 translate-x-[-50%] translate-y-[-50%] bottom-[-40%] rounded-3xl">
				<p>{{ restValue }}</p>
				<p class="uppercase text-[1.3rem] text-gray-400 ml-[1rem] mt-[.5rem]">gb left</p>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
import mobileBg from './images/bg-mobile.png'
import desktopBg from './images/bg-desktop.png'
import logo from './images/logo.svg'
import doc from './images/icon-document.svg'
import folder from './images/icon-folder.svg'
import upload from './images/icon-upload.svg'
import { nanoid } from 'nanoid'
import { reactive, ref, computed } from 'vue'
const data = reactive({
	0: {
		img: doc,
		alt: 'file icon',
	},
	1: {
		img: folder,
		alt: 'folder icon',
	},
	2: {
		img: upload,
		alt: 'upload icon',
	},
})
const actualValue = ref(815)
const restValue = computed(() => 1000 - actualValue.value)

const handleRange = (): void => {
	let newValue = actualValue.value / 10
	document.documentElement.style.setProperty('--actualValue', `${newValue}%`)
}
</script>

<style lang="scss">
@use './sass/reset.scss';
@use './sass/mixins.scss' as *;
:root {
	--actualValue: 81.5%;
}

input[type='range'] {
	-webkit-appearance: none;
}

input[type='range']::-webkit-slider-thumb {
	@include thumb;
}

input[type='range']::-moz-range-thumb {
	@include thumb;
}

input[type='range']::-webkit-slider-runnable-track {
	@include slider;
}

input[type='range']::-moz-range-track {
	@include slider;
}
</style>
