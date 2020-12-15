const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// const MY_SECRET_JWT_KEY = "my_secret_jwt_key";

// const SECRET_PASSWORD_KEY = "my_secret_password_key";

class Employer {
  email;
  password;
  salt;
  companyName;
  field;
  location;
  website;
  overview;

  constructor(email, salt, companyName, field, location, website, overview) {
    this.email = email;
    this.salt = salt;
    this.companyName = companyName;
    this.field = field;
    this.location = location;
    this.website = website;
    this.overview = overview;
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
    return jwt.sign({ email: this.email }, process.env.JWT_SECRET, {
      expiresIn: 36000,
    });
  }

  toJson() {
    return {
      email: this.email,
      companyName: this.companyName,
      field: this.field,
      location: this.location,
      website: this.website,
      overview: this.overview,
    };
  }
}

module.exports = Employer;
