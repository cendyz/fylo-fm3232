"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var bg_mobile_png_1 = require("./images/bg-mobile.png");
var bg_desktop_png_1 = require("./images/bg-desktop.png");
var logo_svg_1 = require("./images/logo.svg");
var icon_document_svg_1 = require("./images/icon-document.svg");
var icon_folder_svg_1 = require("./images/icon-folder.svg");
var icon_upload_svg_1 = require("./images/icon-upload.svg");
var nanoid_1 = require("nanoid");
var vue_1 = require("vue");
var data = (0, vue_1.reactive)({
    0: {
        img: icon_document_svg_1.default,
        alt: 'file icon',
    },
    1: {
        img: icon_folder_svg_1.default,
        alt: 'folder icon',
    },
    2: {
        img: icon_upload_svg_1.default,
        alt: 'upload icon',
    },
});
var actualValue = (0, vue_1.ref)(815);
var restValue = (0, vue_1.computed)(function () { return 1000 - actualValue.value; });
var handleRange = function () {
    var newValue = actualValue.value / 10;
    document.documentElement.style.setProperty('--actualValue', "".concat(newValue, "%"));
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.picture, __VLS_intrinsicElements.picture)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.source)({
        srcset: ((__VLS_ctx.desktopBg)),
        media: ("(min-width:992px)"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.mobileBg)), alt: ("") }, { class: ("absolute w-full h-full top-0 left-0 lg:h-1/2 lg:top-1/2") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)(__assign({ class: ("relative w-[87vw] lg:flex lg:w-full lg:gap-x-[2.7rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("bg-blue-0 p-[4rem] grid gap-y-[3.5rem] rounded-2xl rounded-tr-[10rem] lg:pr-[13rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        src: ((__VLS_ctx.logo)),
        alt: ("three squares on top of each other and text fylo"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex gap-x-[1.5rem] items-center") }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.data)); _i < _a.length; _i++) {
        var item = _a[_i][0];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: ((__VLS_ctx.nanoid())) }, { class: ("w-[4.5rem] h-[4.5rem] flex items-center justify-center bg-[#0c132a] rounded-[1rem] lg:cursor-pointer") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((item.img)),
            alt: ((item.alt)),
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("bg-blue-0 p-[4rem] w-full grid gap-y-[1.5rem] rounded-2xl mt-[2rem] pb-[4.5rem] relative lg:w-[60rem] lg:pb-[4rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-blue-50 opacity-70 text-[1.45rem] text-center lg:text-left w-max") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("font-bold uppercase") }));
    (__VLS_ctx.actualValue);
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(__assign(__assign({ onInput: (__VLS_ctx.handleRange) }, { type: ("range"), min: ("0"), max: ("1000") }), { class: ("w-full bg-blue-400 rounded-3xl border-x-[4px] border-blue-400 h-[2rem]") }));
    (__VLS_ctx.actualValue);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex justify-between text-white font-semibold opacity-90") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center text-[4rem] font-bold bg-white w-max py-[.5rem] px-[2rem] justify-center absolute left-1/2 translate-x-[-50%] translate-y-[-50%] bottom-[-40%] rounded-3xl lg:left-[76.8%] lg:bottom-[63%] lg:w-[20rem] z-[100]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.restValue);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("uppercase text-[1.3rem] text-gray-400 ml-[1rem] mt-[.5rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("hidden lg:block absolute w-[3rem] h-[4.2rem] bg-white left-[88.5%] bottom-[79%] skew-y-[47deg] z-10") }));
    ['absolute', 'w-full', 'h-full', 'top-0', 'left-0', 'lg:h-1/2', 'lg:top-1/2', 'relative', 'w-[87vw]', 'lg:flex', 'lg:w-full', 'lg:gap-x-[2.7rem]', 'bg-blue-0', 'p-[4rem]', 'grid', 'gap-y-[3.5rem]', 'rounded-2xl', 'rounded-tr-[10rem]', 'lg:pr-[13rem]', 'flex', 'gap-x-[1.5rem]', 'items-center', 'w-[4.5rem]', 'h-[4.5rem]', 'flex', 'items-center', 'justify-center', 'bg-[#0c132a]', 'rounded-[1rem]', 'lg:cursor-pointer', 'bg-blue-0', 'p-[4rem]', 'w-full', 'grid', 'gap-y-[1.5rem]', 'rounded-2xl', 'mt-[2rem]', 'pb-[4.5rem]', 'relative', 'lg:w-[60rem]', 'lg:pb-[4rem]', 'text-blue-50', 'opacity-70', 'text-[1.45rem]', 'text-center', 'lg:text-left', 'w-max', 'font-bold', 'uppercase', 'w-full', 'bg-blue-400', 'rounded-3xl', 'border-x-[4px]', 'border-blue-400', 'h-[2rem]', 'flex', 'justify-between', 'text-white', 'font-semibold', 'opacity-90', 'flex', 'items-center', 'text-[4rem]', 'font-bold', 'bg-white', 'w-max', 'py-[.5rem]', 'px-[2rem]', 'justify-center', 'absolute', 'left-1/2', 'translate-x-[-50%]', 'translate-y-[-50%]', 'bottom-[-40%]', 'rounded-3xl', 'lg:left-[76.8%]', 'lg:bottom-[63%]', 'lg:w-[20rem]', 'z-[100]', 'uppercase', 'text-[1.3rem]', 'text-gray-400', 'ml-[1rem]', 'mt-[.5rem]', 'hidden', 'lg:block', 'absolute', 'w-[3rem]', 'h-[4.2rem]', 'bg-white', 'left-[88.5%]', 'bottom-[79%]', 'skew-y-[47deg]', 'z-10',];
    var __VLS_slots;
    var $slots;
    var __VLS_inheritedAttrs;
    var $attrs;
    var __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
var __VLS_self = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {
            mobileBg: bg_mobile_png_1.default,
            desktopBg: bg_desktop_png_1.default,
            logo: logo_svg_1.default,
            nanoid: nanoid_1.nanoid,
            data: data,
            actualValue: actualValue,
            restValue: restValue,
            handleRange: handleRange,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return require('vue'); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
