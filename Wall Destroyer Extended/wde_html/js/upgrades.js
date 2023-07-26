class Upgrade {
    constructor(id, name, affectedElements, cost, unlock, descEffect, descFlavor, icon) {
        this.id = id;
        this.name = name;
        this.affectedElements = affectedElements;
        this.cost = cost;
        // unlock must be an array so it can distinguish what object is required in particular
        this.unlock = {
            objectType: unlock[0],
            amount: unlock[1]
        }
        this.descEffect = descEffect;
        this.descFlavor = descFlavor;
        this.icon = icon;
    }
}

let Upgrades = {
    generateUpgrades() {
        let upg = []

        let puncher = [
            new Upgrade("puncher1", "Gloves", ["puncher", "hand"], ["money", 100], ["puncher", 1], "Hand punches do 1 more damage. Punchers do 50% more damage.", "A little padding.", 0)
        ]
        let puncherHand = [
            new Upgrade("puncherhand1", "Coffee", ["hand"], ["money", 100], ["handDamage", 1000], "Hand punches do 3 times as much damage.", "Caffeine obviously gives you the ability to punch faster.", 0)
        ]

        upg.push(puncher);
        upg.push(puncherHand);

        return upg;
    }
}