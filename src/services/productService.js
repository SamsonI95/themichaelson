import { db } from './firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export const fetchProducts = async () => {
  const q = query(
    collection(db, 'products'),
    orderBy('created_at', 'desc')
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
};