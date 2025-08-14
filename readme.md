# OTP Validator – Spring Boot Backend & React Frontend

A simple project for OTP (One Time Password) validation with a **React.js** frontend and a **Spring Boot** backend.  
Supports sending and verifying OTPs via a REST API, with Supabase/PostgreSQL as the database.

---

## 📁 Project Structure

```
root/
│
├── backend/   # Spring Boot Java backend
│   └── ...    # All your Java sources, resources, etc.
│
├── frontend/  # React frontend
│   └── ...    # All your React code
│
└── README.md
```

---

## 🚀 Quick Start

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO
```

### 2. Backend Setup (Spring Boot)

```bash
cd backend
# If using Maven
./mvnw spring-boot:run
# Or if using Gradle
./gradlew bootRun
```

- Configure your DB connection in `backend/src/main/resources/application.properties`
- Example for Supabase/PostgreSQL:
  ```
  spring.datasource.url=jdbc:postgresql://db.<your-ref>.supabase.co:5432/postgres
  spring.datasource.username=postgres
  spring.datasource.password=YOUR_PASSWORD
  spring.jpa.hibernate.ddl-auto=update
  ```

### 3. Frontend Setup (React)

```bash
cd ../frontend
npm install
npm start
```

- Edit `API_URL` in your React source (e.g., `OtpAuth.jsx`) if backend is not on `localhost:8080`.

---

## 🏗️ Build & Deploy

### Frontend Deploy (GitHub Pages)

```bash
cd frontend
npm run deploy
```
- See [Create React App GitHub Pages guide](https://create-react-app.dev/docs/deployment/#github-pages) for details.

### Backend Deploy

- Deploy to [Render](https://render.com), [Railway](https://railway.app), [Fly.io](https://fly.io), or [Heroku](https://heroku.com).
- Make sure to set all environment variables for production.

---

## 📝 .gitignore Notes

Key ignore rules (see repo `.gitignore` for full):

- **Frontend:**  
  - `node_modules/`, `.env`, `dist/`
- **Backend:**  
  - `target/`, `.env`, `.idea/`, `.project`, `.classpath`

---

## ✨ Features

- Send OTP to a mobile number (simulate via backend/console)
- Verify OTP via REST API
- React-based user interface for OTP flow
- Supabase/PostgreSQL integration

---

## 🙏 Credits

- [Spring Boot](https://spring.io/projects/spring-boot)
- [React](https://react.dev/)
- [Supabase](https://supabase.com/)
- [Create React App](https://create-react-app.dev/)

---

## 🛡️ License

MIT License. See [LICENSE](LICENSE) file for details.
