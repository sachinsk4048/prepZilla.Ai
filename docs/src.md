# Software Requirements Specification (SRS)

## Project: PrepZilla.AI – AI Powered Interview Preparation Platform

---

## 1. Project Scope

PrepZilla.AI is a web-based AI-powered interview preparation platform designed to provide structured, role-specific, and personalized technical interview practice.

The system enables users to securely create interview sessions, generate AI-based questions and explanations, and manage their preparation history through a dashboard.

The platform focuses on improving structured learning, personalization, and efficient revision management for technical interview candidates.

---

## 2. Functional Requirements

### 2.1 Must-Have Features (Core Requirements)

1. User Registration and Login using JWT authentication  
2. Secure user session management  
3. Create job-specific interview sessions  
4. Generate AI-powered interview questions using Gemini API  
5. Generate explanations for interview questions  
6. Pin important questions within a session  
7. Generate additional follow-up questions in the same session  
8. Store user sessions and data persistently in MongoDB  
9. Delete and manage interview sessions  
10. Personalized dashboard for each user  

---

### 2.2 Could-Have Features (Future Enhancements)

1. Resume Builder integration  
2. Admin panel for system monitoring  
3. Export interview sessions as PDF  

---

## 3. Non-Functional Requirements

### 3.1 Performance Requirements
- AI responses should be generated within acceptable response time.  
- The system should support multiple concurrent users.  

### 3.2 Security Requirements
- All authentication must use JSON Web Tokens (JWT).  
- User passwords must be encrypted before storage.  
- User data must remain private and isolated.  

### 3.3 Usability Requirements
- The interface should be responsive and user-friendly.  
- The dashboard should allow easy navigation between sessions.  

### 3.4 Reliability Requirements
- Data must be stored persistently without loss.  
- The system should maintain high availability.  

---

## 4. System Constraints

- Requires internet connectivity for AI integration.  
- Dependent on Gemini API availability and rate limits.  
- Designed for modern web browsers.  

---

## Conclusion

PrepZilla.AI provides a structured and scalable AI-driven solution for technical interview preparation, ensuring personalization, security, and efficient session management.