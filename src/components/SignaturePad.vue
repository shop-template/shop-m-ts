<template>
  <div class="signature-pad">
    <div v-if="props.toolShow" class="signature-pad-header">
      <div class="color-box">
        <div
          v-for="item in props.colors"
          :key="item"
          class="color-item"
          :class="{ active: item === colorActive }"
          @click="changeColor(item)"
        >
          <div class="color-item-inner" :style="{ background: item }"></div>
        </div>
      </div>
      <div class="handle-box">
        <div class="handle-item" @click="clearCanvas">
          <van-icon class="handle-item-icon" name="delete-o" />
        </div>
      </div>
    </div>
    <div class="signature-pad-canvas-box">
      <canvas
        ref="signaturePadCanvas"
        class="signature-pad-canvas"
        style="touch-action: none; user-select: none"
      ></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useEventListener } from '@vueuse/core'
import { Toast } from 'vant'
import SignaturePad from 'signature_pad'
import trimCanvas from 'trim-canvas'
import { download } from '@/utils'

interface Props {
  toolShow?: boolean
  colors?: string[]
  isTrimCanvas?: boolean
  downloadName?: string
}

const props = withDefaults(defineProps<Props>(), {
  // 是否展示上方工具栏颜色切换、清除签名
  toolShow: true,
  // 色组
  colors: () => ['#000', '#f00'],
  // 是否需要纯签名（去除周边留白）
  isTrimCanvas: true,
  // 下载图片的名称
  downloadName: 'signature',
})

defineExpose({
  getCanvas,
  getTrimmedCanvas,
  getSignaturePad,
  clear: clearCanvas,
  isEmpty: isEmptyCanvas,
  changePenColor,
  fromDataURL,
  toDataURL,
  fromData,
  toData,
  on: signaturePadOn,
  off: signaturePadOff,
  saveImage,
  saveAsPng,
  saveAsJpg,
})

const colorActive = ref(props.colors[0])
const signaturePadCanvas: any = ref(null)
let signaturePad: any = null
onMounted(() => {
  nextTick(() => {
    signaturePad = new SignaturePad(signaturePadCanvas.value, {
      backgroundColor: props.isTrimCanvas ? 'rgba(255,255,255,0)' : 'rgb(255,255,255)',
    })
    resizeCanvas()
  })
})

function resizeCanvas() {
  const ratio = Math.max(window.devicePixelRatio || 1, 1)
  signaturePadCanvas.value.width = signaturePadCanvas.value.offsetWidth * ratio
  signaturePadCanvas.value.height = signaturePadCanvas.value.offsetHeight * ratio
  signaturePadCanvas.value.getContext('2d').scale(ratio, ratio)
  signaturePad.clear()
}

useEventListener(window, 'resize', (evt) => {
  resizeCanvas()
})

function getCanvas() {
  return signaturePadCanvas.value
}

function getTrimmedCanvas(): any {
  if (signaturePad.isEmpty()) {
    Toast('请先提供签名')
    return false
  }
  const copy = document.createElement('canvas')
  copy.width = signaturePadCanvas.value.width
  copy.height = signaturePadCanvas.value.height
  copy?.getContext('2d')?.drawImage(signaturePadCanvas.value, 0, 0)
  return trimCanvas(copy)
}

function getSignaturePad() {
  if (signaturePad.isEmpty()) {
    Toast('请先提供签名')
    return false
  }
  return signaturePad
}

// 清空canvas
function clearCanvas() {
  signaturePad.clear()
}

// 判断canvas是否为空
function isEmptyCanvas() {
  return signaturePad.isEmpty()
}

// 更改画笔颜色
function changePenColor(color: string) {
  signaturePad.penColor = color
}

function fromDataURL(dataURL: string, options: any) {
  return signaturePad.fromDataURL(dataURL, options)
}

function toDataURL(type: string, encoderOptions: any) {
  return signaturePad.toDataURL(type, encoderOptions)
}

function fromData(pointGroups: any) {
  return signaturePad.fromData(pointGroups)
}

function toData() {
  return signaturePad.toData()
}

function signaturePadOn() {
  return signaturePad.on()
}

function signaturePadOff() {
  return signaturePad.off()
}

function changeColor(color: string) {
  colorActive.value = color
  changePenColor(color)
}

// 保存为png图片
function saveImage(downloadName: string, type = 'png') {
  if (signaturePad.isEmpty()) {
    Toast('请先提供签名')
  } else {
    const dataURL = props.isTrimCanvas ? getTrimmedCanvas().toDataURL() : signaturePad.toDataURL()
    if (type === 'png') {
      download(dataURL, `${downloadName || props.downloadName}.png`)
    } else {
      download(dataURL, `${downloadName || props.downloadName}.jpg`)
    }
  }
}

function saveAsPng(downloadName?: string) {
  saveImage(downloadName as string, 'png')
}

function saveAsJpg(downloadName?: string) {
  saveImage(downloadName as string, 'jpg')
}
</script>

<style lang="less" scoped>
@import './../styles/common.less';
@canvas-height: 250px;
.signature-pad {
  background-color: #fff;
}
.signature-pad-header {
  .display-flex-between();
  padding: @padding-small;
}
.color-box,
.handle-box {
  .display-flex-center();
}
.color-item {
  background-color: #fff;
  border-radius: 50%;
  padding: @padding-mini;
  &.active {
    background-color: #dde1e3;
  }
}
.color-item-inner {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.color-item + .color-item {
  margin-left: @margin-mini;
}
.handle-item {
  box-sizing: border-box;
  border: 1px solid #dde1e3;
  border-radius: 50%;
  .display-flex-center();
  width: calc(30px + @padding-mini * 2);
  height: calc(30px + @padding-mini * 2);
  .handle-item-icon {
    font-size: 20px;
  }
}
.signature-pad-canvas-box {
  box-sizing: border-box;
  border: 1px solid #ddd;
  font-size: 0;
}
.signature-pad-canvas {
  width: 100%;
  height: @canvas-height;
}
</style>
