// login.js
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const res = await fetch("/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
          credentials: "include"
        });

        // When using fetch, redirects are not automatically followed by the browser
        // So we need to handle the redirection manually
        if (res.ok) {
          // If we're in database-less mode, the server might not return JSON
          // Try to parse JSON, but if it fails, just redirect
          try {
            const data = await res.json();
            if (data.message) alert(data.message);
          } catch (jsonError) {
            // This happens when the server returns a redirect
          }
          // Force redirect to index.html
          window.location.href = "/index.html";
        } else {
          const data = await res.json();
          alert(data.message || "Login failed!");
        }
      } catch (err) {
        console.error("Login error:", err);
        alert("An error occurred during login. Please try again.");
      }
    });
  }

  // Logout button
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      await fetch("/auth/logout", {
        credentials: "include"
      });
      alert("Logged out!");
      window.location.href = "/login.html";
    });
  }
});
