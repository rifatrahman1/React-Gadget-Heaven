# Gadget Store Website

This is a fully functional gadget e-commerce website where users can browse, search, and manage gadgets. The website provides an engaging user experience with features like adding items to the cart, wishlist management, and showing dynamic messages with toast notifications.

---

## Live Link:

Live link : https://dulcet-crisp-140605.netlify.app/news

## Github Link

Github link : https://github.com/rifatrahman1/React-Gadget-Heaven

---

## Features

1. **Browse and Search Gadgets**  
   - Users can search for gadgets by name, category, or price.  

2. **Cart Management**  
   - Users can add items to the cart and view the total cost dynamically.  

3. **Wishlist Functionality**  
   - Save favorite gadgets for future purchases in the wishlist.  

4. **Interactive Notifications (Toasts)**  
   - Show success or warning messages when items are added or removed from the cart or wishlist.  

5. **Responsive Design**  
   - Fully responsive for desktop, tablet, and mobile devices.  

---

## Technology Used

- **React.js**: For building the user interface.  
- **Context API**: For state management and managing global states like cart, wishlist, and user preferences.  
- **Local Storage**: To persist user data like cart and wishlist items across sessions.  
- **SweetAlert2**: For displaying beautiful and interactive modal alerts for confirmation actions.  
- **React-Toastify**: To display toast notifications for real-time feedback to the user.  
- **CSS / TailwindCSS**: For responsive and clean design.

---

## Core Functionalities

### **Toast Notifications**  
- When an item is added to the cart or wishlist, a toast notification shows:  
  - Example for adding to cart:  
    `"Gadget has been successfully added to your cart!"`  
  - Example for adding to wishlist:  
    `"Gadget added to your wishlist!"`

### **Dynamic Total Price Calculation**  
- The total cost of items in the cart is calculated dynamically and displayed in the cart section.

### **Modal for Successful Purchase**  
- After confirming a purchase, a modal is displayed showing:  
  - A success message.  
  - Total price of the purchased items.  

---

## How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gadget-store.git
