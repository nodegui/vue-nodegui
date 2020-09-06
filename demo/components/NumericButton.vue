<template>
    <vn-button :styleSheet="buttonStyle" id="btn" @clicked="onPressed">{{number}}</vn-button>
</template>

<script>
    export default {
        props: {
            number: Number
        },
        setup(props, context) {
            return {
                buttonStyle: `
                    #btn {
                        text-align: 'center';
                        background-color: rgb(96, 107, 113);
                        border: 1px solid rgb(44, 60, 68);
                        color: white;
                        height: 60px;
                        width: 60px;
                        font-size: 22px;
                    }

                    #btn:pressed {
                        background-color: rgb(159, 167, 170);
                    }
                `,
                onPressed: () => {
                    context.emit('numberPressed', props.number);
                }
            }
        }
    }
</script>