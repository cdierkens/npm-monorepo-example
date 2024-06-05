import { useEffect, useState } from "react";
import { User } from "@monorepo/schemas";

export function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchUser() {
      try {
        const response = await fetch("http://localhost:8080", {
          signal: abortController.signal,
        });
        const data = await response.json();

        const user = User.parse(data.user);

        setUser(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }

    fetchUser();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <h1>API One Data</h1>
      {user ? <p>Hello {user.username}!</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
