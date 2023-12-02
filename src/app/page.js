import Counter from "@/Components/Counter/Counter";
import Link from "next/link";



const HomePage = () => {
  return (
    <div>
         <h1>this is home page of next app</h1>
        <Counter></Counter>

        <Link href='/about'><button className="btn">About</button></Link>
        <Link href='/contact'><button className="btn">Contact</button></Link>

    </div>
  );
};

export default HomePage;