<template>
    <vn-view :style="viewStyle">
            <slot>
                <vn-text>Put row stuff here</vn-text>
            </slot>
    </vn-view>
</template>

<script>
    export default {
        setup() {
            return {
                viewStyle: `
                    flex-direction: row;
                    text-align: right;
                `
            }
        }
    }
</script>