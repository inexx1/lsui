<template>
    <button class="demo-button" :class="[`demo-button--${type}`]">
        <span><slot></slot></span>
    </button>
</template>

<script>

export default {
  name: 'demoButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="scss" scoped>

.demo-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfed;
    color: #606266;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    padding: 12px 20px;
    border-radius: 4px;
    &:hover,
    &:focus {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
}
.demo-button--primary {
    color: #fff;
    background-color: #409eff;
    border: #409eff;
}
.demo-button--success {
    color: #fff;
    background-color: #67c23a;
    border: #67c23a;
    &:hover,
    &:focus {
        color: #fff;
        border-color: #67c23a;
        background-color: #67c23a;
    }
}
.demo-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border: #e6a23c;
    &:hover,
    &:focus {
        color: #fff;
        border-color: #e6a23c;
        background-color: #e6a23c;
    }
}
</style>
