



function superbowlWin(Array){

    const obj = Array.find(function(a){return a.result === "W"})

    if (obj === undefined){return undefined}

    return obj.year

}