import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import Link from "~/components/Link";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <Link href="https://start.solidjs.com">
          start.solidjs.com
        </Link>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
