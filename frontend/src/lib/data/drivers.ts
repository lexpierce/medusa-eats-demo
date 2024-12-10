import { DriverDTO } from "@frontend/lib/types";

const BACKEND_URL = `http://${process.env.BACKEND_URL}`;

export async function retrieveDriver(driverId: string): Promise<DriverDTO> {
  const { driver } = await fetch(`${BACKEND_URL}/drivers/${driverId}`, {
    next: {
      tags: ["drivers"],
    },
  }).then((res) => res.json());
  return driver;
}
