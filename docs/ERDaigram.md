## Database Design – ER Diagram

<p align="center">
    <a href="assets\ER.png">
  <img src="assets\ER.png" width="900">
</p>

### Overview

The database consists of three main entities:
- User
- Session
- Question

Relationships:
- One User HAS many Sessions (1:N)
- One Session CONTAINS many Questions (1:N)