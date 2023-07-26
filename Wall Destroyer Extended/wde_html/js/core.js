let player = {
    version: 2.5,
    resources: {
        money: {
            amount: 0,
            total: 0
        },
        damage: {
            amount: 0,
            total: 0
        },
        bricks: {
            normal: {
                amount: 0,
                total: 0
            },
        },
        cosmicKnowledge: {
            amount: 0,
            total: 0
        }
    },
    upgrades: Upgrades.generateUpgrades(),
    buildings: Buildings.generateBaseBuildings(),
    walls: Walls.generateBaseWalls()
}

window.onload = (setInterval(function() {
    display();
}), 33)

function display() {
    document.getElementById("moneyDisp").textContent = player.resources.money.amount;
    document.getElementById("damageDisp").textContent = player.resources.damage.amount;
    document.getElementById("brickDisp").textContent = player.resources.bricks.normal.amount;

    // will change to when you get time rewinders later
    document.getElementById("prestigeClickables").style.display = (player.resources.cosmicKnowledge.amount < 1) ? "none" : "block"
}

