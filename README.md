[![Facebook-Page][facebook-shield]][facebook-url]
[![Twitter][twitter-shield]][twitter-url]
[![Instagram][instagram-shield]][instagram-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="center">
  <h3 align="center">NEXT LMS Platform</h3>
  <div align="center"><h3>Project Link: <a href="https://github.com/rsshonjoydas/lms-platform">GitHub</a> or <a href="https://codesandbox.io/s/github/rsshonjoydas/lms-platform/tree/main">CodeSandbox</a></h3></div>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [How to run](#how-to-run)
- [How to setup the initial project](#How-to-setup-the-initial-project)
- [Contact](#contact)

<!-- HOW TO RUN -->

# Build an LMS Platform: Next.js 13, React, Tailwind, Stripe, Mux, Prisma, MongoDD

This is a repository for Build an LMS Platform: Next.js 13, React, Stripe, Mux, Prisma, Tailwind, MongoDB

> Key Features:

- Browse & Filter Courses
- Purchase Courses using Stripe
- Mark Chapters as Completed or Uncompleted
- Progress Calculation of each Course
- Student Dashboard
- Teacher mode
- Create new Courses
- Create new Chapters
- Easily reorder chapter position with drag n’ drop
- Upload thumbnails, attachments and videos using UploadThing
- Video processing using Mux
- HLS Video player using Mux
- Rich text editor for chapter description
- Authentication using Clerk
- ORM using Prisma
- MongoDB Database

### Prerequisites

**Node version 18.x.x**
**Yarn version 1.22.x**

### Start the app

Certainly, if you're working on a Node.js project and you have a development script, such as `yarn dev`, that you typically use to run your application during development, you can include that step in your workflow as well. Here's the updated order of commands:

1. **Clone this repository**:

   ```sh
   git clone git@github.com:rsshonjoydas/lms-platform.git
   ```

2. **Environment Variables Setup**:
   To rename the `.env.example` file to `.env` and add your environment-specific configuration, you can use the following command in a Unix-like shell (such as Linux or macOS):

   ```bash
   mv .env.example .env
   ```

   This command renames the `.env.example` file to `.env`.

   After renaming the file, you can open the `.env` file using a text editor and add your environment-specific configuration variables and their values. For example:

   ```
   DATABASE_URL=your_database_url_here
   API_KEY=your_api_key_here
   SECRET_KEY=your_secret_key_here
   ```

   Replace `"your_database_url_here"`, `"your_api_key_here"`, and `"your_secret_key_here"` with your actual configuration values. The `.env` file is commonly used to store sensitive or environment-specific configuration variables for your application.

3. **Install packages**

   ```shell
   yarn install
   ```

4. **Generate Prisma Client Code**:

   ```bash
   npx prisma generate
   ```

5. **Push Database Changes**:

   ```bash
   npx prisma db push
   ```

6. **Seed the Database**:

   ```bash
   node ./scripts/seed.ts
   ```

7. **Run Your Application in Development Mode**:

   ```bash
   yarn dev
   ```

8. Your project is accessible locally at the following address: [http://localhost:3000](http://localhost:3000)

### How to setup the initial project

1.  Install Next JS

    ```sh
    yarn create next-app --typescript --tailwind --eslint
    ```

2.  Engine Locking configuration `optional`

    - Create `.npmrc` file and add below the code

      ```sh
      engine-strict=true
      ```

    - Create `.nvmrc` file and add below the code

      ```sh
      lts/fermium
      ```

    - Add this configuration to your project `package.json`

      ```json
      "engines": {
         "node": ">=18.0.0",
         "yarn": ">=1.22.0",
         "npm": "please-use-yarn"
       }
      ```

3.  Visual Studio Settings configuration `optional`

    - ##### Get VSCode [Settings.json](https://github.com/rsshonjoydas/docs/blob/main/docs/vscode.md) file

4.  Airbnb style guide setup

    - ##### Get [eslintrc.json](https://github.com/rsshonjoydas/docs/blob/main/docs/airbnb-style-guide.md) file

5.  Git Hooks for Husky
    - ##### [How to use husky](https://github.com/rsshonjoydas/docs/blob/main/docs/husky.md)

## Contact

Shonjoy Das - [rsshonjoy@gmail.com](mailto:rsshonjoy@gmail.com)

<!-- MARKDOWN LINKS & IMAGES -->

[facebook-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=facebook&color=555&logoColor
[facebook-url]: https://facebook.com/rsshonjoydas
[twitter-shield]: https://img.shields.io/badge/-Facebook-black.svg?style=flat-square&logo=twitter&color=555&logoColor
[twitter-url]: https://twitter.com/rsshonjoydas
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&color=555&logoColor
[instagram-url]: https://instagram.com/rsshonjoydas
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB
[linkedin-url]: https://linkedin.com/in/rsshonjoydas
