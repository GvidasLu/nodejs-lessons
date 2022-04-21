class Cat {
    constructor(nuovargis = 1, alkis = 3, vienatve = 6, laime = 3) {
        this.name = 'katauskas';
        this.nuovargis = nuovargis;
        this.alkis = alkis;
        this.vienatve = vienatve;
        this.laime = laime;
    }

    sleep(decrease = 1) {
        if(this.nuovargis - decrease >= 0)
            this.nuovargis -= decrease;
        
        else{
            this.nuovargis = 0;
        }
        return this.nuovargis
    }

    feed(decrease = 1) {
        if(this.alkis - decrease >= 0)
            this.alkis -= decrease;
        
        else{
            this.alkis = 0;
        }
        return this.alkis
    }

    pet(decrease = 1, add = 1) {
        (this.vienatve = this.checkZero(this.vienatve, decrease))
        (this.laime += add);

        return this.alkis
    }

    checkZero(check, decrease) {
        return ((check - decrease) >= 0) ? check - decrease : 0
    }

    status() {
        if(this.nuovargis > 3) {
            console.log(`${this.name} jauciasi labai pavarges`)
        }
        if(this.alkis > 3) {
            console.log(`${this.name} jauciasi labai issalkes`)
        }
        if(this.vienatve > 3) {
            console.log(`${this.name} jauciasi labai vienisas`)
        }
        if(this.laime < 3) {
            console.log(`${this.name} jauciasi labai laimingas`)
        }

    }
}

export default Cat;