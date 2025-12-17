# 👗 Custom Dress Designer – Frontend

A **React-based frontend application** that allows users to design a fully customized dress by selecting fabric, dress design, shoulder style, neck style, measurements, and personal details through a step-by-step flow.

---

## 🚀 Features

* Multi-step dress customization flow
* Fabric selection
* Dress design selection
* Shoulder and neck design selection
* Measurements input
* Personal details form
* Review page displaying all selections
* Order success confirmation page
* Clean and simple React structure
* Ready for backend API integration

---

## 🧱 Project Structure

```
frontend/
│
├── public/
│
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Fabric.jsx
│   │   ├── Design.jsx
│   │   ├── Shoulder.jsx
│   │   ├── Neck.jsx
│   │   ├── Measurements.jsx
│   │   ├── PersonalDetails.jsx
│   │   ├── ReviewOrder.jsx
│   │   └── OrderSuccess.jsx
│   │
│   ├── App.js
│   ├── App.css
│   └── index.js
│
└── README.md
```

---

## 🧠 Application Flow

```
Home
 → Fabric
 → Design
 → Shoulder
 → Neck
 → Measurements
 → Personal Details
 → Review Order
 → Order Success
```

Each page handles its own UI and updates the selected data.

---

## 🗂️ Data Handling

* User selections are managed within the frontend
* Selected values are passed and reviewed before final submission
* Final data is prepared to be sent to a backend API

### Example data structure:

```json
{
  "fabric": "Silk",
  "design": "Anarkali",
  "shoulder": "Sleeveless",
  "neck": "V Neck",
  "measurements": {
    "bust": "34",
    "waist": "28",
    "hip": "36"
  },
  "personal": {
    "name": "Rizwana",
    "email": "r@gmail.com",
    "phone": "9876543210"
  }
}
```

---

## 🔌 Backend Integration (Optional)

The frontend is designed to connect with a backend REST API.

Expected API endpoint:

```
POST http://localhost:5000/api/orders
```

The frontend sends all selected customization details in a single request.

---

## 🛠️ Technologies Used

* React.js
* React Router DOM
* JavaScript (ES6)
* CSS
* Fetch API

---

## ▶️ Running the Project

```bash
npm install
npm start
```

The app runs on:

```
http://localhost:3000
```

---

## 📌 Future Enhancements

* Backend integration with MySQL
* Admin panel to manage orders
* Payment gateway integration
* Image upload support
* Authentication and user accounts

---

## 🎯 Use Case

* Custom tailoring applications
* Fashion e-commerce customization
* Final year academic project
* Frontend portfolio project

---

## 👩‍💻 Author

**Rizwana Shaik**
Frontend Developer
Custom Dress Designer Application

---

## ⭐ Final Notes

This project demonstrates:
✔ Multi-page React routing
✔ Step-based UI design
✔ Real-world customization workflow
✔ Clean and simple project structure

---
