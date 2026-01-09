// Centralized UI message helpers and Firebase error mapping
function showMessage(targetId, message, type) {
  const el = document.getElementById(targetId);
  if (!el) return;

  // reset
  el.textContent = message || "";
  el.classList.remove("show", "error", "success", "loading");

  if (type === "error") {
    el.classList.add("error", "show");
  } else if (type === "success") {
    el.classList.add("success", "show");
  } else if (type === "loading") {
    el.classList.add("loading", "show");
  } else {
    el.classList.add("show");
  }
}

function hideMessage(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.textContent = "";
  el.classList.remove("show", "error", "success", "loading");
}

function getFriendlyAuthError(error) {
  if (!error || !error.code) return null;
  const code = error.code;
  switch (code) {
    case "auth/user-not-found":
      return "User not found";
    case "auth/wrong-password":
      return "Incorrect password";
    case "auth/invalid-email":
      return "Invalid email";
    case "auth/user-disabled":
      return "User account is disabled";
    case "auth/email-already-in-use":
      return "Email is already registered";
    case "auth/weak-password":
      return "Password is too weak (min 6 characters)";
    case "auth/operation-not-allowed":
      return "Operation not allowed";
    default:
      // Fallback: use server error message if present
      return error.message || null;
  }
}
