import '../styles/header.css'
import Scissors from "../icons/Scissors";
export default function Header() {
  return (
    <>
      <header>
        <Scissors />
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
