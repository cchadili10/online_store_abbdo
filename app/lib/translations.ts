export const translations = {
    en: {
        // Navigation
        home: 'Home',
        admin: 'Admin',

        // Home Page
        welcome: 'Welcome to ANAQA Store',
        discoverProducts: 'Discover our amazing products at great prices',
        view: 'View',

        // Product Card
        inStock: 'In Stock',
        available: 'available',
        outOfStock: 'Out of Stock',

        // Product Detail Page
        backToStore: 'Back to Store',
        productDescription: 'Product Description',
        productDetails: 'Product Details',
        category: 'Category',
        itemId: 'Item ID',
        availability: 'Availability',
        units: 'units',
        orderViaWhatsApp: 'Order via WhatsApp',

        // Admin Login
        adminPanel: 'Admin Panel',
        signInToManage: 'Sign in to manage your store',
        username: 'Username',
        password: 'Password',
        enterUsername: 'Enter username',
        enterPassword: 'Enter password',
        signIn: 'Sign In',
        signingIn: 'Signing in...',
        invalidCredentials: 'Invalid credentials',
        backToStoreLink: '← Back to Store',

        // Admin Dashboard
        adminDashboard: 'Admin Dashboard',
        viewStore: 'View Store',
        logout: 'Logout',
        addNewItem: 'Add New Item',
        currentItems: 'Current Items',
        productName: 'Product Name',
        exampleHeadphones: 'e.g., Wireless Headphones',
        shortDescription: 'Short Description',
        briefDescription: 'Brief product description',
        fullDescription: 'Full Description',
        detailedDescription: 'Detailed product description',
        imageUrl: 'Image URL',
        imageUrlPlaceholder: 'https://example.com/image.jpg',
        price: 'Price ($)',
        stock: 'Stock',
        addItem: 'Add Item',
        adding: 'Adding...',
        categoryField: 'Category',
        exampleCategory: 'e.g., Electronics',
        itemAddedSuccessfully: 'Item added successfully!',
        failedToAddItem: 'Failed to add item',
        errorOccurred: 'An error occurred. Please try again.',
    },
    ar: {
        // Navigation
        home: 'الرئيسية',
        admin: 'إدارة',

        // Home Page
        welcome: 'مرحباً بك في متجر أناقة',
        discoverProducts: 'اكتشف منتجاتنا الرائعة بأسعار رائعة',
        view: 'عرض',

        // Product Card
        inStock: 'متوفر',
        available: 'متوفر',
        outOfStock: 'غير متوفر',

        // Product Detail Page
        backToStore: 'العودة إلى المتجر',
        productDescription: 'وصف المنتج',
        productDetails: 'تفاصيل المنتج',
        category: 'الفئة',
        itemId: 'رقم المنتج',
        availability: 'التوفر',
        units: 'وحدة',
        orderViaWhatsApp: 'اطلب عبر واتساب',

        // Admin Login
        adminPanel: 'لوحة التحكم',
        signInToManage: 'تسجيل الدخول لإدارة متجرك',
        username: 'اسم المستخدم',
        password: 'كلمة المرور',
        enterUsername: 'أدخل اسم المستخدم',
        enterPassword: 'أدخل كلمة المرور',
        signIn: 'تسجيل الدخول',
        signingIn: 'جاري التسجيل...',
        invalidCredentials: 'بيانات غير صحيحة',
        backToStoreLink: '← العودة إلى المتجر',

        // Admin Dashboard
        adminDashboard: 'لوحة التحكم',
        viewStore: 'عرض المتجر',
        logout: 'تسجيل الخروج',
        addNewItem: 'إضافة منتج جديد',
        currentItems: 'المنتجات الحالية',
        productName: 'اسم المنتج',
        exampleHeadphones: 'مثل: سماعات لاسلكية',
        shortDescription: 'وصف قصير',
        briefDescription: 'وصف فجير للمنتج',
        fullDescription: 'الوصف الكامل',
        detailedDescription: 'وصف مفصل للمنتج',
        imageUrl: 'رابط الصورة',
        imageUrlPlaceholder: 'https://example.com/image.jpg',
        price: 'السعر ($)',
        stock: 'المخزون',
        addItem: 'إضافة المنتج',
        adding: 'جاري الإضافة...',
        categoryField: 'الفئة',
        exampleCategory: 'مثل: إلكترونيات',
        itemAddedSuccessfully: 'تمت إضافة المنتج بنجاح!',
        failedToAddItem: 'فشل في إضافة المنتج',
        errorOccurred: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
    },
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
