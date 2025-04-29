const employees = [
  {
    "id": "EMP001",
    "email": "john.doe@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Prepare DevOps presentation",
        "description": "Create slides covering CI/CD, GitLab, and Docker basics",
        "date": "2025-04-29",
        "category": "Work"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Pay electricity bill",
        "description": "Online bill payment through official portal",
        "date": "2025-04-10",
        "category": "Personal"
      }
    ]
  },
  {
    "id": "EMP002",
    "email": "hairy.user@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Push project to GitHub",
        "description": "Upload the cheque validation project to a private repository",
        "date": "2025-04-29",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Backup server data",
        "description": "Forgot to run daily backup script",
        "date": "2025-04-21",
        "category": "Maintenance"
      }
    ]
  },
  {
    "id": "EMP003",
    "email": "alice.wood@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Design new landing page",
        "description": "Work on homepage UI redesign in Figma",
        "date": "2025-05-02",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Team sync-up",
        "description": "Weekly sync meeting with design team",
        "date": "2025-04-27",
        "category": "Meetings"
      }
    ]
  },
  {
    "id": "EMP004",
    "email": "bob.miller@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Configure nginx server",
        "description": "Missed deadline to deploy web server config",
        "date": "2025-04-20",
        "category": "DevOps"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Write unit tests",
        "description": "Add test coverage for user login and signup",
        "date": "2025-05-01",
        "category": "Testing"
      }
    ]
  },
  {
    "id": "EMP005",
    "email": "clara.kim@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Update client records",
        "description": "Finish CRM data cleanup",
        "date": "2025-04-28",
        "category": "Admin"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Prepare budget report",
        "description": "Draft Q2 financial summary for management review",
        "date": "2025-04-30",
        "category": "Finance"
      }
    ]
  }
];

const admin = [{
  "employeeId": "ADM001",
  "email": "admin@example.com",
  "password": "123"
}
]

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () => {
  const employees = localStorage.getItem('employees')
  const admin = localStorage.getItem('admin')
  console.log(JSON.parse(employees))
  console.log(JSON.parse(admin))
}