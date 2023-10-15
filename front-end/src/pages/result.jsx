import React from "react"

export default function Result(){
    function goBack(){
        location.href="/choice"
    }

    return(
        <div className="flex-col w-full justify-center">
            <button onClick={goBack}>Chat Again</button>
            <div className="font-extrabold text-center ml">
                Thank you for sharing!
            </div>
        </div>
    )

}