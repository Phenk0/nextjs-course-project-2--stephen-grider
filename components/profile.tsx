"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  if (session?.user) {
    return <div>From client: {session.user.name} is signed in</div>;
  }
  return (
    <div>
      <h1>From client: user is not signed in</h1>
    </div>
  );
}
