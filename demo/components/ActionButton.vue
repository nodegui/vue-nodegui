<template>
    <vn-button :styleSheet="buttonStyle" id="btn" @clicked="onPressed">{{text}}</vn-button>
</template>

<script>
    export default {
        props: {
            text: Number,
            action: String,
            theme: String
        },
        setup(props, context) {
            const backgroundColor = props.theme === 'dark' ? 'rgb(64, 78, 85)' : 'rgb(253, 160, 27)';
            const pressedBgColor = props.theme === 'dark' ? 'rgb(96, 107, 113)' : 'rgb(202, 126, 19)';
            return {
                buttonStyle: `
                    #btn {
                        text-align: 'center';
                        background-color: ${backgroundColor};
                        border: 1px solid rgb(44, 60, 68);
                        color: white;
                        height: 60px;
                        width: 60px;
                        font-size: 22px;
                    }

                    #btn:pressed {
                        background-color: ${pressedBgColor};
                    }
                `,
                onPressed: () => {
                    context.emit('actionPressed', props.text, props.action);
                }
            }
        }
    }
</script>