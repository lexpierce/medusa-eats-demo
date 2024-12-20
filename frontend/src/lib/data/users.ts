import { retrieveSession } from "./sessions";

const BACKEND_URL = `http://${process.env.BACKEND_URL}`;

export async function retrieveUser() {
  const token = retrieveSession();

  if (!token) {
    return null;
  }

  const { user } = await fetch(`${BACKEND_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      tags: ["user"],
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error(err);
    });

  return user;
}

export async function getToken({
  email,
  password,
  actor_type,
  provider,
}: {
  email: string;
  password: string;
  actor_type: "restaurant" | "driver";
  provider: "emailpass";
}): Promise<string> {
  const { token } = await fetch(
    `${BACKEND_URL}/auth/${actor_type}/${provider}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password: password.toString() }),
      next: {
        tags: ["user"],
      },
    }
  ).then((res) => res.json());

  if (!token) {
    throw new Error("Invalid email or password");
  }

  return token;
}
