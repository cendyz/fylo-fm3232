<template>
	<picture>
		<source :srcset="desktopBg" media="(min-width:992px)" />
		<img :src="mobileBg" alt="" class="absolute w-full h-full top-0 left-0" />
	</picture>
	<main class="relative w-[87vw]">
		<section class="bg-blue-0 p-[4rem] w-full grid gap-y-[3.5rem] rounded-2xl rounded-tr-[10rem]">
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
import { reactive } from 'vue'
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
</script>

<style lang="scss">
@use './sass/reset.scss';
</style>
