import { Route /* Link */ } from "wouter";
import "./styles.css";

import WithReact from "./WithReact";

export default function App() {
  return (
    <div>
      <Route path="/" component={WithReact} />

      {/*
      <nav className="navigation">
        <ul>
          <li>
            <Link href="/">With React</Link>
            <Link href="/react-formik">With React + Formik</Link>
            <Link href="/vue">With Vue</Link>
          </li>
        </ul>
      </nav>
       */}
    </div>
  );
}
