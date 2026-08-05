import { createFileRoute } from "@tanstack/react-router";
import { Categories } from "../../components/Categories";
import { Hero } from "../../components/Hero";
import { Gallery } from "../../components/Gallery";

export const Route = createFileRoute("/_app/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
      <main className="py-10">
        <Hero />
        <Categories />
        <Gallery />
      </main>
  );
}
