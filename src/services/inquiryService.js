import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const submitInquiry = async (formData) => {
  const docRef = await addDoc(collection(db, 'inquiries'), {
    ...formData,
    created_at: serverTimestamp(),
  });

  return docRef.id;
};