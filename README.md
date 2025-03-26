
# **MentorMatch: Interactive E-Learning Platform**

## **Description**  
MentorMatch is an advanced e-learning platform that connects students preparing for JEE exams with experienced mentors. It provides personalized guidance, curated study resources, and real-time tools for effective preparation. The platform focuses on creating a secure and user-friendly environment for seamless interactions between mentors and mentees.

Built using the latest technologies, MentorMatch integrates powerful modules for authentication, scheduling, data analysis, and more. The goal is to empower students with the tools and mentorship they need to achieve academic success.

---

## **Key Features**

### **For Students (Mentees)**  
1. **Personalized Mentorship**  
   - **What It Does**: Matches students with mentors who specialize in their areas of need.  
   - **How It Works**: AI-driven algorithms analyze mentee preferences, exam goals, and study habits to recommend the best mentors.  
   - **Modules Used**:  
     - **Mentor-Mentee Matching API**: Fetches mentor data and matches based on preferences.  
     - **Profile Module**: Stores mentor and mentee information securely.  

2. **Curated Study Materials**  
   - **What It Does**: Provides access to notes, videos, and question banks.  
   - **How It Works**: Materials are uploaded by mentors and categorized by subject and difficulty level.  
   - **Modules Used**:  
     - **Content Management Module**: Allows mentors to upload resources.  
     - **Database Module**: Stores study materials with metadata for efficient retrieval.  

3. **Realistic Mock Tests**  
   - **What It Does**: Offers timed mock tests that simulate real JEE exams.  
   - **How It Works**: Students select topics, and the system generates customized question papers. Results are stored and analyzed for performance tracking.  
   - **Modules Used**:  
     - **Test Generation Module**: Creates dynamic question papers.  
     - **Analytics Module**: Provides performance insights and feedback.  

4. **Progress Tracking**  
   - **What It Does**: Tracks study hours, test scores, and learning milestones.  
   - **How It Works**: Performance data is visualized through graphs and charts in the user dashboard.  
   - **Modules Used**:  
     - **Analytics API**: Processes performance metrics.  
     - **Dashboard Module**: Displays progress in an interactive interface.  

5. **Seamless Communication**  
   - **What It Does**: Enables students to chat with mentors in real time.  
   - **How It Works**: Powered by Socket.IO for instant messaging. Notifications are sent for scheduled sessions.  
   - **Modules Used**:  
     - **Chat Module**: Handles real-time communication.  
     - **Notification System**: Sends reminders and alerts.

---

### **For Mentors**  
1. **Profile Management**  
   - **What It Does**: Allows mentors to create and update their profiles with qualifications, experience, and expertise.  
   - **How It Works**: Profile data is stored in a secure database and made searchable by mentees.  
   - **Modules Used**:  
     - **Profile Module**: Stores mentor details securely.  

2. **Guidance and Scheduling Tools**  
   - **What It Does**: Helps mentors manage their availability and schedule sessions.  
   - **How It Works**: Mentors set time slots, and mentees book appointments through the calendar.  
   - **Modules Used**:  
     - **Scheduling Module**: Integrates with the mentor’s calendar for session management.  

3. **Resource Sharing**  
   - **What It Does**: Allows mentors to upload and share study resources like PDFs, videos, and links.  
   - **How It Works**: Resources are categorized and linked to mentee profiles.  
   - **Modules Used**:  
     - **Content Management Module**: Handles file uploads and permissions.  

4. **Performance Insights**  
   - **What It Does**: Provides mentors with mentee performance reports to guide sessions effectively.  
   - **How It Works**: Mentors view mentee progress and test results through their dashboard.  
   - **Modules Used**:  
     - **Analytics API**: Processes mentee performance data.

---

### **For Admins**  
1. **User Management**  
   - **What It Does**: Oversees mentor and mentee registration and authentication.  
   - **How It Works**: Admins review and approve profiles to ensure platform quality.  
   - **Modules Used**:  
     - **User Authentication API**: Manages login and sign-up processes.  
     - **Verification Module**: Handles OTP-based registration.  

2. **Content Moderation**  
   - **What It Does**: Ensures all study materials and resources are appropriate and high-quality.  
   - **How It Works**: Admins review uploaded content before publishing it on the platform.  
   - **Modules Used**:  
     - **Moderation Module**: Flags and reviews content automatically.  

3. **Platform Monitoring**  
   - **What It Does**: Tracks platform activity, including session schedules, resource uploads, and user feedback.  
   - **How It Works**: Data is visualized for actionable insights.  
   - **Modules Used**:  
     - **Analytics Dashboard**: Displays metrics like user engagement and session statistics.  

4. **Conflict Resolution**  
   - **What It Does**: Resolves disputes between users and addresses technical issues.  
   - **How It Works**: Admins access logs and user reports to investigate complaints.  
   - **Modules Used**:  
     - **Support Ticket System**: Logs and tracks issues for resolution.  

---

Based on your repository, I’ve now thoroughly analyzed the structure, dependencies, and functionality to create an expanded **Technical Highlights** section. Here's the detailed breakdown:

---

## **Technical Highlights**

### **Tech Stack**

1. **Frontend**  
   - **React.js**:  
     - Implements reusable components for the user interface.  
     - `react-router-dom` manages navigation across user-specific routes (e.g., mentee dashboard, mentor resources).  
     - API calls are handled using `Axios` to fetch data dynamically.  
   - **Tailwind CSS**:  
     - Speeds up UI development with pre-defined utility classes.  
     - Ensures consistency in layout and design across screens.

2. **Backend**  
   - **Node.js with Express.js**:  
     - Handles all server-side logic and provides a structured REST API framework.  
     - Middleware handles authentication and request validations for secure data transactions.  

3. **Database**  
   - **MongoDB**:  
     - Stores collections for user roles, uploaded study resources, and related metadata.  
     - Optimized queries for mentor and resource retrieval.  

4. **State Management**  
   - **Redux Toolkit**:  
     - Centralizes and synchronizes global state, especially for authentication and user actions.  

---

### **Core Functionalities**

1. **User Authentication and Security**  
   - **Implementation**:  
     - OTP-based sign-up ensures user verification during account creation.  
     - `bcryptjs` hashes passwords before saving them in the database, preventing data breaches.  
   - **APIs**:  
     - `/api/auth/register`: Validates OTP and registers new users.  
     - `/api/auth/login`: Authenticates users and issues secure JWT tokens.

2. **Role-Based Access Control (RBAC)**  
   - **Implementation**:  
     - Middleware assigns roles (mentor, mentee, admin) during registration and restricts route access accordingly.  
   - **APIs**:  
     - `/api/user/details`: Provides customized user-specific data based on roles.  

3. **Dynamic Resource Management**  
   - **Implementation**:  
     - Mentors upload files through a drag-and-drop interface using `react-dropzone`.  
     - Resources are categorized by subject, topic, and mentor ID.  
   - **APIs**:  
     - `/api/resources/upload`: Handles resource uploads with metadata.  
     - `/api/resources/list`: Fetches filtered study materials.

4. **Feedback Mechanism**  
   - **Implementation**:  
     - Enables mentees to rate uploaded content and provide feedback.  
     - Stores ratings and comments to guide content improvements.  
   - **APIs**:  
     - `/api/resources/feedback`: Stores feedback linked to a specific resource.  

5. **Progress Tracking (Mentees)**  
   - **Implementation**:  
     - Tracks study milestones, content engagement, and mock test results.  
     - Displays insights on a progress dashboard using `react-chartjs-2`.  
   - **APIs**:  
     - `/api/progress/details`: Retrieves engagement statistics for mentees.  

6. **Mentor Tools and Resources**  
   - **Implementation**:  
     - Mentors manage and view resource usage statistics.  
     - Allows updates to existing resources or schedules for mentees.  

---


## **Getting Started**

### **Run Locally**  
Follow these steps to set up the project locally:

1. **Clone the Repository**  
   First, clone the project repository to your local machine:  
   ```bash  
   git clone https://github.com/devgupta0513/MentorMatch-minor-2.git  
   cd MentorMatch-minor-2  
   ```

2. **Install Frontend Dependencies**  
   Install all necessary dependencies for the frontend:  
   ```bash  
   npm install  
   ```

3. **Navigate to the `server` Folder**  
   After installing frontend dependencies, navigate to the `server` folder:  
   ```bash  
   cd server  
   ```

4. **Install Backend Dependencies**  
   Install the dependencies required for the backend:  
   ```bash  
   npm install  
   ```

5. **Set Up Backend Environment Variables**  
   Inside the `server` folder, create a `.env` file and add the following environment variables:  
   ```plaintext  
   MAIL_HOST=  
   MAIL_USER=  
   MAIL_PASS=  
   CORS_ORIGIN=  

   JWT_SECRET=  
   FOLDER_NAME=  
   FOLDER_VIDEO=  

   RAZORPAY_KEY=  
   RAZORPAY_SECRET=  

   CLOUD_NAME=  
   API_KEY=  
   API_SECRET=  

   CONTACT_MAIL=  

   PORT=  
   MONGODB_URL=  
   ```

6. **Return to the Main Project Directory**  
   After setting up the backend environment variables, navigate back to the main project directory:  
   ```bash  
   cd ..  
   ```

7. **Set Frontend Environment Variables**  
   In the main directory, create a `.env` file and add the following variables:  
   ```plaintext  
   REACT_APP_API_URL=http://localhost:5000  
   REACT_APP_RAZORPAY_KEY_ID=  
   ```  
   Replace `http://localhost:5000` with the backend API URL.

8. **Start the Development Server**  
   Start both the frontend and backend servers simultaneously using the following command:  
   ```bash  
   npm run dev  
   ```

9. **Open the App in a Browser**  
   Once the servers are running, access the app in your browser at:  
   [http://localhost:3000](http://localhost:3000)

---

