# Hubspot MultiSelect

Supercharge your checkbox-clicking powers! 💥  
This Chrome extension lets you **Shift+Click** checkboxes to select multiple rows inside your Hubspot objects

**Works on**
- Objects Listings: Contacts, Companies, Deals, Custom Objects
- Object Record Multi-Select Properties
- Help Desk Ticket Listing

<img src="https://145924978.fs1.hubspotusercontent-eu1.net/hubfs/145924978/Hubspot%20MultiSelect.gif" alt="HubSpot MultiSelect Demo" width="70%">

<img src="https://145924978.fs1.hubspotusercontent-eu1.net/hubfs/145924978/Multi-Select%20Property.gif" alt="HubSpot MultiSelect Demo" width="70%">

<img src="https://145924978.fs1.hubspotusercontent-eu1.net/hubfs/145924978/HelDesk%20Demo.gif" alt="HubSpot MultiSelect Demo" width="70%">

## 🧠 Why?
Because clicking one checkbox at a time is so 2005.  
With this extension, all it takes is:

> ✅ Click first checkbox → ⌨️ Hold SHIFT → ✅ Click last checkbox  
> 💡 Boom! Everything in between gets selected.



## 🚀 Installation

### Step 1: Clone this repo


### Step 2: Load it in Chrome

1. Open Google Chrome.
2. Go to: `chrome://extensions`
3. Toggle **Developer Mode** ON (top-right corner).
4. Click **"Load unpacked"**.
5. Select the folder you just cloned or unzipped.
6. ✅ You’ll see the extension icon appear. It’s now active!



## 🧪 How to Use

1. Navigate to any page that has multiple checkboxes.
2. Click the first checkbox you want to select.
3. Hold **SHIFT** on your keyboard.
4. Click the last checkbox in the range.
5. 🔥 All checkboxes in between will be automatically selected!



## 🛠️ Developer Notes

The extension injects a content script on all pages that listens for `click` events on `<input type="checkbox">` elements and handles Shift+Click logic. Works anywhere — no special framework needed.



## 📜 License

This project is licensed under the [MIT License](LICENSE).

You’re free to:
- Use it personally or commercially
- Modify, distribute, and contribute
- Just include the original license in your distribution

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ❤️ Contribute

PRs are welcome! Just fork it, code it, and submit a pull request.
We’ll click all the checkboxes in celebration. 🎉


Created with ❤️ by [Sabir Buxsoo](https://linkedin.com/in/sabirbuxsoo) and some ChatGPT for the ReadMe 😏🤖
