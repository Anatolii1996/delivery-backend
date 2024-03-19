module.exports = class UserDto {
    email;
    id;
    tel;
    address;
    isActivated;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.tel = model.tel;
        this.address = model.address;
    }
}