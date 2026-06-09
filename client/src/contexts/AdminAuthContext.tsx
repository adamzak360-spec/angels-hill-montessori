import { createContext, useContext, useState, useEffect } from "react";

interface AdminAuthContextType {
  isAuthenticated: boolean;
  userEmail: string | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(
  undefined
);

// Default admin password - can be changed in localStorage
const DEFAULT_ADMIN_PASSWORD = "admin123";

// Authorized admin emails
const AUTHORIZED_ADMIN_EMAILS = [
  "dellor206@gmail.com",
  "diam.hopeservicesgh@outlook.com",
  "adamzak360@gmail.com",
];

export function AdminAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  // Check if already authenticated on mount
  useEffect(() => {
    const authToken = localStorage.getItem("adminAuthToken");
    const storedEmail = localStorage.getItem("adminUserEmail");
    if (authToken && storedEmail) {
      setIsAuthenticated(true);
      setUserEmail(storedEmail);
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    // Check if email is authorized
    const isEmailAuthorized = AUTHORIZED_ADMIN_EMAILS.some(
      (authorizedEmail) =>
        authorizedEmail.toLowerCase() === email.toLowerCase()
    );

    if (!isEmailAuthorized) {
      return false;
    }

    // Get admin password from localStorage or use default
    const adminPassword = localStorage.getItem("adminPassword") || DEFAULT_ADMIN_PASSWORD;

    if (password === adminPassword) {
      // Create a simple token (timestamp + random)
      const token = `${Date.now()}-${Math.random()}`;
      localStorage.setItem("adminAuthToken", token);
      localStorage.setItem("adminUserEmail", email);
      setIsAuthenticated(true);
      setUserEmail(email);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("adminAuthToken");
    localStorage.removeItem("adminUserEmail");
    setIsAuthenticated(false);
    setUserEmail(null);
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, userEmail, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error("useAdminAuth must be used within AdminAuthProvider");
  }
  return context;
}
