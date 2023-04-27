

const AnimatedBackground = (props: {windowHeight: number}) => {
    return (
        <div style={{ width: "inherit", position: "absolute", height: "0vh" }}>
            {(props.windowHeight > 750) ? 
            <div id="bg-horizontal" style={{ marginTop: "50vh" }}></div>
            :
            <div id="bg-horizontal" style={{ marginTop: "380px" }}></div>
            }
            <div id="bg-vertical-0">
                <div id="bg-vertical-0-light-block">
                    <div id="bg-vertical-0-lights"></div>
                </div>
            </div>
            <div id="bg-vertical-1">
                <div id="bg-vertical-1-light-block">
                    <div id="bg-vertical-1-lights"></div>
                </div>
            </div>
            <div id="bg-vertical-2">
                <div id="bg-vertical-2-light-block">
                    <div id="bg-vertical-2-lights"></div>
                </div>
            </div>
            <div id="bg-vertical-3">
                <div id="bg-vertical-3-light-block">
                    <div id="bg-vertical-3-lights"></div>
                </div>
            </div>
            <div id="bg-vertical-4">
                <div id="bg-vertical-4-light-block">
                    <div id="bg-vertical-4-lights"></div>
                </div>
            </div>
            <div id="bg-vertical-5">
                <div id="bg-vertical-5-light-block">
                    <div id="bg-vertical-5-lights"></div>
                </div>
            </div>
            <div id="bg-vertical-6">
                <div id="bg-vertical-6-light-block">
                    <div id="bg-vertical-6-lights"></div>
                </div>
            </div>
            </div>
    )
}

export default AnimatedBackground