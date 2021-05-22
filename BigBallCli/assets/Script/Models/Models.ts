
export class BBUser {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export class BBRank {
    seq: number;
    name: string;
    weight: number;

    constructor(seq: number, name: string, weight: number) {
        this.seq = seq;
        this.name = name;
        this.weight = weight;
    }
}

export class BBRecord {
    id: number;
    uid: number;
    weight: number;
    maxTime: number;

    constructor(id: number, uid: number, weight: number, maxTime: number) {
        this.id = id;
        this.uid = uid;
        this.weight = weight;
        this.maxTime = maxTime;
    }
}