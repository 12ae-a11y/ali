// config.js
// === إعدادات المتجر (قم بتعديل البيانات هنا لكل زبون) ===

window.MY_STORE_CONFIG = {
    // 1. ضع كود فيربايس هنا (نسخ ولصق من موقع فيربايس)
    firebase: {
        apiKey: "AIzaSyBm5z1q56G7PUZH5qtuGpIx6ReWuzmaGAA",
        authDomain: "jljl1111.firebaseapp.com",
        databaseURL: "https://jljl1111-default-rtdb.firebaseio.com",
        projectId: "jljl1111",
        storageBucket: "jljl1111.firebasestorage.app",
        messagingSenderId: "357923390988",
        appId: "1:357923390988:web:bf4be9b0df5516ea1a5029",
        measurementId: "G-MRVKVTNGJH"
    },

    // 2. ضع إعدادات الصور (Cloudinary) هنا
    cloudinary: {
        cloudName: "doxjvpehx",  // اسم الكلاود
        uploadPreset: "ghdhbc" // اسم البريسيت (تأكد من إنشائه في حساب الزبون)
    },

    // 3. رمز دخول الأدمن
    security: {
        adminCode: "12300"
    }
};
