# 🎥 LernLive — Live Video Lecturing Platform

**LernLive** is an interactive **live video lecturing platform** built with **Next.js**, **Stream Video SDK**, and **Clerk** for secure authentication.  
It enables educators to host live online lectures with real-time audio, video, and engagement tools—creating a virtual classroom experience that’s seamless and user-friendly.

---

## 🚀 Features

- 🎬 **Live Video Lectures** — Host and join live interactive classes.
- 🗓️ **Schedule Meetings** — Create, manage, and join upcoming sessions.
- 🎥 **Recording & Playback** — Record lectures and access them anytime.
- 🔐 **Secure Authentication** — User sign-in and sign-up via **Clerk**.
- 📱 **Responsive Interface** — Clean and mobile-friendly UI with **Tailwind CSS**.

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Framework** | Next.js 15 (App Router) |
| **Frontend** | React.js, Tailwind CSS |
| **Video / Chat** | Stream Video SDK |
| **Authentication** | Clerk |
| **UI Components** | Radix Primitives, Tailwind |

---

## ⚙️ Requirements

- Node.js **v18+**  
- npm, yarn, or pnpm  
- Accounts for:  
  - [Stream.io](https://getstream.io/)  
  - [Clerk.dev](https://clerk.dev/)  

---

## 🧠 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/nilesh98199/LernLive.git
cd LernLive
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env.local` file in the root folder and add the following credentials:

🧾 .env.local.example

Here’s a public-safe example file you can include in your repo.

Save this as .env.local.example:

```bash
# ===============================
# LernLive — Environment Variables
# ===============================

# 🔐 Clerk Authentication (https://clerk.com/)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Clerk Authentication Routes
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# 🎥 Stream Video & Chat SDK (https://getstream.io/)
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key

# 🌐 Base URL of your app (local or deployed)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

✅ Tips for Using .env.local.example

Keep real credentials in .env.local (do not commit it).

Use .env.local.example as a public reference for others.

When deploying, copy these variable names into your host’s environment settings.

You can quickly create your local env file with:

```bash
cp .env.local.example .env.local
```
⚠️ **Important:**
Do **not** expose your secret keys (`CLERK_SECRET_KEY`, `STREAM_SECRET_KEY`) in client-side code or public repositories.
Use your deployment platform’s secret storage (e.g., **Vercel Environment Variables**).

---

## 🧑‍💻 Development

Start the local development server:

```bash
npm run dev
```

Then visit:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🏗️ Build for Production

To build and run the app in production mode:

```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```
lern-live/
│
├── app/                     # Next.js app router pages & layouts
├── components/              # UI components (Meeting UI, Navbar, Modals)
│   ├── providers/           # Stream & Clerk context providers
│
├── hooks/                   # Custom hooks (useGetCalls, useGetCallById, etc.)
├── lib/                     # Utility functions and helpers
├── public/                  # Static assets (images, icons)
├── ui/                      # Design system primitives
└── package.json             # Dependencies and scripts
```

---

## 🧪 Available Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the app in development mode |
| `npm run build` | Build the app for production      |
| `npm run start` | Run the production server         |
| `npm run lint`  | Lint and fix code issues          |

---

## 🛡️ Security Notes

* All API keys and secrets should be stored securely using **.env** files or deployment secrets.
* User authentication and session management are handled by **Clerk**.
* **Stream SDK** ensures encrypted real-time communication for all video sessions.

---

## 📈 Future Enhancements

* 📊 Add analytics dashboard for instructor insights
* 🧠 AI-based attendance and feedback summaries
* 🖥️ Screen sharing and whiteboard integration
* 🌍 Multi-language support for global learners
* 💬 Real-Time Chat Communicate with participants through integrated chat.

---

## 👨‍💻 Contributing

Contributions are welcome!
If you’d like to improve features, documentation, or performance, feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.
See the `LICENSE` file for details.