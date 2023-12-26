import React from 'react'
import '../index.css';
import Circ from '../img/cursor.svg'
import $ from 'jquery'

export default function icon() {

    $(document).mousemove(function (e) {
        $("#follow").css({
            left: e.pageX - 60,
            top: e.pageY - 60,
            zIndex: -1
        })
    });

    return (
        <div className="icon" id="follow">
            <img draggable="false" src={Circ} alt="icon" />
        </div>
    )
}
