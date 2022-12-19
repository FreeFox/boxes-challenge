import React from "react";

function Box ({on, toggle, id}) {
    var bgColor = on ? "#222222" : "transparent";
    
    var style = {
      backgroundColor: bgColor
    };

    return (
        <div className="box" style={style} onClick={() => toggle(id)}>&nbsp;</div>
    );
}

export default Box;