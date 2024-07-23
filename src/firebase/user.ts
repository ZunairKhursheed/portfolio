import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";

const getUser = async ({ docId }: { docId: string }) => {
  try {
    const docRef = doc(db, "User", docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
};

export { getUser };
