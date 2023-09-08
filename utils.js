export function drawStatusText(context, input){
    context.font = "30px Helvetica"
    context.fillText("last input: " + input.lastKey, 20, 50)
}