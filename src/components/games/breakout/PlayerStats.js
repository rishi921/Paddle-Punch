export default function PlayerStates(ctx, player, canvas) {
    // Name
    ctx.font = 'bold 20px Arial';
    ctx.fillStyle = "black";
    ctx.fillText(`Level: ${player.level}`, 20, 30);

    // Lives
    // if (player.lives<=3){
    //     player.lives+=2
    // }
   
    ctx.font = "20px Arial"
    ctx.fillStyle = "red"
    let gap = 0;
    for (let i = 0; i < player.lives; i++) {
        ctx.fillText("❤️", canvas.width / 2 + gap, 30);
        gap += 30;
    }
    // Score
    ctx.font = "20px Arial";
    ctx.fillStyle = 'white';
    ctx.fillText(`Score: ${player.score}`, canvas.width - 140, 30);
}
