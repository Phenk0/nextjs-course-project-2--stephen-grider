import { signIn, signOut } from "@/actions";
import { auth } from "@/auth";
import BtnSubmitForm from "@/components/BtnSubmitForm";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();
  return (
    <main>
      <h1>LOL</h1>
      <form action={signIn}>
        <BtnSubmitForm label="Sign In" color="primary" />
      </form>
      <form action={signOut}>
        <BtnSubmitForm label="Sign Out" variant="ghost" />
      </form>
      {session?.user ? <div>Signed in</div> : <div>Signed out</div>}
      <Profile />
    </main>
  );
}
