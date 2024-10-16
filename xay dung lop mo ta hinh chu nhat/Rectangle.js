class Rectangle {
    _width;
    _height;

    // hàm khởi tạo constructor 
    constructor(width,height) {
        this._width = width;
        this._height = height;
    }

    getArea() {
        return this._width * this._height;
    }

    getPerimeter() {
        return 2 * (this._width + this._height );
    }
}