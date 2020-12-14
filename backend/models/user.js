const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// const MY_SECRET_JWT_KEY = "my_secret_jwt_key";

// const SECRET_PASSWORD_KEY = "my_secret_password_key";

class User {
  username;
  password;
  salt;
  photoUrl;
  displayName;
  constructor(username, displayName, photoUrl) {
    this.username = username;
    this.displayName = displayName;
    this.photoUrl = photoUrl;
  }

  generagePassword(password) {
    this.salt = crypto.randomBytes(128).toString("base64");
    this.password = crypto
      .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
      .toString("hex");
  }

  verifyPassword(password) {
    const hashedPassword = crypto
      .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
      .toString("hex");
    return this.password === hashedPassword;
  }
  generateToken() {
    return jwt.sign({username: this.username}, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });
  }

  toJson() {
    return {
      username: this.username,
      photoUrl: this.photoUrl,
      displayName: this.displayName,
    };
  }
}

module.exports = User;
