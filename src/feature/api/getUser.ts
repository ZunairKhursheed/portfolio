import { getUser } from "@/firebase/user";

async function fetchUser() {
  try {
    let data = await getUser({ docId: "BcK8JbgqSKKScArrS80E" });
    return data;
  } catch (e) {
    //throw error here
  }
}
export { fetchUser };
