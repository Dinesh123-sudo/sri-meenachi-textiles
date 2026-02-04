# 🌍 WorldClass – International Women’s Textiles Agency Website

A modern, professional and fully responsive website built for a medium-scale textiles business.  
This project represents a complete digital presence for **Sri Meenachi Textiles**, designed as an international women’s textiles agency platform.

---

## 🚀 Project Overview

**WorldClass** is a business website created to showcase textile products, services, and global reach in a clean and professional way.  
The goal of this project is to help a traditional wholesale textiles shop move into the digital space with a modern web identity.

This project was built using a **vibe coding approach** – rapidly designing and developing using AI assistance, modern tools, and practical integrations to deliver a functional product in minimal time.

---

## 🏢 Business Details Used in Website

The website is built using real business data from Sri Meenachi Textiles:

- **Business Name:** Sri Meenachi Textiles  
- **Founders:**  
  - T. Sudhakar  
  - T. Karthick  
- **Contact Numbers:**  
  - +91 94430 58863  
  - +91 94884 17241  
- **Address:**  
  Shop No.1, Kalaignar Textiles Market,  
  C.B. Road, Barugur – 635104,  
  Krishnagiri District, Tamil Nadu, India.

---

## 🎯 Target Audience

- Textile wholesalers  
- International buyers  
- Retail shop owners  
- Fashion boutiques  
- Export partners  
- Women’s apparel distributors

---

## ✨ Features

### 🌐 Frontend Features
- Fully responsive design  
- Mobile-first UI  
- Clean navigation menu  
- Modern hero sections  
- Service showcase  
- Blog section  
- Contact form  
- Image galleries  
- SEO-friendly structure  
- Social media integration  
- Professional footer  

### 🧑‍💼 Admin Dashboard (Planned/Included Conceptually)

- Content editing  
- Image management  
- Blog post management  
- Theme customization  
- Color and font controls  
- SEO settings  
- Inquiry management  

---

## 📄 Pages Included

The website contains the following main pages:

- Home  
- About Us  
- Services  
- Destination (Global Reach)  
- Blog  
- Contact  

Each page contains professional placeholder content suitable for a textiles agency website.

---

## 🛠 Tech Stack

- HTML5  
- CSS3  
- JavaScript  
- Responsive Design  
- Formspree (for backend form handling)  
- SEO Optimization  
- Mobile-friendly UI  

---

## 📩 Contact Form Integration – Formspree

Instead of building a complex backend, the project uses **Formspree** to handle contact form submissions.

### How the Data Flow Works

1. User visits the **Contact Page**  
2. User fills out the inquiry form  
3. When the user submits the form:
   - Data is sent securely to **Formspree endpoint**
4. Formspree processes the request  
5. Inquiry is delivered directly to the configured email inbox  
6. Business owner can reply to customer directly  

### Why Formspree?

- No server-side coding required  
- Fast setup  
- Secure form submissions  
- Spam protection  
- Email notifications  
- Perfect for medium-scale businesses  

Example form configuration:

```html
<form action="https://formspree.io/f/your_form_id" method="POST">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send Message</button>
</form>
