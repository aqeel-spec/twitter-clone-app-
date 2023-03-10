import { SparklesIcon } from "@heroicons/react/outline";
import Input from "./input";
import { useEffect, useState } from "react";
import {
  DocumentData,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/firebase";
import { PostTest, PostType } from "@/type/postType";
import Post from "./post";
import { AnimatePresence, motion } from "framer-motion";

function Feed() {
  const [posts, setPosts] = useState<DocumentData>([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timeStamp", "desc")),
        (snapshot) => {
          const docs = snapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          });
          setPosts(docs);
          console.log(docs);
        }
      ),
    []
  );

  // useEffect(
  //   () =>
  //     onSnapshot(collection(db, "posts"), (snapshot) => {
  //       const docs = snapshot.docs.map((doc) => {
  //         const data = doc.data();
  //         data.id = doc.id;
  //         return data;
  //       });
  //       setPosts(docs);
  //       console.log(docs);
  //     }),
  //   []
  // );
  // orderBy("timestamp", "desc")

  return (
    <div className="xl:ml-[340px] border-x border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl ">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9 ">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      <AnimatePresence>
        {posts.map((post: any) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Post key={post.id} id={post.id} post={post} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Feed;
