class shape {
    constructor(hight, width) {
        this.hight = hight;
        this.width = width;
    }
}

class square extends shape {
    perimeter() {
        return (this.hight + this.width) * 2;
    }
    area() {
        return this.hight * this.width;
    }
}

let fangfang = new square(3, 4);

console.log(fangfang.perimeter());
console.log(fangfang.area());