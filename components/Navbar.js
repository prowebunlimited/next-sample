import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image src='/KVR2.png' width={128} height={110} />
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/posts'>
        <a>Posts</a>
      </Link>
    </nav>
  );
};

export default Navbar;
