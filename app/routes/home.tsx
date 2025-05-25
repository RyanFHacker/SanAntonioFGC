import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "San Antonio FGC" },
    { name: "description", content: "San Antonio Fighting Game Community homepage!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
