# 📊 ITAMS - Intelligent Task & Activity Management System

<div align="center">

![ITAMS Logo](https://img.shields.io/badge/ITAMS-Your%20Productivity%20Hub-6366f1?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOSAxMUw3IDE0TDEwIDE3TDIxIDYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+)

[![Live Demo](https://img.shields.io/badge/🚀-Live%20Demo-success?style=for-the-badge)](https://main.d12ogiakfc9r01.amplifyapp.com/)
[![AWS](https://img.shields.io/badge/☁️-AWS%20Serverless-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/)
[![React](https://img.shields.io/badge/⚛️-React%2018-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![DynamoDB](https://img.shields.io/badge/🗄️-DynamoDB-4053D6?style=for-the-badge&logo=amazon-dynamodb&logoColor=white)](https://aws.amazon.com/dynamodb/)
[![Lambda](https://img.shields.io/badge/λ-Lambda-FF9900?style=for-the-badge&logo=aws-lambda&logoColor=white)](https://aws.amazon.com/lambda/)

**A serverless, cloud-native productivity platform with real-time analytics, advanced filtering, and secure multi-user authentication**

[🎯 Live Demo](https://main.d12ogiakfc9r01.amplifyapp.com/) • [✨ Features](#-features) • [🏗️ Architecture](#️-architecture) • [🛠️ Technologies](#️-technologies) • [🚀 Getting Started](#-getting-started)

![ITAMS Dashboard Preview](https://img.shields.io/badge/Dashboard-Real--time%20Analytics-blue?style=flat-square)
![Tasks](https://img.shields.io/badge/Tasks-Management-green?style=flat-square)
![Videos](https://img.shields.io/badge/Videos-Organization-red?style=flat-square)
![Blog Posts](https://img.shields.io/badge/Blog-Publishing-orange?style=flat-square)

</div>

---

## 🎮 Quick Start - Try it Now!

**🔗 Live Application:** https://main.d12ogiakfc9r01.amplifyapp.com/

**🔐 Test Credentials:**
```
📧 Email    : abdulmueezgujjar@gmail.com
🔑 Password : Project123@
```

> **Note:** This is a fully functional demo account. Feel free to explore all features including task management, video organization, and blog posts!

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Security](#security)
- [Deployment](#deployment)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

ITAMS (Intelligent Task & Activity Management System) is a **production-ready**, serverless productivity platform built entirely on AWS cloud infrastructure. It demonstrates modern cloud-native development practices with a focus on scalability, security, and user experience.

### 🌟 What Makes ITAMS Special?

- **🔥 100% Serverless** - Zero server management, infinite scalability
- **⚡ Real-time Performance** - Sub-second response times with DynamoDB
- **🔒 Bank-level Security** - JWT authentication via AWS Cognito with per-user data isolation
- **📊 Analytics Dashboard** - Live statistics and insights at a glance
- **🎨 Modern UI/UX** - Responsive design that works flawlessly on any device
- **💰 Cost-effective** - Pay only for what you use with AWS serverless pricing

### 🏆 Key Highlights

| Feature | Description |
|---------|-------------|
| **Architecture** | Fully serverless using AWS Lambda, API Gateway, DynamoDB |
| **Security** | Cognito authentication + composite key data isolation |
| **Deployment** | Automated CI/CD pipeline via AWS Amplify |
| **Scaling** | Automatic scaling with zero configuration |
| **Data** | NoSQL database with millisecond latency |
| **API** | RESTful design with comprehensive endpoints |

---

## ✨ Features

### 🎯 Core Functionality

<table>
<tr>
<td width="50%">

#### 📊 **Dashboard & Analytics**
- Real-time overview statistics
- Total tasks counter
- Completed vs pending ratio
- Overdue task detection
- Video library count
- Blog post tracking

</td>
<td width="50%">

#### ✅ **Task Management**
- Create, read, update, delete tasks
- Priority levels (High, Medium, Low)
- Status tracking (Pending, Completed)
- Due date management
- Category organization
- Search and filter capabilities

</td>
</tr>
<tr>
<td width="50%">

#### 🎥 **Video Organization**
- Save video references
- Metadata management
- Category-based organization
- Quick access links
- Video library overview

</td>
<td width="50%">

#### 📝 **Blog Management**
- Create and manage blog posts
- Rich content support
- Categorization system
- Publishing workflow
- Content organization

</td>
</tr>
</table>

### 🚀 Advanced Capabilities

- **🔍 Multi-criteria Filtering**
  - Filter by priority, status, category
  - Date range filtering
  - Advanced search functionality
  - Real-time results

- **⚠️ Smart Detection**
  - Automatic overdue flagging
  - Priority-based highlighting
  - Status indicators
  - Visual cues for urgent items

- **👤 Data Isolation**
  - Per-user data separation
  - DynamoDB composite keys (userId + resourceId)
  - Secure multi-tenant architecture
  - Zero data leakage between users

- **📱 Responsive Design**
  - Mobile-first approach
  - Desktop optimization
  - Tablet support
  - Cross-browser compatibility

### 🔐 Security & Performance

| Feature | Implementation |
|---------|----------------|
| **Authentication** | AWS Cognito with JWT tokens |
| **Authorization** | Token-based access control |
| **Data Encryption** | HTTPS/TLS in transit, encryption at rest |
| **API Security** | CORS, rate limiting, input validation |
| **Scalability** | Auto-scaling Lambda functions |
| **Database** | DynamoDB with on-demand capacity |

---

## 🏗️ Architecture

ITAMS follows a **modern serverless architecture** leveraging AWS managed services for maximum scalability and minimal operational overhead.

## 🏗️ Architecture

![ITAMS Architecture](https://raw.githubusercontent.com/AMG786/ITAMS/main/itams-architecture-diagram.svg)
### 📐 System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           CLIENT LAYER (Frontend)                           │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                    React.js Application (SPA)                          │ │
│  │  • Components: Dashboard, Tasks, Videos, Blog Posts, Projects         │ │
│  │  • State Management: React Hooks (useState, useEffect)                │ │
│  │  • Routing: React Router DOM                                          │ │
│  │  • HTTP Client: Axios for API calls                                   │ │
│  │  • Styling: Modern CSS3 with Flexbox/Grid                             │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │              Hosted on AWS Amplify + CloudFront CDN                    │ │
│  │  ✓ Global content delivery   ✓ HTTPS/SSL   ✓ Auto-scaling            │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
                                      ↓
                               HTTPS Requests
                                      ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│                      AUTHENTICATION & AUTHORIZATION                         │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                         AWS Cognito                                    │ │
│  │  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────────┐  │ │
│  │  │   User Pool     │  │  Identity Pool  │  │  JWT Token Service  │  │ │
│  │  │  • Sign Up      │  │  • Federated    │  │  • Token Generation │  │ │
│  │  │  • Sign In      │  │    Identities   │  │  • Token Validation │  │ │
│  │  │  • Password     │  │  • Temp AWS     │  │  • Token Refresh    │  │ │
│  │  │    Management   │  │    Credentials  │  │  • Expiration Mgmt  │  │ │
│  │  └─────────────────┘  └─────────────────┘  └─────────────────────┘  │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
                                      ↓
                        Authorized Requests (JWT in Header)
                                      ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│                            API GATEWAY LAYER                                │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                      AWS API Gateway (REST API)                        │ │
│  │                                                                        │ │
│  │  Endpoints:                                                            │ │
│  │  • GET    /tasks              → Fetch all user tasks                  │ │
│  │  • POST   /tasks              → Create new task                       │ │
│  │  • PUT    /tasks/{id}         → Update task                           │ │
│  │  • DELETE /tasks/{id}         → Delete task                           │ │
│  │  • GET    /videos             → Fetch videos                          │ │
│  │  • POST   /videos             → Save video                            │ │
│  │  • GET    /blogposts          → Fetch blog posts                      │ │
│  │  • POST   /blogposts          → Create blog post                      │ │
│  │  • GET    /analytics/dashboard → Get statistics                       │ │
│  │                                                                        │ │
│  │  Features: CORS, Request Validation, Throttling, Caching              │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
                                      ↓
                              Routes to Lambda
                                      ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│                     BUSINESS LOGIC LAYER (Serverless)                       │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                         AWS Lambda Functions                           │ │
│  │                                                                        │ │
│  │  ┌────────────────┐  ┌────────────────┐  ┌────────────────────────┐  │ │
│  │  │  getTasks      │  │  createTask    │  │  updateTask            │  │ │
│  │  │  ───────────   │  │  ───────────   │  │  ───────────           │  │ │
│  │  │  • Validate    │  │  • Validate    │  │  • Validate input      │  │ │
│  │  │    user ID     │  │    input       │  │  • Extract userId      │  │ │
│  │  │  • Query DB    │  │  • Generate ID │  │  • Update in DynamoDB  │  │ │
│  │  │  • Return data │  │  • Save to DB  │  │  • Return updated item │  │ │
│  │  └────────────────┘  └────────────────┘  └────────────────────────┘  │ │
│  │                                                                        │ │
│  │  ┌────────────────┐  ┌────────────────┐  ┌────────────────────────┐  │ │
│  │  │  deleteTask    │  │  getVideos     │  │  saveVideo             │  │ │
│  │  │  ───────────   │  │  ───────────   │  │  ───────────           │  │ │
│  │  │  • Validate    │  │  • Query       │  │  • Validate & save     │  │ │
│  │  │  • Delete      │  │  • Filter      │  │  • Process metadata    │  │ │
│  │  │  • Respond     │  │  • Return      │  │  • Store in DB         │  │ │
│  │  └────────────────┘  └────────────────┘  └────────────────────────┘  │ │
│  │                                                                        │ │
│  │  ┌────────────────┐  ┌────────────────┐  ┌────────────────────────┐  │ │
│  │  │  getBlogPosts  │  │  createBlogPost│  │  getDashboardAnalytics │  │ │
│  │  │  ───────────   │  │  ───────────   │  │  ────────────────────  │  │ │
│  │  │  • Fetch       │  │  • Create      │  │  • Aggregate counts    │  │ │
│  │  │  • Return list │  │  • Publish     │  │  • Calculate stats     │  │ │
│  │  └────────────────┘  └────────────────┘  └────────────────────────┘  │ │
│  │                                                                        │ │
│  │  Runtime: Node.js 18.x | Auto-scaling | Pay per invocation           │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
                                      ↓
                              Database Operations
                                      ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│                       DATA PERSISTENCE LAYER                                │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                         AWS DynamoDB (NoSQL)                           │ │
│  │                                                                        │ │
│  │  ┌──────────────────────────────────────────────────────────────────┐ │ │
│  │  │  📋 Tasks Table                                                   │ │ │
│  │  │  ─────────────                                                    │ │ │
│  │  │  Primary Key (Composite):                                         │ │ │
│  │  │    • Partition Key: userId (String)                               │ │ │
│  │  │    • Sort Key: taskId (String)                                    │ │ │
│  │  │  Attributes:                                                       │ │ │
│  │  │    title, description, priority, status, category, dueDate,       │ │ │
│  │  │    createdAt, updatedAt                                           │ │ │
│  │  └──────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                        │ │
│  │  ┌──────────────────────────────────────────────────────────────────┐ │ │
│  │  │  🎥 Videos Table                                                  │ │ │
│  │  │  ─────────────                                                    │ │ │
│  │  │  Primary Key: userId + videoId                                    │ │ │
│  │  │  Attributes: title, url, category, tags, createdAt               │ │ │
│  │  └──────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                        │ │
│  │  ┌──────────────────────────────────────────────────────────────────┐ │ │
│  │  │  📝 BlogPosts Table                                               │ │ │
│  │  │  ──────────────────                                               │ │ │
│  │  │  Primary Key: userId + postId                                     │ │ │
│  │  │  Attributes: title, content, category, tags, publishedAt          │ │ │
│  │  └──────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                        │ │
│  │  ┌──────────────────────────────────────────────────────────────────┐ │ │
│  │  │  📁 Projects Table                                                │ │ │
│  │  │  ─────────────────                                                │ │ │
│  │  │  Primary Key: userId + projectId                                  │ │ │
│  │  │  Attributes: name, description, status, createdAt                 │ │ │
│  │  └──────────────────────────────────────────────────────────────────┘ │ │
│  │                                                                        │ │
│  │  Features:                                                             │ │
│  │  ✓ Composite keys for multi-tenancy & data isolation                  │ │
│  │  ✓ Global Secondary Indexes (GSI) for efficient querying              │ │
│  │  ✓ Auto-scaling read/write capacity (on-demand mode)                  │ │
│  │  ✓ Point-in-time recovery for backup                                  │ │
│  │  ✓ Encryption at rest                                                 │ │
│  │  ✓ Sub-millisecond latency                                            │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
                                      ↓
                       Monitoring & Continuous Integration
                                      ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CI/CD & DEPLOYMENT INFRASTRUCTURE                        │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                          AWS Amplify                                   │ │
│  │                                                                        │ │
│  │  🔄 Continuous Integration/Deployment:                                │ │
│  │     • Git repository integration (GitHub)                             │ │
│  │     • Automatic build on push to main branch                          │ │
│  │     • Build configuration via amplify.yml                             │ │
│  │     • Environment variable management                                 │ │
│  │     • Build artifact generation                                       │ │
│  │                                                                        │ │
│  │  🌐 Hosting & Distribution:                                           │ │
│  │     • CloudFront CDN for global delivery                              │ │
│  │     • Custom domain support (SSL/TLS)                                 │ │
│  │     • Atomic deployments                                              │ │
│  │     • Rollback capabilities                                           │ │
│  │     • Branch deployments for staging                                  │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 🔑 Key Architectural Decisions

1. **Serverless-First Approach**: No EC2 instances or containers to manage, only Lambda functions
2. **NoSQL Database**: DynamoDB chosen for scalability and single-digit millisecond latency
3. **Composite Keys**: `userId + resourceId` pattern ensures complete data isolation
4. **API Gateway**: Centralized API management with built-in security features
5. **CDN Distribution**: CloudFront ensures low-latency access globally
6. **Managed Authentication**: Cognito handles all user management complexity

---

## 🛠️ Technologies

### Frontend Stack

<table>
<tr>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
<br>React 18.x
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=javascript" width="48" height="48" alt="JavaScript" />
<br>JavaScript ES6+
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=html" width="48" height="48" alt="HTML5" />
<br>HTML5
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=css" width="48" height="48" alt="CSS3" />
<br>CSS3
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=npm" width="48" height="48" alt="npm" />
<br>npm
</td>
</tr>
</table>

**Core Libraries:**
- **React Router DOM** - Client-side routing and navigation
- **Axios** - Promise-based HTTP client for API requests
- **Lucide React** - Modern icon library
- **React Hooks** - useState, useEffect for state management

### Backend & Cloud (AWS Services)

<table>
<tr>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=aws" width="48" height="48" alt="AWS" />
<br>AWS Cloud
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=lambda" width="48" height="48" alt="Lambda" />
<br>Lambda
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=dynamodb" width="48" height="48" alt="DynamoDB" />
<br>DynamoDB
</td>
<td align="center" width="96">
<img src="https://img.shields.io/badge/API-Gateway-FF4F8B?style=flat-square&logo=amazon-api-gateway&logoColor=white" width="48" height="48" alt="API Gateway" style="object-fit: contain;" />
<br>API Gateway
</td>
<td align="center" width="96">
<img src="https://img.shields.io/badge/Cognito-Auth-DD344C?style=flat-square&logo=amazon-aws&logoColor=white" width="48" height="48" alt="Cognito" style="object-fit: contain;" />
<br>Cognito
</td>
</tr>
</table>

| Service | Purpose | Key Features |
|---------|---------|--------------|
| **AWS Lambda** | Serverless compute | Node.js 18.x runtime, auto-scaling, pay-per-use |
| **AWS API Gateway** | API management | REST API, CORS, rate limiting, caching |
| **AWS DynamoDB** | NoSQL database | Millisecond latency, composite keys, auto-scaling |
| **AWS Cognito** | Authentication | User pools, JWT tokens, OAuth 2.0 |
| **AWS Amplify** | Hosting & CI/CD | Git integration, auto-deploy, CDN |
| **AWS CloudFront** | CDN | Global distribution, HTTPS, edge caching |
| **AWS IAM** | Access control | Roles, policies, least privilege |

### Development Tools

<table>
<tr>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=nodejs" width="48" height="48" alt="Node.js" />
<br>Node.js
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=git" width="48" height="48" alt="Git" />
<br>Git
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=github" width="48" height="48" alt="GitHub" />
<br>GitHub
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=vscode" width="48" height="48" alt="VS Code" />
<br>VS Code
</td>
<td align="center" width="96">
<img src="https://skillicons.dev/icons?i=postman" width="48" height="48" alt="Postman" />
<br>Postman
</td>
</tr>
</table>

### Architecture Patterns & Practices

- **Serverless Architecture** - Zero server management
- **RESTful API Design** - Standard HTTP methods and status codes
- **JWT Authentication** - Stateless token-based auth
- **Multi-tenancy** - Per-user data isolation via composite keys
- **Infrastructure as Code** - YAML configuration for Amplify
- **CI/CD** - Automated testing and deployment
- **Responsive Design** - Mobile-first approach

### Package Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.x",
    "axios": "^1.x",
    "lucide-react": "^0.x"
  },
  "devDependencies": {
    "@testing-library/react": "^13.x",
    "@testing-library/jest-dom": "^5.x"
  }
}
```

---

## 📁 Project Structure

```
ITAMS/
├── 📂 public/                          # Static files
│   ├── index.html                      # HTML template
│   ├── manifest.json                   # PWA manifest
│   ├── favicon.ico                     # App icon
│   └── robots.txt                      # SEO configuration
│
├── 📂 src/                             # Source code
│   ├── 📂 components/                  # React components
│   │   ├── 📂 Dashboard/
│   │   │   ├── Dashboard.jsx           # Main dashboard component
│   │   │   └── Dashboard.css           # Dashboard styles
│   │   │
│   │   ├── 📂 Tasks/
│   │   │   ├── TaskList.jsx            # Task list view
│   │   │   ├── TaskForm.jsx            # Task creation/edit form
│   │   │   ├── TaskItem.jsx            # Individual task card
│   │   │   └── Tasks.css               # Task styles
│   │   │
│   │   ├── 📂 Videos/
│   │   │   ├── VideoList.jsx           # Video library view
│   │   │   ├── VideoForm.jsx           # Video save form
│   │   │   └── Videos.css              # Video styles
│   │   │
│   │   ├── 📂 BlogPosts/
│   │   │   ├── BlogPostList.jsx        # Blog posts view
│   │   │   ├── BlogPostForm.jsx        # Blog creation form
│   │   │   └── BlogPosts.css           # Blog styles
│   │   │
│   │   ├── 📂 Projects/
│   │   │   ├── ProjectList.jsx         # Projects view
│   │   │   ├── ProjectForm.jsx         # Project form
│   │   │   └── Projects.css            # Project styles
│   │   │
│   │   ├── 📂 Auth/
│   │   │   ├── Login.jsx               # Login component
│   │   │   ├── SignUp.jsx              # Registration component
│   │   │   ├── ProtectedRoute.jsx      # Route guard
│   │   │   └── Auth.css                # Auth styles
│   │   │
│   │   └── 📂 Common/
│   │       ├── Header.jsx              # App header
│   │       ├── Sidebar.jsx             # Navigation sidebar
│   │       └── Footer.jsx              # App footer
│   │
│   ├── 📂 services/                    # API & business logic
│   │   ├── api.js                      # API client configuration
│   │   ├── auth.js                     # Authentication service
│   │   ├── taskService.js              # Task API calls
│   │   ├── videoService.js             # Video API calls
│   │   ├── blogService.js              # Blog API calls
│   │   └── config.js                   # App configuration
│   │
│   ├── 📂 utils/                       # Utility functions
│   │   ├── helpers.js                  # Helper functions
│   │   ├── constants.js                # App constants
│   │   ├── validators.js               # Input validation
│   │   └── formatters.js               # Data formatters
│   │
│   ├── 📂 hooks/                       # Custom React hooks
│   │   ├── useAuth.js                  # Authentication hook
│   │   ├── useTasks.js                 # Tasks management hook
│   │   └── useDebounce.js              # Debounce hook
│   │
│   ├── 📂 context/                     # React Context providers
│   │   ├── AuthContext.jsx             # Auth state context
│   │   └── AppContext.jsx              # Global app context
│   │
│   ├── App.jsx                         # Main App component
│   ├── App.css                         # Global styles
│   ├── index.js                        # Entry point
│   └── index.css                       # Base CSS
│
├── 📂 lambda/                          # AWS Lambda functions (Backend)
│   ├── 📂 tasks/
│   │   ├── getTasks.js                 # Fetch all tasks
│   │   ├── createTask.js               # Create new task
│   │   ├── updateTask.js               # Update task
│   │   ├── deleteTask.js               # Delete task
│   │   └── package.json                # Lambda dependencies
│   │
│   ├── 📂 videos/
│   │   ├── getVideos.js                # Fetch videos
│   │   ├── saveVideo.js                # Save video
│   │   └── package.json
│   │
│   ├── 📂 blogposts/
│   │   ├── getBlogPosts.js             # Fetch blog posts
│   │   ├── createBlogPost.js           # Create blog post
│   │   └── package.json
│   │
│   └── 📂 analytics/
│       ├── getDashboardStats.js        # Dashboard statistics
│       └── package.json
│
├── 📂 infrastructure/                  # IaC (if applicable)
│   ├── 📂 cloudformation/
│   │   └── template.yaml               # CloudFormation template
│   └── 📂 terraform/
│       └── main.tf                     # Terraform configuration
│
├── 📄 package.json                     # Project dependencies
├── 📄 package-lock.json                # Lock file
├── 📄 amplify.yml                      # Amplify build configuration
├── 📄 .gitignore                       # Git ignore rules
├── 📄 README.md                        # This file
└── 📄 LICENSE                          # MIT License

```

### Key Directories Explained

| Directory | Purpose |
|-----------|---------|
| `src/components/` | React UI components organized by feature |
| `src/services/` | API integration and backend communication |
| `src/utils/` | Helper functions and utilities |
| `lambda/` | AWS Lambda function code (serverless backend) |
| `public/` | Static assets served directly |
| `infrastructure/` | Infrastructure as Code templates |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14.x or higher)
- **npm** or **yarn**
- **AWS Account** with appropriate permissions
- **AWS CLI** configured
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/itams.git
   cd itams
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_API_ENDPOINT=https://your-api-gateway-url.amazonaws.com/prod
   REACT_APP_COGNITO_USER_POOL_ID=your-user-pool-id
   REACT_APP_COGNITO_CLIENT_ID=your-client-id
   REACT_APP_AWS_REGION=us-east-1
   ```

4. **Run the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

   The application will open at `http://localhost:3000`

### AWS Setup

#### 1. Set up DynamoDB Tables

```bash
# Tasks Table
aws dynamodb create-table \
  --table-name Tasks \
  --attribute-definitions \
    AttributeName=userId,AttributeType=S \
    AttributeName=taskId,AttributeType=S \
  --key-schema \
    AttributeName=userId,KeyType=HASH \
    AttributeName=taskId,KeyType=RANGE \
  --billing-mode PAY_PER_REQUEST

# Videos Table
aws dynamodb create-table \
  --table-name Videos \
  --attribute-definitions \
    AttributeName=userId,AttributeType=S \
    AttributeName=videoId,AttributeType=S \
  --key-schema \
    AttributeName=userId,KeyType=HASH \
    AttributeName=videoId,KeyType=RANGE \
  --billing-mode PAY_PER_REQUEST

# BlogPosts Table
aws dynamodb create-table \
  --table-name BlogPosts \
  --attribute-definitions \
    AttributeName=userId,AttributeType=S \
    AttributeName=postId,AttributeType=S \
  --key-schema \
    AttributeName=userId,KeyType=HASH \
    AttributeName=postId,KeyType=RANGE \
  --billing-mode PAY_PER_REQUEST
```

#### 2. Deploy Lambda Functions

```bash
# Navigate to lambda directory
cd lambda/tasks

# Install dependencies
npm install

# Create deployment package
zip -r function.zip .

# Deploy to AWS
aws lambda create-function \
  --function-name getTasks \
  --runtime nodejs18.x \
  --role arn:aws:iam::YOUR_ACCOUNT_ID:role/lambda-execution-role \
  --handler getTasks.handler \
  --zip-file fileb://function.zip
```

#### 3. Configure API Gateway

```bash
# Create REST API
aws apigateway create-rest-api \
  --name "ITAMS-API" \
  --description "API for ITAMS application"

# Create resources and methods
# (Follow AWS documentation for detailed setup)
```

#### 4. Set up Cognito User Pool

```bash
# Create user pool
aws cognito-idp create-user-pool \
  --pool-name ITAMS-UserPool \
  --policies "PasswordPolicy={MinimumLength=8,RequireUppercase=true,RequireLowercase=true,RequireNumbers=true,RequireSymbols=true}"

# Create user pool client
aws cognito-idp create-user-pool-client \
  --user-pool-id YOUR_USER_POOL_ID \
  --client-name ITAMS-WebClient
```

---

## 📚 API Documentation

### Base URL
```
https://your-api-gateway-url.amazonaws.com/prod
```

### Authentication
All API requests require a valid JWT token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

### Endpoints

#### Tasks

**Get All Tasks**
```http
GET /tasks
```

**Create Task**
```http
POST /tasks
Content-Type: application/json

{
  "title": "Complete project documentation",
  "description": "Write comprehensive README",
  "priority": "high",
  "category": "development",
  "dueDate": "2024-12-31",
  "status": "pending"
}
```

**Update Task**
```http
PUT /tasks/{taskId}
Content-Type: application/json

{
  "status": "completed"
}
```

**Delete Task**
```http
DELETE /tasks/{taskId}
```

#### Videos

**Get All Videos**
```http
GET /videos
```

**Save Video**
```http
POST /videos
Content-Type: application/json

{
  "title": "Tutorial Video",
  "url": "https://youtube.com/watch?v=example",
  "category": "education",
  "tags": ["tutorial", "aws", "lambda"]
}
```

#### Blog Posts

**Get All Blog Posts**
```http
GET /blogposts
```

**Create Blog Post**
```http
POST /blogposts
Content-Type: application/json

{
  "title": "My First Blog Post",
  "content": "This is the content...",
  "category": "technology",
  "tags": ["aws", "serverless", "cloud"]
}
```

#### Analytics

**Get Dashboard Statistics**
```http
GET /analytics/dashboard
```

Response:
```json
{
  "totalTasks": 15,
  "completedTasks": 8,
  "pendingTasks": 5,
  "overdueTasks": 2,
  "videosSaved": 12,
  "blogPosts": 6
}
```

---

## 🔐 Security

### Authentication & Authorization
- **AWS Cognito** manages user authentication
- **JWT tokens** for secure API access
- **Token expiration** and refresh mechanisms
- **Password policies** enforced (minimum 8 characters, mixed case, numbers, symbols)

### Data Security
- **Per-user data isolation** using DynamoDB composite keys
- **HTTPS/TLS** encryption for all data in transit
- **Encryption at rest** for DynamoDB tables
- **IAM roles** with least privilege access

### API Security
- **CORS** configuration to restrict origin access
- **Rate limiting** and throttling via API Gateway
- **Input validation** on all endpoints
- **SQL injection protection** (NoSQL database)

### Best Practices
- Environment variables for sensitive configuration
- No hardcoded credentials in source code
- Regular security audits and updates
- AWS CloudTrail for audit logging

---

## 🚢 Deployment

### AWS Amplify Deployment

1. **Connect Repository**
   - Log in to AWS Amplify Console
   - Connect your Git repository (GitHub, GitLab, Bitbucket)

2. **Configure Build Settings**
   
   Create `amplify.yml` in project root:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: build
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Set Environment Variables**
   - Navigate to App Settings > Environment Variables
   - Add all required environment variables

4. **Deploy**
   - Push changes to your repository
   - Amplify automatically builds and deploys

### Manual Deployment

```bash
# Build production bundle
npm run build

# Deploy to S3
aws s3 sync build/ s3://your-bucket-name

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

---

## 📸 Screenshots

### Dashboard Overview
The main dashboard provides a comprehensive view of your productivity metrics:

![Dashboard](https://via.placeholder.com/800x400/6366f1/ffffff?text=Dashboard+Overview)

**Features visible:**
- Total Tasks: 0
- Completed Tasks: 0
- Pending Tasks: 0
- Overdue Tasks: 0
- Videos Saved: 3
- Blog Posts: 3

### Task Management
Organize and track your tasks efficiently:

![Tasks](https://via.placeholder.com/800x400/10b981/ffffff?text=Task+Management)

**Task Features:**
- Priority levels (High, Medium, Low)
- Status tracking
- Due date management
- Category organization

### Video Library
Save and organize your video resources:

![Videos](https://via.placeholder.com/800x400/ef4444/ffffff?text=Video+Library)

### Blog Posts
Create and manage your content:

![Blog Posts](https://via.placeholder.com/800x400/f59e0b/ffffff?text=Blog+Posts)

> **💡 Tip:** Visit the [live demo](https://main.d12ogiakfc9r01.amplifyapp.com/) to interact with the actual interface!

---

## 🧪 Testing

### Test Credentials
For testing the live application, use:
- **Email:** abdulmueezgujjar@gmail.com
- **Password:** Project123@

### Running Tests

```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Run e2e tests
npm run test:e2e

# Generate coverage report
npm run test:coverage
```

### Test Structure
```
tests/
├── unit/
│   ├── components/
│   ├── services/
│   └── utils/
├── integration/
│   ├── api/
│   └── auth/
└── e2e/
    ├── user-flows/
    └── scenarios/
```

---

## 🤝 Contributing

Contributions make the open-source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

### How to Contribute

1. **Fork the Project**
   ```bash
   # Click the 'Fork' button at the top right of this page
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ITAMS.git
   cd ITAMS
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

4. **Make Your Changes**
   - Write clean, readable code
   - Follow existing code style and conventions
   - Add comments where necessary
   - Update documentation if needed

5. **Test Your Changes**
   ```bash
   npm test
   npm run build  # Ensure build succeeds
   ```

6. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add: Brief description of your changes"
   ```
   
   **Commit Message Guidelines:**
   - `Add:` New feature or functionality
   - `Fix:` Bug fix
   - `Update:` Changes to existing features
   - `Docs:` Documentation changes
   - `Style:` Formatting, missing semi colons, etc.
   - `Refactor:` Code restructuring
   - `Test:` Adding or updating tests

7. **Push to Your Fork**
   ```bash
   git push origin feature/AmazingFeature
   ```

8. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your feature branch
   - Provide a clear description of your changes

### Development Guidelines

#### Code Style
- Use ES6+ JavaScript features
- Follow React best practices and hooks guidelines
- Use functional components over class components
- Keep components small and focused
- Use meaningful variable and function names

#### Component Structure
```jsx
// Good example
const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const handleUpdate = async () => {
    // Implementation
  };
  
  return (
    // JSX
  );
};
```

#### Naming Conventions
- **Components**: PascalCase (e.g., `TaskList`, `DashboardCard`)
- **Files**: Match component name (e.g., `TaskList.jsx`)
- **Functions**: camelCase (e.g., `handleSubmit`, `fetchTasks`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)

#### Testing
- Write unit tests for utility functions
- Add integration tests for API calls
- Test edge cases and error scenarios

### Areas for Contribution

We welcome contributions in the following areas:

- 🐛 **Bug Fixes**: Found a bug? Submit a fix!
- ✨ **New Features**: Have an idea? Propose it first via an issue
- 📝 **Documentation**: Improve README, add code comments
- 🎨 **UI/UX**: Enhance the user interface and experience
- ⚡ **Performance**: Optimize code and improve efficiency
- 🧪 **Testing**: Add or improve test coverage
- ♿ **Accessibility**: Make the app more accessible

### Reporting Bugs

Found a bug? Please create an issue with:
- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment (browser, OS, etc.)

### Suggesting Features

Have a feature idea? Create an issue with:
- Clear title and detailed description
- Use case and benefits
- Mockups or examples (if applicable)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

**What this means:**
- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ⚠️ Liability and warranty limitations apply

---

## 👨‍💻 Author & Contact

<div align="center">

### Abdul Mueez Gujjar

**Full Stack Developer | Cloud Architect | AWS Enthusiast**

[![Email](https://img.shields.io/badge/Email-abdulmueezgujjar%40gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:abdulmueezgujjar@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-AMG786-black?style=for-the-badge&logo=github)](https://github.com/AMG786)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/abdul-mueez-gujjar)

**📧 Email:** abdulmueezgujjar@gmail.com  
**🔗 Project:** [ITAMS on GitHub](https://github.com/AMG786/ITAMS)  
**🌐 Live Demo:** [https://main.d12ogiakfc9r01.amplifyapp.com/](https://main.d12ogiakfc9r01.amplifyapp.com/)

</div>

---

## 🙏 Acknowledgments

Special thanks to:

- **AWS** - For providing excellent serverless services and documentation
- **React Community** - For the amazing library and ecosystem
- **Create React App** - For the initial project setup
- **Amplify Community** - For deployment and hosting solutions
- **Open Source Contributors** - For inspiration and learning resources

### Resources & Inspiration

- [AWS Documentation](https://docs.aws.amazon.com/)
- [React Documentation](https://react.dev/)
- [DynamoDB Best Practices](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html)
- [Serverless Framework](https://www.serverless.com/)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)

---

## 📞 Support

### Need Help?

If you have questions or need assistance:

1. **📖 Check the Documentation**: Read this README thoroughly
2. **🐛 Found a Bug?**: [Open an issue](https://github.com/AMG786/ITAMS/issues/new)
3. **💡 Have a Question?**: [Start a discussion](https://github.com/AMG786/ITAMS/discussions)
4. **📧 Email**: abdulmueezgujjar@gmail.com

### FAQ

**Q: Can I use this project for commercial purposes?**  
A: Yes! This project is MIT licensed, which allows commercial use.

**Q: How do I deploy this to my own AWS account?**  
A: Follow the detailed setup instructions in the [Getting Started](#-getting-started) section.

**Q: Is there a cost to run this application?**  
A: AWS offers a free tier that covers most of the services used. Costs may apply if you exceed free tier limits.

**Q: Can I contribute to this project?**  
A: Absolutely! Check out the [Contributing](#-contributing) section.

---

## 🎯 Project Roadmap

### Completed ✅
- [x] User authentication with AWS Cognito
- [x] Task CRUD operations
- [x] Video management
- [x] Blog post functionality
- [x] Real-time dashboard analytics
- [x] Responsive UI design
- [x] Serverless deployment
- [x] CI/CD pipeline

### In Progress 🚧
- [ ] Advanced filtering and sorting
- [ ] Email notifications
- [ ] Export functionality (CSV, PDF)
- [ ] Mobile app (React Native)

### Planned 📅
- [ ] Team collaboration features
- [ ] Calendar integration
- [ ] File attachments
- [ ] Advanced analytics and reporting
- [ ] Dark mode theme
- [ ] Multi-language support
- [ ] AI-powered task suggestions

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/AMG786/ITAMS?style=flat-square)
![GitHub code size](https://img.shields.io/github/languages/code-size/AMG786/ITAMS?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/AMG786/ITAMS?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/AMG786/ITAMS?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/AMG786/ITAMS?style=flat-square)

---

<div align="center">

### ⭐ Show Your Support

If you found this project helpful or interesting, please consider giving it a star! ⭐

It helps others discover the project and motivates continued development.

**Built with ❤️ using AWS Serverless Technologies**

**Made in 2024 | ITAMS - Your Productivity Hub**

[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)](https://github.com/AMG786/ITAMS)
[![AWS](https://img.shields.io/badge/Powered%20by-AWS-orange?style=for-the-badge&logo=amazon-aws)](https://aws.amazon.com/)
[![React](https://img.shields.io/badge/Built%20with-React-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)

**[⬆ Back to Top](#-itams---intelligent-task--activity-management-system)**

</div>
