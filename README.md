# ITAMS - Task & Activity Management System

A serverless, cloud-native task management platform with real-time analytics, advanced filtering, and secure authentication.

<img width="1918" height="1198" alt="image" src="https://github.com/user-attachments/assets/8f5d180c-7c16-437f-93d9-47111f586cf6" />


## Overview

ITAMS is a fully serverless task management application built on AWS infrastructure. It provides real-time analytics, multi-criteria filtering, and JWT-based authentication with automatic scaling capabilities. The system implements per-user data isolation and features a modern, responsive interface for efficient task organization.

## Demo

Try ITAMS live at: [https://main.d12ogiakfc9r01.amplifyapp.com/](https://main.d12ogiakfc9r01.amplifyapp.com/)
**Test Credentials:**
- Email: `abdulmueezgujjar@gmail.com`
- Password: `Project123@`

## Features

- **Real-time Analytics Dashboard** – Visualize task metrics and performance insights with dynamic charts and statistics
- **Advanced Multi-Criteria Filtering** – Search and filter tasks by priority, category, status, and due dates with overdue detection
- **Secure Authentication & Authorization** – JWT-based user authentication with per-user data isolation via DynamoDB composite keys
- **Serverless Auto-Scaling Architecture** – Automatic scaling through AWS Lambda functions with CI/CD deployment pipeline

## Tech Stack

- **Frontend:** React, AWS Amplify
- **Backend:** AWS Lambda, API Gateway, RESTful API
- **Database:** DynamoDB
- **Authentication:** AWS Cognito
- **Deployment:** CI/CD pipeline, AWS Amplify

## Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/itams.git

# Navigate to project directory
cd itams

# Install dependencies
npm install

# Configure AWS credentials (if running locally)
# Add your AWS configuration to amplify/team-provider-info.json

# Start development server
npm start
```

## Usage

Visit the live application at: https://main.d12ogiakfc9r01.amplifyapp.com/

**Test Credentials:**
- Email: `abdulmueezgujjar@gmail.com`
- Password: `Project123@`

After logging in, you can create, manage, and organize tasks with priority levels, categories, and due dates. Use the dashboard to view analytics and filter tasks based on various criteria.

## Contact

**Author:** Abdul Mueez  
**Email:** abdulmueez917@gmail.com  
**GitHub:** [github.com/yourusername](https://github.com/yourusername)

---

© 2024 ITAMS. Built with AWS serverless technologies.
