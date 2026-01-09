// Simple Mock Firebase Auth using localStorage
// Works offline and doesn't require API calls

const FIREBASE_API_KEY = "AIzaSyBmXiEfEKf5IYVsT-doxaDao51cZ2Ot3Yk";
const FIREBASE_PROJECT_ID = "workout-pro-13021";

let currentUser = null;
let firebaseReady = true;

// Mock user database in localStorage
const MOCK_USERS_KEY = "mockUsers";

function getMockUsers() {
  try {
    const users = localStorage.getItem(MOCK_USERS_KEY);
    return users ? JSON.parse(users) : {};
  } catch (e) {
    return {};
  }
}

function saveMockUsers(users) {
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));
}

// Simple password hashing (NOT secure - for demo only)
function hashPassword(password) {
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(16);
}

// Check if user is logged in (from localStorage)
function checkAuth() {
  const token = localStorage.getItem("firebaseToken");
  const email = localStorage.getItem("firebaseEmail");

  if (token && email) {
    currentUser = { email, token };
    return true;
  }
  return false;
}

// Signup
async function firebaseSignUp(email, password) {
  try {
    // Validate input
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }

    const users = getMockUsers();

    // Check if user already exists
    if (users[email]) {
      throw new Error("Email already in use");
    }

    // Create user
    const passwordHash = hashPassword(password);
    users[email] = {
      email,
      passwordHash,
      created: new Date().toISOString(),
    };

    saveMockUsers(users);

    // Create session token
    const token = btoa(email + ":" + passwordHash);
    localStorage.setItem("firebaseToken", token);
    localStorage.setItem("firebaseEmail", email);
    currentUser = { email, token };

    console.log("[Auth] ✓ Signup successful for", email);
    return { success: true, user: currentUser };
  } catch (error) {
    console.error("[Auth] Signup error:", error.message);
    return { success: false, error: error.message };
  }
}

// Login
async function firebaseSignIn(email, password) {
  try {
    // Validate input
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const users = getMockUsers();
    const user = users[email];

    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Check password
    const passwordHash = hashPassword(password);
    if (user.passwordHash !== passwordHash) {
      throw new Error("Invalid email or password");
    }

    // Create session token
    const token = btoa(email + ":" + passwordHash);
    localStorage.setItem("firebaseToken", token);
    localStorage.setItem("firebaseEmail", email);
    currentUser = { email, token };

    console.log("[Auth] ✓ Login successful for", email);
    return { success: true, user: currentUser };
  } catch (error) {
    console.error("[Auth] Login error:", error.message);
    return { success: false, error: error.message };
  }
}

// Logout
function firebaseSignOut() {
  localStorage.removeItem("firebaseToken");
  localStorage.removeItem("firebaseEmail");
  currentUser = null;
  return true;
}

// Get current user
function getCurrentUser() {
  return currentUser;
}

// Initialize - check if user is already logged in
checkAuth();

console.log("[Auth] ✓ Ready (REST API)");
