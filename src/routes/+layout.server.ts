import { appAuth } from "$lib/server/appAuth";
import type { ServerLoad } from "@sveltejs/kit";
import crypto from "crypto";

export const load: ServerLoad = async (event) => {
  const session = await appAuth.getSession(event);

  if (session?.user?.email) {
    session.user["avatarUrl"] = generateAvatar(session.user.email);
  }

  return { session };
};

function generateAvatar(email: string) {
  // Trim leading and trailing whitespace from
  // an email address and force all characters
  // to lower case
  const address = String(email).trim().toLowerCase();

  // Create an MD5 hash of the final string
  const hash = crypto.createHash("md5").update(address).digest("hex");

  // Grab the actual image URL
  return `https://avatars.dicebear.com/api/pixel-art-neutral/${hash}.svg`;
}
