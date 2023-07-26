class Wall {
    constructor(id, name, desc, dmgRequired, resource, broken) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.dmgRequired = dmgRequired;
        this.resource = resource;
        this.broken = broken
    }
}

var Walls = {
    generateBaseWalls() {
        let wall = [] // this is intentionally left blank to be returned at the end after everything is pushed.

        let preBonus = [
            new Wall("wall1", "wall", 1e12, [["ck", 1], ["brick", 25], ["cash", 2.5e11]], false),
            new Wall("wall2", "second wall", 1e14, [["ck", 1], ["brick", 100], ["cash", 2.5e13]], false),
            new Wall("wall3", "third wall", 1e16, [["ck", 1], ["brick", 10000], ["cash", 2.5e15]], false),
            new Wall("wall4", "fourth wall", 1e18, [["ck", 2], ["brick", 1e6], ["cash", 2.5e17]], false),
            new Wall("wall5", "final wall", 1e20, [["ck", 5], ["brick", 1e7], ["boss_brick", 1], ["cash", 2.5e19]], false)
        ]

        /*
        let bonus = []
        let time = []
        let space = []
        let end = []
        let finality = []
        let fantasy = []
        let infinity = []
        let multiversal = []

        let antiWall = []
        
        // new Wall("seal", "The Great Seal", 1e100, ["ck", 1e7], false)

        let toOmniverse = []

        // new Wall("omniverse", "The Omniversal Wall", 1e300, ["omniBrick", 1], false)
        */

        // 5 walls
        wall.push(preBonus);

        return wall;
    },

    getBricksPerClick() {
        return 0;
    },
    
    getDamagePerClick() {
        return 1;
    },

    punch() {
        player.resources.money.amount += Walls.getDamagePerClick();
        player.resources.damage.amount += Walls.getDamagePerClick();
    },

    createBricks() {
        player.resources.bricks.normal.amount += Walls.getBricksPerClick();
    },

}