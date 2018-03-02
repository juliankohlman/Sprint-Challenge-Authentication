### 1. Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
  - Middleware is software that facilitates the passing of data between applications.
  - Sessions act as storage for data that can then be accessed by different requests. Sessions are mainly used to store and access user data, as a user interacts with an application.
  - Bcrypt is a password hashing function. It was designed by Niels Provos.
  - JWT or ‘jot’ is a standard, compact method of safely moving data between two parties as a JSON object.

### 2. What does bcrypt do in order to prevent attacks?
  - Bcrypt incorporates a salt which is random information that gets added to the input that then gets hashed. This added random information makes it increasingly hard for dictionary attacks to succeed in a reasonable amount of time.
### 3. What are the three parts of the JSON Web Token?
  - A JWT is made up of a header, payload, and signature. The signature is a hash built up from the header, payload, and a ‘secret’ that comes from the server.
