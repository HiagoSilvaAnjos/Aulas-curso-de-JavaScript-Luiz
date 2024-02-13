class ElectronicDevice {
    constructor(typeofDevice, mark) {
        this.typeofDevice = typeofDevice;
        this.mark = mark;
        this.connected = false;
    }

    get toConnect() {
        if (this.connected) return console.log(`${this.typeofDevice} Já está ligado`);
        console.log("Ligado...");
        return this.connected = true;
    }

    get toOff() {
        if (!this.connected) return console.log(`${this.typeofDevice} Já está desligado`);
        console.log("Desligado...");
        this.connected = false;
    }
}

class Cell extends ElectronicDevice {
    constructor(typeofDevice, mark, model) {
        super(typeofDevice, mark);
        this.model = model;

    }

    get sayBrand() { return console.log(this.model) }
};

const phone = new Cell("Celular", "Samsung", "A10");
phone.sayBrand;
class Tv extends ElectronicDevice {
    constructor(typeofDevice, mark, inches) {
        super(typeofDevice, mark);
        this.inches = inches;
    }

    get sayInches() { return console.log(this.inches) }
};

const television = new Tv("Televisão", "LG", 60);