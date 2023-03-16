class ElectronicDevice {
    constructor(typeofDevice, mark) {
        this.typeofDevice = typeofDevice;
        this.mark = mark;
        this.connected = false;
    }

    get toConnect() {
        if (this.connected) return console.log(`${this.typeofDevice} Já está ligado`);
        this.connected = true;
    }

    get toOff() {
        if (!this.connected) return console.log(`${this.typeofDevice} Já está desligado`);;
        this.connected = false;
    }
}

class Cell extends ElectronicDevice {
    constructor(typeofDevice, mark, model) {
        super(typeofDevice, mark);
        this.model = model;

    }

    get sayBrand() {
        return this.model
    }
};

const c1 = new Cell("Celular", "Samsung", "A10");

class Tv extends ElectronicDevice {
    constructor(typeofDevice, mark, inches) {
        super(typeofDevice, mark);
        this.inches = inches;
    }

    get sayInches() {
        return this.inches
    }
};

const t1 = new Tv("Televisão", "LG", 60);