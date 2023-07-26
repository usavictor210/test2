class Building {
    constructor(id, name, cost, baseDPS, unlocked, img) {
        this.id = id;
        this.name = name;
        this.amount = 0;
        this.totalAmount = 0;
        this.baseDPS = baseDPS;
        this.cost = cost;
        this.unlocked = unlocked;
        this.img = 0;
    }

    // how you would unlock them?
    unlock(buildingid) {
        if (id == buildingid && getBuildingUnlockRequirement()) {
            this.unlocked = true;
        }
    }

    getBuildingUnlockRequirement(buildingid) {
        return (buildingid < 8);
    }
}

let Buildings = {
    generateBaseBuildings() {
        let buildArr = [
            new Building("b1", "Puncher", 20, 0.1, true),
            new Building("b2", "Clubber", 100, 0.5, true),
            new Building("b3", "Swordsman", 1100, 2.5, true),
            new Building("b4", "Gunshooter", 16000, 30, true),
            new Building("b5", "Grenademan", 400000, 500, true),
            new Building("b6", "Wrecking Ball", 8000000, 7000, true),
            new Building("b7", "Bulldozer", 120000000, 80000, true),
            new Building("b8", "Airstrike Caller", 5000000000, 2500000, true)
        ]
        return buildArr
    }
}