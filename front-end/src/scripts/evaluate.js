
export function scoreEvaluation(happy, surprised, neutral){
    if(Math.round(happy) == 1 || Math.round(surprised) == 1){
        return 100
    } else if(Math.round(neutral) == 1){
        return 50
    }
    return 0
}