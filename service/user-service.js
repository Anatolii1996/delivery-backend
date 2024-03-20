const User = require("../models/user");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const { sendActivationMail } = require("../service/mail-service");
const { generateTokens, saveToken } = require("../service/token-service")
const UserDto = require("../dtos/user-dto")

const registration = async (body) => {
    const candidate = await User.findOne({ email: body.email });
    if (candidate) {
        throw new Error("Користувач з такою адресою вже зарєестрований")
    }
    const hashPassword = await bcrypt.hash(body.password, 3);
    const activationLink = uuid.v4();

    const user = await User.create({
        name: body.name,
        email: body.email,
        password: hashPassword,
        tel: body.tel,
        address: body.address,
        activationLink: activationLink
    });
    // await sendActivationMail(body.email, activationLink)
    const userDto = new UserDto(user);
    const tokens = generateTokens({ ...userDto })
    await saveToken(userDto.id, tokens.refreshToken);

    return {
        ...tokens,
        user: userDto,
    }
}

const login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("Користувач не був знайдений")
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        throw new Error("Не правильний пароль")
    }
    const userDto = new UserDto(user);
    const tokens = generateTokens({ ...userDto })
    await saveToken(userDto.id, tokens.refreshToken);

    return {
        ...tokens,
        user: userDto,
    }
}

module.exports = { registration, login }